'use client';
import Card from '@/components/Card';
import projects from '@/data/projects.json';
import PageContainer from '@/components/PageContainer';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <PageContainer title="SOFTWARE_ARSENAL" titleColorClass="text-retro-blue">
      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map(project => (
          <div key={project.id} className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col">
              <div className={`aspect-square relative overflow-hidden flex-shrink-0 ${
                theme === 'profdr' ? 'yahoo-inset' :
                theme === 'knuth' ? 'border border-black max-w-[200px]' :
                theme === 'enterprise' ? 'bg-gray-100 border border-gray-200 rounded-lg shadow-sm' :
                theme === 'vax' ? 'bg-black border border-[#33ff33] flex items-center justify-center p-8 text-center' :
                theme === '2010s' ? 'hero-panel border-4 rounded-2xl' : 
                theme === '2000s' ? 'me-panel border-2 rounded-2xl' :
                theme === '90s' ? 'mgs-panel border-4 rounded-2xl' :
                theme === '2020s' ? 'bg-ai-sidebar shadow-ai border border-white/10 rounded-2xl' :
                'pixel-border border-4 rounded-2xl'
              }`}>
                {project.image && theme !== 'vax' ? (
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    className={`object-cover transition-all ${
                      theme === '90s' ? 'filter brightness-90 sepia-[.3] hover:sepia-0' : 
                      theme === '2010s' ? 'filter contrast-125' : 
                      theme === 'knuth' ? '' :
                      theme === '2020s' ? 'hover:scale-105' : ''
                    }`}
                    unoptimized
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' ? 'text-black opacity-20' : 
                    theme === 'vax' ? 'text-[#33ff33] font-mono text-xs leading-tight' :
                    'text-retro-green opacity-50 bg-black/20'
                  }`}>
                    {theme === 'vax' ? (
                      <div>
                        [ VISUAL DATA ]<br/>
                        [ UNAVAILABLE ]<br/>
                        <br/>
                        REASON: 2048KB<br/>
                        MEMORY LIMIT
                      </div>
                    ) : '[DATA_EMPTY]'}
                  </div>
                )}
                {/* Class Badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 text-[10px] font-bold uppercase shadow-sm ${
                  theme === 'profdr' ? 'bg-white border border-gray-400 text-blue-800' :
                  theme === 'knuth' ? 'bg-black text-white' :
                  theme === 'enterprise' ? 'bg-[#007bff] text-white rounded' :
                  theme === 'vax' ? 'bg-black text-[#33ff33] border border-[#33ff33] font-mono' :
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
              <div className={`mt-4 space-y-3 p-4 border-2 ${
                theme === 'profdr' ? 'yahoo-bevel border-none' :
                theme === 'knuth' ? 'border-black' :
                theme === 'enterprise' ? 'bg-white border-gray-200 rounded-lg shadow-sm' :
                theme === 'vax' ? 'bg-black border border-[#33ff33] font-mono' :
                theme === '2020s' ? 'bg-ai-sidebar border-white/5 rounded-xl' : 
                theme === '2010s' ? 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl' :
                'bg-black border-retro-green/30 rounded-xl'
              }`}>
                {(theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth') && <div className={`text-[10px] font-bold border-b mb-2 pb-1 ${
                  theme === 'profdr' ? 'border-gray-400 text-black' : 
                  theme === 'knuth' ? 'border-black text-black' :
                  theme === 'vax' ? 'border-[#33ff33]/30 text-[#33ff33]' :
                  'border-gray-100 text-[#6c757d]'
                }`}>PROJECT_METRICS</div>}
                {Object.entries(project.stats).slice(0, 3).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <div className={`flex justify-between text-[10px] font-bold opacity-70 uppercase tracking-tighter ${
                      theme === '2010s' || theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? 'text-inherit opacity-100' : ''
                    }`}>
                      <span>{key}</span>
                      <span>{val}</span>
                    </div>
                    {theme === 'vax' ? (
                       <div className="text-[10px] flex font-mono tracking-tighter">
                          <span>[</span>
                          <span className="flex-grow">
                             {"|".repeat(Math.floor((typeof val === 'number' ? val : 100) / 10))}
                             {".".repeat(10 - Math.floor((typeof val === 'number' ? val : 100) / 10))}
                          </span>
                          <span>]</span>
                       </div>
                    ) : (
                      <div className={`h-1.5 w-full overflow-hidden border ${
                        theme === 'profdr' ? 'bg-white border-gray-400' :
                        theme === 'knuth' ? 'bg-white border-black' :
                        theme === 'enterprise' ? 'bg-gray-100 border-gray-200 rounded' :
                        theme === '2010s' ? 'bg-black/10 border-black/20 rounded-full' : 
                        'bg-black/40 border-white/5 rounded-full'
                      }`}>
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' ? 'bg-black' :
                            theme === '2020s' ? 'bg-ai-accent' : 
                            theme === '2010s' ? 'bg-hero-yellow' :
                            'bg-retro-green'
                          }`}
                          style={{ width: `${typeof val === 'number' ? val : 100}%` }}
                        />
                      </div>
                    )}
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
                    theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' ? 'border-gray-100' :
                    theme === 'vax' ? 'border-[#33ff33]/30' :
                    theme === '2020s' ? 'border-white/5' : 
                    theme === '2010s' ? 'border-black/20' :
                    'border-retro-bg'
                  }`}>
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key}>
                        <span className={`block text-[10px] font-bold uppercase tracking-widest opacity-40 ${
                          theme === '2010s' || theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? 'text-inherit opacity-60' : ''
                        }`}>[{key}]</span>
                        <span className={`text-xl font-bold ${
                          theme === '2010s' || theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? 'text-inherit' : ''
                        }`}>{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className={`text-2xl leading-snug font-medium ${
                    theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' ? 'font-serif text-black' :
                    theme === 'vax' ? 'font-mono text-[#33ff33]' :
                    theme === '2010s' ? 'text-black font-black italic' : 
                    theme === '2020s' ? 'text-slate-200' : 'font-mono'
                  }`}>
                    {project.description}
                  </p>

                  {/* Special Powers */}
                  <div className="space-y-4">
                    <h4 className={`font-bold text-xs border-l-4 pl-2 ${
                      theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' ? 'text-black border-black' :
                      theme === 'vax' ? 'text-[#33ff33] border-[#33ff33]' :
                      theme === '2020s' ? 'text-ai-accent border-ai-accent' : 
                      theme === '2010s' ? 'text-black border-hero-yellow' :
                      'text-retro-blue border-retro-blue'
                    }`}>
                      SPECIAL_ABILITIES
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.powers.map(power => (
                        <div key={power.name} className={`p-3 border ${
                          theme === 'profdr' ? 'yahoo-bevel border-none' :
                          theme === 'knuth' ? 'bg-white border-black' :
                          theme === 'enterprise' ? 'bg-[#f8f9fa] border-[#dee2e6] rounded-md' :
                          theme === 'vax' ? 'bg-black border border-[#33ff33]/30 font-mono' :
                          theme === '2020s' ? 'bg-white/5 border-white/5 rounded-xl' : 
                          theme === '2010s' ? 'bg-hero-yellow/10 border-black/20 rounded-xl' :
                          'bg-retro-bg/50 border-retro-blue/30 rounded-xl'
                        }`}>
                          <span className={`block font-bold text-[10px] mb-1 tracking-widest ${
                            theme === 'profdr' ? 'text-blue-800 underline' :
                            theme === 'knuth' ? 'text-black font-bold' :
                            theme === 'enterprise' ? 'text-[#007bff]' :
                            theme === 'vax' ? 'text-[#33ff33] underline' :
                            theme === '2020s' ? 'text-ai-accent' : 
                            theme === '2010s' ? 'text-black' :
                            'text-retro-blue'
                          }`}>
                            {power.name}
                          </span>
                          <span className={`text-sm opacity-80 leading-tight block ${
                            theme === '2010s' || theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? 'text-inherit opacity-70' : ''
                          }`}>
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
                        theme === 'profdr' ? 'yahoo-button' :
                        theme === 'knuth' ? 'underline mr-4' :
                        theme === 'enterprise' ? 'btn-primary enterprise-button text-[10px]' :
                        theme === 'vax' ? 'vax-button text-[10px]' :
                        theme === '2010s' ? 'hero-button text-xs' : 
                        theme === '2000s' ? 'me-button text-xs' :
                        theme === '2020s' ? 'bg-ai-accent hover:opacity-80 text-white px-6 py-2 rounded-full font-bold text-xs transition-all shadow-lg' :
                        'pixel-button text-xs'
                      }>
                        {theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? type.toUpperCase() : type === 'github' ? 'ACCESS_SOURCE' : `DEPLOY_${type.toUpperCase()}`}
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
                theme === 'enterprise' ? 'text-[#007bff] border-[#007bff]' :
                theme === 'knuth' ? 'text-black border-black' :
                theme === 'vax' ? 'text-[#33ff33] border-[#33ff33]' :
                theme === '2020s' ? 'text-ai-accent border-ai-accent' : 'text-retro-amber border-retro-amber'
              }`}>
                STRATEGIC_COLLABORATIONS
              </h4>
              <div className={`space-y-4 font-medium text-xl opacity-90 ${
                theme === 'enterprise' || theme === 'knuth' ? 'text-sm text-[#212529]' : 
                theme === 'vax' ? 'text-sm text-[#33ff33]' : ''
              }`}>
                <p>
                  We are close collaborators with the <a href="https://usegalaxy.org" target="_blank" rel="noopener noreferrer" className={`${
                    theme === 'vax' || theme === 'knuth' ? 'underline' : 'text-blue-500 hover:underline decoration-2 underline-offset-4'
                  } transition-colors font-bold`}>Galaxy Project</a>. 
                  Many of our tools are integrated into Galaxy&apos;s high-performance infrastructure, providing scalable, reproducible analysis for the global research community.
                </p>
              </div>
            </div>
            <div>
              <h4 className={`font-bold text-xs mb-4 border-l-4 pl-2 ${
                theme === 'enterprise' ? 'text-[#007bff] border-[#007bff]' :
                theme === 'knuth' ? 'text-black border-black' :
                theme === 'vax' ? 'text-[#33ff33] border-[#33ff33]' :
                theme === '2020s' ? 'text-ai-accent border-ai-accent' : 'text-retro-green border-retro-green'
              }`}>
                ADDITIONAL_PROJECTS
              </h4>
              <div className={`space-y-4 font-medium text-xl opacity-90 ${
                theme === 'enterprise' || theme === 'knuth' ? 'text-sm text-[#212529]' : 
                theme === 'vax' ? 'text-sm text-[#33ff33]' : ''
              }`}>
                <p>
                  Our arsenal contains dozens of other utilities, libraries, and pipelines. From 
                  <strong> Bcell-Phylo</strong> to <strong>FLEA</strong>, we maintain a vast network 
                  of open-source repositories.
                </p>
                <div className="pt-2">
                  <a href="https://github.com/veg" target="_blank" rel="noopener noreferrer" className={
                    theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? (theme === 'vax' ? 'DIR REPOS.LOG' : 'Browse Catalog on GitHub') : 'BROWSE_FULL_CATALOG_ON_GITHUB'
                  }>
                    {theme === 'enterprise' || theme === 'vax' || theme === 'knuth' ? (theme === 'vax' ? 'DIR REPOS.LOG' : 'Browse Catalog on GitHub') : 'BROWSE_FULL_CATALOG_ON_GITHUB'}
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
