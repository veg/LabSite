'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();

  if (theme === '90s') {
    return (
      <nav className="bg-[#d6d6d6] border-b-2 border-black p-1 sticky top-0 z-50 flex items-center h-8 font-mono text-sm shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <Link href="/" className="font-bold hover:bg-[#000066] hover:text-white px-2 rounded-sm transition-colors text-black">
               ACME_LAB
            </Link>
            <div className="flex gap-4 text-xs">
              <Link href="/projects" className="hover:bg-[#000066] hover:text-white px-2 rounded-sm transition-colors text-black">Projects</Link>
              <Link href="/members" className="hover:bg-[#000066] hover:text-white px-2 rounded-sm transition-colors text-black">Team</Link>
              <Link href="/former" className="hover:bg-[#000066] hover:text-white px-2 rounded-sm transition-colors text-black">Alumni</Link>
              <Link href="/papers" className="hover:bg-[#000066] hover:text-white px-2 rounded-sm transition-colors text-black">Papers</Link>
            </div>
          </div>
          <div className="text-[10px] opacity-60 text-black">System 8.1</div>
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
                {/* Ears */}
                <rect x="6" y="8" width="4" height="4" fill="currentColor" />
                <rect x="22" y="8" width="4" height="4" fill="currentColor" />
                {/* Head */}
                <rect x="10" y="4" width="12" height="10" fill="currentColor" />
                {/* Jaw/Mouth (Animating) */}
                <rect x="12" y="14" width="8" height="4" fill="currentColor" className="animate-chew origin-top" />
                {/* Body */}
                <rect x="8" y="18" width="16" height="10" fill="currentColor" />
                {/* Arms holding banana */}
                <rect x="4" y="20" width="4" height="6" fill="currentColor" />
                <rect x="24" y="20" width="4" height="6" fill="currentColor" />
             </svg>
             <span className="text-[6px] font-mono text-retro-green opacity-40 mt-1 uppercase">Feeding_In_Progress</span>
          </div>

          {/* Banana (Shrinking) */}
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
