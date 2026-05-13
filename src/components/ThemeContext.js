'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('80s');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === '80s' ? '80s' : '90s');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === '80s' ? '90s' : '80s'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === '80s' ? 'theme-80s' : 'theme-90s'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
