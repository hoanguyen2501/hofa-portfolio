import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function Section({ id, children, className = "", title }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center ${className}`}>
      <div className="max-w-5xl mx-auto w-full">
        {title && (
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-12 opacity-80">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
