'use client';

import Section from './Section';
import { Button } from './ui/Button';
import { personalInfo, socialLinks } from '@/lib/data';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log('Form submitted');
  };

  return (
    <Section id="contact" title="Contact" className="mb-20">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">

        {/* ================= LEFT: CONTACT INFO ================= */}
        <div
          className="h-full bg-background border border-border rounded-3xl p-6 md:p-8 shadow-secondary/10 flex flex-col"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Get in Touch
            </h3>
            <p className="text-base font-normal text-muted-text leading-relaxed">
              Open to backend developer opportunities, system design discussions,
              and long-term product development.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-4 text-base font-normal text-muted-text hover:text-primary transition-colors group"
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                <Mail size={18} />
              </span>
              {socialLinks.email}
            </a>

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base font-normal text-muted-text hover:text-primary transition-colors group"
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20"
                >
                  <Linkedin size={18} />
                </span>
                LinkedIn Profile
              </a>
            )}

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base font-normal text-muted-text hover:text-primary transition-colors group"
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20"
                >
                  <Github size={18} />
                </span>
                GitHub Repository
              </a>
            )}

            <div className="flex items-center gap-4 text-base font-normal text-muted-text">
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <MapPin size={18} />
              </span>
              {personalInfo.location}
            </div>
          </div>
        </div>

        {/* ================= RIGHT: CONTACT FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="h-full bg-background border border-border rounded-3xl p-6 md:p-8 shadow-secondary/20 flex flex-col"
        >
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Send a Message
          </h4>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 text-sm bg-secondary/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-sm bg-secondary/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>

          <textarea
            rows={4}
            placeholder="Briefly describe your message or opportunity..."
            className="w-full px-4 py-3 text-sm bg-secondary/5 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />

          {/* push button to bottom */}
          <div className="mt-auto pt-4">
            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </div>
        </form>

      </div>
    </Section>
  );
}
