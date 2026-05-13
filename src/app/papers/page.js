import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import papers from '@/data/papers.json';

export default function PapersPage() {
  return (
    <main className="min-h-screen crt relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-12 text-center text-retro-purple">RESEARCH_LOGS</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {papers.map(paper => (
            <Card key={paper.id} title={`${paper.year} // ${paper.journal.toUpperCase()}`}>
              <h3 className="text-2xl mb-4 text-white leading-tight">{paper.title}</h3>
              <p className="text-retro-green font-mono text-sm mb-4">{paper.authors}</p>
              {paper.abstract && (
                <details className="mb-4">
                  <summary className="cursor-pointer text-retro-blue font-heading text-[10px] hover:text-white transition-colors">
                    [READ_ABSTRACT]
                  </summary>
                  <p className="mt-4 text-lg opacity-80 leading-snug">{paper.abstract}</p>
                </details>
              )}
              {paper.doi && (
                <a 
                  href={`https://doi.org/${paper.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-retro-purple px-4 py-2 text-sm font-heading hover:bg-retro-purple hover:text-white transition-all"
                >
                  ACCESS_DOI: ${paper.doi}
                </a>
              )}
            </Card>
          ))}
          
          <div className="text-center pt-8">
            <a 
              href="https://scholar.google.com/citations?user=SP6nj-QAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-button"
            >
              VIEW_FULL_BIBLIOGRAPHY_ON_GOOGLE_SCHOLAR
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
