'use client';
import members from '@/data/members.json';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';

export default function MembersPage() {
  const { theme } = useTheme();

  return (
    <PageContainer title="LAB_TEAM" titleColorClass="text-retro-amber">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(member => (
          <Card key={member.id} title={member.name.toUpperCase()} className="flex flex-col h-full">
            <div className={`mb-4 relative h-48 w-full overflow-hidden ${
              theme === 'profdr' ? 'yahoo-inset' : 
              theme === 'enterprise' ? 'bg-gray-100 border border-gray-200 rounded' :
              theme === 'vax' ? 'bg-black border border-[#33ff33]/30 flex items-center justify-center' :
              'bg-retro-blue border-2 border-retro-green rounded-lg'
            }`}>
              {member.image && theme !== 'vax' ? (
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className={`object-cover ${theme === 'profdr' || theme === 'enterprise' ? '' : 'filter brightness-90 contrast-110'}`}
                  unoptimized
                />
              ) : (
                <div className={`w-full h-full flex flex-col items-center justify-center p-4 text-center ${
                  theme === 'profdr' || theme === 'enterprise' ? 'text-black opacity-20' : 
                  theme === 'vax' ? 'text-[#33ff33] font-mono text-[10px] leading-tight' :
                  'text-retro-green opacity-50 bg-black/20'
                }`}>
                  {theme === 'vax' ? (
                    <>
                      <div className="mb-2">+-----------+</div>
                      <div>| NO PHOTO  |</div>
                      <div className="mt-2 text-[8px] opacity-40">USER_ID: {member.id.toUpperCase()}</div>
                    </>
                  ) : '[NO_IMAGE]'}
                </div>
              )}
            </div>
            <p className={`${
              theme === 'profdr' ? 'text-blue-800 font-bold mb-1 underline' : 
              theme === 'enterprise' ? 'text-[#6c757d] font-bold text-xs mb-2 uppercase tracking-wider' :
              theme === 'vax' ? 'text-[#33ff33] font-bold text-xs mb-2 underline tracking-widest' :
              'text-retro-green font-bold text-xs mb-2 uppercase tracking-widest'
            }`}>{member.title}</p>
            <p className={`flex-grow mb-4 ${
              theme === 'profdr' ? 'text-sm leading-tight' : 
              theme === 'enterprise' ? 'text-sm text-[#212529] leading-normal' :
              theme === 'vax' ? 'text-sm text-[#33ff33] leading-relaxed' :
              'text-lg opacity-90'
            }`}>{member.bio}</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(member.links).map(([type, url]) => (
                <a key={type} href={url} target="_blank" rel="noopener noreferrer" className={
                  theme === 'profdr' ? 'yahoo-button' : 
                  theme === 'enterprise' ? 'btn-secondary enterprise-button !text-[10px] !py-1' :
                  theme === 'vax' ? 'vax-button !text-[9px] !py-1' :
                  'text-blue-500 hover:underline transition-colors text-xs font-bold uppercase tracking-tighter'
                }>
                  {theme === 'profdr' || theme === 'enterprise' || theme === 'vax' ? type.toUpperCase() : `[${type}]`}
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
