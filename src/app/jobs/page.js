'use client';
import jobs from '@/data/jobs.json';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

export default function JobsPage() {
  const { theme } = useTheme();

  // Themes that read better with serif/document styling rather than the default mono/retro look.
  const isDoc = theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' || theme === 'macos' || theme === 'typewriter';

  const bodyClass = isDoc ? 'font-serif text-base leading-relaxed' :
    (theme === 'vax' || theme === 'bios') ? 'font-mono text-sm leading-relaxed' :
    (theme === 'zelda' || theme === 'mario') ? 'text-[12px] leading-loose' :
    'text-lg leading-relaxed';

  const headingClass = `font-bold text-xs uppercase tracking-widest border-l-4 pl-2 mb-3 ${
    theme === 'profdr' ? 'text-blue-800 border-blue-800' :
    theme === 'enterprise' ? 'text-[#007bff] border-[#007bff]' :
    theme === 'knuth' || theme === 'macos' || theme === 'typewriter' ? 'text-black border-black' :
    theme === 'vax' || theme === 'bios' ? 'text-inherit border-current' :
    theme === '2020s' ? 'text-ai-accent border-ai-accent' :
    theme === '2010s' ? 'text-black border-hero-yellow' :
    theme === '2000s' ? 'text-me-orange border-me-orange' :
    theme === '90s' ? 'text-mgs-green border-mgs-green' :
    theme === 'y2k' ? 'text-[#0066cc] border-[#0066cc]' :
    theme === 'myspace' ? 'text-[#00cccc] border-[#00cccc]' :
    theme === 'geocities' ? 'text-[#ff00ff] border-[#ff00ff]' :
    theme === 'zelda' ? 'text-[#f0c040] border-[#f0c040]' :
    theme === 'mario' ? 'text-[#fcbc3c] border-[#fcbc3c]' :
    'text-retro-amber border-retro-amber'
  }`;

  const buttonClass = theme === 'profdr' ? 'yahoo-button' :
    theme === 'knuth' ? 'underline' :
    theme === 'enterprise' ? 'btn-primary enterprise-button text-xs' :
    theme === 'vax' || theme === 'bios' ? 'vax-button text-xs' :
    theme === '2010s' ? 'hero-button text-xs' :
    theme === '2000s' ? 'me-button text-xs' :
    theme === '2020s' ? 'bg-ai-accent hover:opacity-80 text-white px-6 py-2 rounded-full font-bold text-xs transition-all shadow-lg' :
    theme === 'macos' ? 'mac-button text-xs' :
    'pixel-button text-xs';

  // Render a paragraph, turning any occurrence of an apply email into a mailto link.
  const renderParagraph = (text, email, key) => {
    if (email && text.includes(email)) {
      const [before, after] = text.split(email);
      return (
        <p key={key} className={`${bodyClass} mb-4 last:mb-0`}>
          {before}
          <a href={`mailto:${email}`} className={isDoc ? 'text-blue-700 underline' : 'underline hover:opacity-80'}>{email}</a>
          {after}
        </p>
      );
    }
    return <p key={key} className={`${bodyClass} mb-4 last:mb-0`}>{text}</p>;
  };

  return (
    <PageContainer title="OPEN_POSITIONS" titleColorClass="text-retro-amber">
      <p className={`text-center mb-12 opacity-80 ${isDoc ? 'font-serif text-lg italic' : 'font-heading text-sm'}`}>
        {isDoc ? 'Open faculty and research positions in the ACME Lab.' : '[CURRENT_OPENINGS_AND_FACULTY_SEARCHES]'}
      </p>

      <div className="max-w-4xl mx-auto space-y-10">
        {jobs.map(job => (
          <Card key={job.id} title={job.title}>
            <div className="space-y-6">
              {/* Tagline + status */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className={`${bodyClass} font-bold flex-1`}>{job.tagline}</p>
                {job.status && (
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${
                    theme === 'profdr' ? 'bg-white border border-gray-400 text-blue-800' :
                    theme === 'enterprise' ? 'bg-[#28a745] text-white rounded' :
                    theme === 'knuth' || theme === 'macos' ? 'bg-black text-white' :
                    theme === 'vax' || theme === 'bios' ? 'border border-current text-inherit' :
                    'bg-retro-green/20 text-retro-green border border-retro-green'
                  }`}>
                    {job.status}
                  </span>
                )}
              </div>

              {/* Meta grid */}
              {job.meta && (
                <div className={`grid sm:grid-cols-2 gap-x-8 gap-y-2 border-y py-4 ${
                  isDoc ? 'border-gray-200' :
                  theme === 'vax' || theme === 'bios' ? 'border-current/30' :
                  'border-white/10'
                }`}>
                  {Object.entries(job.meta).map(([label, value]) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{label}</span>
                      <span className={isDoc ? 'font-serif' : 'font-medium'}>{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Sections */}
              <div className="space-y-8">
                {job.sections.map(section => (
                  <div key={section.heading}>
                    <h4 className={headingClass}>{section.heading}</h4>
                    {section.body && section.body.map((para, i) => renderParagraph(para, job.applyEmail, i))}
                    {section.subsections && (
                      <div className="space-y-4">
                        {section.subsections.map(sub => (
                          <div key={sub.label}>
                            <span className={`block font-bold text-sm mb-1 ${isDoc ? '' : 'uppercase tracking-wide opacity-90'}`}>
                              {sub.label}:
                            </span>
                            {sub.body.map((para, i) => renderParagraph(para, job.applyEmail, i))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Apply call to action */}
              {job.applyEmail && (
                <div className={`pt-6 mt-2 border-t ${
                  isDoc ? 'border-gray-200' :
                  theme === 'vax' || theme === 'bios' ? 'border-current/30' :
                  'border-white/10'
                }`}>
                  {job.applyNote && <p className={`${bodyClass} mb-4 opacity-80`}>{job.applyNote}</p>}
                  <a href={`mailto:${job.applyEmail}?subject=${encodeURIComponent('Application — ' + job.title)}`} className={buttonClass}>
                    {isDoc ? `Apply by email (${job.applyEmail})` : `APPLY :: ${job.applyEmail.toUpperCase()}`}
                  </a>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/" className={buttonClass}>
          {isDoc ? 'Return Home' : 'RETURN_HOME'}
        </Link>
      </div>
    </PageContainer>
  );
}
