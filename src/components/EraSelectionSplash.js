'use client';
import { useTheme } from './ThemeContext';

export default function EraSelectionSplash() {
  const { toggleTheme } = useTheme();

  const eras = [
    { 
      id: '80s', 
      label: '1985 Terminal', 
      desc: 'Muted 8-bit terminal with high-persistence phosphor decay.',
      previewClass: 'bg-black border-2 border-retro-green text-retro-green font-heading text-[8px] flex items-center justify-center p-4 text-center'
    },
    { 
      id: '90s', 
      label: '1998 Tactical', 
      desc: 'High-tech bio-surveillance HUD from the Shadow Moses incident.',
      previewClass: 'bg-[#0a0f0a] border-2 border-[#2d4c2d] text-[#00ff41] font-mono text-[10px] flex flex-col items-center justify-center p-4'
    },
    { 
      id: '2000s', 
      label: '2007 Omni-tool', 
      desc: 'Holographic N7-inspired field interface for deep galaxy exploration.',
      previewClass: 'bg-[#050a0f] border-2 border-[#ff9d00]/30 text-[#ff9d00] font-mono text-[10px] flex items-center justify-center p-4 italic font-black shadow-[0_0_15px_rgba(255,157,0,0.2)]'
    },
    { 
      id: '2010s', 
      label: '2012 Vault Hunter', 
      desc: 'Cel-shaded action interface with high-impact outlines.',
      previewClass: 'bg-[#ffcc00] border-4 border-black text-black font-black uppercase text-[10px] flex items-center justify-center p-4 skew-x-[-5deg]'
    },
    { 
      id: '2020s', 
      label: '2024 AI Assistant', 
      desc: 'Clean, conversational future-modern research environment.',
      previewClass: 'bg-[#0f111a] border border-white/10 text-white font-sans text-xs flex items-center justify-start p-4 rounded-xl shadow-xl'
    }
  ];

  return (
    <div className="fixed inset-0 z-[1000] bg-[#1a1a1a] flex flex-col items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-6xl w-full text-center mb-12">
        <h1 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter mb-4">
          TEMPORAL_SEQUENCE_DETECTED
        </h1>
        <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
          [INITIATING_ERA_SELECTION_PROTOCOL] // PLEASE SELECT YOUR DESTINATION_DECADES
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl w-full">
        {eras.map((era) => (
          <button
            key={era.id}
            onClick={() => toggleTheme(era.id)}
            className="group flex flex-col gap-4 text-left transition-all hover:scale-105"
          >
            <div className={`h-40 w-full transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] ${era.previewClass}`}>
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
            </div>
            <div className="px-2">
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">
                {era.label}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-mono">
                {era.desc}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-16 text-slate-600 font-mono text-[10px] tracking-[0.3em] uppercase">
        ACME_LAB // MULTI-ERA_INTERFACE_SYSTEM // v4.0.0_STABLE
      </div>
    </div>
  );
}
