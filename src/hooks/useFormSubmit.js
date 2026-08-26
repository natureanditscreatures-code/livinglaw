import { useState, useCallback } from 'react';
import { forms as formsConfig, isFormLive } from '@/config';

// Shared submission logic for all Web3Forms-backed forms.
// - If the access key is still the REPLACE_ME placeholder, we simulate success
//   (demo mode) so the site is fully clickable before launch.
// - Once a real key is set in .env, it POSTs to the Web3Forms endpoint.
export function useFormSubmit(formKey) {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const submit = useCallback(
    async (payload) => {
      const cfg = formsConfig[formKey];
      if (!cfg) {
        setStatus('error');
        setMessage('Unknown form.');
        return false;
      }
      setStatus('loading');

      const body = {
        access_key: cfg.accessKey,
        from_name: 'The Living Law Website',
        ...payload,
        // honeypot
        botcheck: payload.botcheck || '',
      };

      // Demo mode when key not yet configured
      if (!isFormLive(cfg)) {
        await new Promise((r) => setTimeout(r, 700));
        setStatus('success');
        setMessage(
          'Demo mode: add your Web3Forms key in .env to start receiving real submissions.'
        );
        return true;
      }

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (data.success) {
          setStatus('success');
          setMessage('Thank you — your message has been received.');
          return true;
        }
        setStatus('error');
        setMessage(data.message || 'Submission failed. Please try again.');
        return false;
      } catch {
        setStatus('error');
        setMessage('Network error. Please try again or email us directly.');
        return false;
      }
    },
    [formKey]
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setMessage('');
  }, []);

  return { status, message, submit, reset };
}
