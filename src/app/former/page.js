'use client';
import formerMembers from '@/data/former.json';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

export default function FormerMembersPage() {
  const { theme } = useTheme();
  const separator = " // ";
  
  return (
    <PageContainer title="LAB_ALUMNI" titleColorClass="text-retro-amber">
      <p className={`text-center mb-12 opacity-80 ${theme === 'profdr' ? 'font-serif text-lg italic' : 'font-heading text-sm'}`}>
        {theme === 'profdr' ? 'Historical record of past contributors and researchers.' : '[PAST_CONTRIBUTORS_AND_RESEARCHERS]'}
      </p>
      
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {formerMembers.map(member => (
            <Card key={member.id} title={member.name.toUpperCase()}>
              <div className="flex flex-col gap-2">
                <p className={`${theme === 'profdr' ? 'text-blue-800 font-bold mb-1 underline text-xs' : 'font-heading text-[10px] opacity-80'}`}>
                  {member.title}{theme === 'profdr' ? ` (${member.years})` : `${separator}${member.years}`}
                </p>
                <p className={`${theme === 'profdr' ? 'text-sm' : 'text-lg'}`}>
                  <span className="opacity-60">{theme === 'profdr' ? 'Next Destination:' : '[NEXT_STATION]:'}</span> {member.next}
                </p>
                <div className={`flex flex-wrap gap-3 mt-2 pt-2 ${theme === 'profdr' ? 'border-t border-gray-100' : 'border-t border-white/10'}`}>
                  {Object.entries(member.links).map(([type, url]) => (
                    <a 
                      key={type} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={theme === 'profdr' ? 'yahoo-button' : 'opacity-70 hover:opacity-100 hover:underline text-sm transition-all'}
                    >
                      {theme === 'profdr' ? type.toUpperCase() : `[${type.toUpperCase()}]`}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/members" className={theme === 'profdr' ? 'yahoo-button' : 'pixel-button text-xs'}>
          {theme === 'profdr' ? 'Return to Current Team' : 'RETURN_TO_CURRENT_TEAM'}
        </Link>
      </div>
    </PageContainer>
  );
}
