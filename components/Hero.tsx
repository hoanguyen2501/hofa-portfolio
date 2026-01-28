import Image from 'next/image';
import Section from './Section';
import { Button } from './ui/Button';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <Section id="home" className="justify-center relative">
      {/* Blur Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60 backdrop-blur-sm pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-background shadow-xl">
            <Image
              src="/avatar.jpg"
              alt={`${personalInfo.name} - ${personalInfo.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-3">
            <h2 className="text-primary font-medium tracking-wide text-lg">
              Hello, I&apos;m {personalInfo.name}
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              {personalInfo.title}
            </h1>
            <p className="max-w-2xl text-base text-foreground/70 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Overview Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-2xl">
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-foreground/70">Years Experience</div>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-foreground/70">Projects Delivered</div>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="text-2xl font-bold text-primary">ASP.NET</div>
                <div className="text-sm text-foreground/70">Core Expertise</div>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="text-2xl font-bold text-primary">Full-Stack</div>
                <div className="text-sm text-foreground/70">Capabilities</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Get in touch
            </Button>
            <Button href="#experience" variant="outline" size="lg">
              View Work
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
