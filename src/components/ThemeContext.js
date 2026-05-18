'use client';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, setState] = useState({
    theme: '80s',
    mounted: false,
    hasSelectedTheme: false
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('labsite-theme');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({
      theme: savedTheme || '80s',
      mounted: true,
      hasSelectedTheme: !!savedTheme
    });
  }, []);

  useEffect(() => {
    if (!state.mounted) return;

    const root = document.documentElement;
    root.setAttribute('data-theme', state.theme);
    localStorage.setItem('labsite-theme', state.theme);

    document.body.classList.remove('theme-profdr', 'theme-geocities', 'theme-y2k', 'theme-80s', 'theme-90s', 'theme-2000s', 'theme-2010s', 'theme-2020s', 'theme-enterprise', 'theme-vax', 'theme-knuth', 'theme-myspace', 'theme-typewriter', 'theme-bios', 'theme-macos', 'theme-zelda', 'theme-mario', 'theme-win95', 'theme-notebook', 'theme-manuscript', 'crt');
    document.body.classList.add(`theme-${state.theme}`);
    
    if (state.theme === '80s' && state.hasSelectedTheme) {
      document.body.classList.add('crt');
    }
  }, [state.theme, state.mounted, state.hasSelectedTheme]);

  const toggleTheme = (newTheme) => {
    setState(prev => ({
      ...prev,
      theme: newTheme,
      hasSelectedTheme: true
    }));
  };

  const resetTheme = () => {
    localStorage.removeItem('labsite-theme');
    setState({
      theme: '80s',
      mounted: true,
      hasSelectedTheme: false
    });
  };

  const value = useMemo(() => ({
    theme: state.theme,
    toggleTheme,
    resetTheme,
    mounted: state.mounted,
    hasSelectedTheme: state.hasSelectedTheme
  }), [state.theme, state.mounted, state.hasSelectedTheme]);

  return (
    <ThemeContext.Provider value={value}>
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
