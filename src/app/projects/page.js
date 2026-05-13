import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import projects from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen crt relative overflow-hidden pb-20">
      <Navbar />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl mb-12 text-center text-retro-blue">SOFTWARE_ARSENAL</h1>
        
        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map(project => (
            <div key={project.id} className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Character Portrait */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="pixel-border aspect-square relative bg-retro-bg overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover filter brightness-90 sepia-[.3] hover:sepia-0 transition-all"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-retro-green opacity-50 bg-black">
                      [DATA_CORRUPT]
                    </div>
                  )}
                  {/* Class Badge */}
                  <div className="absolute top-4 right-4 bg-black border-2 border-retro-amber px-2 py-1 text-[10px] font-heading text-retro-amber shadow-retro">
                    {project.class}
                  </div>
                </div>
                
                {/* Visual Stat Bars */}
                <div className="mt-4 space-y-3 bg-black p-4 border-2 border-retro-green/30">
                  {Object.entries(project.stats).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-heading text-retro-green">
                        <span>{key.toUpperCase()}</span>
                        <span>{val}</span>
                      </div>
                      <div className="h-2 bg-retro-bg border border-retro-green/50 w-full overflow-hidden">
                        <div 
                          className="h-full bg-retro-green" 
                          style={{ width: `${typeof val === 'number' ? val : 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Card */}
              <div className="lg:col-span-8">
                <Card title={project.name.toUpperCase()} className="h-full">
                  <div className="space-y-6">
                    {/* Attributes */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-b-2 border-retro-bg pb-4">
                      {Object.entries(project.stats).map(([key, val]) => (
                        <div key={key}>
                          <span className="block text-[10px] font-heading text-retro-amber">[{key.toUpperCase()}]</span>
                          <span className="text-xl text-retro-fg">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-2xl leading-snug font-mono text-retro-fg/90">
                      {project.description}
                    </p>

                    {/* Special Powers */}
                    <div className="space-y-4">
                      <h4 className="font-heading text-xs text-retro-blue border-l-4 border-retro-blue pl-2">
                        SPECIAL_ABILITIES
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.powers.map(power => (
                          <div key={power.name} className="bg-retro-bg/50 p-3 border border-retro-blue/30 rounded-sm">
                            <span className="block font-heading text-[10px] text-retro-blue mb-1">
                              {power.name}
                            </span>
                            <span className="text-sm opacity-80 leading-tight block">
                              {power.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {Object.entries(project.links).map(([type, url]) => (
                        <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="pixel-button text-xs">
                          {type === 'github' ? 'ACCESS_SOURCE' : `DEPLOY_${type.toUpperCase()}`}
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Collaborations & Other Projects */}
        <div className="mt-24 max-w-6xl mx-auto">
          <Card title="ALLIED_FORCES & MINOR_UTILITIES">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-xs text-retro-amber mb-4 border-l-4 border-retro-amber pl-2">
                  STRATEGIC_COLLABORATIONS
                </h4>
                <div className="space-y-4 font-body text-xl">
                  <p>
                    We are close collaborators with the <a href="https://usegalaxy.org" target="_blank" rel="noopener noreferrer" className="text-retro-blue hover:text-white underline decoration-2 underline-offset-4 transition-colors">Galaxy Project</a>. 
                    Many of our tools are integrated into Galaxy's high-performance infrastructure, providing scalable, reproducible analysis for the global research community.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xs text-retro-green mb-4 border-l-4 border-retro-green pl-2">
                  ADDITIONAL_PROJECTS
                </h4>
                <div className="space-y-4 font-body text-xl">
                  <p>
                    Our arsenal contains dozens of other utilities, libraries, and pipelines. From 
                    <strong> Bcell-Phylo</strong> to <strong>FLEA</strong>, we maintain a vast network 
                    of open-source repositories.
                  </p>
                  <div className="pt-2">
                    <a href="https://github.com/veg" target="_blank" rel="noopener noreferrer" className="pixel-button text-xs">
                      BROWSE_FULL_CATALOG_ON_GITHUB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
