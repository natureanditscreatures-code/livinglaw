import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

// Shared field primitives for all forms.
export function Field({ label, name, type = 'text', required, ...rest }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-600 text-[var(--fg)]">
          {label}
          {required && <span className="text-[var(--color-earth-500)]"> *</span>}
        </span>
      )}
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none transition placeholder:text-[var(--fg-muted)]/70 focus:border-[var(--primary)]"
        {...rest}
      />
    </label>
  );
}

export function TextArea({ label, name, required, rows = 4, ...rest }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-600 text-[var(--fg)]">
          {label}
          {required && <span className="text-[var(--color-earth-500)]"> *</span>}
        </span>
      )}
      <textarea
        name={name}
        required={required}
        rows={rows}
        className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none transition placeholder:text-[var(--fg-muted)]/70 focus:border-[var(--primary)]"
        {...rest}
      />
    </label>
  );
}

export function Select({ label, name, required, children, ...rest }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-600 text-[var(--fg)]">
          {label}
          {required && <span className="text-[var(--color-earth-500)]"> *</span>}
        </span>
      )}
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none transition focus:border-[var(--primary)]"
        {...rest}
      >
        {children}
      </select>
    </label>
  );
}

// Honeypot anti-spam field (hidden from humans)
export function Honeypot() {
  const [v, setV] = useState('');
  return (
    <input
      type="checkbox"
      name="botcheck"
      className="hidden"
      style={{ display: 'none' }}
      tabIndex={-1}
      autoComplete="off"
      checked={v}
      onChange={(e) => setV(e.target.checked)}
      aria-hidden="true"
    />
  );
}

// Status banner shown after submit.
export function FormStatus({ status, message }) {
  if (status === 'idle' || status === 'loading') return null;
  const ok = status === 'success';
  return (
    <div
      role="status"
      className={cn(
        'flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm',
        ok
          ? 'border-[var(--color-forest-300)] bg-[var(--color-forest-50)]/60 text-[var(--color-forest-800)]'
          : 'border-[var(--color-earth-400)] bg-[var(--color-earth-300)]/20 text-[var(--color-earth-600)]'
      )}
    >
      {ok ? (
        <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
      ) : (
        <AlertCircle size={18} className="mt-0.5 shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
}

export function SubmitButton({ status, children, className }) {
  return (
    <button
      type="submit"
      disabled={status === 'loading'}
      className={cn('btn btn-primary w-full disabled:opacity-70', className)}
    >
      {status === 'loading' ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Sending…
        </>
      ) : (
        children
      )}
    </button>
  );
}
