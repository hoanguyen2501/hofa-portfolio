import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'circle';
  className?: string;
}

const sizeStyles = {
  sm: { icon: 16, wrapper: 'w-8 h-8' },
  md: { icon: 20, wrapper: 'w-10 h-10' },
  lg: { icon: 24, wrapper: 'w-12 h-12' },
};

export function IconWrapper({
  icon: Icon,
  size = 'md',
  variant = 'default',
  className = '',
}: IconWrapperProps) {
  const { icon: iconSize, wrapper: wrapperSize } = sizeStyles[size];

  if (variant === 'circle') {
    return (
      <div
        className={`${wrapperSize} flex items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-200 hover:bg-primary/20 ${className}`}
      >
        <Icon size={iconSize} />
      </div>
    );
  }

  return <Icon size={iconSize} className={`text-foreground/70 ${className}`} />;
}
