'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('80s');
  const [mounted, setMounted] = useState(false);
  const [hasSelectedTheme, setHasSelectedTheme] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('labsite-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      setHasSelectedTheme(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      
      // Sync body classes
      document.body.classList.remove('theme-80s', 'theme-90s', 'theme-2000s', 'theme-2010s', 'theme-2020s', 'crt');
      document.body.classList.add(`theme-${theme}`);
      if (theme === '80s' && hasSelectedTheme) {
        document.body.classList.add('crt');
      }
    }
  }, [theme, mounted, hasSelectedTheme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    setHasSelectedTheme(true);
    localStorage.setItem('labsite-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted, hasSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
