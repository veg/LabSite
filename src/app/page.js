'use client';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

export default function Home() {
  const { theme, mounted } = useTheme();

  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        <section className="mb-16 text-center">
          <div className={`inline-block border-4 p-4 mb-6 max-w-full ${theme === '80s' ? 'border-retro-green' : 'mgs-panel'}`}>
            {theme === '90s' && <div className="text-[10px] text-mgs-green/40 font-mono tracking-widest mb-1 text-left">ESTABLISHING_UPLINK...</div>}
            <h1 className={`text-xl md:text-4xl lg:text-5xl leading-tight ${theme === '80s' ? 'text-retro-fg' : 'text-mgs-green font-bold tracking-tighter'}`}>
              ACME_LAB:<br/>
              <span className="text-lg md:text-3xl lg:text-4xl">COMPUTATIONAL_MOLECULAR_EVOLUTION</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto px-2">
            <h2 className={`text-base md:text-xl lg:text-2xl mb-8 font-heading leading-relaxed ${theme === '80s' ? 'text-retro-amber' : 'text-mgs-blue'}`}>
              STATISTICAL_MODELS & SOFTWARE_TOOLS<br className="md:hidden" /> FOR COMPARATIVE_SEQUENCE_ANALYSIS
            </h2>
            
            <Card title="MISSION_OVERVIEW">
              <p className={`mb-4 text-left ${theme === '90s' ? 'text-mgs-green/80' : ''}`}>
                We <strong>develop and apply</strong> high-performance computational tools for the comparative analysis of sequence data. 
                Our methods are universally applicable across all domains of life. 
                While measurably evolving pathogens are our primary focus and "top customers," 
                our framework is used to interrogate evolutionary questions anywhere on the tree of life.
              </p>
              <div className={`text-sm md:text-base border-t pt-4 mt-4 flex justify-between items-center ${theme === '80s' ? 'text-retro-green border-retro-bg' : 'text-mgs-green/40 border-mgs-border'}`}>
                <span>[SCOPE]: UNIVERSAL</span>
                <span>[PRIMARY_FOCUS]: PATHOGENS</span>
                <span>[STATUS]: ACTIVE</span>
              </div>
            </Card>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card title="CORE_COMPETENCIES">
            <ul className="list-none space-y-2">
              <li className={theme === '90s' ? 'text-mgs-green/80' : ''}>{">"} MOLECULAR_EPIDEMIOLOGY</li>
              <li className={theme === '90s' ? 'text-mgs-green/80' : ''}>{">"} VIRAL_DYNAMICS</li>
              <li className={theme === '90s' ? 'text-mgs-green/80' : ''}>{">"} PHYLOGENETIC_METHODS</li>
              <li className={theme === '90s' ? 'text-mgs-green/80' : ''}>{">"} HIGH_PERFORMANCE_COMPUTING</li>
              <li className={theme === '90s' ? 'text-mgs-green/80' : ''}>{">"} DATA_VISUALIZATION</li>
            </ul>
          </Card>

          <Card title="EQUIPMENT_LIST">
            <p className={`mb-4 ${theme === '90s' ? 'text-mgs-green/80' : ''}`}>Our lab maintains a suite of open-source tools utilized by researchers worldwide:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className={theme === '80s' ? 'pixel-button text-sm' : 'mgs-button'}>HYPHY</Link>
              <Link href="/projects" className={theme === '80s' ? 'pixel-button text-sm' : 'mgs-button'}>DATAMONKEY</Link>
              <Link href="/projects" className={theme === '80s' ? 'pixel-button text-sm' : 'mgs-button'}>HIV-TRACE</Link>
            </div>
          </Card>
        </section>

        <section className="text-center">
          <div className={`inline-block p-8 ${theme === '80s' ? 'pixel-border bg-black' : 'mgs-panel'}`}>
            <h2 className={`text-2xl mb-6 ${theme === '90s' ? 'text-mgs-green/60' : ''}`}>SELECT_DESTINATION</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center font-heading">
              <Link href="/members" className={`hover:text-white transition-colors ${theme === '80s' ? 'text-retro-amber' : 'text-mgs-blue hover:text-mgs-green'}`}>{">"} MEET_THE_TEAM</Link>
              <Link href="/projects" className={`hover:text-white transition-colors ${theme === '80s' ? 'text-retro-blue' : 'text-mgs-blue hover:text-mgs-green'}`}>{">"} EXPLORE_PROJECTS</Link>
              <Link href="/papers" className={`hover:text-white transition-colors ${theme === '80s' ? 'text-retro-purple' : 'text-mgs-blue hover:text-mgs-green'}`}>{">"} READ_RESEARCH</Link>
            </div>
          </div>
        </section>
      </div>

      <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${theme === '80s' ? 'border-retro-green bg-black' : 'border-mgs-border bg-mgs-bg text-mgs-green/60'}`}>
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className={theme === '80s' ? 'text-retro-blue' : 'text-mgs-blue'}>INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY</p>
      </footer>
    </main>
  );
}
