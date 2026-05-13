'use client';
import { useTheme } from './ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      <div className={`${theme === '80s' ? 'pixel-border p-2 bg-black' : 'mgs-panel p-2'} flex flex-col gap-2`}>
        <span className={`font-heading text-[10px] text-center ${theme === '80s' ? 'text-retro-amber' : 'text-mgs-green'}`}>
          SELECT_ERA
        </span>
        <button 
          onClick={toggleTheme}
          className={`${theme === '80s' ? 'pixel-button text-[10px]' : 'mgs-button text-[10px] bg-mgs-green/10'} shadow-sm active:shadow-none transition-all`}
        >
          {theme === '80s' ? 'GO_TO_1998' : 'Back to 1985'}
        </button>
      </div>
    </div>
  );
}
