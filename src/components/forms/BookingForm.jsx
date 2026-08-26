import { useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import {
  Field,
  Select,
  TextArea,
  Honeypot,
  SubmitButton,
  FormStatus,
} from '@/components/forms/FormFields';
import { consultations } from '@/data/consultations';

// Consultation booking -> appointments@thelivinglaw.in
export function BookingForm({ defaultService }) {
  const { status, message, submit } = useFormSubmit('appointments');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || '',
    date: '',
    time: '',
    concerns: '',
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const svc = consultations.find((c) => c.slug === form.service);
    const ok = await submit({
      subject: `New Booking — ${svc?.title || 'Consultation'} — The Living Law`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: svc?.title || form.service,
      preferred_date: form.date,
      preferred_time: form.time,
      message: form.concerns,
      replyto: form.email,
    });
    if (ok) {
      setForm({
        name: '',
        email: '',
        phone: '',
        service: defaultService || '',
        date: '',
        time: '',
        concerns: '',
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
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
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          placeholder="+91 …"
          value={form.phone}
          onChange={set('phone')}
        />
        <Select
          label="Service"
          name="service"
          required
          value={form.service}
          onChange={set('service')}
        >
          <option value="" disabled>
            Choose a consultation
          </option>
          {consultations.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Preferred Date"
          name="date"
          type="date"
          required
          min={today}
          value={form.date}
          onChange={set('date')}
        />
        <Select
          label="Preferred Time"
          name="time"
          required
          value={form.time}
          onChange={set('time')}
        >
          <option value="" disabled>
            Choose a time
          </option>
          <option value="Morning (9–12)">Morning (9–12)</option>
          <option value="Afternoon (12–15)">Afternoon (12–15)</option>
          <option value="Evening (15–18)">Evening (15–18)</option>
        </Select>
      </div>

      <TextArea
        label="Your Health Concerns & Goals"
        name="concerns"
        rows={4}
        placeholder="Tell us about what you'd like to address…"
        value={form.concerns}
        onChange={set('concerns')}
      />

      <SubmitButton status={status}>Request Consultation</SubmitButton>
      <Honeypot />
      <FormStatus status={status} message={message} />
      <p className="text-xs text-[var(--fg-muted)]">
        Your request goes to{' '}
        <span className="font-600">appointments@thelivinglaw.in</span>. We'll
        reply to confirm the time and share next steps.
      </p>
    </form>
  );
}
