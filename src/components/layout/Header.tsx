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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#4a9eff]/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-md bg-[#4a9eff]/10 border border-[#4a9eff]/20 flex items-center justify-center group-hover:bg-[#4a9eff]/20 transition-all duration-300">
              <span className="text-[#4a9eff] font-bold text-sm font-mono">X</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white group-hover:text-[#4a9eff] transition-colors duration-300">
              xelforo
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#8b8fa3] hover:text-white rounded-md hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/games/xelforo"
              className="px-4 py-2 bg-[#4a9eff]/10 hover:bg-[#4a9eff]/20 border border-[#4a9eff]/25 text-[#4a9eff] text-sm font-medium rounded-md transition-all duration-200"
            >
              Play Beta
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#8b8fa3] hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-md border-t border-[#4a9eff]/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#8b8fa3] hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/5">
              <Link
                href="/games/xelforo"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-[#4a9eff]/10 border border-[#4a9eff]/25 text-[#4a9eff] font-medium rounded-md"
              >
                Play Beta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
