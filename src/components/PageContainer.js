'use client';
import { useTheme } from './ThemeContext';
import Navbar from './Navbar';

export default function PageContainer({ children, title, titleColorClass = "text-retro-amber" }) {
  const { theme, mounted } = useTheme();
  
  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  return (
    <main className={`min-h-screen relative flex flex-col ${
      theme === '2000s' ? 'bg-me-bg text-me-orange' : 
      theme === '2010s' ? 'bg-hero-bg text-hero-dark' : ''
    }`}>
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        {title && (
          <div className={theme !== '80s' ? 'mb-12 text-center' : ''}>
            {theme === '90s' && <div className="text-[10px] text-mgs-green/40 font-mono tracking-widest mb-1 uppercase">FILE_TYPE: RESEARCH_LOG</div>}
            {theme === '2000s' && <div className="text-[10px] text-me-blue font-bold tracking-[0.3em] mb-1 uppercase opacity-60">CODEX_ENTRY // {title}</div>}
            {theme === '2010s' && <div className="hero-tag mb-4">ACTIVE_QUEST: {title}</div>}
            <h1 className={`text-4xl mb-12 text-center ${
              theme === '80s' ? titleColorClass : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter border-b border-mgs-green/20 pb-4' :
              theme === '2000s' ? 'text-me-orange font-black italic tracking-wider border-b-2 border-me-orange/40 pb-2 drop-shadow-me' :
              'text-black font-black italic uppercase skew-x-[-5deg] border-b-8 border-hero-yellow inline-block px-4'
            }`}>
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
      
      <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${
        theme === '80s' ? 'border-retro-green bg-black text-retro-fg' : 
        theme === '90s' ? 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono' :
        theme === '2000s' ? 'border-me-orange/20 bg-me-bg/90 text-me-orange/40 font-mono text-sm tracking-widest italic' :
        'border-black bg-hero-dark text-hero-yellow font-black skew-x-[-2deg] py-12'
      }`}>
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className={
          theme === '80s' ? 'text-retro-blue' : 
          theme === '90s' ? 'text-mgs-blue' : 
          theme === '2000s' ? 'text-me-blue' :
          'text-white opacity-40 uppercase tracking-tighter mt-2'
        }>
          INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY
        </p>
      </footer>
    </main>
  );
}
