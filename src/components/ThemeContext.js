'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('80s');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('labsite-theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('labsite-theme', theme);
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      
      // Sync body classes
      document.body.classList.remove('theme-80s', 'theme-90s', 'theme-2000s', 'crt');
      document.body.classList.add(`theme-${theme}`);
      if (theme === '80s') {
        document.body.classList.add('crt');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
