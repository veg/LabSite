import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import papers from '@/data/papers.json';

export default function PapersPage() {
  const categories = ["ALL", "METHODS", "SURVEILLANCE", "VIRAL_DYNAMICS", "ADAPTATION"];
  const legendaryPapers = papers.filter(p => p.isLegendary);
  const recentPapers = papers.filter(p => p.isRecent);

  return (
    <main className="min-h-screen crt relative overflow-hidden pb-20">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-12 text-center text-retro-purple">RESEARCH_ARCHIVE</h1>

        {/* Hall of Fame (Highly Cited) */}
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

        {/* Recent Quests (Latest Work) */}
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

        {/* Categorized Archive */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-grow bg-retro-blue opacity-30"></div>
            <h2 className="text-2xl text-retro-blue font-heading flex-shrink-0">SUBJECT_CATALOG</h2>
            <div className="h-1 flex-grow bg-retro-blue opacity-30"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {categories.slice(1).map(cat => (
              <div key={cat} className="pixel-border p-4 bg-black text-center group cursor-pointer hover:bg-retro-bg transition-colors">
                <span className="font-heading text-[10px] text-retro-blue group-hover:text-white">[{cat}]</span>
                <div className="text-xs opacity-60 mt-1">
                  {papers.filter(p => p.category === cat).length} ENTRIES
                </div>
              </div>
            ))}
          </div>

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
        </section>
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
          {paper.abstract && (
            <span className="text-[10px] font-heading opacity-40">[ABSTRACT_AVAILABLE]</span>
          )}
        </div>
      </div>
    </div>
  );
}
