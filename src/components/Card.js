'use client';
import { useTheme } from './ThemeContext';

export default function Card({ title, children, className = "" }) {
  const { theme } = useTheme();

  if (theme === 'knuth') {
    return (
      <div className={`mb-10 ${className}`} style={{display: 'block'}}>
        {title && (
          <h2 style={{fontSize: '18pt', fontWeight: 'bold', borderBottom: '1px solid #000', marginBottom: '10pt', marginTop: '20pt'}}>
            {title.replace(/_/g, ' ')}
          </h2>
        )}
        <div style={{fontSize: '12pt', lineHeight: '1.4'}}>
          {children}
        </div>
      </div>
    );
  }

  if (theme === 'enterprise') {
    return (
      <div className={`enterprise-card mb-6 flex flex-col h-full ${className}`}>
        {title && (
          <div className="border-b border-[#dee2e6] bg-[#f8f9fa] px-4 py-3">
            <h3 className="text-base font-medium text-[#212529] border-none mb-0">
              {title}
            </h3>
          </div>
        )}
        <div className="p-4 flex-grow text-[#212529]">
          {children}
        </div>
      </div>
    );
  }

  if (theme === 'vax') {
    return (
      <div className={`vax-panel mb-6 flex flex-col h-full bg-black ${className}`}>
        {title && (
          <div className="mb-4 text-[#33ff33] font-bold">
            {`[ FILE: ${title.toUpperCase()} ]`}
            <div className="text-[8px] leading-[2px] mt-1 tracking-tighter opacity-50">
              ================================================================================
            </div>
          </div>
        )}
        <div className="text-[#33ff33] font-mono leading-relaxed">
          {children}
        </div>
      </div>
    );
  }

  if (theme === 'profdr') {
    return (
      <table className={`yahoo-table mb-6 ${className}`} cellPadding="0" cellSpacing="2">
        {title && (
          <thead>
            <tr>
              <th className="yahoo-header">
                {title.replace(/_/g, ' ')}
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          <tr>
            <td className="yahoo-td">
              <div className="text-black">{children}</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (theme === 'geocities') {
    return (
      <div className={`geo-panel mb-6 ${className}`}>
        {title && (
          <>
            <h3 className="border-none mb-2">~* {title.replace(/_/g, ' ')} *~</h3>
            <hr className="my-2" />
          </>
        )}
        <div>{children}</div>
      </div>
    );
  }

  if (theme === 'y2k') {
    return (
      <div className={`y2k-panel mb-6 ${className}`}>
        {title && (
          <div className="y2k-panel-header">
            {title.replace(/_/g, ' ').toLowerCase()}
          </div>
        )}
        <div className="y2k-panel-body">{children}</div>
      </div>
    );
  }

  if (theme === 'myspace') {
    return (
      <div className={`myspace-panel mb-6 ${className}`}>
        {title && (
          <div className="myspace-panel-header">
            {title}
          </div>
        )}
        <div>{children}</div>
      </div>
    );
  }

  if (theme === 'zelda') {
    return (
      <div className={`zelda-panel mb-6 ${className}`}>
        {title && (
          <div className="zelda-panel-header text-left">
            &#9670; {title} &#9670;
          </div>
        )}
        <div>{children}</div>
      </div>
    );
  }

  if (theme === 'mario') {
    return (
      <div className={`mario-panel mb-6 ${className}`}>
        {title && (
          <div className="mario-panel-header text-left">
            [ {title} ]
          </div>
        )}
        <div>{children}</div>
      </div>
    );
  }

  if (theme === 'bios') {
    return (
      <div className={`bios-panel mb-6 ${className}`}>
        {title && (
          <div className="bios-panel-header">
            {title}
          </div>
        )}
        <div className="font-mono">{children}</div>
      </div>
    );
  }

  if (theme === 'macos') {
    return (
      <div className={`mac-window mb-6 ${className}`}>
        <div className="mac-titlebar">
          <div className="mac-close-box"></div>
          <div className="mac-titlebar-label">{title || 'ACME Lab'}</div>
        </div>
        <div className="mac-window-body">
          {children}
        </div>
      </div>
    );
  }

  if (theme === 'typewriter') {
    return (
      <div className={`tw-panel mb-6 ${className}`}>
        {title && (
          <div className="tw-heading">
            {title}
          </div>
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
            <h3 className="text-sm font-bold text-me-orange tracking-widest italic uppercase border-none mb-0">
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
            <h3 className="font-heading text-xs text-mgs-green font-bold tracking-widest border-none mb-0">
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
        <h3 className="font-heading text-sm md:text-lg mb-4 text-retro-amber border-b-2 border-retro-amber pb-2 border-t-0 border-l-0 border-r-0">
          {title}
        </h3>
      )}
      <div className="font-body text-xl md:text-2xl leading-relaxed">
        {children}
      </div>
    </div>
  );
}
