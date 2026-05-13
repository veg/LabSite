'use client';
import { useTheme } from './ThemeContext';

export default function Card({ title, children, className = "" }) {
  const { theme } = useTheme();
  
  if (theme === '90s') {
    return (
      <div className={`mgs-panel mb-6 ${className}`}>
        {title && (
          <div className="border-b border-mgs-border p-2 flex justify-between items-center bg-mgs-green/10">
            <h3 className="font-heading text-xs text-mgs-green font-bold tracking-widest">
              {title}
            </h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-mgs-green/40"></div>
              <div className="w-2 h-2 bg-mgs-green/20"></div>
            </div>
          </div>
        )}
        <div className="p-4 md:p-6 font-mono text-lg md:text-xl leading-snug text-mgs-green/90">
          {children}
        </div>
        {/* Decorative Corner Bracket */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-mgs-green opacity-40"></div>
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
