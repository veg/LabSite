'use client';
import Card from '@/components/Card';
import papers from '@/data/papers.json';
import currentMembers from '@/data/members.json';
import formerMembers from '@/data/former.json';
import PageContainer from '@/components/PageContainer';
import { useTheme } from '@/components/ThemeContext';

export default function PapersPage() {
  const { theme } = useTheme();
  const categories = ["METHODS", "SURVEILLANCE", "VIRAL_DYNAMICS", "ADAPTATION"];
  const allLabMembers = [...currentMembers, ...formerMembers];
  
  // 1. Count by Category
  const categoryCounts = categories.map(cat => ({
    name: cat,
    count: papers.filter(p => p.category === cat).length
  }));

  // 2. Member Contributions & Network Extent
  const memberContributions = allLabMembers.map(member => {
    const lastName = member.name.split(' ').pop().toLowerCase();
    const count = papers.filter(p => {
      const authors = p.authors.toLowerCase();
      return authors.includes(lastName);
    }).length;
    return { name: member.name, count };
  }).filter(m => m.count > 0).sort((a, b) => b.count - a.count);

  // Collaboration Network: Total unique co-authors
  const uniqueAuthors = new Set();
  papers.forEach(p => {
    const authors = p.authors.split(/ and |; |, /);
    authors.forEach(a => {
      const trimmed = a.trim();
      if (trimmed && trimmed.length > 2) {
        uniqueAuthors.add(trimmed.toLowerCase());
      }
    });
  });
  
  const legendaryPapers = papers.filter(p => p.isLegendary);
  const recentPapers = papers.filter(p => p.isRecent);

  return (
    <PageContainer title="RESEARCH_ARCHIVE" titleColorClass="text-retro-purple">
        {/* STATISTICS_HUD */}
        <section className={`mb-20 ${theme === 'knuth' ? 'font-serif' : ''}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-1 flex-grow opacity-30 ${
              theme === 'enterprise' ? 'bg-[#dee2e6]' :
              theme === 'knuth' ? 'bg-black' :
              theme === '80s' ? 'bg-retro-blue' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
            <h2 className={`text-2xl flex-shrink-0 ${
              theme === 'enterprise' ? 'text-[#212529] font-medium uppercase tracking-wider' :
              theme === 'knuth' ? 'text-black font-bold' :
              theme === '80s' ? 'text-retro-blue font-heading' : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter font-heading' :
              'text-me-orange italic font-black font-heading'
            }`}>{theme === 'knuth' ? 'Research Statistics' : 'DASHBOARD_STATS'}</h2>
            <div className={`h-1 flex-grow opacity-30 ${
              theme === 'enterprise' ? 'bg-[#dee2e6]' :
              theme === 'knuth' ? 'bg-black' :
              theme === '80s' ? 'bg-retro-blue' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
          </div>
          
          <div className={`grid gap-6 ${theme === 'knuth' ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
            {/* Category Breakdown */}
            <Card title={theme === 'knuth' ? 'Subject Areas' : 'SUBJECT_MATRIX'}>
              <div className="space-y-4">
                {categoryCounts.map(cat => (
                  <div key={cat.name} className={`flex justify-between items-center border-b pb-2 ${
                    theme === 'enterprise' ? 'border-gray-100' :
                    theme === 'knuth' ? 'border-black' :
                    theme === '80s' ? 'border-retro-bg' : 
                    theme === '90s' ? 'border-mgs-border' : 'border-me-orange/10'
                  }`}>
                    <span className={`${
                      theme === 'enterprise' ? 'text-[#007bff] font-bold text-xs' :
                      theme === 'knuth' ? 'text-black' :
                      theme === '80s' ? 'text-retro-amber font-heading text-sm' : 
                      theme === '90s' ? 'text-mgs-blue font-heading text-sm' : 'text-me-blue font-bold italic font-heading text-sm'
                    }`}>{theme === 'knuth' ? cat.name : `[${cat.name}]`}</span>
                    <span className={`text-2xl ${
                      theme === 'enterprise' ? 'text-[#212529] font-bold' :
                      theme === 'knuth' ? 'text-black' :
                      theme === '80s' ? 'text-retro-fg' : 
                      theme === '90s' ? 'text-mgs-green' : 'text-me-orange'
                    }`}>{cat.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Group Contribution Level */}
            <Card title={theme === 'knuth' ? 'Active Contributors' : 'STRIKE_FORCE_ACTIVITY'}>
              <div className="space-y-3">
                {theme !== 'knuth' && (
                  <p className={`text-xs mb-4 ${
                    theme === 'enterprise' ? 'text-[#6c757d] font-bold' :
                    theme === '80s' ? 'text-retro-green font-heading' : 
                    theme === '90s' ? 'text-mgs-green font-heading' : 'text-me-blue opacity-70 italic font-bold font-heading'
                  }`}>[ACTIVE_CONTRIBUTORS]</p>
                )}
                <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-retro-blue">
                  {memberContributions.map(m => (
                    <div key={m.name} className="flex justify-between text-lg mb-1">
                      <span className={`opacity-80 ${theme === 'enterprise' || theme === 'knuth' ? 'text-sm font-medium' : 'font-mono'}`}>{theme === 'knuth' ? m.name : m.name.split(' ').pop().toUpperCase()}</span>
                      <span className={
                        theme === 'enterprise' ? 'text-[#007bff] text-sm font-bold' :
                        theme === 'knuth' ? 'text-black text-sm' :
                        theme === '80s' ? 'text-retro-blue' : 
                        theme === '90s' ? 'text-mgs-blue' : 'text-me-orange font-bold'
                      }>{m.count} {theme === 'knuth' ? 'papers' : 'logs'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Collaborative Network */}
            <Card title={theme === 'knuth' ? 'Collaborative Network' : 'ALLIANCE_NETWORK'}>
              <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                <div className={`text-5xl mb-4 ${
                  theme === 'enterprise' ? 'text-[#007bff] font-black' :
                  theme === 'knuth' ? 'text-black' :
                  theme === '80s' ? 'text-retro-purple animate-pulse' : 
                  theme === '90s' ? 'text-mgs-blue animate-pulse' : 'text-me-orange drop-shadow-me animate-pulse'
                }`}>
                  {uniqueAuthors.size}+
                </div>
                <p className={`text-xs mb-4 ${
                  theme === 'enterprise' ? 'text-[#6c757d] font-bold uppercase tracking-widest' :
                  theme === 'knuth' ? 'text-black' :
                  theme === '80s' ? 'text-retro-fg font-heading' : 
                  theme === '90s' ? 'text-mgs-green font-heading' : 'text-me-blue font-black italic font-heading'
                }`}>{theme === 'knuth' ? 'UNIQUE CO-AUTHORS' : 'UNIQUE_CO-AUTHORS'}</p>
                <p className={`text-sm leading-tight ${
                  theme === 'enterprise' ? 'text-[#6c757d]' :
                  theme === 'knuth' ? 'text-black' :
                  theme === '90s' ? 'text-mgs-green/60' : 
                  theme === '2000s' ? 'text-me-orange/70 italic' : 'opacity-60'
                }`}>
                  Our collaborative network spans global institutions, merging expertise across biology, 
                  math, and computer science.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-1 flex-grow opacity-30 ${
              theme === 'enterprise' ? 'bg-[#dee2e6]' :
              theme === 'knuth' ? 'bg-black' :
              theme === '80s' ? 'bg-retro-amber' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
            <h2 className={`text-2xl flex-shrink-0 ${
              theme === 'enterprise' ? 'text-[#212529] font-medium uppercase tracking-wider' :
              theme === 'knuth' ? 'text-black font-bold' :
              theme === '80s' ? 'text-retro-amber font-heading' : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter font-heading' :
              'text-me-orange font-black italic font-heading'
            }`}>{theme === 'knuth' ? 'Highly Cited Works' : 'HALL_OF_FAME'}</h2>
            <div className={`h-1 flex-grow opacity-30 ${
              theme === 'enterprise' ? 'bg-[#dee2e6]' :
              theme === 'knuth' ? 'bg-black' :
              theme === '80s' ? 'bg-retro-amber' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
          </div>
          <div className={`grid gap-8 ${theme === 'knuth' ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
            {legendaryPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme={theme} isLegendarySection />
            ))}
          </div>
        </section>

        {/* Recent Quests */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-1 flex-grow opacity-30 ${
              theme === 'enterprise' ? 'bg-[#dee2e6]' :
              theme === 'knuth' ? 'bg-black' :
              theme === '80s' ? 'bg-retro-green' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
            <h2 className={`text-2xl flex-shrink-0 ${
              theme === 'enterprise' ? 'text-[#212529] font-medium uppercase tracking-wider' :
              theme === 'knuth' ? 'text-black font-bold' :
              theme === '80s' ? 'text-retro-green font-heading' : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter font-heading' :
              'text-me-orange font-black italic font-heading'
            }`}>{theme === 'knuth' ? 'Recent Publications' : 'LATEST_QUESTS'}</h2>
            <div className={`h-1 flex-grow opacity-30 ${
              theme === 'enterprise' ? 'bg-[#dee2e6]' :
              theme === 'knuth' ? 'bg-black' :
              theme === '80s' ? 'bg-retro-green' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
          </div>
          <div className={`space-y-6 max-w-5xl mx-auto ${theme === 'knuth' ? 'font-serif' : ''}`}>
            {recentPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme={theme} />
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto text-center pt-12">
          <p className={`mb-8 opacity-80 ${
            theme === 'enterprise' || theme === 'knuth' ? 'text-lg text-[#6c757d]' : 'font-body text-2xl'
          }`}>
            Our full bibliography spans decades of research in molecular evolution and bioinformatics.
          </p>
          <a 
            href="https://scholar.google.com/citations?user=SP6nj-QAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className={
              theme === 'enterprise' ? 'btn-primary enterprise-button px-10' :
              theme === 'knuth' ? 'underline' :
              theme === '2020s' ? 'bg-ai-accent text-white px-8 py-3 rounded-full font-bold shadow-lg inline-block transition-transform hover:scale-105' :
              theme === 'vax' ? 'vax-button text-sm' :
              theme === '80s' ? 'pixel-button' : 
              theme === '90s' ? 'mgs-button' : 'me-button'
            }
          >
            {theme === 'enterprise' ? 'Access Complete Bibliography' : 
             theme === 'knuth' ? 'Access Complete Bibliography on Google Scholar' :
             theme === 'vax' ? 'DIR BIBLIOGRAPHY.LOG' : 'ACCESS_FULL_MASTER_LOG'}
          </a>
        </div>
    </PageContainer>
  );
}

function PaperCard({ paper, theme, isLegendarySection }) {
  const isLegendary = paper.isLegendary;
  const separator = " // ";
  
  if (theme === 'knuth') {
    return (
      <div className="mb-6 py-4 border-b border-black">
        <p style={{fontSize: '12pt', marginBottom: '4pt'}}>
          {paper.authors}. <strong>{paper.title}</strong>. <em>{paper.journal}</em>, {paper.year}. 
          {paper.doi && <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10pt'}}>DOI: {paper.doi}</a>}
        </p>
      </div>
    );
  }

  if (theme === 'vax') {
    return (
      <div className="vax-panel flex flex-col mb-4 p-4 border-[#33ff33] bg-black">
        <div className="flex justify-between items-center mb-2 text-[10px] border-b border-[#33ff33]/30 pb-1">
          <span className="font-bold">{paper.year} // {paper.category}</span>
          {isLegendary && <span className="underline font-black italic">LEGENDARY_STATUS</span>}
        </div>
        <h4 className="text-xl font-bold mb-2 leading-tight">
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="hover:bg-[#33ff33] hover:text-black">
            {paper.title}
          </a>
        </h4>
        <p className="text-sm opacity-80 mb-4">{paper.authors}</p>
        <div className="mt-auto flex justify-between items-center pt-2 border-t border-[#33ff33]/30 text-[10px]">
          <span className="italic">{paper.journal}</span>
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="vax-button px-2 py-0 text-[9px]">UPLINK DOI</a>
        </div>
      </div>
    );
  }

  if (theme === 'enterprise') {
    return (
      <div className="enterprise-card p-6 flex flex-col h-full bg-white border border-[#dee2e6] rounded shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-[#007bff] uppercase tracking-wider">{paper.year} // {paper.category}</span>
          {isLegendary && <span className="text-[10px] bg-[#28a745] text-white px-2 py-0.5 rounded uppercase font-bold">Highly Cited</span>}
        </div>
        <h4 className="text-xl font-bold mb-2 text-[#212529] leading-tight">
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#0056b3] transition-colors">
            {paper.title}
          </a>
        </h4>
        <p className="text-sm text-[#6c757d] mb-4 flex-grow">{paper.authors}</p>
        <div className="flex justify-between items-center pt-4 border-t border-[#dee2e6] mt-auto">
          <span className="text-xs font-medium text-[#495057]">{paper.journal}</span>
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="btn-primary enterprise-button text-xs py-1 px-3">View Full Text</a>
        </div>
      </div>
    );
  }

  if (theme === 'y2k') {
    return (
      <div className="y2k-panel mb-4">
        <div className="y2k-panel-header flex justify-between">
           <span>{paper.year} // {paper.category.toLowerCase()}</span>
           {isLegendary && <span className="y2k-beta text-[9px]">LEGENDARY</span>}
        </div>
        <div className="y2k-panel-body flex flex-col h-full">
           <h4 className="text-lg font-bold text-[#0066cc] mb-2 leading-tight">{paper.title}</h4>
           <p className="text-sm text-[#333] mb-4 flex-grow">{paper.authors}</p>
           <div className="flex justify-between items-center pt-2 border-t border-[#e6f3ff]">
              <span className="text-[10px] font-bold text-[#ff6600] uppercase italic">{paper.journal}</span>
              <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="y2k-gel text-[10px] py-1 px-3">View PDF</a>
           </div>
        </div>
      </div>
    );
  }

  if (theme === 'geocities') {
    return (
      <div className="geo-panel mb-4 p-4 text-center">
        <div className="text-[10px] mb-2">
          <span className="geo-rainbow">*** {paper.year} ***</span>
          <span className="text-[#00ff00]"> [{paper.category}] </span>
          {isLegendary && <span className="geo-blink text-[#ff0000]"> !! LEGENDARY !! </span>}
        </div>
        <h4 className="text-xl font-bold mb-2">
           <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#ff00ff]">
             {paper.title}
           </a>
        </h4>
        <p className="text-sm italic text-[#ffff00] mb-3">{paper.authors}</p>
        <div className="border-t-2 border-dotted border-[#ff00ff] pt-2 mt-2">
           <p className="text-xs mb-2">Published in: <span className="text-[#00ff00] font-bold">{paper.journal}</span></p>
           <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="pixel-button bg-[#ff00ff] text-white text-[10px]">VISIT_DOI</a>
        </div>
      </div>
    );
  }

  if (theme === 'profdr') {
    return (
      <table className="yahoo-table mb-4" cellSpacing="2">
        <tbody>
          <tr>
            <td className="yahoo-td">
              <div className="flex justify-between items-start mb-1 text-[10px]">
                <span className="font-bold text-gray-600">[{paper.category}] {paper.year}</span>
                {isLegendary && <span className="font-bold text-red-600 uppercase">Legendary Paper</span>}
              </div>
              <h4 className="text-lg font-bold mb-1">
                <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{paper.title}</a>
              </h4>
              <p className="text-xs italic mb-2">{paper.authors}</p>
              <div className="flex justify-between items-center text-[10px] pt-1 border-t border-gray-100">
                <span className="font-bold text-blue-800">{paper.journal}</span>
                <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="yahoo-button">DOI Link</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (theme === '2020s') {
    return (
      <div className="bg-ai-bubble-ai border border-white/5 p-6 rounded-2xl mb-4 shadow-lg flex flex-col h-full text-slate-200">
          <div className="flex justify-between items-start mb-4">
             <span className="text-[10px] font-bold text-ai-accent uppercase tracking-widest">{paper.year}{separator}{paper.category}</span>
             {isLegendary && <span className="text-[8px] bg-ai-gradient text-white px-2 py-0.5 rounded uppercase font-bold">Featured</span>}
          </div>
          <h4 className="text-xl font-bold mb-2 text-white">{paper.title}</h4>
          <p className="text-sm text-slate-400 mb-6 flex-grow">{paper.authors}</p>
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
             <span className="text-[10px] text-slate-500 font-medium italic">{paper.journal}</span>
             <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-ai-accent text-xs font-bold hover:underline">View DOI</a>
          </div>
      </div>
    );
  }

  if (theme === '2000s') {
    return (
      <div className="me-panel flex flex-col mb-4 p-0 animate-hologram-flicker">
        <div className="border-b border-me-orange/30 p-2 flex justify-between items-center bg-me-orange/5">
          <h3 className="font-mono text-[10px] text-me-blue font-black italic tracking-widest uppercase text-me-blue">
            {paper.year}{separator}{paper.category}
          </h3>
          {isLegendary && <div className="text-[8px] text-me-orange font-bold uppercase animate-pulse">LEGENDARY_STATUS</div>}
        </div>
        <div className="p-4 flex flex-col h-full">
          <h4 className="text-xl font-black italic leading-tight mb-2 text-me-orange drop-shadow-me">{paper.title}</h4>
          <p className="text-sm opacity-70 mb-4 text-me-orange font-mono">{paper.authors}</p>
          <div className="mt-auto flex justify-between items-center border-t border-me-orange/10 pt-2 text-[10px]">
            <span className="font-bold text-me-blue italic tracking-tighter uppercase">{paper.journal}</span>
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="me-button py-1 px-3 text-[9px]">UPLINK_DOI</a>
          </div>
        </div>
      </div>
    );
  }

  if (theme === '90s') {
    return (
      <div className="mgs-panel flex flex-col mb-4 p-0">
        <div className="border-b border-mgs-border p-2 flex justify-between items-center bg-mgs-green/10">
          <h3 className="font-mono text-[10px] text-mgs-green font-bold tracking-widest text-mgs-green">
            {paper.year}{separator}{paper.category}
          </h3>
          <div className="text-[8px] text-mgs-blue opacity-60">FILE_REF: {paper.id.slice(0,8)}</div>
        </div>
        <div className="p-4 flex flex-col h-full text-mgs-green">
          <h4 className="text-xl font-bold leading-tight mb-2">{paper.title}</h4>
          <p className="text-sm opacity-60 mb-4 font-mono">{paper.authors}</p>
          <div className="mt-auto flex justify-between items-center border-t border-mgs-green/10 pt-2 text-[10px]">
            <span className="font-bold text-mgs-blue tracking-tighter">{paper.journal}</span>
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="mgs-button py-1 px-2 text-[8px]">VIEW_DOI</a>
          </div>
        </div>
      </div>
    );
  }

  const borderColor = isLegendarySection ? 'border-retro-amber' : 'border-retro-green';
  const titleColor = isLegendarySection ? 'text-retro-amber' : 'text-retro-fg';

  return (
    <div className={`pixel-border bg-black p-6 relative overflow-hidden flex flex-col h-full border-l-8 ${borderColor}`}>
      {isLegendarySection && (
        <div className="absolute -right-12 -top-12 w-24 h-24 bg-retro-amber opacity-10 rotate-45"></div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <span className="font-heading text-[10px] text-retro-blue bg-retro-blue px-1 bg-opacity-20">
          [{paper.category}]{separator}{paper.year}
        </span>
        {paper.stats && (
          <span className="font-heading text-[10px] text-retro-amber animate-pulse">
            ★ {paper.stats.toUpperCase()}
          </span>
        )}
      </div>

      <h3 className={`text-xl md:text-2xl font-body leading-tight mb-4 flex-grow ${titleColor}`}>
        {paper.title}
      </h3>

      <div className="space-y-4">
        <p className="text-sm font-mono text-retro-green opacity-80">
          {paper.authors}
        </p>
        <p className="text-xs font-heading text-retro-purple">
          {paper.journal.toUpperCase()}
        </p>
        
        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
          <a 
            href={`https://doi.org/${paper.doi}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-retro-blue hover:text-white text-xs font-heading underline decoration-dotted underline-offset-4"
          >
            DOI_LINK
          </a>
        </div>
      </div>
    </div>
  );
}
