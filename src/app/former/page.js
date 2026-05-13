import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import formerMembers from '@/data/former.json';

export default function FormerMembersPage() {
  return (
    <main className="min-h-screen crt relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-6 text-center text-retro-amber">LAB_ALUMNI</h1>
        <p className="text-center font-heading text-sm mb-12 text-retro-green">
          [PAST_CONTRIBUTORS_AND_RESEARCHERS]
        </p>
        
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {formerMembers.map(member => (
              <Card key={member.id} title={member.name.toUpperCase()}>
                <div className="flex flex-col gap-2">
                  <p className="text-retro-green font-heading text-[10px]">
                    {member.title} // {member.years}
                  </p>
                  <p className="text-lg">
                    <span className="text-retro-amber">[NEXT_STATION]:</span> {member.next}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 border-t border-retro-bg pt-2">
                    {Object.entries(member.links).map(([type, url]) => (
                      <a 
                        key={type} 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-retro-blue hover:text-white text-sm transition-colors"
                      >
                        [{type.toUpperCase()}]
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/members" className="pixel-button">
            RETURN_TO_CURRENT_TEAM
          </a>
        </div>
      </div>
    </main>
  );
}
