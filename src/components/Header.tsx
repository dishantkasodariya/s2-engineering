'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Pill Navbar */}
      <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
        <nav
          className={`mx-auto max-w-6xl rounded-full border bg-white/95 backdrop-blur-lg transition-all duration-300 ${
            scrolled
              ? 'border-gray-200/80 shadow-lg shadow-black/[0.03]'
              : 'border-gray-200/60 shadow-md shadow-black/[0.02]'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
                  <span className="text-sm font-bold text-white">S2</span>
                </div>
                <span className="hidden text-base font-semibold text-gray-900 sm:block">
                  S2 Engineering
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive
                          ? 'text-primary'
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Right */}
            <div className="hidden lg:flex lg:items-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/30"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-4 top-20 w-[calc(100%-2rem)] max-w-sm animate-in slide-in-from-top-4 fade-in duration-200">
            <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xl shadow-black/[0.08]">
              <div className="p-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            isActive ? 'text-primary' : 'text-gray-400'
                          }`}
                        />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
