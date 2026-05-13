import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black border-b-4 border-retro-green p-4 sticky top-0 z-50 overflow-hidden min-h-[80px]">
      {/* Silly Animation Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-chase flex items-center h-full gap-8">
          {/* Banana */}
          <div className="flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-retro-amber opacity-60">
              <rect x="10" y="4" width="4" height="4" fill="currentColor" />
              <rect x="8" y="8" width="8" height="4" fill="currentColor" />
              <rect x="6" y="12" width="12" height="4" fill="currentColor" />
              <rect x="8" y="16" width="4" height="4" fill="currentColor" />
            </svg>
          </div>
          
          {/* DataMonkey */}
          <div className="animate-monkey-bounce flex flex-col items-center flex-shrink-0">
             <svg width="32" height="32" viewBox="0 0 32 32" className="text-retro-green opacity-50">
                {/* Body */}
                <rect x="8" y="12" width="16" height="12" fill="currentColor" />
                {/* Head */}
                <rect x="12" y="4" width="8" height="8" fill="currentColor" />
                {/* Ears */}
                <rect x="8" y="6" width="4" height="4" fill="currentColor" />
                <rect x="20" y="6" width="4" height="4" fill="currentColor" />
                {/* Arms */}
                <rect x="4" y="14" width="4" height="8" fill="currentColor" />
                <rect x="24" y="14" width="4" height="8" fill="currentColor" />
                {/* Tail */}
                <rect x="2" y="22" width="6" height="2" fill="currentColor" className="animate-tail-wag origin-right" />
             </svg>
             <span className="text-[8px] font-mono text-retro-green opacity-40 mt-1 whitespace-nowrap">DATAMONKEY_v1.0</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 h-full">
        <Link href="/" className="font-heading text-lg md:text-2xl text-retro-green hover:text-white transition-colors">
          ACME_LAB
        </Link>
        <div className="flex gap-6 font-heading text-[10px] md:text-sm bg-black/50 px-2 py-1">
          <Link href="/projects" className="hover:text-white transition-colors">PROJECTS</Link>
          <Link href="/members" className="hover:text-white transition-colors">TEAM</Link>
          <Link href="/former" className="hover:text-white transition-colors">ALUMNI</Link>
          <Link href="/papers" className="hover:text-white transition-colors">PAPERS</Link>
        </div>
      </div>
    </nav>
  );
}
