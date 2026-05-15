'use client';
import members from '@/data/members.json';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';

export default function MembersPage() {
  const { theme } = useTheme();

  const getTitleColor = () => {
    switch(theme) {
      case '90s': return 'text-mgs-green';
      case '2000s': return 'text-me-orange';
      case 'y2k': return 'text-[#0066cc]';
      case 'geocities': return 'geo-rainbow';
      case 'profdr': return 'text-black';
      case 'enterprise': return 'text-[#007bff]';
      case 'vax': return 'text-[#33ff33]';
      case 'knuth': return 'text-black';
      case 'myspace': return 'text-[#00cccc]';
      case 'typewriter': return 'text-[#1a0f00]';
      case 'bios': return 'text-[#ffb000]';
      case 'macos': return 'text-black';
      case 'zelda': return 'text-[#f0c040]';
      case 'mario': return 'text-[#fcbc3c]';
      default: return 'text-retro-amber';
    }
  };

  return (
    <PageContainer title="LAB_TEAM" titleColorClass={getTitleColor()}>
      <div className={`grid gap-8 ${theme === 'knuth' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {members.map(member => (
          <Card key={member.id} title={member.name.toUpperCase()} className="flex flex-col h-full">
            <div className={`mb-4 relative h-48 w-full overflow-hidden ${
              theme === 'profdr' ? 'yahoo-inset' : 
              theme === 'knuth' ? 'border border-black max-w-[200px]' :
              theme === 'enterprise' ? 'bg-gray-100 border border-gray-200 rounded' :
              theme === 'vax' ? 'bg-black border border-[#33ff33]/30 flex items-center justify-center' :
              theme === 'myspace' ? 'border-2 border-[#00cccc]' :
              theme === 'typewriter' ? 'border border-[#2a1a0a] bg-[#f0e6d0]' :
              theme === 'bios' ? 'border border-[#ffb000] bg-black' :
              theme === 'macos' ? 'border border-black bg-white shadow-[2px_2px_0_#808080]' :
              theme === 'zelda' ? 'border-2 border-[#f0c040] bg-[#1a2c0a]' :
              theme === 'mario' ? 'border-4 border-black bg-[#c07028] shadow-[inset_-4px_-4px_0_#8c4a14]' :
              'bg-retro-blue border-2 border-retro-green rounded-lg'
            }`}>
              {member.image && theme !== 'vax' && theme !== 'bios' ? (
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className={`object-cover ${
                    theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' || theme === 'macos' || theme === 'typewriter' ? '' : 
                    theme === 'zelda' || theme === 'mario' || theme === '90s' ? 'filter brightness-90 contrast-125' :
                    'filter brightness-90 contrast-110'}`}
                  unoptimized
                />
              ) : (
                <div className={`w-full h-full flex flex-col items-center justify-center p-4 text-center ${
                  theme === 'profdr' || theme === 'enterprise' || theme === 'knuth' || theme === 'macos' || theme === 'typewriter' ? 'text-black opacity-20' : 
                  theme === 'vax' ? 'text-[#33ff33] font-mono text-[10px] leading-tight' :
                  theme === 'bios' ? 'text-[#ffb000] font-mono text-xs' :
                  theme === 'zelda' ? 'text-[#f0c040] opacity-50' :
                  theme === 'mario' ? 'text-white opacity-50' :
                  'text-retro-green opacity-50 bg-black/20'
                }`}>
                  {theme === 'vax' || theme === 'bios' ? (
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
              theme === 'knuth' ? 'font-bold mb-1' :
              theme === 'enterprise' ? 'text-[#6c757d] font-bold text-xs mb-2 uppercase tracking-wider' :
              theme === 'vax' ? 'text-[#33ff33] font-bold text-xs mb-2 underline tracking-widest' :
              theme === 'myspace' ? 'text-[#00cccc] font-bold mb-1' :
              theme === 'typewriter' ? 'text-[#1a0f00] font-bold underline mb-1' :
              theme === 'bios' ? 'text-[#ffd060] font-bold mb-1' :
              theme === 'macos' ? 'text-black font-bold mb-1' :
              theme === 'zelda' ? 'text-[#f0c040] font-bold mb-1' :
              theme === 'mario' ? 'text-[#fcbc3c] font-bold mb-1 drop-shadow-[1px_1px_0_#000]' :
              'text-retro-green font-bold text-xs mb-2 uppercase tracking-widest'
            }`}>{member.title}</p>
            <p className={`flex-grow mb-4 ${
              theme === 'profdr' ? 'text-sm leading-tight' : 
              theme === 'knuth' ? 'text-sm mb-4' :
              theme === 'enterprise' ? 'text-sm text-[#212529] leading-normal' :
              theme === 'vax' ? 'text-sm text-[#33ff33] leading-relaxed' :
              theme === 'myspace' ? 'text-sm text-[#aaddee]' :
              theme === 'typewriter' ? 'text-sm text-[#2a1a0a] leading-relaxed' :
              theme === 'bios' ? 'text-sm text-[#ffb000]' :
              theme === 'macos' ? 'text-xs text-black' :
              theme === 'zelda' ? 'text-[10px] text-[#a8d840] leading-loose' :
              theme === 'mario' ? 'text-[10px] text-white leading-loose drop-shadow-[1px_1px_0_#000]' :
              'text-lg opacity-90'
            }`}>{member.bio}</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(member.links).map(([type, url]) => (
                <a key={type} href={url} target="_blank" rel="noopener noreferrer" className={
                  theme === 'profdr' ? 'yahoo-button' : 
                  theme === 'knuth' ? 'underline mr-4' :
                  theme === 'enterprise' ? 'btn-secondary enterprise-button !text-[10px] !py-1' :
                  theme === 'vax' ? 'vax-button !text-[9px] !py-1' :
                  theme === 'myspace' ? 'text-[#00eeff] underline text-xs font-bold' :
                  theme === 'typewriter' ? 'text-[#2a1a0a] underline text-xs' :
                  theme === 'bios' ? 'border border-[#ffb000] px-2 py-1 text-[9px] text-[#ffb000]' :
                  theme === 'macos' ? 'mac-button !text-[9px] !py-1' :
                  theme === 'zelda' ? 'text-[#f0c040] underline text-[9px]' :
                  theme === 'mario' ? 'text-[#fcbc3c] underline text-[9px] drop-shadow-[1px_1px_0_#000]' :
                  'text-blue-500 hover:underline transition-colors text-xs font-bold uppercase tracking-tighter'
                }>
                  {theme === 'profdr' || theme === 'enterprise' || theme === 'vax' || theme === 'knuth' || theme === 'macos' || theme === 'bios' ? type.toUpperCase() : `[${type}]`}
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
