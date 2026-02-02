'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Tab = ({ item, setPosition }: { item: typeof navigation[0]; setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number; }>> }) => {
  const ref = useRef<HTMLLIElement>(null);
  const location = useLocation();
  const isActive = location.pathname === item.href;

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10"
    >
      <Link
        to={item.href}
        className="block cursor-pointer px-4 py-2 text-sm font-medium uppercase text-gray-700 hover:text-white transition-colors mix-blend-difference"
      >
        {item.name}
      </Link>
      {/* Active indicator dot */}
      {isActive && (
        <motion.div 
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full z-20"
        />
      )}
    </li>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Track position for the cursor/pill
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

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
              ? 'border-gray-200/80 shadow-lg shadow-black/3'
              : 'border-gray-200/60 shadow-md shadow-black/2'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/80">
                  <span className="text-sm font-bold text-white">S2</span>
                </div>
                <span className="hidden text-base font-semibold text-gray-900 sm:block">
                  S2 Engineering
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Center with Sliding Cursor */}
            <ul
              onMouseLeave={() => {
                setPosition((pv) => ({
                  ...pv,
                  opacity: 0,
                }));
              }}
              className="hidden lg:flex lg:items-center relative rounded-full border-2 border-black/10 bg-white p-1"
            >
              {navigation.map((item) => (
                <Tab key={item.name} item={item} setPosition={setPosition} />
              ))}
              
              {/* Animated Cursor */}
              <motion.li
                animate={{
                  ...position,
                }}
                className="absolute z-0 h-[calc(100%-8px)] rounded-full bg-black"
              />
            </ul>

            {/* CTA Button - Right */}
            <div className="hidden lg:flex lg:items-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-linear-to-r from-primary to-primary/90 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/30"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
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
          <div className="fixed right-4 top-20 w-64 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-black/8">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-primary to-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/30"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
