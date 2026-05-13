import members from '@/data/members.json';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';

export default function MembersPage() {
  return (
    <PageContainer title="LAB_TEAM" titleColorClass="text-retro-amber">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(member => (
          <Card key={member.id} title={member.name.toUpperCase()} className="flex flex-col h-full">
            <div className="mb-4 relative h-48 w-full bg-retro-blue border-2 border-retro-green overflow-hidden rounded-lg">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-retro-green opacity-50 bg-black/20">
                  [NO_IMAGE]
                </div>
              )}
            </div>
            <p className="text-retro-green font-bold text-xs mb-2 uppercase tracking-widest">{member.title}</p>
            <p className="flex-grow text-lg mb-4 opacity-90">{member.bio}</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(member.links).map(([type, url]) => (
                <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-colors text-xs font-bold uppercase tracking-tighter">
                  [{type}]
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
