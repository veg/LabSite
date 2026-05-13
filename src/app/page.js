import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen crt relative overflow-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <section className="mb-16 text-center">
          <div className="inline-block border-4 border-retro-green p-4 mb-6 max-w-full">
            <h1 className="text-xl md:text-4xl lg:text-5xl text-retro-fg leading-tight">
              ACME_LAB:<br/>
              <span className="text-lg md:text-3xl lg:text-4xl">COMPUTATIONAL_MOLECULAR_EVOLUTION</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto px-2">
            <h2 className="text-base md:text-xl lg:text-2xl mb-8 text-retro-amber font-heading leading-relaxed">
              STATISTICAL_MODELS & SOFTWARE_TOOLS<br className="md:hidden" /> FOR PATHOGEN_ANALYSIS
            </h2>
            
            <Card title="MISSION_OVERVIEW">
              <p className="mb-4 text-left">
                We develop high-performance computational tools for the comparative analysis of sequence data. 
                Our research focuses on <strong>measurably evolving pathogens</strong>, creating scalable 
                solutions for molecular epidemiology, viral dynamics, and natural selection inference.
              </p>
              <div className="text-retro-green text-sm md:text-base border-t border-retro-bg pt-4 mt-4 flex justify-between items-center">
                <span>[SECTOR]: BIOINFORMATICS</span>
                <span>[LOCATION]: TEMPLE_UNIVERSITY</span>
                <span>[STATUS]: ACTIVE</span>
              </div>
            </Card>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card title="CORE_COMPETENCIES">
            <ul className="list-none space-y-2">
              <li>{">"} MOLECULAR_EPIDEMIOLOGY</li>
              <li>{">"} VIRAL_DYNAMICS</li>
              <li>{">"} PHYLOGENETIC_METHODS</li>
              <li>{">"} HIGH_PERFORMANCE_COMPUTING</li>
              <li>{">"} DATA_VISUALIZATION</li>
            </ul>
          </Card>

          <Card title="EQUIPMENT_LIST">
            <p className="mb-4">Our lab maintains a suite of open-source tools utilized by researchers worldwide:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="pixel-button text-sm">HYPHY</Link>
              <Link href="/projects" className="pixel-button text-sm">DATAMONKEY</Link>
              <Link href="/projects" className="pixel-button text-sm">HIV-TRACE</Link>
            </div>
          </Card>
        </section>

        <section className="text-center">
          <div className="inline-block pixel-border p-8 bg-black">
            <h2 className="text-2xl mb-6">SELECT_DESTINATION</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center font-heading">
              <Link href="/members" className="text-retro-amber hover:text-white transition-colors">{">"} MEET_THE_TEAM</Link>
              <Link href="/projects" className="text-retro-blue hover:text-white transition-colors">{">"} EXPLORE_PROJECTS</Link>
              <Link href="/papers" className="text-retro-purple hover:text-white transition-colors">{">"} READ_RESEARCH</Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-20 p-8 border-t-4 border-retro-green text-center font-body text-xl">
        <p>© 2026 ACME_LAB // RE-DESIGNED FOR THE_NEXT_DECADE</p>
        <p className="text-retro-blue">INSTITUTE_FOR_GENOMICS_AND_EVOLUTIONARY_MEDICINE // TEMPLE_UNIVERSITY</p>
      </footer>
    </main>
  );
}
