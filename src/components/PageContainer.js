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
          <h1 className={`text-4xl mb-12 text-center ${theme === '80s' ? titleColorClass : 'text-black font-bold'}`}>
            {title}
          </h1>
        )}
        {children}
      </div>
      
      <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${theme === '80s' ? 'border-retro-green bg-black' : 'border-black bg-[#d6d6d6] text-black'}`}>
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className={theme === '80s' ? 'text-retro-blue' : 'text-[#000066]'}>INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY</p>
      </footer>
    </main>
  );
}
