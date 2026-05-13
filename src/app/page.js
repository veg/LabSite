import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen crt relative overflow-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl mb-6 text-retro-fg animate-pulse">
            SYSTEM_STARTUP
          </h1>
          <div className="max-w-3xl mx-auto">
            <Card title="MISSION_BRIEFING">
              <p className="mb-4">
                We develop statistical models and computational tools for comparative analysis of sequence data, 
                especially large and rich data sets from measurably evolving pathogens.
              </p>
              <p className="text-retro-green">
                STATUS: [RELIANCE_ON_EVOLUTIONARY_THEORY] = 100%
              </p>
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
