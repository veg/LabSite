'use client';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import EraSelectionSplash from '@/components/EraSelectionSplash';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

export default function Home() {
  const { theme, mounted, hasSelectedTheme } = useTheme();

  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  // Show splash if theme hasn't been chosen yet
  if (!hasSelectedTheme) {
    return <EraSelectionSplash />;
  }

  return (
    <main className={`min-h-screen relative flex flex-col ${
      theme === '80s' ? 'theme-80s crt' :
      theme === '2000s' ? 'bg-me-bg' : 
      theme === '2010s' ? 'bg-hero-bg' :
      theme === '2020s' ? 'bg-ai-bg' : ''
    }`}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        <section className="mb-16 text-center">
          {theme === '2020s' ? (
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <div className="mb-12">
                 <h1 className="text-5xl font-black mb-4 ai-glow">How can I help you today?</h1>
                 <p className="text-xl text-slate-400 font-sans">Discover the research and tools of the ACME Laboratory.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left font-sans">
                {[
                  { title: "Browse Publications", desc: "Show me the research archive and statistics.", href: "/papers" },
                  { title: "Meet the Team", desc: "Who are the current and former strike force members?", href: "/members" },
                  { title: "Access Software", desc: "What tools are available in the arsenal?", href: "/projects" },
                  { title: "View Collaborations", desc: "Tell me about the lab's alliance network.", href: "/projects" }
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="bg-ai-bubble-ai border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-all shadow-lg group">
                    <h3 className="font-bold text-ai-accent mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-sm opacity-60">{item.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-12 w-full max-w-2xl bg-ai-sidebar border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl font-sans">
                 <div className="w-8 h-8 rounded-full bg-ai-gradient flex-shrink-0"></div>
                 <div className="flex-grow text-slate-500 italic text-sm">Type a command to explore the lab...</div>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                 </div>
              </div>
            </div>
          ) : (
            <>
              <div className={`inline-block p-4 mb-6 max-w-full ${
                theme === '80s' ? 'pixel-border bg-black' : 
                theme === '90s' ? 'mgs-panel border-4' :
                theme === '2000s' ? 'me-panel border-2' :
                'bg-black p-8 shadow-hero skew-x-[-5deg]'
              }`}>
                {theme === '80s' && <div className="text-[10px] text-white font-mono tracking-widest mb-1 text-left uppercase">STATION: INDEPENDENCE, MISSOURI // 1848</div>}
                {theme === '90s' && <div className="text-[10px] text-mgs-green/40 font-mono tracking-widest mb-1 text-left uppercase">ESTABLISHING_UPLINK...</div>}
                {theme === '2000s' && <div className="text-[10px] text-me-blue font-bold tracking-[0.3em] mb-1 text-left uppercase opacity-60 italic">LOCATING_STRIKE_TEAM...</div>}
                {theme === '2010s' && <div className="text-hero-yellow font-black text-left mb-2 text-sm italic tracking-tighter">NEW QUEST DISCOVERED:</div>}
                
                <h1 className={`text-xl md:text-4xl lg:text-5xl leading-tight ${
                  theme === '80s' ? 'text-white font-heading' : 
                  theme === '90s' ? 'text-mgs-green font-bold tracking-tighter' :
                  theme === '2000s' ? 'text-me-orange font-black italic drop-shadow-me' :
                  'text-white font-black italic uppercase'
                }`}>
                  ACME_LAB:<br/>
                  <span className="text-lg md:text-3xl lg:text-4xl uppercase font-bold tracking-tight">COMPUTATIONAL_MOLECULAR_EVOLUTION</span>
                </h1>
              </div>
              
              <div className="max-w-4xl mx-auto px-2">
                <h2 className={`text-base md:text-xl lg:text-2xl mb-8 font-heading leading-relaxed ${
                  theme === '80s' ? 'text-white' : 
                  theme === '90s' ? 'text-mgs-blue' :
                  theme === '2000s' ? 'text-me-blue drop-shadow-sm italic' :
                  'text-black font-black uppercase tracking-tighter border-l-8 border-hero-yellow pl-4 text-left'
                }`}>
                  {theme === '80s' ? 'THE ACME TRAIL: A COMPUTATIONAL ADVENTURE' : 'STATISTICAL_MODELS & SOFTWARE_TOOLS FOR COMPARATIVE_SEQUENCE_ANALYSIS'}
                </h2>
                
                <Card title={theme === '80s' ? 'TRAVEL_LOG: 1848' : 'MISSION_OVERVIEW'}>
                  <p className={`mb-4 text-left ${
                    theme === '80s' ? 'text-white font-body' :
                    theme === '90s' ? 'text-mgs-green/80 font-mono' : 
                    theme === '2000s' ? 'text-me-orange/80 font-mono' :
                    theme === '2010s' ? 'text-hero-dark font-black' : ''
                  }`}>
                    {theme === '80s' ? 
                      "YOUR JOURNEY BEGINS. THE ACME LABORATORY DEVELOPS HIGH-PERFORMANCE TOOLS FOR THE COMPARATIVE ANALYSIS OF SEQUENCE DATA. THE TRAIL IS LONG, BUT THE DATA IS PLENTIFUL." :
                      "We develop and apply high-performance computational tools for the comparative analysis of sequence data. Our methods are universally applicable across all domains of life. While measurably evolving pathogens are our primary focus and \"top customers,\" our framework is used to interrogate evolutionary questions anywhere on the tree of life."
                    }
                  </p>
                  <div className={`text-sm md:text-base border-t pt-4 mt-4 flex justify-between items-center ${
                    theme === '80s' ? 'text-white border-white font-body' : 
                    theme === '90s' ? 'text-mgs-green/40 border-mgs-border font-mono' :
                    theme === '2000s' ? 'text-me-blue/40 border-me-border font-mono italic' :
                    'text-hero-dark opacity-40 font-black border-black/10 italic'
                  }`}>
                    <span>{theme === '80s' ? 'OXEN: 4' : '[SCOPE]: UNIVERSAL'}</span>
                    <span>{theme === '80s' ? 'FOOD: 200 LBS' : '[PRIMARY_FOCUS]: PATHOGENS'}</span>
                    <span>{theme === '80s' ? 'HEALTH: GOOD' : '[STATUS]: ACTIVE'}</span>
                  </div>
                </Card>
              </div>
            </>
          )}
        </section>

        {theme !== '2020s' && (
          <>
            <section className="grid md:grid-cols-2 gap-8 mb-16">
              <Card title={theme === '80s' ? 'SUPPLY_INVENTORY' : 'CORE_COMPETENCIES'}>
                <ul className={`list-none space-y-2 ${theme === '2010s' ? 'font-black' : ''}`}>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "1. MOLECULAR_EPIDEMIOLOGY" : "> MOLECULAR_EPIDEMIOLOGY"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "2. VIRAL_DYNAMICS" : "> VIRAL_DYNAMICS"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "3. PHYLOGENETIC_METHODS" : "> PHYLOGENETIC_METHODS"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "4. HIGH_PERFORMANCE_COMPUTING" : "> HIGH_PERFORMANCE_COMPUTING"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "5. DATA_VISUALIZATION" : "> DATA_VISUALIZATION"}</li>
                </ul>
              </Card>

              <Card title={theme === '80s' ? 'TOOLS_FOR_THE_TRAIL' : 'EQUIPMENT_LIST'}>
                <p className={`mb-4 ${theme === '2010s' ? 'font-black italic' : ''}`}>
                  {theme === '80s' ? "CHOOSE A TOOL TO HELP YOU ON YOUR JOURNEY:" : "Our lab maintains a suite of open-source tools utilized by researchers worldwide:"}
                </p>
                <div className="flex flex-wrap gap-4 font-heading text-xs">
                  {['HYPHY', 'DATAMONKEY', 'HIV-TRACE'].map(tool => (
                    <Link 
                      key={tool}
                      href="/projects" 
                      className={
                        theme === '80s' ? 'pixel-button' : 
                        theme === '90s' ? 'mgs-button' :
                        theme === '2000s' ? 'me-button' :
                        'hero-button'
                      }
                    >
                      {tool}
                    </Link>
                  ))}
                </div>
              </Card>
            </section>

            <section className="text-center">
              <div className={`inline-block p-8 ${
                theme === '80s' ? 'pixel-border bg-black' : 
                theme === '90s' ? 'mgs-panel' :
                theme === '2000s' ? 'me-panel' :
                'bg-white border-8 border-black shadow-hero'
              }`}>
                <h2 className={`text-2xl mb-6 font-heading ${
                  theme === '80s' ? 'text-white' :
                  theme === '90s' ? 'text-mgs-green/60' : 
                  theme === '2000s' ? 'text-me-blue italic' :
                  'text-black font-black uppercase'
                }`}>
                  {theme === '80s' ? 'CHOOSE_YOUR_PATH' : 'SELECT_DESTINATION'}
                </h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center font-heading text-xs">
                  <Link href="/members" className={`hover:scale-105 transition-all ${
                    theme === '80s' ? 'text-white border-2 border-white px-4 py-2 hover:bg-white hover:text-black' : 
                    theme === '90s' ? 'text-mgs-blue hover:text-mgs-green' :
                    theme === '2000s' ? 'text-me-orange italic' :
                    'bg-black text-hero-yellow px-4 py-2 skew-x-[-10deg]'
                  }`}>{theme === '2010s' ? 'THE_TEAM' : theme === '80s' ? '1. MEET THE TEAM' : '> MEET_THE_TEAM'}</Link>
                  
                  <Link href="/projects" className={`hover:scale-105 transition-all ${
                    theme === '80s' ? 'text-white border-2 border-white px-4 py-2 hover:bg-white hover:text-black' : 
                    theme === '90s' ? 'text-mgs-blue hover:text-mgs-green' :
                    theme === '2000s' ? 'text-me-orange italic' :
                    'bg-black text-hero-cyan px-4 py-2 skew-x-[-10deg]'
                  }`}>{theme === '2010s' ? 'PROJECTS' : theme === '80s' ? '2. EXPLORE PROJECTS' : '> EXPLORE_PROJECTS'}</Link>
                  
                  <Link href="/papers" className={`hover:scale-105 transition-all ${
                    theme === '80s' ? 'text-white border-2 border-white px-4 py-2 hover:bg-white hover:text-black' : 
                    theme === '90s' ? 'text-mgs-blue hover:text-mgs-green' :
                    theme === '2000s' ? 'text-me-orange italic' :
                    'bg-black text-white px-4 py-2 skew-x-[-10deg]'
                  }`}>{theme === '2010s' ? 'RESEARCH' : theme === '80s' ? '3. READ RESEARCH' : '> READ_RESEARCH'}</Link>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${
        theme === '80s' ? 'border-white bg-black text-white' : 
        theme === '90s' ? 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono' :
        theme === '2000s' ? 'border-me-orange/20 bg-me-bg/90 text-me-orange/40 font-mono text-sm tracking-widest italic' :
        theme === '2010s' ? 'border-black bg-hero-dark text-hero-yellow font-black skew-x-[-2deg] py-12' :
        'bg-ai-sidebar border-white/5 text-slate-500 font-sans text-xs tracking-tight py-6'
      }`}>
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className={
          theme === '80s' ? 'text-white font-body opacity-60' : 
          theme === '90s' ? 'text-mgs-blue font-mono' : 
          theme === '2000s' ? 'text-me-blue font-mono' :
          theme === '2010s' ? 'text-white opacity-40 uppercase tracking-tighter mt-2' :
          'text-ai-accent opacity-50 mt-1 font-sans'
        }>
          INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY
        </p>
      </footer>
    </main>
  );
}
