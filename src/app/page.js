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
      theme === '80s' ? 'theme-80s crt' :
      theme === '2000s' ? 'bg-me-bg' : 
      theme === '2010s' ? 'bg-hero-bg' :
      theme === '2020s' ? 'bg-ai-bg' :
      theme === 'vax' ? 'bg-black text-[#33ff33]' : 
      theme === 'knuth' ? 'bg-white text-black font-serif' : ''
    }`}>
      <Navbar />
      
      <div className={`container mx-auto px-4 py-12 relative z-10 flex-grow ${theme === 'knuth' ? 'max-w-[800px]' : ''}`}>
        <section className={(theme === 'profdr' || theme === 'geocities' || theme === 'y2k' || theme === 'vax' || theme === 'knuth') ? 'mb-8' : 'mb-16 text-center'}>
          {theme === 'knuth' ? (
            <div className="font-serif">
              <h1 style={{fontSize: '28pt', fontWeight: 'bold', marginBottom: '10pt'}}>ACME Laboratory</h1>
              <p style={{fontSize: '14pt', fontStyle: 'italic', marginBottom: '20pt'}}>Computational Molecular Evolution Group</p>
              
              <hr style={{border: 'none', borderTop: '1px solid #000', marginBottom: '20pt'}} />

              <p style={{fontSize: '12pt', marginBottom: '15pt'}}>
                The <strong>ACME Laboratory</strong> develops and applies high-performance computational
                tools for the comparative analysis of sequence data. Our methods are universally
                applicable across all domains of life.
              </p>

              <h2 style={{fontSize: '18pt', fontWeight: 'bold', marginTop: '25pt', marginBottom: '10pt'}}>Core Research Areas</h2>
              <ul style={{listStyleType: 'disc', marginLeft: '30pt', marginBottom: '20pt'}}>
                <li>Molecular epidemiology</li>
                <li>Viral dynamics</li>
                <li>Phylogenetic methods</li>
                <li>High-performance computing</li>
                <li>Data visualization</li>
              </ul>

              <h2 style={{fontSize: '18pt', fontWeight: 'bold', marginTop: '25pt', marginBottom: '10pt'}}>Software Tools</h2>
              <p style={{marginBottom: '10pt'}}>
                We maintain several open-source software packages for evolutionary analysis:
              </p>
              <ul style={{listStyleType: 'disc', marginLeft: '30pt', marginBottom: '20pt'}}>
                <li><Link href="/projects">HyPhy</Link>: Hypothesis testing using Phylogenies</li>
                <li><Link href="/projects">Datamonkey</Link>: A web server for comparative analysis</li>
                <li><Link href="/projects">HIV-TRACE</Link>: HIV TRAnsmission Cluster Engine</li>
              </ul>

              <h2 style={{fontSize: '18pt', fontWeight: 'bold', marginTop: '25pt', marginBottom: '10pt'}}>Navigation</h2>
              <ul style={{listStyleType: 'square', marginLeft: '30pt', marginBottom: '20pt'}}>
                <li><Link href="/projects">Projects and Software</Link></li>
                <li><Link href="/members">Current Lab Members</Link></li>
                <li><Link href="/former">Former Members</Link></li>
                <li><Link href="/papers">Publications</Link></li>
              </ul>

              <hr style={{border: 'none', borderTop: '1px solid #000', marginTop: '40pt', marginBottom: '10pt'}} />
              <address style={{fontSize: '10pt'}}>
                ACME Lab, Institute for Genomics and Evolutionary Medicine<br />
                Temple University, Philadelphia, PA
              </address>
            </div>
          ) : theme === 'vax' ? (
            <div className="max-w-5xl mx-auto font-mono">
              <div className="mb-12 border border-[#33ff33] p-8 relative">
                 <div className="absolute top-[-10px] left-4 bg-black px-2 text-xs">VAX/VMS V1.0 - AUTHORIZED ACCESS ONLY</div>
                 <div className="text-xl mb-4 leading-tight">
                    <p>WELCOME TO VAX/VMS VERSION V1.0</p>
                    <p>LAST INTERACTIVE LOGIN ON THURSDAY, 14-MAY-1978 10:24:42.12</p>
                 </div>
                 <div className="text-3xl font-bold mb-6 tracking-tighter">
                    $ RUN ACME_LAB.EXE
                 </div>
                 <div className="text-sm opacity-80 space-y-2">
                    <p>[ LOADING SYMBOL TABLE... ]</p>
                    <p>[ INITIALIZING PHYLOGENY_ENGINE... ]</p>
                    <p>[ READY. ]</p>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                 <Card title="MISSION_STATEMENT">
                    <p className="mb-4">
                       THE ACME LABORATORY DEVELOPS HIGH-PERFORMANCE COMPUTATIONAL TOOLS FOR THE 
                       COMPARATIVE ANALYSIS OF SEQUENCE DATA. OUR METHODS ARE UNIVERSALLY 
                       APPLICABLE ACROSS ALL DOMAINS OF LIFE.
                    </p>
                    <div className="text-xs opacity-60 border-t border-[#33ff33]/30 pt-4">
                       PRIORITY: MEASURABLY EVOLVING PATHOGENS<br/>
                       STATUS: ACTIVE_RESEARCH
                    </div>
                 </Card>

                 <Card title="SYSTEM_CAPABILITIES">
                    <ul className="space-y-1">
                       <li>- MOLECULAR EPIDEMIOLOGY</li>
                       <li>- VIRAL DYNAMICS</li>
                       <li>- PHYLOGENETIC METHODS</li>
                       <li>- HIGH-PERFORMANCE COMPUTING</li>
                       <li>- DATA VISUALIZATION</li>
                    </ul>
                 </Card>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <Link href="/projects" className="vax-button text-center">DIR PROJECTS.DIR</Link>
                 <Link href="/members" className="vax-button text-center">DIR MEMBERS.DIR</Link>
                 <Link href="/papers" className="vax-button text-center">DIR PAPERS.DIR</Link>
                 <Link href="/former" className="vax-button text-center">DIR ALUMNI.DIR</Link>
              </div>
            </div>
          ) : theme === 'y2k' ? (
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
            <div className="max-w-4xl mx-auto font-serif text-left">
              <div className="flex flex-col items-center mb-6">
                <div className="text-6xl font-black tracking-tighter mb-2" style={{color: '#ff0000', fontFamily: 'serif'}}>
                  Yahoo<span style={{color: '#800080'}}>!</span>
                </div>
                <div className="w-full max-w-xl border-2 border-gray-400 p-1 flex bg-white">
                  <input type="text" className="flex-grow px-2 py-1 outline-none text-black font-serif" defaultValue="computational molecular evolution" />
                  <button className="bg-gray-200 px-4 py-1 border-l border-gray-400 font-bold hover:bg-gray-300">Search</button>
                </div>
                <div className="mt-2 text-sm">
                  [ <a href="#" className="text-blue-700 underline">Options</a> | <a href="#" className="text-blue-700 underline">Add URL</a> | <a href="#" className="text-blue-700 underline">What's New</a> | <a href="#" className="text-blue-700 underline">What's Cool</a> ]
                </div>
              </div>

              <hr className="my-4 border-gray-300" />

              <table className="yahoo-table mt-8" cellSpacing="4">
                <tbody>
                  <tr>
                    <td className="yahoo-td w-1/2">
                      <h2 className="text-xl font-bold mb-1">
                        <Link href="/projects" className="text-blue-700 underline">Software and Projects</Link>
                      </h2>
                      <p className="text-xs text-gray-600 mb-2 italic">HyPhy, Datamonkey, HIV-TRACE, and more tools for the arsenal.</p>
                      <ul className="list-disc space-y-1 ml-8 text-sm">
                        <li><Link href="/projects" className="underline">HyPhy</Link></li>
                        <li><Link href="/projects" className="underline">Datamonkey</Link></li>
                        <li><Link href="/projects" className="underline">HIV-TRACE</Link></li>
                      </ul>
                    </td>
                    <td className="yahoo-td w-1/2">
                      <h2 className="text-xl font-bold mb-1">
                        <Link href="/members" className="text-blue-700 underline">People</Link>
                      </h2>
                      <p className="text-xs text-gray-600 mb-2 italic">Meet the team, alumni, and our network of collaborators.</p>
                      <ul className="list-disc space-y-1 ml-8 text-sm">
                        <li><Link href="/members" className="underline">Current Lab Members</Link></li>
                        <li><Link href="/former" className="underline">Former Members</Link></li>
                        <li><a href="#" className="underline">Collaborators</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="yahoo-td w-1/2">
                      <h2 className="text-xl font-bold mb-1">
                        <Link href="/papers" className="text-blue-700 underline">Research</Link>
                      </h2>
                      <p className="text-xs text-gray-600 mb-2 italic">Publications, preprints, and research focuses of the lab.</p>
                      <ul className="list-disc space-y-1 ml-8 text-sm">
                        <li><Link href="/papers" className="underline">Molecular Epidemiology</Link></li>
                        <li><Link href="/papers" className="underline">Viral Dynamics</Link></li>
                        <li><Link href="/papers" className="underline">Phylogenetic Methods</Link></li>
                      </ul>
                    </td>
                    <td className="yahoo-td w-1/2">
                      <h2 className="text-xl font-bold mb-1">
                        <a href="#" className="text-blue-700 underline">Resources</a>
                      </h2>
                      <p className="text-xs text-gray-600 mb-2 italic">Institutional links, data archives, and external tools.</p>
                      <ul className="list-disc space-y-1 ml-8 text-sm">
                        <li><a href="#" className="underline">Institute for Genomics (iGEM)</a></li>
                        <li><a href="#" className="underline">Temple University</a></li>
                        <li><a href="#" className="underline">GitHub Repositories</a></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-12 p-4 yahoo-bevel text-center text-sm italic">
                <div className="yahoo-inset py-2">
                  <b>Today's News:</b> ACME Lab launches new web portal for molecular evolution research.
                </div>
              </div>
            </div>
          ) : theme === 'enterprise' ? (
            <div className="max-w-6xl mx-auto text-left font-sans">
              <div className="flex flex-col md:flex-row items-center gap-12 mb-20 py-12">
                <div className="md:w-1/2">
                  <h1 className="text-5xl font-bold text-[#212529] mb-4 leading-tight">
                    Scalable Solutions for <span className="text-[#007bff]">Molecular Evolution</span>.
                  </h1>
                  <p className="text-xl text-[#6c757d] mb-8">
                    We deliver end-to-end computational frameworks for comparative sequence analysis, 
                    powering the next generation of genomic research.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/projects" className="btn-primary enterprise-button">View Solutions</Link>
                    <Link href="/papers" className="btn-secondary enterprise-button">Read Case Studies</Link>
                  </div>
                </div>
                <div className="md:w-1/2 relative bg-white aspect-video rounded-xl flex flex-col items-center justify-center border border-gray-200 shadow-xl overflow-hidden group">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#007bff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <div className="flex gap-2 mb-4 relative z-10">
                    <div className="w-12 h-24 bg-[#007bff] rounded animate-[bounce_2s_infinite]"></div>
                    <div className="w-12 h-32 bg-[#007bff]/60 rounded animate-[bounce_2s_infinite_0.5s]"></div>
                    <div className="w-12 h-20 bg-[#007bff]/40 rounded animate-[bounce_2s_infinite_1s]"></div>
                  </div>
                  <div className="text-[10px] font-bold text-[#6c757d] tracking-widest uppercase relative z-10">Real-time Analytics Dashboard</div>
                  <div className="absolute bottom-4 right-4 flex gap-1">
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-[#007bff] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  { title: "High-Performance Computing", desc: "Optimized statistical models for large-scale phylogenetic inference.", icon: "⚡" },
                  { title: "Data Visualization", desc: "Actionable insights through interactive, web-based genomic dashboards.", icon: "📊" },
                  { title: "Global Collaboration", desc: "Integrated with industry-leading platforms like Galaxy and Datamonkey.", icon: "🌐" }
                ].map((feature, i) => (
                  <div key={i} className="enterprise-card p-6 flex flex-col gap-3">
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-[#6c757d] text-sm">{feature.desc}</p>
                    <a href="#" className="text-[#007bff] text-sm font-bold mt-auto hover:underline">Learn more →</a>
                  </div>
                ))}
              </div>

              <div className="bg-[#007bff] text-white p-12 rounded-xl text-center mb-20">
                 <h2 className="text-3xl font-bold mb-4 text-white">Ready to accelerate your research?</h2>
                 <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                   Our suite of open-source tools is utilized by over 50,000 researchers globally. 
                   Join the most advanced computational molecular evolution laboratory today.
                 </p>
                 <Link href="/members" className="bg-white text-[#007bff] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                   Meet Our Specialists
                 </Link>
              </div>
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
                    <span>{theme === '80s' ? 'OXEN: 0' : '[SCOPE]: UNIVERSAL'}</span>
                    <span>{theme === '80s' ? 'FOOD: 0 LBS' : '[PRIMARY_FOCUS]: PATHOGENS'}</span>
                    <span>{theme === '80s' ? 'HEALTH: DEAD' : '[STATUS]: ACTIVE'}</span>
                  </div>
                  {theme === '80s' && (
                    <div className="mt-6 pt-4 border-t-2 border-white border-dashed text-center">
                       <p className="text-retro-amber font-heading text-sm animate-pulse tracking-tighter">
                         YOU HAVE DIED OF DYSENTERY.
                       </p>
                    </div>
                  )}
                </Card>
              </div>
            </>
          )}
        </section>

        {theme !== '2020s' && theme !== 'profdr' && theme !== 'geocities' && theme !== 'y2k' && theme !== 'vax' && (
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

      {theme === 'profdr' ? (
        <footer className="mt-auto p-4 text-center font-serif text-sm">
          <hr className="my-4 border-gray-300" />
          <p className="mb-2">
            [ <Link href="/" className="text-blue-700 underline">Home</Link> | <Link href="/projects" className="text-blue-700 underline">Projects</Link> | <Link href="/members" className="text-blue-700 underline">Team</Link> | <Link href="/papers" className="text-blue-700 underline">Papers</Link> ]
          </p>
          <p className="text-gray-600">
            Copyright © 1994 ACME Laboratory. All rights reserved.
          </p>
        </footer>
      ) : theme === 'geocities' ? (
        <footer className="mt-auto p-4 text-center">
          <hr style={{height: '6px', background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff)', border: 'none'}} />
          <p style={{color: '#ff00ff', marginTop: '1rem'}}>© 1996 ACME Laboratory ~ Temple University</p>
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
      )}
    </main>
  );
}
