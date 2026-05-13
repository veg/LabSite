'use client';
import { useTheme } from './ThemeContext';
import Navbar from './Navbar';

export default function PageContainer({ children, title, titleColorClass = "text-retro-amber" }) {
  const { theme, mounted } = useTheme();
  
  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  return (
    <main className={`min-h-screen relative flex flex-col ${
      theme === '2000s' ? 'bg-me-bg text-me-orange' : 
      theme === '2010s' ? 'bg-hero-bg text-hero-dark' : 
      theme === '2020s' ? 'bg-ai-bg text-slate-200' : ''
    }`}>
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        {title && (
          <div className={theme !== '80s' ? 'mb-12 text-center' : ''}>
            {theme === '90s' && <div className="text-[10px] text-mgs-green/40 font-mono tracking-widest mb-1 uppercase">FILE_TYPE: RESEARCH_LOG</div>}
            {theme === '2000s' && <div className="text-[10px] text-me-blue font-bold tracking-[0.3em] mb-1 uppercase opacity-60">CODEX_ENTRY // {title}</div>}
            {theme === '2010s' && <div className="hero-tag mb-4">ACTIVE_QUEST: {title}</div>}
            {theme === '2020s' && (
              <div className="flex flex-col items-center mb-8">
                <div className="ai-bubble ai-bubble-user mb-4 text-left shadow-sm">
                   <p className="text-sm text-slate-300 mb-1 opacity-50 uppercase tracking-tighter font-bold">User Prompt:</p>
                   <p className="text-lg">Show me information about {title.toLowerCase()}.</p>
                </div>
              </div>
            )}
            
            {theme !== '2020s' && (
              <h1 className={`text-4xl mb-12 text-center ${
                theme === '80s' ? titleColorClass : 
                theme === '90s' ? 'text-mgs-green font-bold tracking-tighter border-b border-mgs-green/20 pb-4' :
                theme === '2000s' ? 'text-me-orange font-black italic tracking-wider border-b-2 border-me-orange/40 pb-2 drop-shadow-me' :
                'text-black font-black italic uppercase skew-x-[-5deg] border-b-8 border-hero-yellow inline-block px-4'
              }`}>
                {title}
              </h1>
            )}
          </div>
        )}
        
        {theme === '2020s' ? (
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
             <div className="ai-bubble ai-bubble-ai w-full shadow-lg border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-ai-accent to-purple-500"></div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded bg-ai-gradient flex items-center justify-center text-[10px] text-white">AI</div>
                  <span className="text-xs font-bold text-ai-accent tracking-widest uppercase">Assistant Response</span>
                </div>
                {children}
             </div>
          </div>
        ) : children}
      </div>
      
      <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${
        theme === '80s' ? 'border-retro-green bg-black text-retro-fg' : 
        theme === '90s' ? 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono' :
        theme === '2000s' ? 'border-me-orange/20 bg-me-bg/90 text-me-orange/40 font-mono text-sm tracking-widest italic' :
        theme === '2010s' ? 'border-black bg-hero-dark text-hero-yellow font-black skew-x-[-2deg] py-12' :
        'bg-ai-sidebar border-white/5 text-slate-500 font-sans text-xs tracking-tight py-6'
      }`}>
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className={
          theme === '80s' ? 'text-retro-blue' : 
          theme === '90s' ? 'text-mgs-blue' : 
          theme === '2000s' ? 'text-me-blue' :
          theme === '2010s' ? 'text-white opacity-40 uppercase tracking-tighter mt-2' :
          'text-ai-accent opacity-50 mt-1'
        }>
          INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY
        </p>
      </footer>
    </main>
  );
}
