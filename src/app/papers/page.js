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
            <div className={`h-1 flex-grow opacity-30 ${theme === '80s' ? 'bg-retro-blue' : 'bg-black'}`}></div>
            <h2 className={`text-2xl font-heading flex-shrink-0 ${theme === '80s' ? 'text-retro-blue' : 'text-black font-bold'}`}>DASHBOARD_STATS</h2>
            <div className={`h-1 flex-grow opacity-30 ${theme === '80s' ? 'bg-retro-blue' : 'bg-black'}`}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-black">
            {/* Category Breakdown */}
            <Card title="SUBJECT_MATRIX">
              <div className="space-y-4">
                {categoryCounts.map(cat => (
                  <div key={cat.name} className={`flex justify-between items-center border-b pb-2 ${theme === '80s' ? 'border-retro-bg' : 'border-black/10'}`}>
                    <span className={`${theme === '80s' ? 'text-retro-amber' : 'text-blue-900'} text-sm font-heading`}>[{cat.name}]</span>
                    <span className={`text-2xl ${theme === '80s' ? 'text-retro-fg' : 'text-black font-bold'}`}>{cat.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Group Contribution Level */}
            <Card title="STRIKE_FORCE_ACTIVITY">
              <div className="space-y-3">
                <p className={`text-xs font-heading mb-4 ${theme === '80s' ? 'text-retro-green' : 'text-green-800'}`}>[ACTIVE_CONTRIBUTORS]</p>
                <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-retro-blue">
                  {memberContributions.map(m => (
                    <div key={m.name} className="flex justify-between text-lg mb-1">
                      <span className="opacity-80">{m.name.split(' ').pop().toUpperCase()}</span>
                      <span className={theme === '80s' ? 'text-retro-blue' : 'text-blue-700'}>{m.count} logs</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Collaborative Network */}
            <Card title="ALLIANCE_NETWORK">
              <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                <div className={`text-5xl mb-4 animate-pulse ${theme === '80s' ? 'text-retro-purple' : 'text-purple-900'}`}>
                  {uniqueAuthors.size}+
                </div>
                <p className={`text-xs font-heading mb-4 ${theme === '80s' ? 'text-retro-fg' : 'text-black'}`}>UNIQUE_CO-AUTHORS</p>
                <p className="text-sm opacity-60 leading-tight">
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
            <div className={`h-1 flex-grow opacity-30 ${theme === '80s' ? 'bg-retro-amber' : 'bg-black'}`}></div>
            <h2 className={`text-2xl font-heading flex-shrink-0 ${theme === '80s' ? 'text-retro-amber' : 'text-black font-bold'}`}>HALL_OF_FAME</h2>
            <div className={`h-1 flex-grow opacity-30 ${theme === '80s' ? 'bg-retro-amber' : 'bg-black'}`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {legendaryPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme={theme === '80s' ? 'legendary' : 'sys8'} />
            ))}
          </div>
        </section>

        {/* Recent Quests */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-1 flex-grow opacity-30 ${theme === '80s' ? 'bg-retro-green' : 'bg-black'}`}></div>
            <h2 className={`text-2xl font-heading flex-shrink-0 ${theme === '80s' ? 'text-retro-green' : 'text-black font-bold'}`}>LATEST_QUESTS</h2>
            <div className={`h-1 flex-grow opacity-30 ${theme === '80s' ? 'bg-retro-green' : 'bg-black'}`}></div>
          </div>
          <div className="space-y-6 max-w-5xl mx-auto">
            {recentPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme={theme === '80s' ? 'recent' : 'sys8'} />
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto text-center pt-12">
          <p className="font-body text-2xl mb-8 opacity-80">
            Our full bibliography spans decades of research in molecular evolution and bioinformatics.
          </p>
          <a 
            href="https://scholar.google.com/citations?user=SP6nj-QAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-button"
          >
            ACCESS_FULL_MASTER_LOG
          </a>
        </div>
    </PageContainer>
  );
}

function PaperCard({ paper, theme }) {
  const isLegendary = theme === 'legendary';
  const isSys8 = theme === 'sys8';
  
  if (isSys8) {
    return (
      <div className="sys8-window flex flex-col mb-4">
        <div className="sys8-titlebar">
          <div className="sys8-close-box"></div>
          <h3 className="font-heading text-[10px] text-black font-bold uppercase tracking-tight">
            {paper.year} // {paper.category}
          </h3>
        </div>
        <div className="p-4 flex flex-col h-full text-black">
          <h4 className="text-xl font-bold leading-tight mb-2">{paper.title}</h4>
          <p className="text-sm opacity-80 mb-4">{paper.authors}</p>
          <div className="mt-auto flex justify-between items-center border-t border-black/10 pt-2">
            <span className="text-[10px] font-bold">{paper.journal}</span>
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-800 underline text-xs font-bold">DOI</a>
          </div>
        </div>
      </div>
    );
  }

  const borderColor = isLegendary ? 'border-retro-amber' : 'border-retro-green';
  const titleColor = isLegendary ? 'text-retro-amber' : 'text-retro-fg';

  return (
    <div className={`pixel-border bg-black p-6 relative overflow-hidden flex flex-col h-full border-l-8 ${borderColor}`}>
      {isLegendary && (
        <div className="absolute -right-12 -top-12 w-24 h-24 bg-retro-amber opacity-10 rotate-45"></div>
      )}
      
      <div className="flex justify-between items-start mb-4 text-black">
        <span className="font-heading text-[10px] text-retro-blue">
          [{paper.category}] // {paper.year}
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
