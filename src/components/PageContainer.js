'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import Navbar from './Navbar';

export default function PageContainer({ children, title, titleColorClass = "text-retro-amber" }) {
  const { theme, mounted } = useTheme();
  
  if (!mounted) return <div className="min-h-screen bg-[#282828]" />;

  return (
    <main className={`min-h-screen relative flex flex-col ${
      theme === 'profdr' ? 'bg-white text-black' :
      theme === 'geocities' ? '' :
      theme === 'y2k' ? '' :
      theme === '2000s' ? 'bg-me-bg text-me-orange' :
      theme === '2010s' ? 'bg-hero-bg text-hero-dark' :
      theme === '2020s' ? 'bg-ai-bg text-slate-200' :
      theme === 'myspace' ? 'bg-[#14002a] text-white' :
      theme === 'typewriter' ? 'bg-[#f0e6d0] text-[#2a1a0a]' :
      theme === 'bios' ? 'bg-black text-[#ffb000]' :
      theme === 'macos' ? 'bg-[#c0c0c0] text-black' :
      theme === 'zelda' ? 'bg-[#0a1a04] text-[#a8d840]' :
      theme === 'mario' ? 'bg-[#5c94fc] text-white' : ''
    }`}>
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10 flex-grow">
        {title && (
          <div className={(theme !== '80s' && theme !== 'profdr') ? 'mb-12 text-center' : ''}>
            {theme === 'profdr' && (
              <>
                <h1>{title.replace(/_/g, ' ')}</h1>
                <hr />
              </>
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
            
            {theme !== '2020s' && theme !== 'profdr' && theme !== 'geocities' && theme !== 'y2k' && theme !== 'myspace' && theme !== 'typewriter' && theme !== 'bios' && theme !== 'macos' && theme !== 'zelda' && theme !== 'mario' && (
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
        ) : theme === 'typewriter' ? (
          <div className="tw-panel">{children}</div>
        ) : theme === 'bios' ? (
          <div className="bios-panel">{children}</div>
        ) : theme === 'macos' ? (
          <div className="mac-window"><div className="mac-titlebar"><div className="mac-titlebar-label">{title || 'ACME Lab'}</div></div><div className="mac-window-body">{children}</div></div>
        ) : children}
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
          <p>Last modified: 14 March 1995. <span className="profdr-blink">[NEW!]</span></p>
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
      ) : (
        <footer className={`mt-auto p-8 border-t-4 text-center font-body text-xl ${
          theme === '80s' ? 'border-retro-green bg-black text-retro-fg' :
          theme === '90s' ? 'border-mgs-border bg-mgs-bg text-mgs-green/60 font-mono' :
          theme === '2000s' ? 'border-me-orange/20 bg-me-bg/90 text-me-orange/40 font-mono text-sm tracking-widest italic' :
          theme === '2010s' ? 'border-black bg-hero-dark text-hero-yellow font-black skew-x-[-2deg] py-12' :
          'bg-ai-sidebar border-white/5 text-slate-500 font-sans text-xs tracking-tight py-6'
        }`}>
          <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
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
