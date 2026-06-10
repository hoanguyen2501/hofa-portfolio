import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-base font-normal text-muted-text border-t border-border">
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
}
