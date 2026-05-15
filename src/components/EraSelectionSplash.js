'use client';
import { useState, useMemo } from 'react';
import { useTheme } from './ThemeContext';

export default function EraSelectionSplash() {
  const { toggleTheme } = useTheme();
  const [view, setView] = useState('landing'); // 'landing', 'quiz', 'result', 'manual'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});

  const eras = useMemo(() => [
    {
      id: 'typewriter',
      label: '1920 Broadsheet',
      desc: 'Extra! Extra! The morning edition. Broadsheet columns, ink-pressed type, wire dispatches, and editorial gravitas.',
      previewClass: 'typewriter-preview flex flex-col items-center justify-center'
    },
    {
      id: 'vax',
      label: '1978 VAX/VMS',
      desc: 'The Pre-Cambrian mainframe. Monochrome green phosphor and ASCII art.',
      previewClass: 'bg-black border border-[#33ff33] text-[#33ff33] font-mono text-[8px] flex flex-col items-center justify-center p-4'
    },
    {
      id: 'bios',
      label: '1981 BIOS',
      desc: 'The primordial boot screen. IBM PC POST sequences, keyboard interrupt codes, AMI BIOS amber glow.',
      previewClass: 'bg-black border-2 border-[#ffb000] text-[#ffb000] font-mono text-[8px] flex flex-col items-start justify-start p-3'
    },
    {
      id: 'macos',
      label: '1984 Mac OS',
      desc: 'The System 1 genesis. Bitmap Chicago font, platinum windows, pull-down menus, and the Happy Mac.',
      previewClass: 'macos-preview flex flex-col items-stretch justify-start'
    },
    {
      id: '80s',
      label: '1985 Terminal',
      desc: 'The Archean Era of computing. Muted 8-bit terminal for early molecular modeling.',
      previewClass: 'bg-black border-2 border-retro-green text-retro-green font-heading text-[8px] flex items-center justify-center p-4 text-center'
    },
    {
      id: 'mario',
      label: '1985 Plumber',
      desc: 'Coins. Blocks. Pipes. A kingdom in peril and a hero in overalls. Our princess is in another castle.',
      previewClass: 'mario-preview flex flex-col items-center justify-center'
    },
    {
      id: 'zelda',
      label: '1986 Adventure',
      desc: "It's dangerous to go alone. A golden kingdom, dungeon maps, heart containers, and a sword of legend.",
      previewClass: 'zelda-preview flex flex-col items-center justify-center'
    },
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
      id: '90s', 
      label: '1998 Tactical', 
      desc: 'The Information Age. High-tech bio-surveillance HUD.',
      previewClass: 'bg-[#0a0f0a] border-2 border-[#2d4c2d] text-[#00ff41] font-mono text-[10px] flex flex-col items-center justify-center p-4'
    },
    {
      id: 'y2k',
      label: '2003 Web 2.0',
      desc: 'The Glossy Gel Era. Sky-blue gradients and rounded boxes.',
      previewClass: 'y2k-preview flex flex-col items-center justify-center'
    },
    {
      id: 'myspace',
      label: '2005 MySpace',
      desc: 'Top 8. Glitter GIFs. Autoplay MIDI. Your profile song. Blog posts at 2am. This is your digital bedroom wall.',
      previewClass: 'myspace-preview flex flex-col items-center justify-center'
    },
    {
      id: '2000s',
      label: '2007 Omni-tool',
      desc: 'The Genomic Mesozoic. Holographic futuristic HUD interfaces.',
      previewClass: 'bg-[#050a0f] border-2 border-[#ff9d00]/30 text-[#ff9d00] font-mono text-[10px] flex items-center justify-center p-4 italic font-black shadow-[0_0_15px_rgba(255,157,0,0.2)]'
    },
    { 
      id: '2010s', 
      label: '2012 Vault Hunter', 
      desc: 'The Cenozoic of High-Throughput. Bold, high-contrast gaming UI.',
      previewClass: 'bg-[#ffcc00] border-4 border-black text-black font-black uppercase text-[10px] flex items-center justify-center p-4 skew-x-[-5deg]'
    },
    { 
      id: 'enterprise', 
      label: '2018 Enterprise', 
      desc: 'The Era of Standardization. Clean, corporate layout.',
      previewClass: 'bg-white border border-[#dee2e6] text-[#212529] font-sans text-xs flex flex-col items-start p-4 rounded shadow-sm'
    },
    { 
      id: '2020s', 
      label: '2024 AI Assistant', 
      desc: 'The Conversational Anthropocene. Modern, dark-mode chatbot environment.',
      previewClass: 'bg-[#0f111a] border border-white/10 text-white font-sans text-xs flex items-center justify-start p-4 rounded-xl shadow-xl'
    },
    {
      id: 'knuth',
      label: 'Donald Knuth',
      desc: 'Aggressive Minimalism. White background, Times New Roman, and pure information.',
      previewClass: 'knuth-preview flex flex-col items-center justify-center p-4'
    }
  ], []);

  const questions = [
    {
      text: "How do you prefer to receive your research updates?",
      options: [
        { text: "Printed on continuous-form paper.", themes: ['vax', '80s', 'bios'] },
        { text: "A simple TeX-rendered preprint.", themes: ['knuth', 'vax', 'typewriter'] },
        { text: "A personalized email from a web directory.", themes: ['profdr', 'geocities', 'y2k'] },
        { text: "An encrypted transmission directly to my HUD.", themes: ['90s', '2000s', '2010s'] },
        { text: "An AI-generated summary delivered via a minimalist dashboard.", themes: ['enterprise', '2020s', 'macos'] }
      ]
    },
    {
      text: "The 'correct' amount of visual clutter is...",
      options: [
        { text: "None. Just text.", themes: ['vax', '80s', '90s', 'knuth', 'bios', 'typewriter'] },
        { text: "Blinking 'NEW' tags and rotating 3D GIFs.", themes: ['geocities', 'profdr', 'myspace', 'mario', 'zelda'] },
        { text: "Holographic panels for a starship pilot feel.", themes: ['2000s', '2010s', 'y2k'] },
        { text: "Clean and slightly corporate.", themes: ['enterprise', '2020s', 'macos'] }
      ]
    },
    {
      text: "Your favorite lab tool is...",
      options: [
        { text: "Punch cards.", themes: ['vax', 'bios'] },
        { text: "A pencil and a yellow legal pad.", themes: ['knuth', 'vax', 'typewriter'] },
        { text: "Netscape Navigator.", themes: ['profdr', 'geocities', '80s', 'macos'] },
        { text: "A neural-linked sequencer.", themes: ['2000s', '2010s', '90s', 'zelda', 'mario'] },
        { text: "An LLM assistant.", themes: ['2020s', 'enterprise', 'y2k'] }
      ]
    }
  ];

  const handleAnswer = (themes) => {
    const newScores = { ...scores };
    themes.forEach(theme => {
      newScores[theme] = (newScores[theme] || 0) + 1;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setView('result');
    }
  };

  const getResultTheme = () => {
    let maxScore = -1;
    let result = '2020s';
    Object.entries(scores).forEach(([theme, score]) => {
      if (score > maxScore) {
        maxScore = score;
        result = theme;
      }
    });
    return result;
  };

  const handleLucky = () => {
    const randomTheme = eras[Math.floor(Math.random() * eras.length)].id;
    toggleTheme(randomTheme);
  };

  const resultThemeId = getResultTheme();
  const resultTheme = eras.find(e => e.id === resultThemeId);

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-8 overflow-y-auto font-mono">
      {view === 'landing' && (
        <div className="max-w-xl w-full flex flex-col gap-16 animate-in fade-in duration-1000">
           <div className="space-y-4">
             <h1 className="text-white text-3xl font-light tracking-[0.2em] uppercase">ACME LAB</h1>
             <p className="text-zinc-500 text-sm tracking-widest uppercase">Computational Molecular Evolution</p>
           </div>
           
           <div className="flex flex-col gap-6 items-start">
              <button 
                onClick={() => setView('quiz')}
                className="text-white hover:text-retro-green transition-colors text-lg tracking-widest uppercase"
              >
                — Begin Calibration
              </button>
              
              <button 
                onClick={handleLucky}
                className="text-white hover:text-retro-amber transition-colors text-lg tracking-widest uppercase"
              >
                — I Feel Lucky
              </button>

              <button 
                onClick={() => setView('manual')}
                className="text-zinc-500 hover:text-white transition-colors text-xs tracking-[0.3em] uppercase mt-4"
              >
                — Manual Entry
              </button>
           </div>

           <div className="text-zinc-700 text-[10px] tracking-widest uppercase mt-8 leading-relaxed">
             Stochastically modeling the evolutionary dynamics of pathogens since the first byte.
           </div>
        </div>
      )}

      {view === 'quiz' && (
        <div className="max-w-2xl w-full animate-in fade-in duration-500">
          <div className="mb-16 flex justify-between items-center text-[10px] tracking-[0.4em] text-zinc-500 border-b border-zinc-800 pb-4">
             <span>PHASE 0{currentQuestion + 1}</span>
             <div className="flex gap-2">
                {questions.map((_, i) => (
                  <div key={i} className={`w-1 h-1 rounded-full ${i <= currentQuestion ? 'bg-white' : 'bg-zinc-800'}`}></div>
                ))}
             </div>
          </div>
          
          <h2 className="text-white text-xl font-light tracking-widest mb-16 leading-relaxed uppercase">
            {questions[currentQuestion].text}
          </h2>
          
          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option.themes)}
                className="text-left text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm tracking-widest uppercase py-2"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {view === 'result' && (
        <div className="max-w-xl w-full flex flex-col items-center gap-12 animate-in fade-in duration-700">
           <div className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase">Result Optimized</div>
           
           <div className="w-full text-center space-y-4">
             <h3 className="text-white text-4xl font-light tracking-[0.15em] uppercase">
               {resultTheme.label}
             </h3>
             <p className="text-zinc-500 text-xs tracking-widest leading-relaxed px-8">
               {resultTheme.desc}
             </p>
           </div>
           
           <button 
             onClick={() => toggleTheme(resultThemeId)}
             className="border border-white/20 text-white hover:bg-white hover:text-black transition-all px-12 py-4 text-sm tracking-[0.3em] uppercase"
           >
             Initialize
           </button>
        </div>
      )}

      {view === 'manual' && (
        <div className="animate-in fade-in duration-700 w-full max-w-7xl">
          <div className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-12 text-center">Temporal Index</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => toggleTheme(era.id)}
                className="group flex flex-col gap-4 text-left transition-all hover:scale-105"
              >
                <div className={`h-40 w-full transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden ${era.previewClass}`}>
                   {era.id === 'profdr' && (
                     <div className="text-[10px]">
                       <h3 style={{fontSize: '11px', fontWeight: 'bold', margin: '0 0 2px', border: 'none'}}>Welcome!</h3>
                       <hr style={{border: 0, borderTop: '1px solid #808080', margin: '2px 0'}} />
                       <p style={{margin: '1px 0'}}>Click <a>here</a>.</p>
                     </div>
                   )}
                   {era.id === 'geocities' && (
                     <div className="text-[10px]">
                       <div className="geo-rainbow" style={{fontWeight: 'bold', fontSize: '11px'}}>My Home</div>
                       <div style={{height: '2px', background: 'linear-gradient(to right,red,orange,yellow,green,cyan,blue,magenta)', margin: '2px 0'}} />
                       <div className="geo-blink" style={{color: '#ff00ff'}}>NEW!</div>
                     </div>
                   )}
                   {era.id === 'y2k' && (
                     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px'}}>
                       <div className="y2k-logo" style={{fontSize: '14px'}}>acme<span style={{color: '#ff6600', WebkitTextFillColor: '#ff6600'}}>.</span>lab</div>
                       <span className="y2k-beta" style={{fontSize: '7px', padding: '1px 4px', marginLeft: 0}}>BETA</span>
                     </div>
                   )}
                   {era.id === '80s' && "> READY"}
                   {era.id === '90s' && <span className="animate-pulse">● RADAR</span>}
                   {era.id === '2020s' && (
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-400 to-purple-500"></div>
                       <span>AI</span>
                     </div>
                   )}
                   {era.id === 'myspace' && (
                     <div style={{textAlign: 'center'}}>
                       <div style={{fontSize: '11px', fontWeight: 'bold', color: '#ff6699', textShadow: '0 0 4px #ff6699'}}>★ ACME ★</div>
                       <div style={{fontSize: '7px', color: '#cc99ff'}}>Mood: excited!</div>
                     </div>
                   )}
                   {era.id === 'typewriter' && (
                     <div style={{fontFamily: '"Courier New", Courier, monospace', textAlign: 'center', color: '#2a1a0a'}}>
                       <div style={{fontSize: '10px', fontWeight: 'bold', borderBottom: '1px solid #2a1a0a', paddingBottom: '1px', marginBottom: '2px'}}>Gazette</div>
                       <div style={{fontSize: '7px', lineHeight: 1.2}}>ACME Lab</div>
                     </div>
                   )}
                   {era.id === 'bios' && (
                     <div className="flex flex-col gap-1">
                       <span>BIOS v2.07</span>
                       <span className="opacity-60">64K OK</span>
                     </div>
                   )}
                   {era.id === 'macos' && (
                     <>
                       <div style={{background: 'white', borderBottom: '1px solid #000', padding: '1px 2px', fontSize: '8px', fontWeight: 'bold', width: '100%'}}>&#8984; File</div>
                       <div style={{padding: '4px', fontSize: '8px', color: '#000', background: '#fff', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                         <div style={{border: '1px solid #000', padding: '2px 4px', boxShadow: '1px 1px 0 #000', background: '#fff'}}>Welcome</div>
                       </div>
                     </>
                   )}
                   {era.id === 'zelda' && (
                     <div style={{textAlign: 'center', fontFamily: '"Press Start 2P", monospace', fontSize: '7px'}}>
                       <div style={{color: '#f0c040', marginBottom: '2px'}}>&#9670; ZELDA</div>
                       <div style={{color: '#f0c040', marginTop: '2px'}}>&#9829;&#9829;&#9829;</div>
                     </div>
                   )}
                   {era.id === 'mario' && (
                     <div style={{textAlign: 'center', fontFamily: '"Press Start 2P", monospace', fontSize: '7px'}}>
                       <div style={{color: '#f8f8f8', marginBottom: '2px'}}>1-1</div>
                       <div style={{color: '#fcbc3c', fontSize: '8px'}}>[ ? ]</div>
                     </div>
                   )}
                   {era.id === 'vax' && (
                     <div className="flex flex-col gap-1">
                       <span>[ ACME ]</span>
                       <span className="opacity-60">ONLINE</span>
                     </div>
                   )}
                   {era.id === 'knuth' && (
                     <div className="text-[9px] text-left">
                       <h3 style={{borderBottom: '1px solid #000', fontSize: '10px', marginBottom: '2px', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}>Knuth</h3>
                       <p>Minimalism.</p>
                     </div>
                   )}
                   
                   <div className="absolute bottom-1 right-1 text-[5px] opacity-20 font-mono uppercase">
                     {era.id}
                   </div>
                </div>
                
                <div className="px-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors uppercase tracking-tight border-none">
                      {era.label}
                    </h3>
                  </div>
                  <p className="text-zinc-600 text-[9px] leading-tight font-mono italic line-clamp-2">
                    {era.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
               onClick={() => setView('landing')}
               className="text-zinc-500 hover:text-white transition-colors text-[10px] tracking-[0.4em] uppercase"
             >
               — Back
             </button>
          </div>
        </div>
      )}
    </div>
  );
}
