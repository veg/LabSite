'use client';
import { useTheme } from './ThemeContext';

export default function EraSelectionSplash() {
  const { toggleTheme } = useTheme();

  const eras = [
    {
      id: 'vax',
      label: '1978 VAX/VMS',
      desc: 'The Pre-Cambrian mainframe. Monochrome green phosphor, ASCII art, and the raw power of VAX-11/780 terminal systems.',
      previewClass: 'bg-black border border-[#33ff33] text-[#33ff33] font-mono text-[8px] flex flex-col items-center justify-center p-4'
    },
    {
      id: '80s',
      label: '1985 Terminal',
      desc: 'The Archean Era of computing. Muted 8-bit terminal with the classic Oregon Trail "Dead Oxen" aesthetic.',
      previewClass: 'bg-black border-2 border-retro-green text-retro-green font-heading text-[8px] flex items-center justify-center p-4 text-center'
    },
    {
      id: 'profdr',
      label: '1994 Yahoo',
      desc: 'The Dawn of Web Directories. Hierarchical links, red serif logos, and the simple search bar that categorized the new world.',
      previewClass: 'profdr-preview flex flex-col items-center justify-center p-4'
    },
    {
      id: 'geocities',
      label: '1996 Geocities',
      desc: 'Amateur Web Maximalism. The pre-explosion of personal homepages: Comic Sans, rainbows, and blinking marquees.',
      previewClass: 'geo-preview flex flex-col items-center justify-center'
    },
    { 
      id: '90s', 
      label: '1998 Tactical', 
      desc: 'The Information Age. High-tech bio-surveillance HUD inspired by stealth/military interfaces for pathogen tracking.',
      previewClass: 'bg-[#0a0f0a] border-2 border-[#2d4c2d] text-[#00ff41] font-mono text-[10px] flex flex-col items-center justify-center p-4'
    },
    {
      id: 'y2k',
      label: '2003 Web 2.0',
      desc: 'The Glossy Gel Era. Sky-blue gradients, rounded boxes, and the optimistic "BETA" badge bloom of early social platforms.',
      previewClass: 'y2k-preview flex flex-col items-center justify-center'
    },
    {
      id: '2000s',
      label: '2007 Omni-tool',
      desc: 'The Genomic Mesozoic. Holographic futuristic HUD interfaces for deep phylogenomic exploration across the stars.',
      previewClass: 'bg-[#050a0f] border-2 border-[#ff9d00]/30 text-[#ff9d00] font-mono text-[10px] flex items-center justify-center p-4 italic font-black shadow-[0_0_15px_rgba(255,157,0,0.2)]'
    },
    { 
      id: '2010s', 
      label: '2012 Vault Hunter', 
      desc: 'The Cenozoic of High-Throughput. Bold, high-contrast gaming UI with cel-shaded elements for fast-paced research.',
      previewClass: 'bg-[#ffcc00] border-4 border-black text-black font-black uppercase text-[10px] flex items-center justify-center p-4 skew-x-[-5deg]'
    },
    { 
      id: 'enterprise', 
      label: '2018 Enterprise', 
      desc: 'The Era of Standardization. Clean, corporate "solutions" oriented layout using standard Bootstrap-inspired components.',
      previewClass: 'bg-white border border-[#dee2e6] text-[#212529] font-sans text-xs flex flex-col items-start p-4 rounded shadow-sm'
    },
    { 
      id: '2020s', 
      label: '2024 AI Assistant', 
      desc: 'The Conversational Anthropocene. Modern, dark-mode chatbot environment for natural-language driven research.',
      previewClass: 'bg-[#0f111a] border border-white/10 text-white font-sans text-xs flex items-center justify-start p-4 rounded-xl shadow-xl'
    }
  ];

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex flex-col items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-6xl w-full text-center mb-6 relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/5 font-black text-6xl md:text-8xl select-none pointer-events-none uppercase">
          ACME_LAB
        </div>
        
        <h1 className="text-white text-2xl md:text-5xl font-black italic tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          EVOLUTIONARY_EPOCH_STABILIZED
        </h1>
        
        <div className="flex flex-col items-center gap-1">
          <p className="text-retro-amber font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase border-y border-retro-amber/20 py-1 inline-block px-4">
            ACME LAB // Computational Molecular Evolution
          </p>
          <p className="text-slate-400 font-mono text-[9px] md:text-[10px] tracking-widest uppercase mt-2 max-w-xl mx-auto leading-relaxed opacity-70">
            [INITIATING_VISUAL_ONTOLOGY_SELECT] // THE INTERFACE EVOLVES. 
            CHOOSE YOUR RESEARCH_EPOCH.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 max-w-7xl w-full">
        {eras.map((era) => (
          <button
            key={era.id}
            onClick={() => toggleTheme(era.id)}
            className="group flex flex-col gap-4 text-left transition-all hover:scale-105"
          >
            <div className={`h-44 w-full transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative ${era.previewClass}`}>
               {era.id === 'profdr' && (
                 <div className="flex flex-col items-center">
                   <div className="text-xl font-black mb-1" style={{color: '#ff0000', fontFamily: 'serif'}}>Yahoo<span style={{color: '#800080'}}>!</span></div>
                   <div className="border border-gray-400 w-full h-4 bg-white mb-1"></div>
                   <div className="text-[8px] underline text-blue-700">Software (12)</div>
                   <div className="text-[8px] underline text-blue-700">Research (42)</div>
                 </div>
               )}
               {era.id === 'geocities' && (
                 <div>
                   <div className="geo-rainbow" style={{fontWeight: 'bold', fontSize: '13px'}}>~ My HomePage ~</div>
                   <div style={{height: '4px', background: 'linear-gradient(to right,red,orange,yellow,green,cyan,blue,magenta)', margin: '3px 0'}} />
                   <div className="geo-blink" style={{color: '#ff00ff'}}>NEW!!!</div>
                   <div style={{color: '#00ffff'}}>Click <span style={{textDecoration: 'underline'}}>here</span></div>
                 </div>
               )}
               {era.id === 'y2k' && (
                 <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                   <div className="y2k-logo" style={{fontSize: '18px'}}>acme<span style={{color: '#ff6600', WebkitTextFillColor: '#ff6600'}}>.</span>lab</div>
                   <span className="y2k-beta" style={{fontSize: '8px', padding: '1px 6px', marginLeft: 0}}>BETA</span>
                   <span className="y2k-gel" style={{fontSize: '9px', padding: '3px 10px'}}>Sign Up</span>
                 </div>
               )}
               {era.id === '80s' && "> SYSTEM_READY"}
               {era.id === 'vax' && (
                 <div className="flex flex-col items-center">
                   <div className="text-[6px] mb-1">VAX/VMS V1.0</div>
                   <div className="text-[5px] leading-tight">
                     +-------+<br/>
                     | LOGIN |<br/>
                     +-------+
                   </div>
                 </div>
               )}
               {era.id === '90s' && (
                 <>
                   <span className="animate-pulse">● SOLITON_RADAR</span>
                   <span className="opacity-40">UPLINK_STABLE</span>
                 </>
               )}
               {era.id === '2000s' && "CODEX_ENTRY_LOCKED"}
               {era.id === '2010s' && "NEW QUEST!"}
               {era.id === 'enterprise' && (
                 <div className="flex flex-col gap-2 w-full">
                   <div className="h-2 w-1/2 bg-blue-600 rounded"></div>
                   <div className="h-2 w-full bg-gray-200 rounded"></div>
                   <div className="h-2 w-full bg-gray-200 rounded"></div>
                   <div className="h-5 w-1/3 bg-blue-600 rounded mt-1"></div>
                 </div>
               )}
               {era.id === '2020s' && (
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-400 to-purple-500"></div>
                   <span>How can I help?</span>
                 </div>
               )}
               
               {/* Label in the corner for each preview */}
               <div className="absolute bottom-1 right-2 text-[6px] opacity-20 font-mono uppercase">
                 ACME_E_LOG_{era.id}
               </div>
            </div>
            <div className="px-2">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors uppercase tracking-tight">
                  {era.label}
                </h3>
                <span className="text-[10px] text-slate-600 font-mono italic">#{era.id.toUpperCase()}</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-mono italic">
                {era.desc}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-2">
        <div className="text-slate-600 font-mono text-[10px] tracking-[0.3em] uppercase">
          ACME_LAB // MULTI-ERA_INTERFACE_SYSTEM // v4.0.0_STABLE
        </div>
        <div className="text-white/30 font-mono text-[8px] tracking-[0.1em] uppercase max-w-xl text-center leading-relaxed">
          The ACME Laboratory for Computational Molecular Evolution develops and applies high-performance 
          statistical models to measure the evolutionary dynamics of measurable pathogens. 
          Universal methodology across all domains of life.
        </div>
      </div>
    </div>
  );
}
