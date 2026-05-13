'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('80s');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      
      // Sync body classes
      document.body.classList.remove('theme-80s', 'theme-90s', 'crt');
      document.body.classList.add(theme === '80s' ? 'theme-80s' : 'theme-90s');
      if (theme === '80s') {
        document.body.classList.add('crt');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === '80s' ? '90s' : '80s'));
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
