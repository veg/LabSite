'use client';
import { useTheme } from './ThemeContext';

export default function Card({ title, children, className = "" }) {
  const { theme } = useTheme();

  if (theme === 'profdr') {
    return (
      <section className={`mb-6 ${className}`}>
        {title && (
          <>
            <h3>{title.replace(/_/g, ' ')}</h3>
            <hr />
          </>
        )}
        <div>{children}</div>
      </section>
    );
  }

  if (theme === 'geocities') {
    return (
      <div className={`geo-panel mb-6 ${className}`}>
        {title && (
          <>
            <h3>~* {title.replace(/_/g, ' ')} *~</h3>
            <hr />
          </>
        )}
        <div>{children}</div>
      </div>
    );
  }

  if (theme === '2010s') {
    return (
      <div className={`hero-panel mb-8 p-0 ${className}`}>
        {title && (
          <div className="bg-hero-dark p-2 overflow-hidden">
             <div className="hero-tag">
                {title}
             </div>
          </div>
        )}
        <div className="p-6 font-mono text-lg md:text-xl leading-tight text-hero-dark">
          {children}
        </div>
      </div>
    );
  }

  if (theme === '2000s') {
    return (
      <div className={`me-panel mb-6 ${className}`}>
        {title && (
          <div className="border-b border-me-orange/30 p-3 bg-me-orange/10 flex justify-between items-center">
            <h3 className="text-sm font-bold text-me-orange tracking-widest italic uppercase">
              {title}
            </h3>
            <div className="w-12 h-[1px] bg-me-orange/50"></div>
          </div>
        )}
        <div className="p-6 font-mono text-lg leading-relaxed text-me-orange/90">
          {children}
        </div>
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-me-orange/50"></div>
        <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-me-orange/30"></div>
      </div>
    );
  }

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
