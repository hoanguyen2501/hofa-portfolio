import portfolioData from '@/data/portfolio.json';

// TypeScript Interfaces
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  name: string;
  period: string;
  team: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  projects?: Project[];
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
}

export interface Certificate {
  name: string;
  date: string;
  score: string;
  details: string;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  phone: string;
}

// Typed exports
export const personalInfo = portfolioData.personalInfo as PersonalInfo;
export const navItems = portfolioData.navItems as NavItem[];
export const experiences = portfolioData.experiences as Experience[];
export const techStacks = portfolioData.techStacks as TechCategory[];
export const education = portfolioData.education as Education;
export const certificates = portfolioData.certificates as Certificate[];
export const socialLinks = portfolioData.socialLinks as SocialLinks;
