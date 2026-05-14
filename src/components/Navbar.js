'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import { useState } from 'react';

function ThemeToggle({ theme, toggleTheme, showDropdown, setShowDropdown }) {
  const eras = [
    { id: 'profdr', label: '1993 Prof. Dr.' },
    { id: 'geocities', label: '1996 Geocities' },
    { id: '80s', label: '1985 Terminal' },
    { id: '90s', label: '1998 Tactical' },
    { id: 'y2k', label: '2003 Web 2.0' },
    { id: '2000s', label: '2007 Omni-tool' },
    { id: '2010s', label: '2012 Vault Hunter' },
    { id: '2020s', label: '2024 AI Assistant' }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        className={`p-1 transition-all ${
          theme === 'profdr' ? 'text-black hover:text-blue-700' :
          theme === 'geocities' ? 'text-[#ff00ff] hover:text-[#00ffff]' :
          theme === 'y2k' ? 'text-[#0066cc] hover:text-[#ff6600]' :
          theme === '80s' ? 'text-retro-green hover:text-white' :
          theme === '90s' ? 'text-mgs-green hover:text-white' :
          theme === '2000s' ? 'text-me-orange hover:text-white' :
          theme === '2010s' ? 'text-hero-dark hover:text-hero-yellow' :
          'text-ai-accent hover:opacity-80'
        }`}
        title="Change Era"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
      {showDropdown && (
        <div className={`absolute left-0 mt-2 p-2 min-w-[180px] shadow-lg z-[100] ${
          theme === 'profdr' ? 'bg-white border border-gray-500 text-black' :
          theme === 'geocities' ? 'bg-[#000080] border-4 border-[#ff00ff] text-[#ffff00]' :
          theme === 'y2k' ? 'bg-white border border-[#b3d4ff] text-[#0066cc] rounded-lg' :
          theme === '80s' ? 'bg-black border-2 border-retro-green text-retro-green' :
          theme === '90s' ? 'bg-mgs-bg border-2 border-mgs-border text-mgs-green' :
          theme === '2000s' ? 'bg-me-bg border-2 border-me-orange text-me-orange animate-hologram-flicker' :
          theme === '2010s' ? 'bg-hero-dark border-4 border-black text-hero-yellow skew-x-[-2deg]' :
          'bg-ai-sidebar border border-white/10 rounded-xl text-white backdrop-blur-xl'
        }`}>
          {eras.map(era => (
            <button 
              key={era.id}
              onClick={() => { toggleTheme(era.id); setShowDropdown(false); }}
              className={`w-full text-left px-2 py-1.5 hover:bg-white/10 text-[10px] font-heading mb-1 last:mb-0 transition-colors rounded-md ${theme === era.id ? 'opacity-100 bg-white/5' : 'opacity-60'}`}
            >
              {era.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { label: 'PROJECTS', href: '/projects' },
    { label: 'TEAM', href: '/members' },
    { label: 'ALUMNI', href: '/former' },
    { label: 'PAPERS', href: '/papers' },
  ];

  if (theme === 'y2k') {
    return (
      <nav style={{
        background: 'linear-gradient(to bottom, #5fb1ee 0%, #1a73c9 50%, #0e5dad 51%, #0d5099 100%)',
        borderBottom: '1px solid #0a3d6e',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
        fontFamily: 'Verdana, sans-serif'
      }}>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            <Link href="/" style={{color: '#ffffff', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none', textShadow: '0 -1px 0 rgba(0,0,0,0.3)', letterSpacing: '-0.5px'}}>
              acme<span style={{color: '#ffcc66'}}>.</span>lab
            </Link>
            <span className="y2k-beta">BETA</span>
          </div>
          <div className="flex gap-1 items-center">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  textDecoration: 'none',
                  textShadow: '0 -1px 0 rgba(0,0,0,0.3)',
                  padding: '4px 12px',
                  borderRadius: '4px'
                }}
                className="hover:bg-white/15 transition-colors"
              >
                {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  if (theme === 'geocities') {
    return (
      <nav style={{background: '#000080', borderBottom: '4px ridge #ff00ff', padding: '8px', textAlign: 'center', fontFamily: '"Comic Sans MS", cursive'}}>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            <Link href="/" className="geo-rainbow" style={{fontWeight: 'bold', fontSize: '20px', textDecoration: 'none'}}>~* ACME Lab *~</Link>
          </div>
          <div className="flex gap-3 flex-wrap justify-center" style={{fontWeight: 'bold'}}>
            {navItems.map((item, i) => (
              <span key={item.label}>
                <Link href={item.href} style={{color: '#00ffff', textDecoration: 'underline'}}>
                  {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                </Link>
                {i < navItems.length - 1 && <span style={{color: '#ff00ff', marginLeft: '0.75rem'}}>★</span>}
              </span>
            ))}
          </div>
          <div className="geo-marquee" style={{maxWidth: '900px'}}>
            <span>★ WELCOME TO ACME LAB!!! ★ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 @ 800x600 ★ SIGN MY GUESTBOOK!!! ★ THIS PAGE IS UNDER CONSTRUCTION ★ </span>
          </div>
        </div>
      </nav>
    );
  }

  if (theme === 'profdr') {
    return (
      <nav className="bg-white text-black p-2 border-b border-gray-500" style={{fontFamily: '"Times New Roman", Times, serif'}}>
        <div className="container mx-auto px-4 flex items-center gap-4 flex-wrap">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <Link href="/" style={{color: '#0000ee', textDecoration: 'underline'}}>ACME Lab Home</Link>
          <span>|</span>
          {navItems.map((item, i) => (
            <span key={item.label}>
              <Link href={item.href} style={{color: '#0000ee', textDecoration: 'underline'}}>{item.label.charAt(0) + item.label.slice(1).toLowerCase()}</Link>
              {i < navItems.length - 1 && <span> | </span>}
            </span>
          ))}
        </div>
        <hr style={{border: 0, borderTop: '1px solid #808080', margin: '0.5em 0 0'}} />
      </nav>
    );
  }

  if (theme === '2020s') {
    return (
      <nav className="bg-ai-bg/95 border-b border-white/5 p-3 sticky top-0 z-50 flex items-center h-14 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            <Link href="/" className="font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-accent to-purple-500 flex items-center justify-center text-white text-xs">AC</span>
              <span className="text-sm tracking-tight">ACME_LAB</span>
            </Link>
          </div>
          <div className="flex gap-6 text-sm font-medium text-white/70">
            {navItems.map(item => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
             <button className="bg-white/5 hover:bg-white/10 text-white/60 px-3 py-1 rounded-full text-[10px] border border-white/10 transition-colors">
               v4.0_STABLE
             </button>
          </div>
        </div>
      </nav>
    );
  }

  if (theme === '2010s') {
    return (
      <nav className="bg-hero-yellow border-b-4 border-black p-2 sticky top-0 z-50 flex items-center h-14 shadow-hero">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            <Link href="/" className="font-black text-black italic text-xl tracking-tighter hover:skew-x-[-10deg] transition-transform">
              ACME_LAB
            </Link>
          </div>
          <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-black">
            {navItems.map(item => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-black hover:bg-black hover:text-hero-yellow px-2 py-1 transition-colors skew-x-[-10deg]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  if (theme === '2000s') {
    return (
      <nav className="bg-me-bg/80 border-b border-me-orange/30 p-4 sticky top-0 z-50 flex items-center h-16 backdrop-blur-md shadow-me">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-6 items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            <Link href="/" className="font-bold text-me-orange tracking-widest flex flex-col leading-none hover:text-white transition-all group">
              <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">N7_COMMAND_DECK</span>
              <span className="text-xl italic">ACME_LAB</span>
            </Link>
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-widest">
            {navItems.map(item => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-me-orange/60 hover:text-me-orange transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-me-orange hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex gap-4 text-[10px] text-me-blue opacity-50 font-mono">
            <span>UPLINK: STABLE</span>
            <span>CITADEL_CORE_SECURED</span>
          </div>
        </div>
      </nav>
    );
  }

  if (theme === '90s') {
    return (
      <nav className="bg-mgs-bg border-b-2 border-mgs-border p-3 sticky top-0 z-50 flex items-center h-14 font-mono shadow-mgs">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            <Link href="/" className="font-bold text-mgs-green tracking-tighter flex flex-col leading-none hover:text-white transition-colors text-mgs-green">
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
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <Link href="/" className="font-heading text-lg md:text-2xl text-retro-green hover:text-white transition-colors text-retro-green">
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
