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

  const ZeldaBackdrop = theme === 'zelda' ? (
    <div aria-hidden="true" style={{
      position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none',
      backgroundColor: '#1a2a08',
      backgroundImage: [
        'repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 2px, transparent 2px, transparent 32px)',
        'repeating-linear-gradient(90deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 2px, transparent 2px, transparent 32px)',
        'repeating-linear-gradient(0deg, rgba(168,216,64,0.08) 0px, rgba(168,216,64,0.08) 2px, transparent 2px, transparent 32px)',
      ].join(','),
      backgroundSize: '32px 32px',
    }} />
  ) : null;

  const MarioBackdrop = theme === 'mario' ? (
    <div aria-hidden="true" style={{position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none'}}>
      <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '48px', background: 'linear-gradient(to bottom, #000 0px, #000 4px, #c07028 4px, #c07028 32px, #8c4a14 32px, #8c4a14 48px)'}} />
      <div style={{position: 'absolute', top: '68%', left: 0, right: 0, height: '16px', backgroundImage: 'repeating-linear-gradient(90deg, #c07028 0px, #c07028 15px, #000 15px, #000 16px)', backgroundSize: '16px 16px', borderTop: '2px solid #000', borderBottom: '2px solid #000'}} />
      <div style={{position: 'absolute', bottom: '48px', left: '80px', width: '48px', height: '96px', background: 'linear-gradient(to right, #006800 0px, #006800 4px, #00a800 4px, #00a800 38px, #006800 38px, #006800 48px)', borderTop: '4px solid #000', borderLeft: '4px solid #000', borderRight: '4px solid #000'}} />
      <div style={{position: 'absolute', bottom: '140px', left: '72px', width: '64px', height: '20px', background: 'linear-gradient(to right, #006800 0px, #006800 4px, #00a800 4px, #00a800 54px, #006800 54px, #006800 64px)', border: '4px solid #000'}} />
      <div style={{position: 'absolute', bottom: '48px', right: '120px', width: '48px', height: '64px', background: 'linear-gradient(to right, #006800 0px, #006800 4px, #00a800 4px, #00a800 38px, #006800 38px, #006800 48px)', borderTop: '4px solid #000', borderLeft: '4px solid #000', borderRight: '4px solid #000'}} />
      <div style={{position: 'absolute', bottom: '108px', right: '112px', width: '64px', height: '20px', background: 'linear-gradient(to right, #006800 0px, #006800 4px, #00a800 4px, #00a800 54px, #006800 54px, #006800 64px)', border: '4px solid #000'}} />
    </div>
  ) : null;

  return (
    <>
    {ZeldaBackdrop}
    {MarioBackdrop}
    <main className={`min-h-screen flex flex-col ${
      theme === 'profdr' ? 'bg-white' :
      theme === 'geocities' ? '' :
      theme === 'y2k' ? '' :
      theme === '80s' ? 'theme-80s crt' :
      theme === '2000s' ? 'bg-me-bg' : 
      theme === '2010s' ? 'bg-hero-bg' :
      theme === '2020s' ? 'bg-ai-bg' :
      theme === 'vax' ? 'bg-black text-[#33ff33]' : 
      theme === 'knuth' ? 'bg-white text-black font-serif' :
      theme === 'myspace' ? 'bg-[#14002a]' :
      theme === 'typewriter' ? 'bg-[#f0e6d0]' :
      theme === 'bios' ? 'bg-black' :
      theme === 'macos' ? 'bg-[#c0c0c0]' :
      theme === 'zelda' ? '' :
      theme === 'mario' ? '' :
      theme === 'win95' ? '' :
      theme === 'notebook' ? '' :
      theme === 'manuscript' ? '' : ''
    }`}>
      <Navbar />
      
      <div className={`container mx-auto px-4 py-12 relative z-10 flex-grow ${theme === 'knuth' ? 'max-w-[800px]' : ''}`}>
        <section className={(theme === 'profdr' || theme === 'geocities' || theme === 'y2k' || theme === 'vax' || theme === 'knuth' || theme === 'myspace' || theme === 'typewriter' || theme === 'bios' || theme === 'macos' || theme === 'zelda' || theme === 'mario' || theme === 'win95' || theme === 'notebook' || theme === 'manuscript') ? 'mb-8' : 'mb-16 text-center'}>
          {theme === 'knuth' ? (
            <div className="font-serif text-left">
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
            <div className="max-w-5xl mx-auto font-mono text-left">
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
                    <p className="mb-4 text-left">
                       THE ACME LABORATORY DEVELOPS HIGH-PERFORMANCE COMPUTATIONAL TOOLS FOR THE 
                       COMPARATIVE ANALYSIS OF SEQUENCE DATA. OUR METHODS ARE UNIVERSALLY 
                       APPLICABLE ACROSS ALL DOMAINS OF LIFE.
                    </p>
                    <div className="text-xs opacity-60 border-t border-[#33ff33]/30 pt-4 text-left">
                       PRIORITY: MEASURABLY EVOLVING PATHOGENS<br/>
                       STATUS: ACTIVE_RESEARCH
                    </div>
                 </Card>

                 <Card title="SYSTEM_CAPABILITIES">
                    <ul className="space-y-1 text-left">
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
            <div className="max-w-5xl mx-auto text-left">
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
            <div className="text-center">
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
              <ul className="list-none">
                <li><Link href="/projects">★ Projects &amp; Software (HyPhy, Datamonkey, HIV-TRACE)</Link></li>
                <li><Link href="/members">★ Meet The Team</Link></li>
                <li><Link href="/former">★ Former Members</Link></li>
                <li><Link href="/papers">★ Publications</Link></li>
              </ul>
              <hr />
              <h2>~* What We Do *~</h2>
              <ul className="list-none">
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
          ) : theme === 'zelda' ? (
            <div className="text-center">
              <div style={{textAlign: 'center', marginBottom: '1.5em'}}>
                <div className="zelda-hearts" style={{fontSize: '1em', marginBottom: '8px'}}>&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;</div>
                <h1>ACME LABORATORY</h1>
                <p style={{color: '#f0c040'}}>&#9670; IT&apos;S DANGEROUS TO GO ALONE &#9670;</p>
              </div>
              <div className="zelda-panel text-left">
                <div className="zelda-panel-header">&#9670; MISSION STATEMENT &#9670;</div>
                <p>THE ACME LABORATORY DEVELOPS AND APPLIES HIGH-PERFORMANCE COMPUTATIONAL TOOLS FOR THE COMPARATIVE ANALYSIS OF SEQUENCE DATA. OUR METHODS ARE UNIVERSALLY APPLICABLE ACROSS ALL DOMAINS OF LIFE.</p>
              </div>
              <div className="zelda-panel text-left">
                <div className="zelda-panel-header">&#9670; INVENTORY &#9670;</div>
                <ul>
                  <li><Link href="/projects">HYPHY &mdash; SWORD OF SIGNIFICANCE</Link></li>
                  <li><Link href="/projects">DATAMONKEY &mdash; SHIELD OF SELECTION</Link></li>
                  <li><Link href="/projects">HIV-TRACE &mdash; MAP OF TRANSMISSION</Link></li>
                </ul>
              </div>
              <div className="zelda-panel text-left">
                <div className="zelda-panel-header">&#9670; DUNGEONS &#9670;</div>
                <ul>
                  <li><Link href="/members">DUNGEON 1: THE TEAM</Link></li>
                  <li><Link href="/papers">DUNGEON 2: PUBLICATIONS</Link></li>
                  <li><Link href="/former">DUNGEON 3: FORMER ALLIES</Link></li>
                  <li><Link href="/projects">DUNGEON 4: SOFTWARE</Link></li>
                </ul>
              </div>
              <div style={{textAlign: 'center', marginTop: '1.5em', color: '#f0c040', fontSize: '0.7em', lineHeight: 2}}>
                <p>TAKE THIS. IT MAY HELP YOU ON YOUR QUEST.</p>
                <div className="zelda-hearts">&#9830;&#9830;&#9830;</div>
              </div>
            </div>
          ) : theme === 'mario' ? (
            <div className="text-center">
              <div className="mario-hud">
                <span>PLAYER<br/><span className="mario-hud-coin">&#9733; x03</span></span>
                <span>COINS<br/><span className="mario-hud-coin">&#9670;00</span></span>
                <span>WORLD<br/>1-1</span>
                <span>TIME<br/>399</span>
              </div>
              <div style={{textAlign: 'center', margin: '1.5em 0'}}>
                <h1>ACME LAB</h1>
                <p>WORLD 1-1 &mdash; COMPUTATIONAL MOLECULAR EVOLUTION</p>
              </div>
              <div className="mario-panel text-left">
                <div className="mario-panel-header">&#11088; MISSION BRIEFING &#11088;</div>
                <p>THE ACME LABORATORY DEVELOPS HIGH-PERFORMANCE TOOLS FOR COMPARATIVE SEQUENCE ANALYSIS. OUR METHODS WORK ACROSS ALL DOMAINS OF LIFE. MEASURABLY EVOLVING PATHOGENS ARE OUR PRIMARY FOCUS.</p>
              </div>
              <div className="mario-panel text-left" style={{marginTop: '12px'}}>
                <div className="mario-panel-header">[ ? ] POWER-UPS</div>
                <ul>
                  <li><Link href="/projects">HYPHY &mdash; FIRE FLOWER</Link></li>
                  <li><Link href="/projects">DATAMONKEY &mdash; SUPER MUSHROOM</Link></li>
                  <li><Link href="/projects">HIV-TRACE &mdash; STARMAN</Link></li>
                </ul>
              </div>
              <div className="mario-panel text-left" style={{marginTop: '12px'}}>
                <div className="mario-panel-header">SELECT WORLD</div>
                <ul>
                  <li><Link href="/members">WORLD 2: THE TEAM</Link></li>
                  <li><Link href="/papers">WORLD 3: PUBLICATIONS</Link></li>
                  <li><Link href="/former">WORLD 4: ALUMNI</Link></li>
                </ul>
              </div>
              <p style={{textAlign: 'center', marginTop: '1.5em', color: '#fcbc3c', textShadow: '1px 1px 0 #000'}}>THANK YOU! BUT OUR PRINCESS IS IN ANOTHER CASTLE.</p>
            </div>
          ) : theme === 'myspace' ? (
            <div style={{maxWidth: '900px', margin: '0 auto', fontFamily: '"Trebuchet MS", Arial, sans-serif', textAlign: 'left'}}>
              {/* Profile header */}
              <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap'}}>
                <div style={{flexShrink: 0}}>
                  <div style={{width: '100px', height: '100px', background: 'linear-gradient(135deg, #7799ff, #00cccc)', border: '3px solid #00cccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px'}}>🧬</div>
                  <div style={{background: '#001e3a', border: '1px solid #00cccc', padding: '4px 8px', marginTop: '4px', textAlign: 'center', fontSize: '11px', color: '#00cccc', fontWeight: 'bold'}}>Online Now! 💻</div>
                </div>
                <div style={{flex: 1}}>
                  <h1 style={{margin: '0 0 4px', textAlign: 'left'}}>ACME Laboratory</h1>
                  <p style={{color: '#aaddee', fontSize: '12px', margin: '0 0 6px'}}>
                    <b>Mood:</b> <i style={{color: '#00eeff'}}>excited about phylogenetics</i> 🔬<br/>
                    <b>Status:</b> In a committed relationship with genomics 🧬<br/>
                    <b>Last Login:</b> Today, 11:59 PM
                  </p>
                  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                    <button style={{background: 'linear-gradient(to bottom, #00cccc, #007799)', border: '1px solid #00cccc', color: '#fff', padding: '4px 12px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer'}}>✉ Send Message</button>
                    <button style={{background: 'linear-gradient(to bottom, #7799ff, #3344cc)', border: '1px solid #7799ff', color: '#fff', padding: '4px 12px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer'}}>➕ Add to Friends</button>
                    <button style={{background: 'linear-gradient(to bottom, #00eeff, #0099bb)', border: '1px solid #00eeff', color: '#001a2a', padding: '4px 12px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer'}}>⭐ Add to Favorites</button>
                  </div>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', alignItems: 'start'}}>
                {/* Left column */}
                <div>
                  <div className="myspace-panel">
                    <div className="myspace-panel-header">About Me</div>
                    <p style={{fontSize: '12px'}}>hey!! im ACME Lab and i am VERY into computational molecular evolution. we make software that helps scientists study how viruses evolve. pretty nerdy but also genuinely cool??</p>
                    <p style={{fontSize: '12px'}}><b>Location:</b> Philadelphia, PA 🇺🇸<br/><b>Age:</b> Est. 1993<br/><b>School:</b> Temple University</p>
                  </div>
                  <div className="myspace-panel" style={{marginTop: '8px'}}>
                    <div className="myspace-panel-header">Who I&apos;d Like to Meet</div>
                    <p style={{fontSize: '12px'}}>Anyone who loves phylogenetics, anyone with cool sequence data, Charles Darwin obviously, and people who think HyPhy is as cool as I do 🧬✨</p>
                  </div>
                  <div className="myspace-panel" style={{marginTop: '8px'}}>
                    <div className="myspace-panel-header">Interests</div>
                    <p style={{fontSize: '12px'}}><b>General:</b> Molecular epidemiology, viral dynamics, phylogenetics<br/><b>Music:</b> Numa Numa 🎵<br/><b>Heroes:</b> Darwin, Kimura, Felsenstein</p>
                  </div>
                  <div style={{marginTop: '8px', padding: '8px', background: '#001e3a', border: '2px solid #00cccc', textAlign: 'center'}}>
                    <div style={{color: '#00cccc', fontWeight: 'bold', fontSize: '11px', marginBottom: '6px'}}>★ ACME Lab&apos;s Top 8 ★</div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px'}}>
                      {['HyPhy 🗡️', 'Datamonkey 🐒', 'HIV-TRACE 🔗', 'phylotree.js 🌳', 'tn93 ⚡', 'Charles Darwin 🐢', 'Sequence Data 🧬', 'Coffee ☕'].map(friend => (
                        <div key={friend} style={{background: '#001e3a', border: '1px solid #7799ff', padding: '4px', fontSize: '10px', color: '#7799ff', textAlign: 'center'}}>{friend}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column: blog */}
                <div>
                  <div className="myspace-panel">
                    <div className="myspace-panel-header">✏️ ACME Lab&apos;s Blog</div>
                    <div style={{borderBottom: '1px solid #7799ff', paddingBottom: '10px', marginBottom: '10px'}}>
                      <div style={{fontSize: '13px', fontWeight: 'bold', color: '#00cccc'}}>ok so what even IS positive selection and why do we care</div>
                      <div style={{fontSize: '10px', color: '#7799ff', marginBottom: '6px'}}>Category: <span style={{color: '#00eeff'}}>Science Stuff</span></div>
                      <p style={{fontSize: '12px'}}>basically when a virus evolves, most changes are neutral or harmful — but sometimes a mutation helps it escape your immune system or spread faster. thats positive selection!! and HyPhy can find exactly which sites in a protein are doing that. its wild. <Link href="/papers">we have a lot of papers about it</Link> lol</p>
                      <p style={{fontSize: '11px', color: '#7799ff', marginTop: '6px'}}>💬 16 Comments &nbsp;|&nbsp; ★ Add Comment &nbsp;|&nbsp; 🔗 Permalink</p>
                    </div>
                    <div style={{borderBottom: '1px solid #7799ff', paddingBottom: '10px', marginBottom: '10px'}}>
                      <div style={{fontSize: '13px', fontWeight: 'bold', color: '#00cccc'}}>why datamonkey is my fav thing we made</div>
                      <div style={{fontSize: '10px', color: '#7799ff', marginBottom: '6px'}}>Category: <span style={{color: '#00eeff'}}>Software</span></div>
                      <p style={{fontSize: '12px'}}>ok so <Link href="/projects">datamonkey</Link> is a web server that runs HyPhy analyses so you dont have to install anything or write any code. you just upload your sequences and it does the phylogenetics for you!! it&apos;s free and anyone can use it and honestly it rules</p>
                      <p style={{fontSize: '11px', color: '#7799ff', marginTop: '6px'}}>💬 8 Comments &nbsp;|&nbsp; ★ Add Comment &nbsp;|&nbsp; 🔗 Permalink</p>
                    </div>
                    <div>
                      <div style={{fontSize: '13px', fontWeight: 'bold', color: '#00cccc'}}>hiv-trace is actually so cool let me explain</div>
                      <div style={{fontSize: '10px', color: '#7799ff', marginBottom: '6px'}}>Category: <span style={{color: '#00eeff'}}>Science Stuff</span></div>
                      <p style={{fontSize: '12px'}}><Link href="/projects">HIV-TRACE</Link> figures out which HIV infections are genetically linked — like it builds a network of who probably transmitted to whom based on their viral sequences. public health people use it to understand outbreaks. it&apos;s honestly one of the most real-world useful things we do</p>
                      <p style={{fontSize: '11px', color: '#7799ff', marginTop: '6px'}}>💬 24 Comments &nbsp;|&nbsp; ★ Add Comment &nbsp;|&nbsp; 🔗 Permalink</p>
                    </div>
                  </div>
                  <div className="myspace-panel" style={{marginTop: '8px'}}>
                    <div className="myspace-panel-header">💬 Comments</div>
                    <div style={{fontSize: '12px', borderBottom: '1px dashed #7799ff', paddingBottom: '8px', marginBottom: '8px'}}>
                      <span style={{color: '#00cccc', fontWeight: 'bold'}}>sequenceNerd2005:</span> <span>omg ur HyPhy tutorial saved my thesis!!! adding u to my top 8 ✨</span>
                    </div>
                    <div style={{fontSize: '12px', borderBottom: '1px dashed #7799ff', paddingBottom: '8px', marginBottom: '8px'}}>
                      <span style={{color: '#00cccc', fontWeight: 'bold'}}>virusNerd99:</span> <span>datamonkey is literally the best thing on the internet. no cap. also can u teach a workshop?</span>
                    </div>
                    <div style={{fontSize: '12px'}}>
                      <span style={{color: '#00cccc', fontWeight: 'bold'}}>phylo_chaos:</span> <span>just cited ur paper 4 the 3rd time this month lmaooo absolute legend fr fr</span>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{color: '#00cccc', textAlign: 'center', fontWeight: 'bold', marginTop: '16px', fontSize: '13px'}}>★ You are visitor #000042 ★ Please sign my guestbook!! ★</p>
              <p style={{textAlign: 'center', color: '#7799ff', fontSize: '11px'}}>🎵 Now Playing: <i>Numa Numa</i> &nbsp;[▶ PLAY] &nbsp;[■ STOP]</p>
            </div>
          ) : theme === 'typewriter' ? (
            <div style={{maxWidth: '800px', margin: '0 auto', fontFamily: '"Courier New", Courier, monospace', textAlign: 'left'}}>
              {/* Masthead */}
              <div style={{textAlign: 'center', borderTop: '4px double #2a1a0a', borderBottom: '4px double #2a1a0a', padding: '10px 0', marginBottom: '6px'}}>
                <div style={{fontSize: '9px', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#7a5c3a', marginBottom: '4px'}}>Temple University &mdash; Philadelphia, PA &mdash; Est. 1993</div>
                <h1 style={{fontSize: '2.2em', letterSpacing: '0.08em', fontWeight: 'bold', margin: '4px 0', fontFamily: '"Times New Roman", serif', textAlign: 'center'}}>The ACME Gazette</h1>
                <div style={{fontSize: '9px', letterSpacing: '0.3em', color: '#7a5c3a', textTransform: 'uppercase'}}>Institute for Genomics and Evolutionary Medicine &mdash; Morning Edition</div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #2a1a0a', paddingBottom: '4px', marginBottom: '12px', fontSize: '10px', color: '#7a5c3a'}}>
                <span>VOL. XXXI . . . No. 4</span>
                <span style={{fontWeight: 'bold', color: '#2a1a0a', letterSpacing: '0.15em'}}>COMPUTATIONAL MOLECULAR EVOLUTION</span>
                <span>PRICE: ONE SEQUENCE</span>
              </div>

              {/* Lead story + column layout */}
              <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', alignItems: 'start'}}>
                <div>
                  <div style={{borderBottom: '2px solid #2a1a0a', marginBottom: '8px', paddingBottom: '4px'}}>
                    <div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7a5c3a'}}>Lead Story</div>
                    <h2 style={{fontFamily: '"Times New Roman", serif', fontSize: '1.3em', lineHeight: 1.2, margin: '4px 0', textAlign: 'left', border: 'none'}}>Laboratory Announces New Methods for Detecting Selection in Viral Genomes</h2>
                    <div style={{fontSize: '9px', color: '#7a5c3a', fontStyle: 'italic', marginBottom: '8px'}}>By Staff Correspondent &mdash; Temple University, Philadelphia</div>
                  </div>
                  <p style={{fontSize: '12px', lineHeight: 1.8, textAlign: 'justify', columnCount: 2, columnGap: '16px'}}>
                    The <b>ACME Laboratory</b> has announced a series of advances in computational methods for the
                    comparative analysis of biological sequence data. Scientists at the Institute for Genomics and
                    Evolutionary Medicine report that the new tools, collectively distributed under the HyPhy
                    software package, permit researchers to identify sites of positive selection with previously
                    unattainable precision. The methods are applicable across all domains of life, though
                    measurably evolving pathogens remain the laboratory&apos;s primary subject of inquiry.
                  </p>
                  <div style={{borderTop: '1px solid #9a7a5a', marginTop: '10px', paddingTop: '8px'}}>
                    <div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7a5c3a', marginBottom: '4px'}}>Continued: Software Dispatch</div>
                    <p style={{fontSize: '11px', lineHeight: 1.7, textAlign: 'justify'}}>
                      The laboratory maintains several open-source instruments for the scientific community.
                      <b> <Link href="/projects">HyPhy</Link></b> performs hypothesis testing using phylogenies.
                      <b> <Link href="/projects">Datamonkey</Link></b> provides web-based phylogenetic analysis.
                      <b> <Link href="/projects">HIV-TRACE</Link></b> maps molecular transmission clusters.
                      All instruments are freely available to qualified researchers.
                    </p>
                  </div>
                </div>

                {/* Right column */}
                <div style={{borderLeft: '1px solid #9a7a5a', paddingLeft: '12px'}}>
                  <div style={{marginBottom: '12px'}}>
                    <div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7a5c3a', borderBottom: '1px solid #9a7a5a', paddingBottom: '3px', marginBottom: '6px'}}>Notices</div>
                    <p style={{fontSize: '10px', lineHeight: 1.7}}><b>THE TEAM.</b> Present members of the laboratory may be found in the staff directory. <Link href="/members">See staff directory.</Link></p>
                    <p style={{fontSize: '10px', lineHeight: 1.7, marginTop: '6px'}}><b>PUBLICATIONS.</b> Recent dispatches to the scientific press now available in the reading room. <Link href="/papers">Full index enclosed.</Link></p>
                    <p style={{fontSize: '10px', lineHeight: 1.7, marginTop: '6px'}}><b>ALUMNI.</b> Former correspondents of this laboratory may be found listed in the archive. <Link href="/former">See former members.</Link></p>
                  </div>
                  <div style={{borderTop: '1px solid #9a7a5a', paddingTop: '8px'}}>
                    <div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7a5c3a', marginBottom: '6px'}}>Core Disciplines</div>
                    <ul style={{fontSize: '10px', lineHeight: 1.9, listStyle: 'none', padding: 0}}>
                      {['Molecular Epidemiology', 'Viral Dynamics', 'Phylogenetic Methods', 'High-Performance Computing', 'Data Visualisation'].map(d => (
                        <li key={d} style={{borderBottom: '1px dotted #9a7a5a', paddingBottom: '2px'}}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{borderTop: '2px double #2a1a0a', marginTop: '16px', paddingTop: '6px', textAlign: 'center', fontSize: '10px', color: '#7a5c3a', letterSpacing: '0.1em'}}>
                Correspondence: acme@temple.edu &mdash; SERC, Philadelphia &mdash; All dispatches welcome
              </div>
            </div>
          ) : theme === 'win95' ? (
            <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'left', fontFamily: '"Tahoma", sans-serif'}}>
              {/* Main "My Computer" window */}
              <div className="win95-window" style={{marginBottom: '12px'}}>
                <div className="win95-titlebar">
                  <span>ACME Lab — My Computer</span>
                  <div className="win95-titlebar-controls">
                    <span>_</span><span>□</span><span>×</span>
                  </div>
                </div>
                {/* Menu strip */}
                <div style={{padding: '2px 4px', fontSize: '11px', borderBottom: '1px solid #808080', boxShadow: 'inset 0 -1px 0 #fff', display: 'flex', gap: '12px'}}>
                  <span><u>F</u>ile</span>
                  <span><u>E</u>dit</span>
                  <span><u>V</u>iew</span>
                  <span><u>H</u>elp</span>
                </div>
                <div className="win95-body" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                  {/* Left column */}
                  <fieldset className="win95-fieldset">
                    <legend>About this Lab</legend>
                    <p style={{fontSize: '11px', margin: 0, lineHeight: 1.5}}>
                      The <b>ACME Laboratory</b> develops high-performance computational tools for the
                      comparative analysis of sequence data. Methods apply universally; pathogens are our
                      primary case study.
                    </p>
                  </fieldset>
                  {/* Right column — drives */}
                  <fieldset className="win95-fieldset">
                    <legend>Network</legend>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px'}}>
                      <Link href="/projects" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#000', textDecoration: 'none'}}>
                        <span style={{display: 'inline-block', width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #404040 #404040 #fff'}} />
                        Projects (C:)
                      </Link>
                      <Link href="/members" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#000', textDecoration: 'none'}}>
                        <span style={{display: 'inline-block', width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #404040 #404040 #fff'}} />
                        Team (D:)
                      </Link>
                      <Link href="/papers" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#000', textDecoration: 'none'}}>
                        <span style={{display: 'inline-block', width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #404040 #404040 #fff'}} />
                        Papers (E:)
                      </Link>
                      <Link href="/former" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#000', textDecoration: 'none'}}>
                        <span style={{display: 'inline-block', width: '16px', height: '14px', background: '#c0c0c0', border: '1px solid', borderColor: '#fff #404040 #404040 #fff'}} />
                        Alumni (F:)
                      </Link>
                    </div>
                  </fieldset>
                </div>
                {/* Status bar */}
                <div style={{padding: '2px 6px', borderTop: '1px solid #fff', boxShadow: 'inset 0 1px 0 #808080', fontSize: '11px', display: 'flex', justifyContent: 'space-between'}}>
                  <span>4 object(s)</span>
                  <span>0 bytes free</span>
                </div>
              </div>

              {/* Tools "shortcut" window */}
              <div className="win95-window">
                <div className="win95-titlebar">
                  <span>Installed Software</span>
                  <div className="win95-titlebar-controls"><span>_</span><span>□</span><span>×</span></div>
                </div>
                <div className="win95-body" style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  {['HyPhy', 'Datamonkey', 'HIV-TRACE'].map(tool => (
                    <Link key={tool} href="/projects" className="win95-button" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none'}}>
                      <span style={{display: 'inline-block', width: '14px', height: '14px', background: '#000080'}} />
                      {tool}.exe
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : theme === 'notebook' ? (
            <div style={{maxWidth: '780px', margin: '0 auto', paddingLeft: '64px', textAlign: 'left'}}>
              {/* Date / page header */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px'}}>
                <h1 style={{margin: 0}}>14 March — Day 42</h1>
                <span style={{fontSize: '12px', color: '#c93030'}}>p. 84</span>
              </div>

              <p>Today: keep grinding on selection-detection methods for viral genomes.</p>
              <p>The whole ACME Lab is a computational molecular evolution group at <b>Temple University</b>. Methods are universal — but pathogens are where it gets fun.</p>

              <h2>Aims</h2>
              <ul>
                <li>Find sites of <b>positive selection</b> across measurably evolving pathogens.</li>
                <li>Push <Link href="/projects">HyPhy</Link> and <Link href="/projects">Datamonkey</Link> further.</li>
                <li>Map transmission with <Link href="/projects">HIV-TRACE</Link>.</li>
              </ul>

              <h2>Notes</h2>
              <p>Stuck on convergence again. Coffee helped. ←</p>
              <p>Idea: re-run with relaxed clock + see <Link href="/papers">last week&apos;s paper</Link>.</p>

              <h2>Where things live</h2>
              <ul>
                <li><Link href="/members">Lab members</Link> — current personnel</li>
                <li><Link href="/papers">Publications</Link> — full bibliography</li>
                <li><Link href="/former">Alumni</Link> — where everyone is now</li>
              </ul>

              <hr />
              <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginTop: '8px'}}>
                <span className="notebook-stamp">Reviewed</span>
                <span style={{fontSize: '12px', color: '#1a2540', fontStyle: 'italic'}}>— D.C., 14/3</span>
              </div>
            </div>
          ) : theme === 'manuscript' ? (
            <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'left'}}>
              {/* Header strip */}
              <div style={{borderBottom: '1px solid #003366', paddingBottom: '4px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '9pt', color: '#003366', letterSpacing: '0.05em'}}>
                <span><b>Mol. Biol. Evol.</b> 41(4):1–24</span>
                <span className="manuscript-doi">doi:10.1093/molbev/acme.2026</span>
              </div>

              {/* Article type */}
              <div style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '9pt', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#003366', fontWeight: 'bold', marginBottom: '8px'}}>
                Methods
              </div>

              {/* Title */}
              <h1>Statistical models and software tools for the comparative analysis of sequence data</h1>

              {/* Authors */}
              <p style={{fontSize: '11pt', margin: '8px 0 4px', textAlign: 'left'}}>
                ACME Lab Authors<sup className="manuscript-cite">1,*</sup>
              </p>
              <p className="manuscript-affil">
                <sup>1</sup>Institute for Genomics and Evolutionary Medicine, Temple University, Philadelphia, PA, USA<br />
                <sup>*</sup>Correspondence: <a href="mailto:acme@temple.edu">acme@temple.edu</a>
              </p>

              {/* Abstract */}
              <div className="manuscript-abstract">
                We present a suite of statistical models and open-source software for the comparative
                analysis of biological sequence data. Methods are universally applicable across all domains
                of life, with measurably evolving pathogens as the primary case study. The
                <Link href="/projects"> HyPhy</Link> package, the <Link href="/projects">Datamonkey</Link> web server,
                and <Link href="/projects">HIV-TRACE</Link> together support hypothesis testing on phylogenies,
                browser-based selection analysis, and molecular transmission cluster inference.
              </div>

              {/* Two-column body */}
              <div style={{columnCount: 2, columnGap: '24px', columnRule: '1px solid #e0d8c5'}}>
                <h2><span className="manuscript-section-num">1</span>Introduction</h2>
                <p>
                  The comparative analysis of sequence data underpins much of modern evolutionary biology.
                  Yet quantitative inference of selection — and of the parameters that govern it — remains
                  challenging. Here we describe the toolkit developed and maintained by the ACME Laboratory,
                  spanning method development, web infrastructure, and applied epidemiology.
                </p>

                <h2><span className="manuscript-section-num">2</span>Software</h2>
                <p>
                  <b>HyPhy</b> implements maximum-likelihood and Bayesian methods for hypothesis testing on
                  phylogenies. <b>Datamonkey</b> wraps the most-used HyPhy methods in an accessible web
                  interface. <b>HIV-TRACE</b> reconstructs molecular transmission clusters from pairwise
                  genetic distances.
                </p>
                <p>
                  Full documentation, source, and installation notes are available in the
                  <Link href="/projects"> Software</Link> section.
                </p>

                <h2><span className="manuscript-section-num">3</span>Authors</h2>
                <p>
                  The list of present and past contributors is maintained at
                  <Link href="/members"> /members</Link>. A complete record of laboratory alumni and their
                  current affiliations is at <Link href="/former">/former</Link>.
                </p>

                <h2><span className="manuscript-section-num">4</span>Availability</h2>
                <p>
                  All ACME Laboratory tools are open source and freely available. A complete list of
                  publications, including software citations, is at <Link href="/papers">/papers</Link>.
                </p>
              </div>
            </div>
          ) : theme === 'bios' ? (
            <div className="text-left font-mono">
              <p>ACME LABORATORY BIOS v2.07</p>
              <p>COPYRIGHT (C) 2026 ACME CORP. ALL RIGHTS RESERVED.</p>
              <hr />
              <p>64K CONVENTIONAL MEMORY OK</p>
              <p>EXTENDED MEMORY: 16384K OK</p>
              <p>DETECTING PRIMARY HDD... PHYLOGENOMICS_ENGINE_v4 [OK]</p>
              <p>DETECTING SECONDARY HDD... DATAMONKEY_SERVER [OK]</p>
              <p>LOADING SEQUENCE ANALYSIS MODULE... DONE</p>
              <hr />
              <p><b>SYSTEM SUMMARY:</b></p>
              <div className="bios-panel">
                <div className="bios-panel-header">ACME LABORATORY — SYSTEM CONFIGURATION</div>
                <p>PRIMARY FUNCTION: COMPUTATIONAL MOLECULAR EVOLUTION</p>
                <p>SCOPE: UNIVERSAL (ALL DOMAINS OF LIFE)</p>
                <p>PRIMARY_FOCUS: MEASURABLY_EVOLVING_PATHOGENS</p>
                <p>STATUS: ACTIVE</p>
              </div>
              <div className="bios-panel">
                <div className="bios-panel-header">INSTALLED MODULES</div>
                <p>- MOLECULAR_EPIDEMIOLOGY ............. [LOADED]</p>
                <p>- VIRAL_DYNAMICS ..................... [LOADED]</p>
                <p>- PHYLOGENETIC_METHODS ............... [LOADED]</p>
                <p>- HIGH_PERFORMANCE_COMPUTING ......... [LOADED]</p>
                <p>- DATA_VISUALIZATION ................. [LOADED]</p>
              </div>
              <div className="bios-panel">
                <div className="bios-panel-header">BOOT MENU — SELECT DESTINATION</div>
                <p>[1] <Link href="/projects">PROJECTS / SOFTWARE</Link></p>
                <p>[2] <Link href="/members">LAB MEMBERS</Link></p>
                <p>[3] <Link href="/papers">PUBLICATIONS</Link></p>
                <p>[4] <Link href="/former">FORMER MEMBERS</Link></p>
              </div>
              <hr />
              <p className="bios-cursor">PRESS F1 FOR HELP &nbsp;</p>
            </div>
          ) : theme === 'macos' ? (
            <div className="text-left">
              <div className="mac-window">
                <div className="mac-titlebar">
                  <div className="mac-close-box"></div>
                  <div className="mac-titlebar-label">Welcome to ACME Lab</div>
                </div>
                <div className="mac-window-body">
                  <p>The <b>ACME Laboratory</b> develops and applies high-performance computational tools for the comparative analysis of sequence data. Our methods are universally applicable across all domains of life.</p>
                  <hr />
                  <p><b>Navigate to:</b></p>
                  <ul className="list-disc pl-5">
                    <li><Link href="/projects">Projects &amp; Software</Link></li>
                    <li><Link href="/members">Lab Members</Link></li>
                    <li><Link href="/former">Former Members</Link></li>
                    <li><Link href="/papers">Publications</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mac-window">
                <div className="mac-titlebar">
                  <div className="mac-close-box"></div>
                  <div className="mac-titlebar-label">Core Competencies</div>
                </div>
                <div className="mac-window-body">
                  <ul className="list-disc pl-5">
                    <li>Molecular Epidemiology</li>
                    <li>Viral Dynamics</li>
                    <li>Phylogenetic Methods</li>
                    <li>High-Performance Computing</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>
              </div>
              <div className="mac-window">
                <div className="mac-titlebar">
                  <div className="mac-close-box"></div>
                  <div className="mac-titlebar-label">Software</div>
                </div>
                <div className="mac-window-body">
                  <div className="flex gap-2 flex-wrap">
                    <Link href="/projects" className="mac-button">HyPhy</Link>
                    <Link href="/projects" className="mac-button">Datamonkey</Link>
                    <Link href="/projects" className="mac-button">HIV-TRACE</Link>
                  </div>
                </div>
              </div>
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
                <div className="mt-2 text-sm text-center">
                  [ <a href="#" className="text-blue-700 underline">Options</a> | <a href="#" className="text-blue-700 underline">Add URL</a> | <a href="#" className="text-blue-700 underline">What's New</a> | <a href="#" className="text-blue-700 underline">What's Cool</a> ]
                </div>
              </div>

              <hr className="my-4 border-gray-300" />

              <table className="yahoo-table mt-8" cellSpacing="4">
                <tbody>
                  <tr>
                    <td className="yahoo-td w-1/2">
                      <h2 className="text-xl font-bold mb-1 border-none text-left">
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
                      <h2 className="text-xl font-bold mb-1 border-none text-left">
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
                      <h2 className="text-xl font-bold mb-1 border-none text-left">
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
                      <h2 className="text-xl font-bold mb-1 border-none text-left">
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
                  <h1 className="text-5xl font-bold text-[#212529] mb-4 leading-tight text-left border-none">
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
                    <h3 className="text-xl font-bold border-none mb-0">{feature.title}</h3>
                    <p className="text-[#6c757d] text-sm">{feature.desc}</p>
                    <a href="#" className="text-[#007bff] text-sm font-bold mt-auto hover:underline">Learn more →</a>
                  </div>
                ))}
              </div>

              <div className="bg-[#007bff] text-white p-12 rounded-xl text-center mb-20">
                 <h2 className="text-3xl font-bold mb-4 text-white border-none">Ready to accelerate your research?</h2>
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
                 <h1 className="text-5xl font-black mb-4 ai-glow border-none">How can I help you today?</h1>
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
                    <h3 className="font-bold text-ai-accent mb-1 group-hover:text-white transition-colors border-none">{item.title}</h3>
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
                
                <h1 className={`text-xl md:text-4xl lg:text-5xl leading-tight border-none ${
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
                  'text-black font-black uppercase tracking-tighter border-l-8 border-hero-yellow pl-4 text-left border-t-0 border-r-0 border-b-0'
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

        {(theme !== '2020s' && theme !== 'profdr' && theme !== 'geocities' && theme !== 'y2k' && theme !== 'vax' && theme !== 'knuth' && theme !== 'myspace' && theme !== 'typewriter' && theme !== 'bios' && theme !== 'macos' && theme !== 'zelda' && theme !== 'mario' && theme !== 'win95' && theme !== 'notebook' && theme !== 'manuscript') && (
          <>
            <section className="grid md:grid-cols-2 gap-8 mb-16">
              <Card title={theme === '80s' ? 'SUPPLY_INVENTORY' : 'CORE_COMPETENCIES'}>
                <ul className={`list-none space-y-2 text-left ${theme === '2010s' ? 'font-black' : ''}`}>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "1. MOLECULAR_EPIDEMIOLOGY" : "> MOLECULAR_EPIDEMIOLOGY"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "2. VIRAL_DYNAMICS" : "> VIRAL_DYNAMICS"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "3. PHYLOGENETIC_METHODS" : "> PHYLOGENETIC_METHODS"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "4. HIGH_PERFORMANCE_COMPUTING" : "> HIGH_PERFORMANCE_COMPUTING"}</li>
                  <li className={theme === '80s' ? 'text-white' : theme === '90s' ? 'text-mgs-green/80' : theme === '2000s' ? 'text-me-orange/80' : ''}>{theme === '80s' ? "5. DATA_VISUALIZATION" : "> DATA_VISUALIZATION"}</li>
                </ul>
              </Card>

              <Card title={theme === '80s' ? 'TOOLS_FOR_THE_TRAIL' : 'EQUIPMENT_LIST'}>
                <p className={`mb-4 text-left ${theme === '2010s' ? 'font-black italic' : ''}`}>
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
                <h2 className={`text-2xl mb-6 font-heading border-none ${
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

      {theme === 'enterprise' ? (
        <footer className="mt-auto bg-[#f8f9fa] border-t border-[#dee2e6] py-12 font-sans text-left">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-xl font-bold mb-4 border-none text-left">ACME<span className="text-[#007bff]">LAB</span></h3>
               <p className="text-sm text-[#6c757d] max-w-sm">
                 Statistical models and software tools for the comparative analysis of sequence data. 
                 Universal methodology across all domains of life.
               </p>
            </div>
            <div>
               <h4 className="text-sm font-bold uppercase mb-4 tracking-wider">Solutions</h4>
               <ul className="text-sm space-y-2 text-[#6c757d]">
                  <li><Link href="/projects" className="hover:text-[#007bff]">Software Catalog</Link></li>
                  <li><Link href="/papers" className="hover:text-[#007bff]">Case Studies</Link></li>
                  <li><a href="#" className="hover:text-[#007bff]">API Documentation</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-sm font-bold uppercase mb-4 tracking-wider">Company</h4>
               <ul className="text-sm space-y-2 text-[#6c757d]">
                  <li><Link href="/members" className="hover:text-[#007bff]">Our Team</Link></li>
                  <li><Link href="/former" className="hover:text-[#007bff]">Alumni Network</Link></li>
                  <li><a href="#" className="hover:text-[#007bff]">Privacy Policy</a></li>
               </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-[#dee2e6] text-center text-xs text-[#6c757d]">
             © 2026 ACME Laboratory Systems Inc. All rights reserved. Built with Enterprise Core™ v8.4
          </div>
        </footer>
      ) : theme === 'vax' ? (
        <footer className="mt-auto p-8 font-mono text-sm border-t border-[#33ff33] text-left">
           <p className="mb-2">================================================================================</p>
           <p>SYSTEM: VAX-11/780 // OS: VMS V1.0 // UPTIME: 32768 SECONDS</p>
           <p className="opacity-60 mt-1">© 1978 ACME LABORATORY // ALL RIGHTS RESERVED</p>
        </footer>
      ) : theme === 'profdr' ? (
        <footer className="mt-auto p-4 text-left font-serif text-sm">
          <hr className="my-4 border-gray-300" />
          <p className="mb-2">
            [ <Link href="/" className="text-blue-700 underline">Home</Link> | <Link href="/projects" className="text-blue-700 underline">Projects</Link> | <Link href="/members" className="text-blue-700 underline">Team</Link> | <Link href="/papers" className="text-blue-700 underline">Papers</Link> ]
          </p>
          <address style={{fontStyle: 'italic', marginTop: '1rem', display: 'block'}}>
            ACME Laboratory<br />
            Institute for Genomics and Evolutionary Medicine<br />
            Temple University<br />
            E-mail: <a href="mailto:webmaster@acme.example" style={{color: '#0000ee', textDecoration: 'underline'}}>webmaster@acme.example</a>
          </address>
          <p style={{marginTop: '0.5rem'}}>Last modified: 14 March 1995. <span className="profdr-blink">[NEW!]</span></p>
          <p className="text-gray-600 mt-4">
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
      ) : theme === 'zelda' ? (
        <footer className="mt-auto p-4" style={{background: '#0a1a04', borderTop: '3px solid #f0c040', fontFamily: 'var(--font-press-start), monospace', textAlign: 'center', imageRendering: 'pixelated'}}>
          <p style={{color: '#f0c040', fontSize: '8px', letterSpacing: '0.1em'}}>&#9830; ACME LABORATORY &#9830;</p>
          <p style={{color: '#a8d840', fontSize: '7px', marginTop: '6px', lineHeight: 2}}>TEMPLE UNIVERSITY &mdash; INSTITUTE FOR GENOMICS</p>
          <div className="zelda-hearts" style={{marginTop: '4px'}}>&#9829;&#9829;&#9829;</div>
        </footer>
      ) : theme === 'mario' ? (
        <footer className="mt-auto" style={{background: '#c07028', borderTop: '4px solid #000', fontFamily: 'var(--font-press-start), monospace', imageRendering: 'pixelated'}}>
          <div style={{background: '#000', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: '#fff', textShadow: '1px 1px 0 #000'}}>
            <span style={{color: '#fcbc3c'}}>GAME OVER</span>
            <span>ACME LAB &copy; 2026</span>
            <span style={{color: '#fcbc3c'}}>HIGH SCORE: 999999</span>
          </div>
        </footer>
      ) : theme === 'myspace' ? (
        <footer className="mt-auto p-4 text-center" style={{background: 'linear-gradient(to bottom, #1e0040, #14002a)', borderTop: '2px solid #ff6699', fontFamily: '"Trebuchet MS", sans-serif'}}>
          <p style={{color: '#ff6699', fontWeight: 'bold'}}>★ ACME Laboratory ★</p>
          <p style={{color: '#cc99ff', fontSize: '12px'}}>© 2005 ACME Lab ~ Temple University ~ All Rights Reserved ~</p>
          <p className="myspace-blink" style={{color: '#66ccff', fontSize: '11px'}}>★ Add me to your Top 8! ★</p>
        </footer>
      ) : theme === 'typewriter' ? (
        <footer className="mt-auto p-6" style={{background: '#e0cfa8', borderTop: '2px solid #2a1a0a', fontFamily: '"Courier New", Courier, monospace', textAlign: 'center'}}>
          <p style={{fontSize: '11px', color: '#7a5c3a', letterSpacing: '0.1em'}}>ACME LABORATORY — TEMPLE UNIVERSITY — PHILADELPHIA, PA</p>
          <p style={{fontSize: '10px', color: '#9a7a5a', marginTop: '4px'}}>Correspondence: acme@temple.edu &nbsp;|&nbsp; SERC</p>
        </footer>
      ) : theme === 'win95' ? (
        <footer className="mt-auto" style={{background: '#c0c0c0', borderTop: '2px solid', borderTopColor: '#fff', boxShadow: 'inset 0 -1px 0 #808080', fontFamily: '"Tahoma", sans-serif'}}>
          <div className="container mx-auto flex items-center justify-between flex-wrap gap-2" style={{padding: '4px 8px'}}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="win95-button" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 'bold'}}>
                <span style={{display: 'inline-block', width: '14px', height: '14px', background: 'linear-gradient(45deg,#ff0000 25%,#00ff00 25% 50%,#0000ff 50% 75%,#ffff00 75%)'}} />
                Start
              </span>
              <span style={{background: '#c0c0c0', border: '1px solid', borderColor: '#808080 #fff #fff #808080', padding: '2px 8px', fontSize: '11px'}}>ACME.exe</span>
            </div>
            <span style={{background: '#c0c0c0', border: '1px solid', borderColor: '#808080 #fff #fff #808080', padding: '2px 8px', fontSize: '11px', fontFamily: '"Courier New", monospace'}}>3:14 PM</span>
          </div>
        </footer>
      ) : theme === 'notebook' ? (
        <footer className="mt-auto" style={{background: 'transparent', borderTop: '2px dashed #c93030', fontFamily: '"Comic Sans MS", cursive'}}>
          <div className="container mx-auto" style={{padding: '12px 16px', paddingLeft: '80px', fontSize: '12px', color: '#1a2540'}}>
            <p style={{margin: 0}}>ACME Lab — Temple University — SERC, Philadelphia.</p>
            <p style={{margin: '2px 0 0', color: '#c93030', fontStyle: 'italic'}}>p. 84 of ∞ &nbsp;·&nbsp; sign &amp; date all entries</p>
          </div>
        </footer>
      ) : theme === 'manuscript' ? (
        <footer className="mt-auto" style={{background: 'transparent', borderTop: '1px solid #003366', fontFamily: '"Times New Roman", serif'}}>
          <div className="container mx-auto" style={{padding: '12px 16px', textAlign: 'center', fontSize: '9pt', color: '#555'}}>
            <p style={{margin: 0, fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '0.05em'}}>
              © 2026 The Authors. Published by Oxford University Press on behalf of the Society for Molecular Biology and Evolution.
            </p>
            <p className="manuscript-doi" style={{margin: '4px 0 0'}}>
              ACME Laboratory · Institute for Genomics and Evolutionary Medicine · Temple University · SERC, Philadelphia, PA
            </p>
          </div>
        </footer>
      ) : theme === 'bios' ? (
        <footer className="mt-auto p-4" style={{background: '#000', borderTop: '1px solid #ffb000', fontFamily: '"Courier New", Courier, monospace', textAlign: 'left'}}>
          <p style={{color: '#a07000', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em'}}>COPYRIGHT (C) 2026 ACME LABORATORY. ALL RIGHTS RESERVED.</p>
          <p style={{color: '#a07000', fontSize: '11px', textTransform: 'uppercase'}}>INSTITUTE FOR GENOMICS AND EVOLUTIONARY MEDICINE — TEMPLE UNIVERSITY</p>
        </footer>
      ) : theme === 'macos' ? (
        <footer className="mt-auto" style={{background: '#ffffff', borderTop: '1px solid #000', fontFamily: '"Geneva", Helvetica, Arial, sans-serif', padding: '8px 16px'}}>
          <div style={{background: 'repeating-linear-gradient(90deg, #000 0px, #000 1px, #ffffff 1px, #ffffff 3px)', height: '4px', marginBottom: '8px'}} />
          <p style={{fontSize: '12px', color: '#000', textAlign: 'center'}}>ACME Laboratory &copy; 2026 — Temple University</p>
          <p style={{fontSize: '11px', color: '#808080', textAlign: 'center'}}>Trash: 0 items, 0K</p>
        </footer>
      ) : theme === 'knuth' ? (
        <footer className="mt-auto py-6 border-t border-black text-sm text-left">
           <p>ACME Laboratory, Institute for Genomics and Evolutionary Medicine, Temple University.</p>
           <p>© 2026. All rights reserved.</p>
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
    </>
  );
}
