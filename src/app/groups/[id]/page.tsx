'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useData } from '../../../context/DataContext';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  User, 
  Calendar, 
  BookOpen, 
  MapPin, 
  ArrowLeft,
  Users, 
  Heart, 
  Compass, 
  Flame, 
  Settings, 
  ShieldCheck 
} from 'lucide-react';

interface GroupPageProps {
  params: Promise<{ id: string }>;
}

export default function GroupDetailPage({ params }: GroupPageProps) {
  // Safe resolve of Next.js 15 params promise
  const { id } = use(params);
  const { groups, trackMetric } = useData();
  
  const group = groups.find((g) => g.id === id);

  if (!group) {
    notFound();
  }

  const handleWhatsappClick = () => {
    trackMetric('whatsappClicks');
  };

  const repDetails = [
    { title: 'Fellowship & Brotherhood', desc: group.representation.fellowship, icon: Users, color: 'text-brand-orange bg-brand-orange/10' },
    { title: 'Evangelism & Outreaches', desc: group.representation.evangelism, icon: Compass, color: 'text-brand-green bg-brand-green/10' },
    { title: 'Member Welfare & Care', desc: group.representation.welfare, icon: Heart, color: 'text-rose-500 bg-rose-500/10' },
    { title: 'Church Development & Projects', desc: group.representation.development, icon: Settings, color: 'text-brand-blue bg-brand-blue/10' },
    { title: 'Prayer & Intercession', desc: group.representation.prayer, icon: Flame, color: 'text-amber-500 bg-amber-500/10' },
    { title: 'Service & Sanctuary support', desc: group.representation.service, icon: ShieldCheck, color: 'text-indigo-500 bg-indigo-500/10' },
  ];

  return (
    <div className="pb-24">
      
      {/* Hero Banner */}
      <section className="relative bg-brand-charcoal text-white py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Animated Background Highlights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full filter blur-[80px] animate-glow"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full filter blur-[80px] animate-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0" style={{ backgroundImage: `url('/public/groups/${group.id}.jpg')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-brand-charcoal/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <Link
            href="/groups"
            className="inline-flex items-center space-x-1.5 text-xs text-brand-orange hover:text-white font-bold uppercase tracking-wider transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Groups</span>
          </Link>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif leading-tight">
            {group.name}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            {group.saintDescription}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: About Saint & representation */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* About Saint Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-6 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white border-b border-slate-50 dark:border-slate-800 pb-3">
                About {group.saintName}
              </h3>
              
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-sans">
                <div>
                  <h4 className="font-bold text-brand-charcoal dark:text-white mb-1">Background</h4>
                  <p>{group.aboutSaint.background}</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal dark:text-white mb-1">Calling by Christ</h4>
                  <p>{group.aboutSaint.calling}</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal dark:text-white mb-1">Apostolic Ministry</h4>
                  <p>{group.aboutSaint.ministry}</p>
                </div>
              </div>

              <div className="bg-brand-cream/30 dark:bg-slate-950/20 p-5 rounded-2xl border border-brand-orange/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Lessons for Christian Living</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                  {group.aboutSaint.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0"></span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Representation Section */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">Stewardship</span>
                <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white">
                  Representation in the Cathedral
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {repDetails.map((rep, idx) => {
                  const Icon = rep.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex space-x-4"
                    >
                      <div className={`p-3 rounded-xl shrink-0 h-fit ${rep.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold font-serif text-brand-charcoal dark:text-white">
                          {rep.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                          {rep.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Executives, Activities, and WhatsApp CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* WhatsApp CTA Button */}
            <a
              href={group.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-xs p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Join the {group.name.replace(' Group', '')} WhatsApp Community</span>
            </a>

            {/* Executives Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white border-b border-slate-50 dark:border-slate-800 pb-2">
                Executive Members
              </h3>
              
              <div className="space-y-3.5">
                {[
                  { role: 'Chairman', name: group.executives.chairman },
                  { role: 'Vice Chairman', name: group.executives.viceChairman },
                  { role: 'Secretary', name: group.executives.secretary },
                  { role: 'Treasurer', name: group.executives.treasurer },
                  { role: 'Chaplain', name: group.executives.chaplain },
                ].map((exec, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs font-sans">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                        {exec.role}
                      </p>
                      <p className="font-bold text-brand-charcoal dark:text-slate-300 mt-1 leading-none">
                        {exec.name || 'Vacant Placeholder'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white border-b border-slate-50 dark:border-slate-800 pb-2">
                Group Activities
              </h3>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400 font-sans">
                {group.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0"></span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
