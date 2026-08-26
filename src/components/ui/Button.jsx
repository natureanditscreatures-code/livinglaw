import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

// Button that can render as <button>, <a>, or react-router <Link>.
// Props: as ('button'|'link'|'a'), variant, size, to, href, ...rest
export function Button({
  as = 'button',
  variant = 'primary',
  size,
  to,
  href,
  className,
  children,
  ...rest
}) {
  const classes = cn('btn', variants[variant] || variants.primary, className);

  if (as === 'link') {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (as === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
