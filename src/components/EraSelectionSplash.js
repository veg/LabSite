'use client';
import { useTheme } from './ThemeContext';

export default function EraSelectionSplash() {
  const { toggleTheme } = useTheme();

  const eras = [
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
      <div className="max-w-6xl w-full text-center mb-12 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-white/5 font-black text-9xl select-none pointer-events-none uppercase">
          ACME_LAB
        </div>
        
        <h1 className="text-white text-3xl md:text-6xl font-black italic tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          EVOLUTIONARY_EPOCH_STABILIZED
        </h1>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-retro-amber font-mono text-sm tracking-[0.2em] uppercase border-y border-retro-amber/20 py-2 inline-block px-8">
            ACME LAB // Computational Molecular Evolution
          </p>
          <p className="text-slate-400 font-mono text-xs tracking-widest uppercase mt-4 max-w-2xl mx-auto leading-relaxed">
            [INITIATING_VISUAL_ONTOLOGY_SELECT] // THE DATA REMAINS CONSTANT, BUT THE INTERFACE EVOLVES. 
            PLEASE CHOOSE YOUR PREFERRED RESEARCH_EPOCH.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl w-full">
        {eras.map((era) => (
          <button
            key={era.id}
            onClick={() => toggleTheme(era.id)}
            className="group flex flex-col gap-4 text-left transition-all hover:scale-105"
          >
            <div className={`h-44 w-full transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative ${era.previewClass}`}>
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
        <div className="text-slate-800 font-mono text-[8px] tracking-[0.1em] uppercase max-w-xl text-center leading-relaxed">
          The ACME Laboratory for Computational Molecular Evolution develops and applies high-performance 
          statistical models to measure the evolutionary dynamics of measurable pathogens. 
          Universal methodology across all domains of life.
        </div>
      </div>
    </div>
  );
}
