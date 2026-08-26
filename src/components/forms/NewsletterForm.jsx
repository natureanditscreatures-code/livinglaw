import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, SubmitButton, FormStatus, Field } from '@/components/forms/FormFields';

// Newsletter ("Join the Movement") -> joinus@thelivinglaw.in
export function NewsletterForm({ compact = false }) {
  const { status, message, submit } = useFormSubmit('newsletter');
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await submit({
      subject: 'New Movement Signup — The Living Law',
      email,
      message: 'Joined the movement via the newsletter form.',
    });
    if (ok) setEmail('');
  };

  if (status === 'success') {
    return (
      <div className="text-sm">
        <p className="font-600 text-[var(--primary)]">
          Welcome to the Movement.
        </p>
        <p className="mt-1 text-[var(--fg-muted)]">
          You are now part of the global health awakening.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Mail
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--fg-muted)]"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-full border border-[var(--border)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-[var(--primary)]"
          />
        </div>
        <SubmitButton status={status} className="shrink-0">
          Join Movement
        </SubmitButton>
        <Honeypot />
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SubmitButton status={status}>Join Movement</SubmitButton>
      <Honeypot />
      <FormStatus status={status} message={message} />
    </form>
  );
}
