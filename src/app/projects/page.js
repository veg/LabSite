'use client';
import Card from '@/components/Card';
import projects from '@/data/projects.json';
import PageContainer from '@/components/PageContainer';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <PageContainer title="SOFTWARE_ARSENAL" titleColorClass="text-retro-blue">
      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map(project => (
          <div key={project.id} className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Character Portrait */}
            <div className="lg:col-span-4 flex flex-col">
              <div className={`aspect-square relative overflow-hidden flex-shrink-0 rounded-2xl ${
                theme === '2010s' ? 'hero-panel border-4' : 
                theme === '2000s' ? 'me-panel border-2' :
                theme === '90s' ? 'mgs-panel border-4' :
                theme === '2020s' ? 'bg-ai-sidebar shadow-ai border border-white/10' :
                'pixel-border border-4'
              }`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className={`w-full h-full object-cover transition-all ${
                      theme === '90s' ? 'filter brightness-90 sepia-[.3] hover:sepia-0' : 
                      theme === '2010s' ? 'filter contrast-125' : 
                      theme === '2020s' ? 'hover:scale-105' : ''
                    }`}
                    style={theme !== '2020s' ? { imageRendering: 'pixelated' } : {}}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-retro-green opacity-50 bg-black/20">
                    [DATA_EMPTY]
                  </div>
                )}
                {/* Class Badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 text-[10px] font-bold uppercase shadow-sm ${
                  theme === '2010s' ? 'bg-black text-hero-yellow skew-x-[-10deg]' :
                  theme === '2000s' ? 'bg-me-bg text-me-orange border border-me-orange/40' :
                  theme === '90s' ? 'bg-mgs-bg text-mgs-green border border-mgs-border' :
                  theme === '2020s' ? 'bg-ai-accent text-white rounded-md' :
                  'bg-black text-retro-amber border-2 border-retro-amber'
                }`}>
                  {project.class}
                </div>
              </div>
              
              {/* Visual Stat Bars */}
              <div className={`mt-4 space-y-3 p-4 border-2 rounded-xl ${
                theme === '2020s' ? 'bg-ai-sidebar border-white/5' : 
                'bg-black border-retro-green/30'
              }`}>
                {Object.entries(project.stats).slice(0, 3).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold opacity-70 uppercase tracking-tighter">
                      <span>{key}</span>
                      <span>{val}</span>
                    </div>
                    <div className="h-1.5 bg-black/40 rounded-full w-full overflow-hidden border border-white/5">
                      <div 
                        className={`h-full transition-all duration-1000 ${
                          theme === '2020s' ? 'bg-ai-accent' : 'bg-retro-green'
                        }`}
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
                  <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 border-b pb-4 ${
                    theme === '2020s' ? 'border-white/5' : 'border-retro-bg'
                  }`}>
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key}>
                        <span className={`block text-[10px] font-bold uppercase tracking-widest opacity-40 ${
                          theme === '2010s' ? 'text-hero-dark opacity-100' : ''
                        }`}>[{key}]</span>
                        <span className={`text-xl font-bold ${theme === '2010s' ? 'text-black' : ''}`}>{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className={`text-2xl leading-snug font-medium ${
                    theme === '2010s' ? 'text-black font-black italic' : 
                    theme === '2020s' ? 'text-slate-200' : 'font-mono'
                  }`}>
                    {project.description}
                  </p>

                  {/* Special Powers */}
                  <div className="space-y-4">
                    <h4 className={`font-bold text-xs border-l-4 pl-2 ${
                      theme === '2020s' ? 'text-ai-accent border-ai-accent' : 
                      'text-retro-blue border-retro-blue'
                    }`}>
                      SPECIAL_ABILITIES
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.powers.map(power => (
                        <div key={power.name} className={`p-3 border rounded-xl ${
                          theme === '2020s' ? 'bg-white/5 border-white/5' : 
                          'bg-retro-bg/50 border-retro-blue/30'
                        }`}>
                          <span className={`block font-bold text-[10px] mb-1 tracking-widest ${
                            theme === '2020s' ? 'text-ai-accent' : 'text-retro-blue'
                          }`}>
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
                      <a key={type} href={url} target="_blank" rel="noopener noreferrer" className={
                        theme === '2010s' ? 'hero-button text-xs' : 
                        theme === '2000s' ? 'me-button text-xs' :
                        theme === '2020s' ? 'bg-ai-accent hover:opacity-80 text-white px-6 py-2 rounded-full font-bold text-xs transition-all shadow-lg' :
                        'pixel-button text-xs'
                      }>
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
              <h4 className={`font-bold text-xs mb-4 border-l-4 pl-2 ${
                theme === '2020s' ? 'text-ai-accent border-ai-accent' : 'text-retro-amber border-retro-amber'
              }`}>
                STRATEGIC_COLLABORATIONS
              </h4>
              <div className="space-y-4 font-medium text-xl opacity-90">
                <p>
                  We are close collaborators with the <a href="https://usegalaxy.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline decoration-2 underline-offset-4 transition-colors font-bold">Galaxy Project</a>. 
                  Many of our tools are integrated into Galaxy&apos;s high-performance infrastructure, providing scalable, reproducible analysis for the global research community.
                </p>
              </div>
            </div>
            <div>
              <h4 className={`font-bold text-xs mb-4 border-l-4 pl-2 ${
                theme === '2020s' ? 'text-ai-accent border-ai-accent' : 'text-retro-green border-retro-green'
              }`}>
                ADDITIONAL_PROJECTS
              </h4>
              <div className="space-y-4 font-medium text-xl opacity-90">
                <p>
                  Our arsenal contains dozens of other utilities, libraries, and pipelines. From 
                  <strong> Bcell-Phylo</strong> to <strong>FLEA</strong>, we maintain a vast network 
                  of open-source repositories.
                </p>
                <div className="pt-2">
                  <a href="https://github.com/veg" target="_blank" rel="noopener noreferrer" className={
                    theme === '2020s' ? 'inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-bold text-xs transition-all' : 
                    'pixel-button text-xs'
                  }>
                    BROWSE_FULL_CATALOG_ON_GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
