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
      id: 'vax',
      label: '1978 VAX/VMS',
      desc: 'The Pre-Cambrian mainframe. Monochrome green phosphor and ASCII art.',
      previewClass: 'bg-black border border-[#33ff33] text-[#33ff33] font-mono text-[8px] flex flex-col items-center justify-center p-4'
    },
    {
      id: '80s',
      label: '1985 Terminal',
      desc: 'The Archean Era of computing. Muted 8-bit terminal aesthetic.',
      previewClass: 'bg-black border-2 border-retro-green text-retro-green font-heading text-[8px] flex items-center justify-center p-4 text-center'
    },
    {
      id: 'profdr',
      label: '1994 Yahoo',
      desc: 'The Dawn of Web Directories. Hierarchical links and red serif logos.',
      previewClass: 'profdr-preview flex flex-col items-center justify-center p-4'
    },
    {
      id: 'geocities',
      label: '1996 Geocities',
      desc: 'Amateur Web Maximalism. Rainbows and blinking marquees.',
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
        { text: "Printed on continuous-form paper.", themes: ['vax', '80s'] },
        { text: "A simple TeX-rendered preprint.", themes: ['knuth', 'vax'] },
        { text: "A personalized email from a web directory.", themes: ['profdr', 'geocities'] },
        { text: "An encrypted transmission directly to my HUD.", themes: ['90s', '2000s', '2010s'] },
        { text: "An AI-generated summary delivered via a minimalist dashboard.", themes: ['enterprise', '2020s', 'y2k'] }
      ]
    },
    {
      text: "The 'correct' amount of visual clutter is...",
      options: [
        { text: "None. Just text.", themes: ['vax', '80s', '90s', 'knuth'] },
        { text: "Blinking 'NEW' tags and rotating 3D GIFs.", themes: ['geocities', 'profdr'] },
        { text: "Holographic panels for a starship pilot feel.", themes: ['2000s', '2010s', 'y2k'] },
        { text: "Clean and slightly corporate.", themes: ['enterprise', '2020s'] }
      ]
    },
    {
      text: "Your favorite lab tool is...",
      options: [
        { text: "Punch cards.", themes: ['vax'] },
        { text: "A pencil and a yellow legal pad.", themes: ['knuth', 'vax'] },
        { text: "Netscape Navigator.", themes: ['profdr', 'geocities', '80s'] },
        { text: "A neural-linked sequencer.", themes: ['2000s', '2010s', '90s'] },
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
        <div className="animate-in fade-in duration-700 w-full max-w-4xl">
          <div className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-16 text-center">Temporal Index</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-8">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => toggleTheme(era.id)}
                className="group flex flex-col items-start gap-2 text-left"
              >
                <span className="text-zinc-500 group-hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase">{era.id}</span>
                <span className="text-white group-hover:text-retro-green transition-colors text-lg tracking-widest uppercase">{era.label}</span>
                <span className="text-zinc-700 text-[10px] tracking-widest uppercase leading-tight">{era.desc}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-24 text-center">
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
