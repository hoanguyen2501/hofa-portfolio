'use client';

import Section from './Section';
import { Button } from './ui/Button';
import { personalInfo, socialLinks } from '@/lib/data';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log('Form submitted');
  };

  return (
    <Section id="contact" title="Get in Touch" className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Let's work together
          </h3>
          {/* <p className="text-lg text-foreground/70 mb-8 max-w-md">
            {personalInfo.summary.substring(0, 120)}...
          </p> */}

          <div className="space-y-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </span>
              {socialLinks.email}
            </a>

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} />
                </span>
                LinkedIn Profile
              </a>
            )}

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Github size={20} />
                </span>
                GitHub Profile
              </a>
            )}

            <a
              href={`tel:${socialLinks.phone}`}
              className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Phone size={20} />
              </span>
              {socialLinks.phone}
            </a>

            <div className="flex items-center gap-4 text-foreground/80">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={20} />
              </span>
              {personalInfo.location}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-background p-6 md:p-8 rounded-3xl shadow-2xl shadow-secondary/20 border border-border"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/70">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/70">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground/70">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}
