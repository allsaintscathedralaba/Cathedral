'use client';

import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Pin, FileText, Tag, Calendar, Search } from 'lucide-react';

const CATEGORIES = ['All', 'Worship', 'Events', 'Baptism', 'Weddings', 'Thanksgiving', 'Youth', 'Men', 'Women', 'Finance', 'General'];

const categoryColors: Record<string, string> = {
  Worship: 'bg-brand-orange/10 text-brand-orange',
  Events: 'bg-brand-blue/10 text-brand-blue',
  Baptism: 'bg-sky-100 text-sky-700',
  Weddings: 'bg-rose-100 text-rose-600',
  Thanksgiving: 'bg-amber-100 text-amber-700',
  Youth: 'bg-purple-100 text-purple-700',
  Men: 'bg-indigo-100 text-indigo-700',
  Women: 'bg-pink-100 text-pink-600',
  Finance: 'bg-emerald-100 text-emerald-700',
  General: 'bg-slate-100 text-slate-600',
};

export default function AnnouncementsPage() {
  const { announcements } = useData();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = announcements.filter(a => {
    const matchesCat = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Pinned first
  const sorted = [...filtered].sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));

  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-green/15 rounded-full filter blur-[80px] animate-glow pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green px-3 py-1 bg-brand-green/10 rounded-full">Parish Bulletins</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">Weekly Announcements</h2>
          <p className="text-sm text-slate-300 font-sans">Stay informed with the latest parish notices, programme updates, and community news.</p>
        </div>
      </section>

      {/* Search + Category Filters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search announcements…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-brand-orange dark:text-white font-medium shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-orange text-white border-brand-orange'
                  : 'border-slate-200 text-slate-500 hover:border-brand-orange hover:text-brand-orange dark:border-slate-700 dark:text-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Announcement Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
        {sorted.map(a => (
          <div
            key={a.id}
            className={`bg-white dark:bg-slate-900 border rounded-3xl p-6 sm:p-8 shadow-sm transition-all ${
              a.isPinned ? 'border-brand-orange/30 shadow-brand-orange/5' : 'border-slate-100 dark:border-slate-800'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {a.isPinned && (
                <span className="flex items-center space-x-1 bg-brand-orange text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  <Pin className="w-3 h-3" />
                  <span>Pinned</span>
                </span>
              )}
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${categoryColors[a.category] || 'bg-slate-100 text-slate-600'}`}>
                {a.category}
              </span>
              <span className="ml-auto text-[10px] text-slate-400 font-medium flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(a.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </span>
            </div>

            <h3 className="text-base font-bold font-serif text-brand-charcoal dark:text-white leading-snug mb-3">
              {a.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              {a.content}
            </p>

            {(a.pdfBulletin || a.imageUrl) && (
              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-slate-50 dark:border-slate-800">
                {a.pdfBulletin && (
                  <a href={a.pdfBulletin} className="flex items-center space-x-1.5 text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Download PDF Bulletin</span>
                  </a>
                )}
              </div>
            )}

            <p className="text-[10px] text-slate-400 mt-4">
              Valid until: <span className="font-semibold">{new Date(a.expiryDate).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </p>
          </div>
        ))}

        {sorted.length === 0 && (
          <div className="py-16 text-center text-slate-400 space-y-2">
            <Tag className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-semibold">No announcements match your search.</p>
          </div>
        )}
      </section>
    </div>
  );
}
