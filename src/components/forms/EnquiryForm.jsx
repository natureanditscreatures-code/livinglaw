import { useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import {
  Field,
  TextArea,
  Honeypot,
  SubmitButton,
  FormStatus,
} from '@/components/forms/FormFields';

// Product / kit enquiry -> enquiry@thelivinglaw.in
export function EnquiryForm({ productName }) {
  const { status, message, submit } = useFormSubmit('products');
  const [form, setForm] = useState({
    name: '',
    email: '',
    product: productName || '',
    message: '',
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await submit({
      subject: `Product Enquiry — ${form.product || 'Kit'} — The Living Law`,
      name: form.name,
      email: form.email,
      product: form.product,
      message: form.message,
      replyto: form.email,
    });
    if (ok) {
      setForm({ name: '', email: '', product: productName || '', message: '' });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
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
      </div>
      <Field
        label="Product of Interest"
        name="product"
        placeholder="Which kit interests you?"
        value={form.product}
        onChange={set('product')}
      />
      <TextArea
        label="Your Message"
        name="message"
        rows={4}
        placeholder="Tell us about your needs or questions…"
        value={form.message}
        onChange={set('message')}
      />
      <SubmitButton status={status}>Send Enquiry</SubmitButton>
      <Honeypot />
      <FormStatus status={status} message={message} />
      <p className="text-xs text-[var(--fg-muted)]">
        Your enquiry goes to{' '}
        <span className="font-600">enquiry@thelivinglaw.in</span>.
      </p>
    </form>
  );
}
