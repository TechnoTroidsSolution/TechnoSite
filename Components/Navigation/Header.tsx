'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="shrink-0">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold text-foreground">TechnoTroids</span>
                  <div className="text-xs text-muted-foreground font-medium">Innovation Labs</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur-sm border-t border-border rounded-b-xl shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${isActive(item.href)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10 border-l-4 border-transparent'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 shadow-md hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;