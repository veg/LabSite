'use client';
import { useTheme } from './ThemeContext';

export default function Card({ title, children, className = "" }) {
  const { theme } = useTheme();
  
  if (theme === '90s') {
    return (
      <div className={`sys8-window flex flex-col mb-6 ${className}`}>
        {title && (
          <div className="sys8-titlebar">
            <div className="sys8-close-box"></div>
            <h3 className="font-heading text-xs text-black font-bold uppercase tracking-tight">
              {title}
            </h3>
          </div>
        )}
        <div className="p-4 md:p-6 font-mono text-lg md:text-xl leading-snug text-black">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`pixel-border bg-black p-4 md:p-6 mb-6 ${className}`}>
      {title && (
        <h3 className="font-heading text-sm md:text-lg mb-4 text-retro-amber border-b-2 border-retro-amber pb-2">
          {title}
        </h3>
      )}
      <div className="font-body text-xl md:text-2xl leading-relaxed">
        {children}
      </div>
    </div>
  );
}
