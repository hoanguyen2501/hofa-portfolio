import Image from 'next/image';
import Section from './Section';
import { Button } from './ui/Button';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const highlights = [
    { heading: "2", subHeading: "Years in Backend Developement" },
    { heading: "2+", subHeading: "Projects Delivered" },
    { heading: "REST APIs", subHeading: "Scalable & Maintainable Design" },
    { heading: "DevOps", subHeading: "CI/CD • Docker • Cloud Learning" },
  ]

  return (
    <Section id="home" className="justify-center relative">
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow md:flex-row items-center gap-12 md:gap-16">
        <div className="relative group shrink-0">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-56 h-56 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-background shadow-xl">
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
            <p className="max-w-2xl text-lg font-normal text-muted-text leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Overview Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-2xl">
              {
                highlights.map((hl, index) => (
                  <div key={index} className="bg-secondary/20 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                    <div className="text-2xl font-bold text-primary">{hl.heading}</div>
                    <div className="text-base font-normal text-muted-text">{hl.subHeading}</div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Get in touch
            </Button>
            <a
              href="/NguyenBaHoang_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View My CV
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
