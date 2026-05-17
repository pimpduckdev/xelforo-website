import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-sm font-semibold text-[#1a1a1a]">Andrew Groves</Link>
            <p className="text-sm text-[#9ca3af] mt-1">Software engineer & game developer</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="text-sm text-[#6b7280] hover:text-[#1a1a1a] transition-colors">Projects</Link>
            <Link href="/tutorials" className="text-sm text-[#6b7280] hover:text-[#1a1a1a] transition-colors">Tutorials</Link>
            <Link href="/about" className="text-sm text-[#6b7280] hover:text-[#1a1a1a] transition-colors">About</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
          <p className="text-xs text-[#9ca3af]">© {new Date().getFullYear()} Andrew Groves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
