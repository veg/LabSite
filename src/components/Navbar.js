'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();

  if (theme === '90s') {
    return (
      <nav className="bg-mgs-bg border-b-2 border-mgs-border p-3 sticky top-0 z-50 flex items-center h-14 font-mono shadow-mgs">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-8 items-center">
            <Link href="/" className="font-bold text-mgs-green tracking-tighter flex flex-col leading-none hover:text-white transition-colors">
              <span className="text-xs opacity-60">TACTICAL_INFO</span>
              <span className="text-lg">ACME_LAB</span>
            </Link>
            <div className="flex gap-6 text-sm">
              {['PROJECTS', 'TEAM', 'ALUMNI', 'PAPERS'].map(item => (
                <Link 
                  key={item} 
                  href={`/${item === 'TEAM' ? 'members' : item.toLowerCase()}`} 
                  className="text-mgs-green/70 hover:text-mgs-green transition-all hover:translate-x-1"
                >
                  <span className="mr-1 opacity-40">{'>'}</span>{item}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end leading-none">
            <span className="text-mgs-red text-[10px] animate-pulse">● SOLITON_RADAR_ACTIVE</span>
            <span className="text-mgs-green text-[8px] opacity-40 tracking-widest">VER 19.98.B</span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-black border-b-4 border-retro-green p-4 sticky top-0 z-50 overflow-hidden min-h-[80px]">
      {/* Monkey Eating Animation Layer */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-0 animate-scene-fade">
        <div className="flex items-center gap-2">
          {/* DataMonkey */}
          <div className="flex flex-col items-center">
             <svg width="40" height="40" viewBox="0 0 32 32" className="text-retro-green opacity-50">
                <rect x="6" y="8" width="4" height="4" fill="currentColor" />
                <rect x="22" y="8" width="4" height="4" fill="currentColor" />
                <rect x="10" y="4" width="12" height="10" fill="currentColor" />
                <rect x="12" y="14" width="8" height="4" fill="currentColor" className="animate-chew origin-top" />
                <rect x="8" y="18" width="16" height="10" fill="currentColor" />
                <rect x="4" y="20" width="4" height="6" fill="currentColor" />
                <rect x="24" y="20" width="4" height="6" fill="currentColor" />
             </svg>
             <span className="text-[6px] font-mono text-retro-green opacity-40 mt-1 uppercase">Feeding_In_Progress</span>
          </div>
          <div className="animate-banana-shrink origin-left">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-retro-amber">
              <path d="M19,4 Q15,4 12,10 Q9,16 5,18 Q8,20 12,16 Q16,12 19,4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 h-full">
        <Link href="/" className="font-heading text-lg md:text-2xl text-retro-green hover:text-white transition-colors">
          ACME_LAB
        </Link>
        <div className="flex gap-6 font-heading text-[10px] md:text-sm bg-black/40 px-2 py-1">
          <Link href="/projects" className="hover:text-white transition-colors">PROJECTS</Link>
          <Link href="/members" className="hover:text-white transition-colors">TEAM</Link>
          <Link href="/former" className="hover:text-white transition-colors">ALUMNI</Link>
          <Link href="/papers" className="hover:text-white transition-colors">PAPERS</Link>
        </div>
      </div>
    </nav>
  );
}
