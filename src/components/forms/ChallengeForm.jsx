import { useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import {
  Field,
  Honeypot,
  SubmitButton,
  FormStatus,
} from '@/components/forms/FormFields';

// 30-Day Challenge signup -> healthyrhythm@thelivinglaw.in
export function ChallengeForm() {
  const { status, message, submit } = useFormSubmit('challenge');
  const [form, setForm] = useState({ name: '', email: '' });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await submit({
      subject: 'New 30-Day Challenge Signup — The Living Law',
      name: form.name,
      email: form.email,
      message:
        'Signed up for the 30-Day Turning Point. Please send the daily rhythm series.',
      replyto: form.email,
    });
    if (ok) setForm({ name: '', email: '' });
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[var(--color-forest-300)] bg-[var(--color-forest-50)]/50 p-6 text-center">
        <p className="font-display text-xl text-[var(--primary)]">
          Your turning point begins.
        </p>
        <p className="mt-2 text-sm text-[var(--fg-muted)]">
          Check your inbox — the first day's practice is on its way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field
        label="Name"
        name="name"
        required
        placeholder="Your name"
        value={form.name}
        onChange={set('name')}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        value={form.email}
        onChange={set('email')}
      />
      <SubmitButton status={status}>Begin the Challenge</SubmitButton>
      <Honeypot />
      <FormStatus status={status} message={message} />
      <p className="text-xs text-[var(--fg-muted)]">
        Delivered via <span className="font-600">healthyrhythm@thelivinglaw.in</span>.
      </p>
    </form>
  );
}
