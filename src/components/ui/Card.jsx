import { cn } from '@/lib/cn';

// Surface card with optional hover lift.
export function Card({ className, hover = false, children, ...rest }) {
  return (
    <div
      className={cn('card', hover && 'card-hover', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({ className, children }) {
  return <div className={cn('p-6 md:p-8', className)}>{children}</div>;
}
