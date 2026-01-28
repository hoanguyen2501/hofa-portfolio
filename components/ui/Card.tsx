import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
    : '';
  const baseStyles = 'bg-background border border-border rounded-2xl shadow-lg shadow-secondary/10 transition-all duration-300';
  const classes = `${baseStyles} ${hoverStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={`p-6 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '', ...props }: CardContentProps) {
  return (
    <div className={`px-6 pb-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <div className={`px-6 pb-6 pt-4 border-t border-border ${className}`} {...props}>
      {children}
    </div>
  );
}
