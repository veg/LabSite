import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import papers from '@/data/papers.json';
import currentMembers from '@/data/members.json';
import formerMembers from '@/data/former.json';

export default function PapersPage() {
  const categories = ["METHODS", "SURVEILLANCE", "VIRAL_DYNAMICS", "ADAPTATION"];
  const allLabMembers = [...currentMembers, ...formerMembers];
  
  // 1. Count by Category
  const categoryCounts = categories.map(cat => ({
    name: cat,
    count: papers.filter(p => p.category === cat).length
  }));

  // 2. Member Contributions & Network Extent
  // Simple heuristic: count occurrences of member names in author strings
  const memberContributions = allLabMembers.map(member => {
    const lastName = member.name.split(' ').pop();
    const count = papers.filter(p => p.authors.includes(lastName)).length;
    return { name: member.name, count };
  }).filter(m => m.count > 0).sort((a, b) => b.count - a.count);

  // Collaboration Network: Total unique co-authors mentioned in the provided subset
  const allAuthors = papers.flatMap(p => p.authors.split(/ and |, /));
  const uniqueAuthors = new Set(allAuthors.map(a => a.trim()));
  
  const legendaryPapers = papers.filter(p => p.isLegendary);
  const recentPapers = papers.filter(p => p.isRecent);

  return (
    <main className="min-h-screen crt relative overflow-hidden pb-20">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-12 text-center text-retro-purple">RESEARCH_ARCHIVE</h1>

        {/* STATISTICS_HUD */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-grow bg-retro-blue opacity-30"></div>
            <h2 className="text-2xl text-retro-blue font-heading flex-shrink-0">DASHBOARD_STATS</h2>
            <div className="h-1 flex-grow bg-retro-blue opacity-30"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Category Breakdown */}
            <Card title="SUBJECT_MATRIX">
              <div className="space-y-4">
                {categoryCounts.map(cat => (
                  <div key={cat.name} className="flex justify-between items-center border-b border-retro-bg pb-2">
                    <span className="text-retro-amber text-sm font-heading">[{cat.name}]</span>
                    <span className="text-2xl text-retro-fg">{cat.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Group Contribution Level */}
            <Card title="STRIKE_FORCE_ACTIVITY">
              <div className="space-y-3">
                <p className="text-xs font-heading text-retro-green mb-4">[ACTIVE_CONTRIBUTORS]</p>
                <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-retro-blue">
                  {memberContributions.map(m => (
                    <div key={m.name} className="flex justify-between text-lg mb-1">
                      <span className="opacity-80">{m.name.split(' ').pop().toUpperCase()}</span>
                      <span className="text-retro-blue">{m.count} logs</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Collaborative Network */}
            <Card title="ALLIANCE_NETWORK">
              <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                <div className="text-5xl text-retro-purple mb-4 animate-pulse">
                  {uniqueAuthors.size}+
                </div>
                <p className="text-xs font-heading text-retro-fg mb-4">UNIQUE_CO-AUTHORS</p>
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
            <div className="h-1 flex-grow bg-retro-amber opacity-30"></div>
            <h2 className="text-2xl text-retro-amber font-heading flex-shrink-0">HALL_OF_FAME</h2>
            <div className="h-1 flex-grow bg-retro-amber opacity-30"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {legendaryPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme="legendary" />
            ))}
          </div>
        </section>

        {/* Recent Quests */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-grow bg-retro-green opacity-30"></div>
            <h2 className="text-2xl text-retro-green font-heading flex-shrink-0">LATEST_QUESTS</h2>
            <div className="h-1 flex-grow bg-retro-green opacity-30"></div>
          </div>
          <div className="space-y-6 max-w-5xl mx-auto">
            {recentPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} theme="recent" />
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
      </div>
    </main>
  );
}

function PaperCard({ paper, theme }) {
  const isLegendary = theme === 'legendary';
  const borderColor = isLegendary ? 'border-retro-amber' : 'border-retro-green';
  const titleColor = isLegendary ? 'text-retro-amber' : 'text-retro-fg';

  return (
    <div className={`pixel-border bg-black p-6 relative overflow-hidden flex flex-col h-full border-l-8 ${borderColor}`}>
      {isLegendary && (
        <div className="absolute -right-12 -top-12 w-24 h-24 bg-retro-amber opacity-10 rotate-45"></div>
      )}
      
      <div className="flex justify-between items-start mb-4">
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
