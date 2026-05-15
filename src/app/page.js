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
      theme === 'myspace' ? 'bg-[#14002a]' :
      theme === 'typewriter' ? 'bg-[#f0e6d0]' :
      theme === 'bios' ? 'bg-black' :
      theme === 'macos' ? 'bg-[#c0c0c0]' :
      theme === 'zelda' ? '' :
      theme === 'mario' ? '' : ''
    }`}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        <section className={(theme === 'profdr' || theme === 'geocities' || theme === 'y2k' || theme === 'myspace' || theme === 'typewriter' || theme === 'bios' || theme === 'macos' || theme === 'zelda' || theme === 'mario') ? 'mb-8' : 'mb-16 text-center'}>
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
          ) : theme === 'zelda' ? (
            <div>
              <div style={{textAlign: 'center', marginBottom: '1.5em'}}>
                <div className="zelda-hearts" style={{fontSize: '1em', marginBottom: '8px'}}>&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;&#9829;</div>
                <h1>ACME LABORATORY</h1>
                <p style={{color: '#f0c040'}}>&#9670; IT&apos;S DANGEROUS TO GO ALONE &#9670;</p>
              </div>
              <div className="zelda-panel">
                <div className="zelda-panel-header">&#9670; QUEST LOG &#9670;</div>
                <p>THE ACME LABORATORY DEVELOPS AND APPLIES HIGH-PERFORMANCE COMPUTATIONAL TOOLS FOR THE COMPARATIVE ANALYSIS OF SEQUENCE DATA. OUR METHODS ARE UNIVERSALLY APPLICABLE ACROSS ALL DOMAINS OF LIFE.</p>
              </div>
              <div className="zelda-panel">
                <div className="zelda-panel-header">&#9670; INVENTORY &#9670;</div>
                <ul>
                  <li><Link href="/projects">HYPHY &mdash; SWORD OF SIGNIFICANCE</Link></li>
                  <li><Link href="/projects">DATAMONKEY &mdash; SHIELD OF SELECTION</Link></li>
                  <li><Link href="/projects">HIV-TRACE &mdash; MAP OF TRANSMISSION</Link></li>
                </ul>
              </div>
              <div className="zelda-panel">
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
            <div>
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
              <div className="mario-panel">
                <div className="mario-panel-header">&#11088; MISSION BRIEFING &#11088;</div>
                <p>THE ACME LABORATORY DEVELOPS HIGH-PERFORMANCE TOOLS FOR COMPARATIVE SEQUENCE ANALYSIS. OUR METHODS WORK ACROSS ALL DOMAINS OF LIFE. MEASURABLY EVOLVING PATHOGENS ARE OUR PRIMARY FOCUS.</p>
              </div>
              <div className="mario-panel" style={{marginTop: '12px'}}>
                <div className="mario-panel-header">[ ? ] POWER-UPS</div>
                <ul>
                  <li><Link href="/projects">HYPHY &mdash; FIRE FLOWER</Link></li>
                  <li><Link href="/projects">DATAMONKEY &mdash; SUPER MUSHROOM</Link></li>
                  <li><Link href="/projects">HIV-TRACE &mdash; STARMAN</Link></li>
                </ul>
              </div>
              <div className="mario-panel" style={{marginTop: '12px'}}>
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
            <div style={{maxWidth: '900px', margin: '0 auto', fontFamily: '"Trebuchet MS", Arial, sans-serif'}}>
              {/* Profile header */}
              <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap'}}>
                <div style={{flexShrink: 0}}>
                  <div style={{width: '100px', height: '100px', background: 'linear-gradient(135deg, #7799ff, #00cccc)', border: '3px solid #00cccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px'}}>🧬</div>
                  <div style={{background: '#001e3a', border: '1px solid #00cccc', padding: '4px 8px', marginTop: '4px', textAlign: 'center', fontSize: '11px', color: '#00cccc', fontWeight: 'bold'}}>Online Now! 💻</div>
                </div>
                <div style={{flex: 1}}>
                  <h1 style={{margin: '0 0 4px'}}>ACME Laboratory</h1>
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
                    <p style={{fontSize: '12px'}}><b>Location:</b> Philadelphia, PA �<br/><b>Age:</b> Est. 1993<br/><b>School:</b> Temple University</p>
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
                      {['HyPhy 🗡️', 'Datamonkey 🐒', 'HIV-TRACE 🔗', 'phylotree.js 🌳', 'tn93 ⚡', 'Charles Darwin 🐢', 'Sequence Data �', 'Coffee ☕'].map(friend => (
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
                      <span style={{color: '#00cccc', fontWeight: 'bold'}}>sequenceNerd2005:</span> <span>omg ur HyPhy tutorial saved my thesis!!! adding u to my top 8 ���</span>
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
            <div style={{maxWidth: '800px', margin: '0 auto', fontFamily: '"Courier New", Courier, monospace'}}>
              {/* Masthead */}
              <div style={{textAlign: 'center', borderTop: '4px double #2a1a0a', borderBottom: '4px double #2a1a0a', padding: '10px 0', marginBottom: '6px'}}>
                <div style={{fontSize: '9px', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#7a5c3a', marginBottom: '4px'}}>Temple University &mdash; Philadelphia, PA &mdash; Est. 1993</div>
                <h1 style={{fontSize: '2.2em', letterSpacing: '0.08em', fontWeight: 'bold', margin: '4px 0', fontFamily: '"Times New Roman", serif'}}>The ACME Gazette</h1>
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
                    <h2 style={{fontFamily: '"Times New Roman", serif', fontSize: '1.3em', lineHeight: 1.2, margin: '4px 0'}}>Laboratory Announces New Methods for Detecting Selection in Viral Genomes</h2>
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
          ) : theme === 'bios' ? (
            <div>
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
            <div>
              <div className="mac-window">
                <div className="mac-titlebar">
                  <div className="mac-close-box"></div>
                  <div className="mac-titlebar-label">Welcome to ACME Lab</div>
                </div>
                <div className="mac-window-body">
                  <p>The <b>ACME Laboratory</b> develops and applies high-performance computational tools for the comparative analysis of sequence data. Our methods are universally applicable across all domains of life.</p>
                  <hr />
                  <p><b>Navigate to:</b></p>
                  <ul>
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
                  <ul>
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

        {theme !== '2020s' && theme !== 'profdr' && theme !== 'geocities' && theme !== 'y2k' && theme !== 'myspace' && theme !== 'typewriter' && theme !== 'bios' && theme !== 'macos' && theme !== 'zelda' && theme !== 'mario' && (
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

      {theme === 'zelda' ? (
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
      ) : theme === 'bios' ? (
        <footer className="mt-auto p-4" style={{background: '#000', borderTop: '1px solid #ffb000', fontFamily: '"Courier New", Courier, monospace'}}>
          <p style={{color: '#a07000', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em'}}>COPYRIGHT (C) 2026 ACME LABORATORY. ALL RIGHTS RESERVED.</p>
          <p style={{color: '#a07000', fontSize: '11px', textTransform: 'uppercase'}}>INSTITUTE FOR GENOMICS AND EVOLUTIONARY MEDICINE — TEMPLE UNIVERSITY</p>
        </footer>
      ) : theme === 'macos' ? (
        <footer className="mt-auto" style={{background: '#ffffff', borderTop: '1px solid #000', fontFamily: '"Geneva", Helvetica, Arial, sans-serif', padding: '8px 16px'}}>
          <div style={{background: 'repeating-linear-gradient(90deg, #000 0px, #000 1px, #ffffff 1px, #ffffff 3px)', height: '4px', marginBottom: '8px'}} />
          <p style={{fontSize: '12px', color: '#000', textAlign: 'center'}}>ACME Laboratory &copy; 2026 — Temple University</p>
          <p style={{fontSize: '11px', color: '#808080', textAlign: 'center'}}>Trash: 0 items, 0K</p>
        </footer>
      ) : theme === 'profdr' ? (
        <footer className="mt-auto p-4 text-left font-sans">
          <hr style={{borderColor: '#808080', borderTopWidth: '1px'}} />
          <address style={{fontStyle: 'italic', marginTop: '1rem', display: 'block'}}>
            ACME Laboratory<br />
            Institute for Genomics and Evolutionary Medicine<br />
            Temple University<br />
            E-mail: <a href="mailto:webmaster@acme.example" style={{color: '#0000ee', textDecoration: 'underline'}}>webmaster@acme.example</a>
          </address>
          <p style={{marginTop: '0.5rem'}}>Last modified: 14 March 1995.</p>
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
    </>
  );
}
