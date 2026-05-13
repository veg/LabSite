import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black border-b-4 border-retro-green p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="font-heading text-lg md:text-2xl text-retro-green hover:text-white transition-colors">
          ACME_LAB
        </Link>
        <div className="flex gap-6 font-heading text-[10px] md:text-sm">
          <Link href="/projects" className="hover:text-white transition-colors">PROJECTS</Link>
          <Link href="/members" className="hover:text-white transition-colors">TEAM</Link>
          <Link href="/former" className="hover:text-white transition-colors">ALUMNI</Link>
          <Link href="/papers" className="hover:text-white transition-colors">PAPERS</Link>
        </div>
      </div>
    </nav>
  );
}
