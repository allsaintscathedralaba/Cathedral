'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, Lock } from 'lucide-react';

export default function Navbar() {
  const { groups, isDarkMode, toggleDarkMode } = useData();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Sermons & Teachings', path: '/sermons' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-md py-3 glassmorphism'
          : 'bg-transparent py-5 dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-lg shadow-md overflow-hidden relative border border-white/20">
              {/* Fallback stylized cross vector in CSS if logo.png not loaded, but img is fine */}
              <span className="font-serif">AS</span>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-brand-blue dark:text-white leading-tight sm:text-base font-serif">
                All Saints' Cathedral
              </h1>
              <p className="text-[10px] text-brand-orange font-semibold tracking-wider uppercase leading-none">
                Abayi-Umuocham
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-orange font-semibold bg-brand-cream/60 dark:bg-white/5'
                      : 'text-brand-charcoal hover:text-brand-orange hover:bg-brand-grey dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Groups Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 text-brand-charcoal hover:text-brand-orange hover:bg-brand-grey dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 ${
                  pathname.startsWith('/groups')
                    ? 'text-brand-orange font-semibold bg-brand-cream/60 dark:bg-white/5'
                    : ''
                }`}
              >
                <span>Groups</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-56 rounded-xl shadow-lg bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800 py-2 origin-top-left z-50"
                  >
                    {groups.map((group) => (
                      <Link
                        key={group.id}
                        href={`/groups/${group.id}`}
                        className={`block px-4 py-2 text-xs font-medium transition-colors hover:bg-brand-cream/30 hover:text-brand-orange dark:hover:bg-white/5 dark:hover:text-white ${
                          pathname === `/groups/${group.id}`
                            ? 'text-brand-orange font-semibold bg-brand-cream/20 dark:bg-white/5'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {group.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(3).map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-orange font-semibold bg-brand-cream/60 dark:bg-white/5'
                      : 'text-brand-charcoal hover:text-brand-orange hover:bg-brand-grey dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-grey hover:text-brand-orange dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Admin Lock Link */}
            <Link
              href="/admin"
              className={`p-2 rounded-lg text-brand-charcoal hover:bg-brand-grey hover:text-brand-orange dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors flex items-center space-x-1 ${
                pathname.startsWith('/admin') ? 'text-brand-orange bg-brand-cream/50 dark:bg-white/5' : ''
              }`}
              title="Admin Panel"
            >
              <Lock className="w-5 h-5" />
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all font-serif"
            >
              Join Us Sunday
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-grey hover:text-brand-orange dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-grey hover:text-brand-orange dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white dark:bg-slate-950 dark:border-slate-800/80 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                    pathname === link.path
                      ? 'text-brand-orange bg-brand-cream/50 dark:bg-white/5'
                      : 'text-brand-charcoal hover:text-brand-orange dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Groups Submenu */}
              <div className="py-2 border-y border-slate-100 dark:border-slate-800">
                <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Saint Groups
                </p>
                <div className="grid grid-cols-2 gap-1 px-3">
                  {groups.map((group) => (
                    <Link
                      key={group.id}
                      href={`/groups/${group.id}`}
                      className={`py-1 text-sm font-medium ${
                        pathname === `/groups/${group.id}`
                          ? 'text-brand-orange font-semibold'
                          : 'text-slate-600 hover:text-brand-orange dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      {group.name.replace(' Group', '')}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                    pathname === link.path
                      ? 'text-brand-orange bg-brand-cream/50 dark:bg-white/5'
                      : 'text-brand-charcoal hover:text-brand-orange dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/admin"
                  className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-orange"
                >
                  <Lock className="w-4 h-4" />
                  <span>Admin Panel</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  Join Us Sunday
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
