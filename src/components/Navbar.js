'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { label: 'PROJECTS', href: '/projects' },
    { label: 'TEAM', href: '/members' },
    { label: 'ALUMNI', href: '/former' },
    { label: 'PAPERS', href: '/papers' },
  ];

  const ThemeToggle = () => (
    <div className="relative">
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        className={`p-1 transition-all ${theme === '80s' ? 'text-retro-green hover:text-white' : 'text-mgs-green hover:text-white'}`}
        title="Change Era"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
      {showDropdown && (
        <div className={`absolute left-0 mt-2 p-2 min-w-[140px] shadow-lg z-[100] ${theme === '80s' ? 'bg-black border-2 border-retro-green text-retro-green' : 'bg-mgs-bg border-2 border-mgs-border text-mgs-green'}`}>
          <button 
            onClick={() => { toggleTheme(); setShowDropdown(false); }}
            className="w-full text-left px-2 py-1 hover:bg-white/10 text-xs font-heading"
          >
            {theme === '80s' ? 'GO TO 1998' : 'GO TO 1985'}
          </button>
        </div>
      )}
    </div>
  );

  if (theme === '90s') {
    return (
      <nav className="bg-mgs-bg border-b-2 border-mgs-border p-3 sticky top-0 z-50 flex items-center h-14 font-mono shadow-mgs">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <ThemeToggle />
            <Link href="/" className="font-bold text-mgs-green tracking-tighter flex flex-col leading-none hover:text-white transition-colors">
              <span className="text-xs opacity-60">TACTICAL_INFO</span>
              <span className="text-lg">ACME_LAB</span>
            </Link>
          </div>
          <div className="flex gap-6 text-sm">
            {navItems.map(item => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-mgs-green/70 hover:text-mgs-green transition-all hover:translate-x-1"
              >
                <span className="mr-1 opacity-40">{'>'}</span>{item.label}
              </Link>
            ))}
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
    <nav className="bg-black border-b-4 border-retro-green p-4 sticky top-0 z-50 min-h-[80px]">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-0 animate-scene-fade overflow-hidden h-full w-48">
        <div className="flex items-center gap-2 h-full justify-end">
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
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <Link href="/" className="font-heading text-lg md:text-2xl text-retro-green hover:text-white transition-colors">
            ACME_LAB
          </Link>
        </div>
        <div className="flex gap-6 font-heading text-[10px] md:text-sm bg-black/40 px-2 py-1">
          {navItems.map(item => (
             <Link key={item.label} href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
