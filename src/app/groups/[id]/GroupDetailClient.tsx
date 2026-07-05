'use client';

import React from 'react';
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
import { WhatsappIcon } from '../../../components/SocialIcons';

interface GroupDetailClientProps {
  id: string;
}

export default function GroupDetailClient({ id }: GroupDetailClientProps) {
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

  // Convert executives object to an array for listing
  const executivesList = [
    { role: 'Chairman', name: group.executives.chairman, image: 'mascot-evuka.jpg' },
    { role: 'Vice Chairman', name: group.executives.viceChairman, image: 'brightman-eze.jpg' },
    { role: 'Secretary', name: group.executives.secretary, image: 'ihunanyachi-nwogu.jpg' },
    { role: 'Treasurer', name: group.executives.treasurer, image: 'juliet-pepple.jpg' },
    { role: 'Chaplain', name: group.executives.chaplain, image: 'rev-joseph-stephen.jpg' },
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

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <Link 
              href="/groups" 
              className="text-xs font-bold text-brand-orange hover:text-white transition-colors flex items-center space-x-1 bg-white/5 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Saint Groups</span>
            </Link>
          </div>

          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-green px-3 py-1 bg-brand-green/10 rounded-full">
            Saint Group Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif leading-tight">
            {group.name} Fellowship
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            {group.saintDescription.slice(0, 160)}…
          </p>

          <div className="pt-4">
            <a 
              href={group.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-xs px-6 py-3 rounded-full transition-colors shadow-sm shadow-emerald-900/10"
            >
              <WhatsappIcon className="w-4 h-4" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Saint History & Bio */}
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm space-y-6">
              <h2 className="text-2xl font-bold font-serif text-brand-blue dark:text-white border-b border-slate-50 dark:border-slate-800 pb-3">
                About {group.saintName}
              </h2>
              
              <div className="space-y-6 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                <p className="whitespace-pre-line font-medium text-slate-700 dark:text-slate-300">
                  {group.saintDescription}
                </p>
                
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-brand-blue dark:text-white font-serif">Historical Background</h4>
                    <p className="mt-1">{group.aboutSaint.background}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue dark:text-white font-serif">Apostolic Calling</h4>
                    <p className="mt-1">{group.aboutSaint.calling}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue dark:text-white font-serif">Evangelistic Ministry</h4>
                    <p className="mt-1">{group.aboutSaint.ministry}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue dark:text-white font-serif">Key Faith Lessons</h4>
                    <ul className="list-disc pl-4 mt-2 space-y-1.5">
                      {group.aboutSaint.lessons.map((lesson, idx) => (
                        <li key={idx} className="leading-relaxed">{lesson}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Representation details grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white">
                Cathedral Representation & Functions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {repDetails.map((rep, idx) => {
                  const Icon = rep.icon;
                  return (
                    <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm space-y-3">
                      <div className={`p-2.5 rounded-xl w-fit ${rep.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold font-serif text-brand-charcoal dark:text-white">
                        {rep.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {rep.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Block: Executives & Activities */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Executives List */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white border-b border-slate-50 dark:border-slate-800 pb-2">
                Fellowship Executives
              </h3>
              <div className="space-y-4">
                {executivesList.map((exec, idx) => (
                  <div key={idx} className="flex items-center space-x-3.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-charcoal overflow-hidden border border-brand-orange/20 shrink-0">
                      <img 
                        src={`/img/${exec.image}`} 
                        alt={exec.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                        {exec.role}
                      </p>
                      <p className="font-bold text-brand-charcoal dark:text-slate-300 mt-1 leading-none text-xs">
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
