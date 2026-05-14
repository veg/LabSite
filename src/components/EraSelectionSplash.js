'use client';
import { useTheme } from './ThemeContext';

export default function EraSelectionSplash() {
  const { toggleTheme } = useTheme();

  const eras = [
    {
      id: 'profdr',
      label: '1993 Prof. Dr.',
      desc: 'The Hadean dawn of the WWW. Browser defaults — serif text, blue underlined links, the user defines the look.',
      previewClass: 'profdr-preview'
    },
    {
      id: 'geocities',
      label: '1996 Geocities',
      desc: 'The Cambrian-pre-explosion of amateur web life. Comic Sans, rainbow text, blinking marquees, under-construction GIFs.',
      previewClass: 'geo-preview flex flex-col items-center justify-center'
    },
    {
      id: '80s',
      label: '1985 Terminal',
      desc: 'The Archean Era of computing. Muted 8-bit terminal for early molecular modeling.',
      previewClass: 'bg-black border-2 border-retro-green text-retro-green font-heading text-[8px] flex items-center justify-center p-4 text-center'
    },
    { 
      id: '90s', 
      label: '1998 Tactical', 
      desc: 'The Cambrian Explosion of data. High-tech bio-surveillance HUD for pathogen tracking.',
      previewClass: 'bg-[#0a0f0a] border-2 border-[#2d4c2d] text-[#00ff41] font-mono text-[10px] flex flex-col items-center justify-center p-4'
    },
    {
      id: 'y2k',
      label: '2003 Web 2.0',
      desc: 'The Silurian gel-button bloom. Sky-blue gradients, glossy buttons, rounded boxes, BETA badges, Verdana.',
      previewClass: 'y2k-preview flex flex-col items-center justify-center'
    },
    {
      id: '2000s',
      label: '2007 Omni-tool',
      desc: 'The Genomic Mesozoic. Holographic interfaces for deep phylogenomic exploration.',
      previewClass: 'bg-[#050a0f] border-2 border-[#ff9d00]/30 text-[#ff9d00] font-mono text-[10px] flex items-center justify-center p-4 italic font-black shadow-[0_0_15px_rgba(255,157,0,0.2)]'
    },
    { 
      id: '2010s', 
      label: '2012 Vault Hunter', 
      desc: 'The Cenozoic of Cloud Computing. Cel-shaded action UI for high-throughput research.',
      previewClass: 'bg-[#ffcc00] border-4 border-black text-black font-black uppercase text-[10px] flex items-center justify-center p-4 skew-x-[-5deg]'
    },
    { 
      id: '2020s', 
      label: '2024 AI Assistant', 
      desc: 'The Anthropocene of Artificial Intelligence. Modern conversational research environments.',
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
                 <div>
                   <h3 style={{fontSize: '13px', fontWeight: 'bold', margin: '0 0 4px'}}>Welcome to my homepage!</h3>
                   <hr style={{border: 0, borderTop: '1px solid #808080', margin: '4px 0'}} />
                   <p style={{margin: '2px 0'}}>Click <a>here</a> for papers.</p>
                   <p style={{margin: '2px 0'}}>Last updated: 14 Mar 1995</p>
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
               {era.id === '90s' && (
                 <>
                   <span className="animate-pulse">● SOLITON_RADAR</span>
                   <span className="opacity-40">UPLINK_STABLE</span>
                 </>
               )}
               {era.id === '2000s' && "CODEX_ENTRY_LOCKED"}
               {era.id === '2010s' && "NEW QUEST!"}
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
