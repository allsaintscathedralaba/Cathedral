'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Compass, BookOpen, Users, UserCheck, Tv, Heart, CheckCircle2, X } from 'lucide-react';
import { useData } from '../../context/DataContext';

interface Ministry {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  meetingDay: string;
  leader: string;
  activities: string[];
}

export default function ActivitiesPage() {
  const { trackMetric } = useData();
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [joinName, setJoinName] = useState('');
  const [joinPhone, setJoinPhone] = useState('');

  const ministries: Ministry[] = [
    {
      id: 'choir',
      name: 'Cathedral Choir',
      icon: Music,
      description: 'The Cathedral Choir leads the classical liturgy during the 1st Service. Known for their mastery of classical anthems, hymns, and solemn canticles, the choir fosters musical excellence and reverent worship.',
      meetingDay: 'Thursdays (05:00 PM) & Saturdays (04:00 PM)',
      leader: 'Sir David O. Kalu (Choirmaster)',
      activities: ['Choral rehearsals', 'Sunday service ministration', 'Easter Cantata & Christmas Carol Festival', 'Diocesan choir competitions']
    },
    {
      id: 'evangelism',
      name: 'Evangelism & Mission Board',
      icon: Compass,
      description: 'The heartbeat of our growth. This ministry plans rural crusades, door-to-door outreaches, school missions, and coordinates follow-up discipleship classes for new converts.',
      meetingDay: 'Mondays (05:00 PM) & Saturdays (08:00 AM)',
      leader: 'Bro. Emmanuel C. Nwogu',
      activities: ['Rural mission crusades', 'Weekly street tracts distribution', 'Converts discipleship follow-up', 'Parish cell fellowship setups']
    },
    {
      id: 'sunday-school',
      name: 'Sunday School Teachers Association',
      icon: BookOpen,
      description: 'Dedicated to compiling studies and teaching kids, teenagers, and adults during the weekly Sunday School hour. We ensure correct biblical doctrines are taught across all age groups.',
      meetingDay: 'Saturdays (03:00 PM)',
      leader: 'Mrs. Ihunanyachi U. Nwogu',
      activities: ['Teacher training and prep sessions', 'Graded Sunday School curricula compile', 'Annual Sunday School exams & Bible quiz', 'Vacation Bible School coordinating']
    },
    {
      id: 'womens-fellowship',
      name: 'Women\'s Fellowship & Mothers Union',
      icon: Users,
      description: 'Uniting all mothers and women in the Cathedral for spiritual growth, welfare support, and home-building seminars. Operates under the Diocesan Women\'s Association.',
      meetingDay: 'Thursdays (04:00 PM)',
      leader: 'Mrs. Nneka Nathan-Kanu (Bishop\'s Wife / President)',
      activities: ['Mothers\' Union admissions classes', 'Home management & skill seminars', 'Annual August Meeting convention', 'Widow welfare visitation distributions']
    },
    {
      id: 'mens-fellowship',
      name: 'Christian Men\'s Fellowship (CMF)',
      icon: UserCheck,
      description: 'A society bringing together all fathers and young men in the Cathedral to build spiritual leadership in homes, network in business, and support Cathedral infrastructural projects.',
      meetingDay: 'Every Last Sunday (04:00 PM)',
      leader: 'Sir Eugene O. Nwachukwu',
      activities: ['Fatherhood mentoring workshops', 'Business networking breakfasts', 'Cathedral capital project fundraising', 'Annual Christian Men\'s Week']
    },
    {
      id: 'youth-ministry',
      name: 'Anglican Youth Fellowship (AYF)',
      icon: Users,
      description: 'A vibrant body of youth and young professionals. AYF coordinates lively debates, bible studies, drama, sports, and leadership academies to prepare youths for impactful living.',
      meetingDay: 'Fridays (05:00 PM) & Sundays (04:00 PM)',
      leader: 'Bro. Mascot Evuka',
      activities: ['Youth Bible study and debates', 'Drama and choreographic ministrations', 'Annual Youth Camp convention', 'Skills and career mentorship seminars']
    },
    {
      id: 'praise-ministry',
      name: 'Praise & Worship Team',
      icon: Heart,
      description: 'Leading contemporary praise and worship during the 2nd and 3rd Services. Combining modern musical gear with spiritual depth to foster vibrant, heart-felt praise.',
      meetingDay: 'Tuesdays (05:30 PM) & Saturdays (05:00 PM)',
      leader: 'Bro. Brightman Eze',
      activities: ['Praise team rehearsals', 'Sunday service praise leading', 'Praise Night Vigils ministration', 'Annual Worship Concert']
    },
    {
      id: 'media-ministry',
      name: 'Media & Technology Unit',
      icon: Tv,
      description: 'Handling audio-visuals, internet streaming, graphic designs, slide projection, sound engineering, and maintaining the church social media and digital platforms.',
      meetingDay: 'Saturdays (04:00 PM)',
      leader: 'Bro. Chidi N. Peters',
      activities: ['Live streaming setup & broadcast', 'Sound system optimization & mixing', 'Cathedral graphics & social media upload', 'Digital sermon library cataloging']
    }
  ];

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinName && joinPhone && selectedMinistry) {
      setJoinSubmitted(true);
      trackMetric('formSubmissions');
      setTimeout(() => {
        setJoinSubmitted(false);
        setSelectedMinistry(null);
        setJoinName('');
        setJoinPhone('');
      }, 3000);
    }
  };

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Get Involved</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
          Ministries, Fellowships & Societies
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-sans">
          Discover a place to worship, grow in grace, fellowship with brethren, and exercise your spiritual gifts for the building of God\'s kingdom.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((min) => {
            const Icon = min.icon;
            return (
              <div
                key={min.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-brand-charcoal dark:text-white leading-tight">
                    {min.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-4">
                    {min.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50 dark:border-slate-800/50 mt-6 space-y-3">
                  <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-brand-charcoal dark:text-white block">Meeting Days:</span>
                    <span className="font-sans text-slate-500">{min.meetingDay}</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-brand-charcoal dark:text-white block">Ministry Leader:</span>
                    <span className="font-sans text-slate-500">{min.leader}</span>
                  </div>
                  <button
                    onClick={() => setSelectedMinistry(min)}
                    className="w-full bg-brand-cream/80 hover:bg-brand-orange hover:text-white text-brand-orange font-serif text-xs font-bold py-2 px-4 rounded-xl border border-brand-orange/10 hover:border-transparent transition-all mt-2"
                  >
                    Join Ministry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Join Ministry Modal Dialog */}
      <AnimatePresence>
        {selectedMinistry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
              onClick={() => setSelectedMinistry(null)}
            ></motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setSelectedMinistry(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  Registration Form
                </span>
                <h3 className="text-xl font-bold font-serif text-brand-charcoal dark:text-white">
                  Join the {selectedMinistry.name}
                </h3>
                
                {joinSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-brand-green/10 text-brand-green border border-brand-green/10 rounded-2xl text-center space-y-2"
                  >
                    <CheckCircle2 className="w-8 h-8 mx-auto" />
                    <h4 className="text-sm font-bold">Request Received Successfully!</h4>
                    <p className="text-xs text-brand-green/80">
                      The ministry leader ({selectedMinistry.leader.split(' (')[0]}) will contact you shortly via call or WhatsApp.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleJoinSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={joinName}
                        onChange={(e) => setJoinName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telephone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={joinPhone}
                        onChange={(e) => setJoinPhone(e.target.value)}
                        placeholder="e.g. +234 803 000 0000"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white"
                      />
                    </div>
                    <div className="bg-brand-cream/30 dark:bg-slate-950/20 p-4 rounded-xl text-[11px] text-slate-500 space-y-1">
                      <p className="font-bold text-brand-charcoal dark:text-white">Ministry Requirements:</p>
                      <p>• Meeting Day: {selectedMinistry.meetingDay}</p>
                      <p>• Commitment to participate in all core meetings, rehearsals, or out-stations.</p>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-3 rounded-xl shadow-sm transition-colors font-serif"
                    >
                      Submit Membership Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
