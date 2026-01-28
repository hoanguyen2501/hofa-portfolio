import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'outline';

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-secondary/50 text-secondary-foreground border border-secondary',
  primary: 'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary text-secondary-foreground',
  outline: 'border border-foreground/20 text-foreground/80 hover:border-primary hover:text-primary',
};

export function Badge({ variant = 'outline', className = '', children }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200';
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <span className={classes}>{children}</span>;
}
