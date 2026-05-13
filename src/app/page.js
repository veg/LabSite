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
      theme === 'profdr' ? 'bg-white' :
      theme === 'geocities' ? '' :
      theme === 'y2k' ? '' :
      theme === '2000s' ? 'bg-me-bg' :
      theme === '2010s' ? 'bg-hero-bg' :
      theme === '2020s' ? 'bg-ai-bg' : ''
    }`}>
      <Navbar />

      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        <section className={(theme === 'profdr' || theme === 'geocities' || theme === 'y2k') ? 'mb-8' : 'mb-16 text-center'}>
          {theme === 'y2k' ? (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="y2k-logo" style={{fontSize: '4em'}}>
                  acme<span style={{color: '#ff6600', WebkitTextFillColor: '#ff6600'}}>.</span>lab
                </div>
                <div style={{marginTop: '-8px'}}>
                  <span className="y2k-beta">BETA</span>
                </div>
                <p style={{fontSize: '16px', color: '#666', marginTop: '12px'}}>
                  Computational molecular evolution, <i>simplified</i>.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Link href="/projects" className="y2k-gel" style={{textAlign: 'center'}}>Try It Now</Link>
                <Link href="/papers" className="y2k-gel y2k-gel-orange" style={{textAlign: 'center'}}>Read Papers</Link>
                <Link href="/members" className="y2k-gel" style={{textAlign: 'center'}}>Meet The Team</Link>
              </div>

              <div className="y2k-panel">
                <div className="y2k-panel-header">welcome <span className="y2k-beta">NEW</span></div>
                <div className="y2k-panel-body">
                  <p style={{marginBottom: '12px'}}>
                    The <b>ACME Laboratory</b> develops and applies high-performance computational
                    tools for the comparative analysis of sequence data. Our methods are universally
                    applicable across all domains of life. While measurably evolving pathogens are
                    our primary focus and &quot;top customers,&quot; our framework is used to
                    interrogate evolutionary questions anywhere on the tree of life.
                  </p>
                  <p style={{fontSize: '12px', color: '#666'}}>
                    <b>tags:</b>{' '}
                    <a className="y2k-tag" href="#">phylogenetics</a>
                    <a className="y2k-tag" href="#">molecular evolution</a>
                    <a className="y2k-tag" href="#">pathogens</a>
                    <a className="y2k-tag" href="#">HyPhy</a>
                    <a className="y2k-tag" href="#">Datamonkey</a>
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="y2k-panel">
                  <div className="y2k-panel-header">what we do</div>
                  <div className="y2k-panel-body">
                    <ul>
                      <li><b>Molecular epidemiology</b></li>
                      <li><b>Viral dynamics</b></li>
                      <li><b>Phylogenetic methods</b></li>
                      <li><b>High-performance computing</b></li>
                      <li><b>Data visualization</b></li>
                    </ul>
                  </div>
                </div>
                <div className="y2k-panel">
                  <div className="y2k-panel-header">our tools</div>
                  <div className="y2k-panel-body">
                    <p style={{marginBottom: '10px'}}>Open-source software used by researchers worldwide:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/projects" className="y2k-gel" style={{fontSize: '12px', padding: '5px 14px'}}>HyPhy</Link>
                      <Link href="/projects" className="y2k-gel" style={{fontSize: '12px', padding: '5px 14px'}}>Datamonkey</Link>
                      <Link href="/projects" className="y2k-gel" style={{fontSize: '12px', padding: '5px 14px'}}>HIV-TRACE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : theme === 'geocities' ? (
            <div>
              <h1>~* Welcome to the ACME Laboratory!! *~</h1>
              <p className="geo-blink" style={{color: '#ff00ff', fontWeight: 'bold'}}>★ NEW! NEW! NEW! ★</p>
              <hr />
              <div className="geo-construction">
                ⚠ THIS PAGE IS UNDER CONSTRUCTION ⚠
              </div>
              <hr />
              <p>
                <b>HI!!!</b> Welcome to my homepage on the World Wide Web! <i>I&apos;m so glad you found me!!</i>
                We develop and apply <b>HIGH-PERFORMANCE</b> computational tools for the comparative analysis of sequence data.
                Our methods work across all domains of life. <i>Measurably evolving pathogens</i> are our top customers,
                but our framework is used for evolutionary questions <b>anywhere</b> on the tree of life.
              </p>
              <hr />
              <h2>~* Cool Links *~</h2>
              <ul>
                <li><Link href="/projects">★ Projects &amp; Software (HyPhy, Datamonkey, HIV-TRACE)</Link></li>
                <li><Link href="/members">★ Meet The Team</Link></li>
                <li><Link href="/former">★ Former Members</Link></li>
                <li><Link href="/papers">★ Publications</Link></li>
              </ul>
              <hr />
              <h2>~* What We Do *~</h2>
              <ul>
                <li><b>Molecular Epidemiology</b></li>
                <li><b>Viral Dynamics</b></li>
                <li><b>Phylogenetic Methods</b></li>
                <li><b>High-Performance Computing</b></li>
                <li><b>Data Visualization</b></li>
              </ul>
              <hr />
              <div className="geo-panel">
                <h3>~* Web Ring *~</h3>
                <p style={{fontSize: '14px'}}>
                  <a href="#">[Prev]</a> &nbsp;|&nbsp; <a href="#">[List]</a> &nbsp;|&nbsp;
                  <a href="#">[Random]</a> &nbsp;|&nbsp; <a href="#">[Next]</a>
                </p>
                <p className="geo-blink" style={{fontSize: '12px', color: '#00ff00'}}>★ Member of the Computational Biology WebRing ★</p>
              </div>
              <hr />
              <p>You are visitor # <span className="geo-counter">00042</span> since 14 March 1996</p>
              <p style={{color: '#00ff00'}}><i>Best viewed in Netscape Navigator 3.0 @ 800x600</i></p>
            </div>
          ) : theme === 'profdr' ? (
            <div>
              <h1>ACME Laboratory for Computational Molecular Evolution</h1>
              <hr />
              <p>
                <b>Welcome to the homepage of the ACME Laboratory.</b>
                We develop and apply high-performance computational tools for the comparative analysis of sequence data.
                Our methods are universally applicable across all domains of life.
                While measurably evolving pathogens are our primary focus and &quot;top customers,&quot;
                our framework is used to interrogate evolutionary questions anywhere on the tree of life.
              </p>
              <h2>Contents</h2>
              <ul>
                <li><Link href="/projects">Projects and Software</Link> &mdash; HyPhy, Datamonkey, HIV-TRACE</li>
                <li><Link href="/members">Lab Members</Link></li>
                <li><Link href="/former">Former Members</Link></li>
                <li><Link href="/papers">Publications</Link></li>
              </ul>
              <h2>Core Competencies</h2>
              <ul>
                <li>Molecular epidemiology</li>
                <li>Viral dynamics</li>
                <li>Phylogenetic methods</li>
                <li>High-performance computing</li>
                <li>Data visualization</li>
              </ul>
              <p>
                <i>This page is best viewed with any browser.</i>
                <span className="profdr-blink"> [NEW!]</span>
              </p>
            </div>
          ) : theme === '2020s' ? (
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
                theme === '80s' ? 'border-4 border-retro-green' : 
                theme === '90s' ? 'mgs-panel border-4' :
                theme === '2000s' ? 'me-panel border-2' :
                'bg-black p-8 shadow-hero skew-x-[-5deg]'
              }`}>
                {theme === '90s' && <div className="text-[10px] text-mgs-green/40 font-mono tracking-widest mb-1 text-left uppercase">ESTABLISHING_UPLINK...</div>}
                {theme === '2000s' && <div className="text-[10px] text-me-blue font-bold tracking-[0.3em] mb-1 text-left uppercase opacity-60 italic">LOCATING_STRIKE_TEAM...</div>}
                {theme === '2010s' && <div className="text-hero-yellow font-black text-left mb-2 text-sm italic tracking-tighter">NEW QUEST DISCOVERED:</div>}
                
                <h1 className={`text-xl md:text-4xl lg:text-5xl leading-tight ${
                  theme === '80s' ? 'text-retro-fg font-heading' : 
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
                  theme === '80s' ? 'text-retro-amber' : 
                  theme === '90s' ? 'text-mgs-blue' :
                  theme === '2000s' ? 'text-me-blue drop-shadow-sm italic' :
                  'text-black font-black uppercase tracking-tighter border-l-8 border-hero-yellow pl-4 text-left'
                }`}>
                  STATISTICAL_MODELS & SOFTWARE_TOOLS<br className="md:hidden" /> FOR COMPARATIVE_SEQUENCE_ANALYSIS
                </h2>
                
                <Card title="MISSION_OVERVIEW">
                  <p className={`mb-4 text-left ${
                    theme === '90s' ? 'text-mgs-green/80 font-mono' : 
                    theme === '2000s' ? 'text-me-orange/80 font-mono' :
                    theme === '2010s' ? 'text-hero-dark font-black' : ''
                  }`}>
                    We <strong>develop and apply</strong> high-performance computational tools for the comparative analysis of sequence data. 
                    Our methods are universally applicable across all domains of life. 
                    While measurably evolving pathogens are our primary focus and &quot;top customers,&quot; 
                    our framework is used to interrogate evolutionary questions anywhere on the tree of life.
                  </p>
                  <div className={`text-sm md:text-base border-t pt-4 mt-4 flex justify-between items-center ${
                    theme === '80s' ? 'text-retro-green border-retro-bg font-body' : 
                    theme === '90s' ? 'text-mgs-green/40 border-mgs-border font-mono' :
                    theme === '2000s' ? 'text-me-blue/40 border-me-border font-mono italic' :
                    'text-hero-dark opacity-40 font-black border-black/10 italic'
                  }`}>
                    <span>[SCOPE]: UNIVERSAL</span>
                    <span>[PRIMARY_FOCUS]: PATHOGENS</span>
                    <span>[STATUS]: ACTIVE</span>
                  </div>
                </Card>
              </div>
            </>
          )}
        </section>

        {theme !== '2020s' && theme !== 'profdr' && theme !== 'geocities' && theme !== 'y2k' && (
          <>
            <section className="grid md:grid-cols-2 gap-8 mb-16">
              <Card title="CORE_COMPETENCIES">
                <ul className={`list-none space-y-2 ${theme === '2010s' ? 'font-black' : ''}`}>
                  <li className={theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{">"} MOLECULAR_EPIDEMIOLOGY</li>
                  <li className={theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{">"} VIRAL_DYNAMICS</li>
                  <li className={theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{">"} PHYLOGENETIC_METHODS</li>
                  <li className={theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{">"} HIGH_PERFORMANCE_COMPUTING</li>
                  <li className={theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{">"} DATA_VISUALIZATION</li>
                </ul>
              </Card>

              <Card title="EQUIPMENT_LIST">
                <p className={`mb-4 ${theme === '2010s' ? 'font-black italic' : ''}`}>Our lab maintains a suite of open-source tools utilized by researchers worldwide:</p>
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
                  theme === '90s' ? 'text-mgs-green/60' : 
                  theme === '2000s' ? 'text-me-blue italic' :
                  'text-black font-black uppercase'
                }`}>SELECT_DESTINATION</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center font-heading text-xs">
                  <Link href="/members" className={`hover:scale-105 transition-all ${
                    theme === '80s' ? 'text-retro-amber' : 
                    theme === '90s' ? 'text-mgs-blue hover:text-mgs-green' :
                    theme === '2000s' ? 'text-me-orange italic' :
                    'bg-black text-hero-yellow px-4 py-2 skew-x-[-10deg]'
                  }`}>{theme === '2010s' ? 'THE_TEAM' : '> MEET_THE_TEAM'}</Link>
                  
                  <Link href="/projects" className={`hover:scale-105 transition-all ${
                    theme === '80s' ? 'text-retro-blue' : 
                    theme === '90s' ? 'text-mgs-blue hover:text-mgs-green' :
                    theme === '2000s' ? 'text-me-orange italic' :
                    'bg-black text-hero-cyan px-4 py-2 skew-x-[-10deg]'
                  }`}>{theme === '2010s' ? 'PROJECTS' : '> EXPLORE_PROJECTS'}</Link>
                  
                  <Link href="/papers" className={`hover:scale-105 transition-all ${
                    theme === '80s' ? 'text-retro-purple' : 
                    theme === '90s' ? 'text-mgs-blue hover:text-mgs-green' :
                    theme === '2000s' ? 'text-me-orange italic' :
                    'bg-black text-white px-4 py-2 skew-x-[-10deg]'
                  }`}>{theme === '2010s' ? 'RESEARCH' : '> READ_RESEARCH'}</Link>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {theme === 'profdr' ? (
        <footer className="mt-auto p-4 text-left">
          <hr />
          <address>
            ACME Laboratory<br />
            Institute for Genomics and Evolutionary Medicine<br />
            Temple University<br />
            E-mail: <a href="mailto:webmaster@acme.example">webmaster@acme.example</a>
          </address>
          <p>Last modified: 14 March 1995.</p>
        </footer>
      ) : theme === 'geocities' ? (
        <footer className="mt-auto p-4 text-center">
          <hr />
          <p style={{color: '#ff00ff'}}>© 1996 ACME Laboratory ~ Temple University</p>
          <p className="geo-blink" style={{color: '#00ff00'}}>★ Hosted on Geocities ~ CapitolHill/Congress/1154 ★</p>
        </footer>
      ) : theme === 'y2k' ? (
        <footer className="mt-auto p-6" style={{
          background: 'linear-gradient(to bottom, #e6f3ff 0%, #cae0f5 100%)',
          borderTop: '1px solid #b3d4ff',
          color: '#0066cc'
        }}>
          <div className="container mx-auto text-center">
            <p style={{fontSize: '12px', marginBottom: '6px'}}>
              <Link href="/">Home</Link> · <Link href="/projects">Projects</Link> · <Link href="/members">Team</Link> · <Link href="/papers">Papers</Link> · <a href="#">RSS</a> · <a href="#">Tags</a>
            </p>
            <p style={{fontSize: '11px', color: '#666'}}>
              © 2003 ACME Laboratory · Powered by <a href="#">Web 2.0</a> · <span className="y2k-beta" style={{fontSize: '9px', marginLeft: 0}}>BETA</span>
            </p>
          </div>
        </footer>
      ) : (
        <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${
          theme === '80s' ? 'border-retro-green bg-black' :
          theme === '90s' ? 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono' :
          theme === '2000s' ? 'border-me-orange/20 bg-me-bg/90 text-me-orange/40 font-mono text-sm tracking-widest italic' :
          theme === '2010s' ? 'border-black bg-hero-dark text-hero-yellow font-black skew-x-[-2deg] py-12' :
          'bg-ai-sidebar border-white/5 text-slate-500 font-sans text-xs tracking-tight py-6'
        }`}>
          <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
          <p className={
            theme === '80s' ? 'text-retro-blue font-body' :
            theme === '90s' ? 'text-mgs-blue font-mono' :
            theme === '2000s' ? 'text-me-blue font-mono' :
            theme === '2010s' ? 'text-white opacity-40 uppercase tracking-tighter mt-2' :
            'text-ai-accent opacity-50 mt-1 font-sans'
          }>
            INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY
          </p>
        </footer>
      )}
    </main>
  );
}
