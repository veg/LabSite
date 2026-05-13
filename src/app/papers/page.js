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
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-1 flex-grow opacity-30 ${
              theme === '80s' ? 'bg-retro-blue' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
            <h2 className={`text-2xl font-heading flex-shrink-0 ${
              theme === '80s' ? 'text-retro-blue' : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter' :
              'text-me-orange italic font-black'
            }`}>DASHBOARD_STATS</h2>
            <div className={`h-1 flex-grow opacity-30 ${
              theme === '80s' ? 'bg-retro-blue' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Category Breakdown */}
            <Card title="SUBJECT_MATRIX">
              <div className="space-y-4">
                {categoryCounts.map(cat => (
                  <div key={cat.name} className={`flex justify-between items-center border-b pb-2 ${
                    theme === '80s' ? 'border-retro-bg' : 
                    theme === '90s' ? 'border-mgs-border' : 'border-me-orange/10'
                  }`}>
                    <span className={`${
                      theme === '80s' ? 'text-retro-amber' : 
                      theme === '90s' ? 'text-mgs-blue' : 'text-me-blue font-bold italic'
                    } text-sm font-heading`}>[{cat.name}]</span>
                    <span className={`text-2xl ${
                      theme === '80s' ? 'text-retro-fg' : 
                      theme === '90s' ? 'text-mgs-green' : 'text-me-orange'
                    }`}>{cat.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Group Contribution Level */}
            <Card title="STRIKE_FORCE_ACTIVITY">
              <div className="space-y-3">
                <p className={`text-xs font-heading mb-4 ${
                  theme === '80s' ? 'text-retro-green' : 
                  theme === '90s' ? 'text-mgs-green' : 'text-me-blue opacity-70 italic font-bold'
                }`}>[ACTIVE_CONTRIBUTORS]</p>
                <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-retro-blue">
                  {memberContributions.map(m => (
                    <div key={m.name} className="flex justify-between text-lg mb-1 text-black">
                      <span className="opacity-80 font-mono">{m.name.split(' ').pop().toUpperCase()}</span>
                      <span className={
                        theme === '80s' ? 'text-retro-blue' : 
                        theme === '90s' ? 'text-mgs-blue' : 'text-me-orange font-bold'
                      }>{m.count} logs</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Collaborative Network */}
            <Card title="ALLIANCE_NETWORK">
              <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                <div className={`text-5xl mb-4 animate-pulse ${
                  theme === '80s' ? 'text-retro-purple' : 
                  theme === '90s' ? 'text-mgs-blue' : 'text-me-orange drop-shadow-me'
                }`}>
                  {uniqueAuthors.size}+
                </div>
                <p className={`text-xs font-heading mb-4 ${
                  theme === '80s' ? 'text-retro-fg' : 
                  theme === '90s' ? 'text-mgs-green' : 'text-me-blue font-black italic'
                }`}>UNIQUE_CO-AUTHORS</p>
                <p className={`text-sm opacity-60 leading-tight ${
                  theme === '90s' ? 'text-mgs-green/60' : 
                  theme === '2000s' ? 'text-me-orange/70 italic' : ''
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
              theme === '80s' ? 'bg-retro-amber' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
            <h2 className={`text-2xl font-heading flex-shrink-0 ${
              theme === '80s' ? 'text-retro-amber' : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter' :
              'text-me-orange font-black italic'
            }`}>HALL_OF_FAME</h2>
            <div className={`h-1 flex-grow opacity-30 ${
              theme === '80s' ? 'bg-retro-amber' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {legendaryPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme={theme} isLegendarySection />
            ))}
          </div>
        </section>

        {/* Recent Quests */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-1 flex-grow opacity-30 ${
              theme === '80s' ? 'bg-retro-green' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
            <h2 className={`text-2xl font-heading flex-shrink-0 ${
              theme === '80s' ? 'text-retro-green' : 
              theme === '90s' ? 'text-mgs-green font-bold tracking-tighter' :
              'text-me-orange font-black italic'
            }`}>LATEST_QUESTS</h2>
            <div className={`h-1 flex-grow opacity-30 ${
              theme === '80s' ? 'bg-retro-green' : 
              theme === '90s' ? 'bg-mgs-green' : 'bg-me-orange'
            }`}></div>
          </div>
          <div className="space-y-6 max-w-5xl mx-auto">
            {recentPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme={theme} />
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto text-center pt-12">
          <p className="font-body text-2xl mb-8 opacity-80 text-black">
            Our full bibliography spans decades of research in molecular evolution and bioinformatics.
          </p>
          <a 
            href="https://scholar.google.com/citations?user=SP6nj-QAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className={
              theme === '80s' ? 'pixel-button' : 
              theme === '90s' ? 'mgs-button' : 'me-button'
            }
          >
            ACCESS_FULL_MASTER_LOG
          </a>
        </div>
    </PageContainer>
  );
}

function PaperCard({ paper, theme, isLegendarySection }) {
  const isLegendary = paper.isLegendary;
  const separator = " // ";
  
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
        <span className="font-heading text-[10px] text-retro-blue bg-retro-blue px-1 text-black">
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
        
        <div className="pt-4 border-t border-retro-bg flex justify-between items-center">
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
