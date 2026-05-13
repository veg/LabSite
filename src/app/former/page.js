import formerMembers from '@/data/former.json';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';

export default function FormerMembersPage() {
  const separator = " // ";
  
  return (
    <PageContainer title="LAB_ALUMNI" titleColorClass="text-retro-amber">
      <p className="text-center font-heading text-sm mb-12 opacity-80">
        [PAST_CONTRIBUTORS_AND_RESEARCHERS]
      </p>
      
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {formerMembers.map(member => (
            <Card key={member.id} title={member.name.toUpperCase()}>
              <div className="flex flex-col gap-2">
                <p className="font-heading text-[10px] opacity-80">
                  {member.title}{separator}{member.years}
                </p>
                <p className="text-lg">
                  <span className="opacity-60">[NEXT_STATION]:</span> {member.next}
                </p>
                <div className="flex flex-wrap gap-3 mt-2 border-t border-white/10 pt-2">
                  {Object.entries(member.links).map(([type, url]) => (
                    <a 
                      key={type} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="opacity-70 hover:opacity-100 hover:underline text-sm transition-all"
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
        <a href="/members" className="pixel-button text-xs">
          RETURN_TO_CURRENT_TEAM
        </a>
      </div>
    </PageContainer>
  );
}
