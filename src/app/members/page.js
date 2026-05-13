import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import members from '@/data/members.json';
import Image from 'next/image';

export default function MembersPage() {
  return (
    <main className="min-h-screen crt relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-12 text-center text-retro-amber">LAB_PERSONNEL</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map(member => (
            <Card key={member.id} title={member.name.toUpperCase()} className="flex flex-col h-full">
              <div className="mb-4 relative h-48 w-full bg-retro-blue border-2 border-retro-green overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-75 contrast-125"
                    style={{ imageRendering: 'pixelated' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-retro-green opacity-50">
                    [NO_IMAGE_FOUND]
                  </div>
                )}
              </div>
              <p className="text-retro-green font-heading text-[10px] mb-2">{member.title}</p>
              <p className="flex-grow text-lg mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(member.links).map(([type, url]) => (
                  <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="text-retro-blue hover:text-white transition-colors">
                    [{type.toUpperCase()}]
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
