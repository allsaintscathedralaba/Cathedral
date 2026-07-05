'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '../../context/DataContext';
import { Shield, ChevronRight, MessageSquare } from 'lucide-react';

export default function GroupsPage() {
  const { groups } = useData();

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Cathedral Fellowships</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
          Our Saint Groups
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-sans">
          All Saints' Cathedral is structured into 10 active Saint groups named after the Apostles and Saints of the early Church. Each member is assigned to a group for close fellowship, welfare, and service.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden bg-brand-orange/5 border border-brand-orange/5 relative">
                  <img
                    src={`/public/groups/${group.id}.jpg`}
                    alt={group.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {group.saintName.split(' ')[0]} {group.saintName.split(' ')[1] || ''}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-brand-charcoal dark:text-white leading-tight">
                    {group.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-sans line-clamp-3">
                    {group.saintDescription}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-50 dark:border-slate-800/60 mt-5 flex items-center justify-between">
                <a
                  href={group.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-bold text-brand-green hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Community</span>
                </a>
                <Link
                  href={`/groups/${group.id}`}
                  className="inline-flex items-center space-x-0.5 text-xs font-bold text-brand-blue hover:text-brand-orange dark:text-sky-400 dark:hover:text-brand-orange transition-colors"
                >
                  <span>View Group</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
