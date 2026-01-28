'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme') as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      // Default to dark theme
      const initialTheme = 'dark';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
    setMounted(true);
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
