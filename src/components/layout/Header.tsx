'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/projects', label: 'Projects' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/shop', label: 'Shop' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#00ff88]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center group-hover:bg-[#00ff88]/20 group-hover:border-[#00ff88]/50 transition-all duration-300">
              <span className="text-[#00ff88] font-bold text-lg font-mono">X</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#00ff88] transition-colors duration-300">
              XELFORO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-[#00ff88] rounded-lg hover:bg-[#00ff88]/5 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00ff88] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/games/xelforo"
              className="px-5 py-2.5 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border border-[#00ff88]/30 hover:border-[#00ff88]/60 text-[#00ff88] text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
            >
              Play Beta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0a]/98 backdrop-blur-md border-t border-[#00ff88]/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-[#00ff88] hover:bg-[#00ff88]/5 rounded-lg transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#00ff88]/10">
            <Link
              href="/games/xelforo"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border border-[#00ff88]/30 text-[#00ff88] font-medium rounded-lg transition-all duration-300"
            >
              Play Beta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
