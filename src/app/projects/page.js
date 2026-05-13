import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import projects from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen crt relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-12 text-center text-retro-blue">SOFTWARE_ARSENAL</h1>
        
        <div className="space-y-12">
          {projects.map(project => (
            <div key={project.id} className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="pixel-border aspect-square relative bg-retro-purple overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover filter brightness-75 grayscale hover:grayscale-0 transition-all"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-retro-green opacity-50">
                      [DATA_CORRUPT]
                    </div>
                  )}
                </div>
              </div>
              <Card title={project.name.toUpperCase()} className="md:col-span-2 h-full">
                <p className="text-retro-amber font-heading text-[10px] mb-2">{project.type}</p>
                <p className="text-2xl mb-4 font-mono">{project.description}</p>
                {project.longDescription && (
                  <p className="mb-6 opacity-80 italic">{project.longDescription}</p>
                )}
                <div className="flex flex-wrap gap-4">
                  {Object.entries(project.links).map(([type, url]) => (
                    <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="pixel-button text-xs">
                      GO_TO_{type.toUpperCase()}
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
