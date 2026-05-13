'use client';
import { useTheme } from './ThemeContext';
import Navbar from './Navbar';

export default function PageContainer({ children, title, titleColorClass = "text-retro-amber" }) {
  const { theme, mounted } = useTheme();
  
  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        {title && (
          <div className={theme === '90s' ? 'mb-12 text-center' : ''}>
            {theme === '90s' && <div className="text-[10px] text-mgs-green/40 font-mono tracking-widest mb-1">FILE_TYPE: RESEARCH_LOG</div>}
            <h1 className={`text-4xl mb-12 text-center ${theme === '80s' ? titleColorClass : 'text-mgs-green font-bold tracking-tighter border-b border-mgs-green/20 pb-4'}`}>
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
      
      <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${theme === '80s' ? 'border-retro-green bg-black' : 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono'}`}>
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className={theme === '80s' ? 'text-retro-blue' : 'text-mgs-blue'}>INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY</p>
      </footer>
    </main>
  );
}
