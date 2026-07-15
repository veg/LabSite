'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import Navbar from './Navbar';

export default function PageContainer({ children, title, titleColorClass = "text-retro-amber" }) {
  const { theme, mounted } = useTheme();
  
  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  if (theme === 'knuth') {
    return (
      <main className="theme-knuth min-h-screen flex flex-col bg-white text-black font-serif">
        <Navbar />
        <div className="flex-grow py-8">
          {title && (
            <div className="mb-6">
              <h1 style={{fontSize: '24pt', fontWeight: 'bold', margin: '0 0 6pt 0'}}>{title}</h1>
              <hr style={{border: 'none', borderTop: '1px solid #000', margin: '0'}} />
            </div>
          )}
          {children}
        </div>
        <footer className="mt-12 py-6 border-t border-black text-sm">
           <p>ACME Laboratory, Institute for Genomics and Evolutionary Medicine, Temple University.</p>
           <p>© 2026. All rights reserved.</p>
        </footer>
      </main>
    );
  }

  return (
    <main className={`min-h-screen relative flex flex-col ${
      theme === 'profdr' ? 'bg-white text-black' :
      theme === 'geocities' ? '' :
      theme === 'y2k' ? '' :
      theme === '2000s' ? 'bg-me-bg text-me-orange' :
      theme === '2010s' ? 'bg-hero-bg text-hero-dark' :
      theme === '2020s' ? 'bg-ai-bg text-slate-200' : 
      theme === 'enterprise' ? 'bg-white text-[#212529]' :
      theme === 'vax' ? 'bg-black text-[#33ff33]' : 
      theme === 'myspace' ? 'bg-[#14002a] text-white' :
      theme === 'typewriter' ? 'bg-[#f0e6d0] text-[#2a1a0a]' :
      theme === 'bios' ? 'bg-black text-[#ffb000]' :
      theme === 'macos' ? 'bg-[#c0c0c0] text-black' :
      theme === 'zelda' ? 'bg-[#0a1a04] text-[#a8d840]' :
      theme === 'mario' ? 'bg-[#5c94fc] text-white' :
      theme === 'win95' ? 'bg-[#008080] text-black' :
      theme === 'notebook' ? 'text-[#1a2540]' :
      theme === 'manuscript' ? 'text-[#1a1a1a]' : ''
    }`}>
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        {title && (
          <div className={(theme !== '80s' && theme !== 'profdr' && theme !== 'enterprise' && theme !== 'vax' && theme !== 'myspace' && theme !== 'typewriter' && theme !== 'bios' && theme !== 'macos' && theme !== 'zelda' && theme !== 'mario') ? 'mb-12 text-center' : ''}>
            {theme === 'vax' && (
              <div className="mb-8 font-mono">
                <div className="text-[10px] opacity-50 mb-1">SET TERMINAL/INQUIRE</div>
                <h1 className="text-2xl font-bold border-y border-[#33ff33] py-2 inline-block">
                  {`[ DIRECTORY: ${title.toUpperCase()} ]`}
                </h1>
              </div>
            )}
            {theme === 'enterprise' && (
              <div className="mb-8 pb-4 border-b border-[#dee2e6]">
                <h1 className="text-3xl font-medium text-[#212529]">{title}</h1>
                <nav className="flex text-sm text-[#6c757d] mt-2">
                   <Link href="/" className="hover:underline">Home</Link>
                   <span className="mx-2">/</span>
                   <span>{title.toLowerCase()}</span>
                </nav>
              </div>
            )}
            {theme === 'profdr' && (
              <div className="flex flex-col items-center mb-8 font-serif text-left">
                <Link href="/" className="text-4xl font-black tracking-tighter mb-2 hover:opacity-80 transition-opacity" style={{color: '#ff0000', fontFamily: 'serif', textDecoration: 'none'}}>
                  Yahoo<span style={{color: '#800080'}}>!</span>
                </Link>
                <h1 className="text-2xl font-bold">{title.replace(/_/g, ' ')}</h1>
                <hr className="w-full mt-4 border-gray-300" />
              </div>
            )}
            {theme === 'geocities' && (
              <>
                <h1>~* {title.replace(/_/g, ' ')} *~</h1>
                <hr />
                <p className="geo-blink" style={{color: '#ff00ff', fontWeight: 'bold'}}>★ NEW ★ NEW ★ NEW ★</p>
              </>
            )}
            {theme === 'y2k' && (
              <div className="max-w-5xl mx-auto">
                <h1 style={{textAlign: 'left'}}>
                  {title.replace(/_/g, ' ').toLowerCase()}<span className="y2k-beta">BETA</span>
                </h1>
                <hr />
              </div>
            )}
            {theme === 'win95' && (
              <div style={{background: 'linear-gradient(to right, #000080, #1084d0)', padding: '3px 8px', marginBottom: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px'}}>
                <span style={{color: '#fff', fontWeight: 'bold', fontSize: '13px', fontFamily: '"Tahoma", sans-serif'}}>{title.replace(/_/g, ' ')}</span>
              </div>
            )}
            {theme === 'notebook' && (
              <h1 style={{fontFamily: '"Comic Sans MS", cursive', color: '#0e1a3a', fontSize: '24px', borderBottom: '2px dashed #c93030', paddingBottom: '6px', marginBottom: '16px'}}>
                {title.replace(/_/g, ' ')}
              </h1>
            )}
            {theme === 'manuscript' && (
              <div style={{marginBottom: '16px', borderBottom: '2px solid #003366', paddingBottom: '8px'}}>
                <h1 style={{fontFamily: '"Times New Roman", serif', color: '#1a1a1a', fontSize: '22px', fontWeight: 'bold', marginBottom: '2px'}}>{title.replace(/_/g, ' ')}</h1>
                <p style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '9px', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase'}}>MOL. BIOL. EVOL. · ACME LABORATORY</p>
              </div>
            )}
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
            
            {theme !== '2020s' && theme !== 'profdr' && theme !== 'geocities' && theme !== 'y2k' && theme !== 'enterprise' && theme !== 'vax' && theme !== 'myspace' && theme !== 'typewriter' && theme !== 'bios' && theme !== 'macos' && theme !== 'zelda' && theme !== 'mario' && theme !== 'win95' && theme !== 'notebook' && theme !== 'manuscript' && (
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
        ) : theme === 'zelda' ? (
          <div className="zelda-panel"><div className="zelda-panel-header">&#9670; {title || 'QUEST LOG'} &#9670;</div>{children}</div>
        ) : theme === 'mario' ? (
          <div className="mario-panel"><div className="mario-panel-header">[ {title || 'ACME LAB'} ]</div>{children}</div>
        ) : theme === 'myspace' ? (
          <div className="myspace-panel"><div className="myspace-panel-header">{title || 'Content'}</div>{children}</div>
        ) : theme === 'win95' ? (
          <div style={{background: '#c0c0c0', border: '2px solid', borderColor: '#fff #808080 #808080 #fff', boxShadow: 'inset 1px 1px 0 #dfdfdf', padding: '8px', fontFamily: '"Tahoma", sans-serif', fontSize: '12px', color: '#000'}}>{children}</div>
        ) : theme === 'notebook' ? (
          <div style={{fontFamily: '"Comic Sans MS", cursive', color: '#1a2540'}}>{children}</div>
        ) : theme === 'manuscript' ? (
          <div style={{fontFamily: '"Times New Roman", serif', color: '#1a1a1a'}}>{children}</div>
        ) : theme === 'typewriter' ? (
          <div className="tw-panel">{children}</div>
        ) : theme === 'bios' ? (
          <div className="bios-panel">{children}</div>
        ) : theme === 'macos' ? (
          <div className="mac-window"><div className="mac-titlebar"><div className="mac-titlebar-label">{title || 'ACME Lab'}</div></div><div className="mac-window-body">{children}</div></div>
        ) : children}
      </div>
      
      {theme === 'enterprise' ? (
        <footer className="mt-auto bg-[#f8f9fa] border-t border-[#dee2e6] py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-xl font-bold mb-4">ACME<span className="text-[#007bff]">LAB</span></h3>
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
        <footer className="mt-auto p-8 font-mono text-sm border-t border-[#33ff33]">
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
          <hr />
          <p>You are visitor # <span className="geo-counter">00042</span></p>
          <p>★ Sign my <a href="#guestbook">Guestbook</a>! ★ <a href="mailto:webmaster@acme.example">E-mail me</a>! ★</p>
          <p style={{color: '#ff00ff'}}>© 1996 ACME Laboratory ~ Temple University</p>
          <p className="geo-blink" style={{color: '#00ff00'}}>★ This page best viewed in Netscape Navigator 3.0 ★</p>
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
          <div style={{color: '#e83030', fontSize: '0.7em', marginTop: '4px'}}>&#9829;&#9829;&#9829;</div>
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
          <p style={{fontSize: '10px', color: '#9a7a5a', marginTop: '4px'}}>Correspondence: acme@temple.edu | Beury Hall, Room 328</p>
        </footer>
      ) : theme === 'bios' ? (
        <footer className="mt-auto p-4" style={{background: '#000', borderTop: '1px solid #ffb000', fontFamily: '"Courier New", Courier, monospace'}}>
          <p style={{color: '#a07000', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em'}}>COPYRIGHT (C) 2026 ACME LABORATORY. ALL RIGHTS RESERVED.</p>
          <p style={{color: '#a07000', fontSize: '11px', textTransform: 'uppercase'}}>INSTITUTE FOR GENOMICS AND EVOLUTIONARY MEDICINE — TEMPLE UNIVERSITY</p>
        </footer>
      ) : theme === 'macos' ? (
        <footer className="mt-auto" style={{background: '#ffffff', borderTop: '1px solid #000', fontFamily: '"Geneva", Helvetica, Arial, sans-serif', padding: '8px 16px'}}>
          <div style={{background: 'repeating-linear-gradient(90deg, #000 0px, #000 1px, #ffffff 1px, #ffffff 3px)', height: '4px', marginBottom: '8px'}} />
          <p style={{fontSize: '12px', color: '#000', textAlign: 'center'}}>ACME Laboratory © 2026 — Temple University</p>
          <p style={{fontSize: '11px', color: '#808080', textAlign: 'center'}}>Trash: 0 items, 0K</p>
        </footer>
      ) : theme === 'win95' ? (
        <footer className="mt-auto" style={{background: '#c0c0c0', borderTop: '2px solid', borderTopColor: '#808080', padding: '4px 8px', fontFamily: '"Tahoma", sans-serif', fontSize: '11px', color: '#000', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span>ACME Laboratory — Temple University</span>
          <span style={{background: '#c0c0c0', border: '1px solid', borderColor: '#808080 #fff #fff #808080', padding: '1px 6px'}}>© 2026</span>
        </footer>
      ) : theme === 'notebook' ? (
        <footer className="mt-auto" style={{background: 'transparent', borderTop: '2px dashed #c93030', padding: '12px 16px', fontFamily: '"Comic Sans MS", cursive', fontSize: '11px', color: '#7a5c3a', textAlign: 'center'}}>
          <p>ACME Lab Notebook — Temple University</p>
          <p style={{color: '#c93030', marginTop: '4px'}}>* Remember to sign your entries! *</p>
        </footer>
      ) : theme === 'manuscript' ? (
        <footer className="mt-auto" style={{borderTop: '2px solid #003366', padding: '12px 16px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '9px', color: '#555', letterSpacing: '0.08em', textAlign: 'center'}}>
          <p style={{textTransform: 'uppercase'}}>ACME Laboratory · Institute for Genomics and Evolutionary Medicine · Temple University</p>
          <p style={{marginTop: '4px'}}>© 2026 · Received: Jan 2026 · Accepted: Mar 2026 · Published: Apr 2026</p>
        </footer>
      ) : (
        <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${
          theme === '80s' ? 'border-retro-green bg-black text-retro-fg' :
          theme === '90s' ? 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono' :
          theme === '2000s' ? 'border-me-orange/20 bg-me-bg/90 text-me-orange/40 font-mono text-sm tracking-widest italic' :
          theme === '2010s' ? 'border-black bg-hero-dark text-hero-yellow font-black skew-x-[-2deg] py-12' :
          'bg-ai-sidebar border-white/5 text-slate-500 font-sans text-xs tracking-tight py-6'
        }`}>
          <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
          {theme === '80s' && <p className="text-retro-amber font-heading text-[10px] mt-2 animate-pulse uppercase tracking-tighter">You have died of dysentery.</p>}
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
      )}
    </main>
  );
}
