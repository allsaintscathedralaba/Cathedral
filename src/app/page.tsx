'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  BookOpen, 
  FileText,
  Volume2, 
  ChevronRight, 
  Info,
  Users,
  Compass,
  Heart,
  Music,
  Tv,
  MessageSquare
} from 'lucide-react';

export default function HomePage() {
  const { clergy, services, sermons, announcements, events, trackMetric } = useData();
  const [activeClergyTab, setActiveClergyTab] = useState<'all' | 'clergy' | 'teachers'>('all');

  // Filter clergy
  const bishop = clergy.find(c => c.id === 'bishop');
  const admin = clergy.find(c => c.id === 'administrator');
  const otherClergy = clergy.filter(c => c.id.startsWith('clergy'));
  const teachers = clergy.filter(c => c.id.startsWith('teacher'));

  const displayedClergy = () => {
    if (activeClergyTab === 'clergy') return otherClergy;
    if (activeClergyTab === 'teachers') return teachers;
    return [...otherClergy, ...teachers];
  };

  // Get recent 3 items
  const recentSermons = sermons.slice(0, 3);
  const recentAnnouncements = announcements.slice(0, 3);

  // Icon mapping for ministries
  const ministryIcons = [
    { name: 'Choir', icon: Music, desc: 'Leading the congregation in reverent praise and classical Anglican hymns.' },
    { name: 'Evangelism', icon: Compass, desc: 'Reaching the unreached in the Aba region with the message of salvation.' },
    { name: 'Sunday School', icon: BookOpen, desc: 'Nurturing biblical knowledge and spiritual foundations across all age groups.' },
    { name: 'Fellowships', icon: Users, desc: 'Women\'s, Men\'s, and Youth fellowships driving fellowship and welfare.' },
    { name: 'Praise Ministry', icon: Heart, desc: 'Contemporary praise team inspiring lively, spirit-filled worship sessions.' },
    { name: 'Media & Tech', icon: Tv, desc: 'Broadcasting services live and managing all IT infrastructure of the Cathedral.' },
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-charcoal text-white overflow-hidden py-20">
        {/* Subtle Animated Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full mix-blend-screen filter blur-[80px] animate-glow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-glow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/10 rounded-full mix-blend-screen filter blur-[120px] animate-glow" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Hero image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-transparent z-0 opacity-60"></div>
        {/* Standard placeholder pattern image */}
        <div className="absolute inset-0 opacity-20 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('/public/gallery/sunday-worship.jpg')" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-brand-orange">
              <span>Diocese of Aba Ngwa North</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              <span className="text-white">Anglican Communion</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-yellow-400 to-brand-green">All Saints' Cathedral</span> Abayi-Umuocham
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
              A Place of Worship, Fellowship, Spiritual Growth, and Transformation. Experience the beauty of Anglican heritage and the fire of the Holy Spirit.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all font-serif flex items-center space-x-2"
                onClick={() => trackMetric('whatsappClicks')}
              >
                <span>Join Us This Sunday</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/10 backdrop-blur-md transition-all flex items-center space-x-2"
                onClick={() => trackMetric('pageViews')}
              >
                <Play className="w-4 h-4 text-brand-orange fill-brand-orange" />
                <span>Watch Live</span>
              </a>
              {sermons.length > 0 && (
                <Link
                  href={`/sermons`}
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Latest Sermon</span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WELCOME MESSAGE */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image side */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-brand-orange rounded-3xl rotate-3 scale-95 z-0 opacity-10"></div>
              <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-brand-grey dark:bg-slate-800">
                <img
                  src={admin?.image || '/public/img/ven-precious-okereke.jpg'}
                  alt={admin?.name || 'Ven. Precious Okereke, Ph.D.'}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-cream dark:bg-slate-800 p-4 rounded-2xl shadow-xl max-w-xs border border-brand-orange/20 hidden sm:block z-20">
                <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">Cathedral Administrator</p>
                <h4 className="text-xs font-bold text-brand-charcoal dark:text-white font-serif mt-0.5">{admin?.name}</h4>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Welcome Address</p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white leading-tight">
                Warm Greetings in Christ Jesus
              </h3>
              <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-sans">
                <p className="italic font-medium text-slate-700 dark:text-slate-200 border-l-2 border-brand-orange pl-4 text-base">
                  "We welcome you with open arms to All Saints' Cathedral, Abayi-Umuocham. Our prayer is that as you step into this sacred space—whether online or physically—you will encounter the transforming power of God."
                </p>
                <p>
                  As one of the leading cathedrals in the Diocese of Aba Ngwa North, we hold dear the rich traditions of the Anglican Communion, incorporating biblical preaching, active liturgical worship, robust community fellowships, and social welfare programs.
                </p>
                <p>
                  Our cathedral is not just a building; it is a family of believers dedicated to living out the Gospel. Whether you are seeking spiritual counseling, looking to join one of our active Saint Groups, or searching for a place to worship this Sunday, you belong here. We are eager to walk this spiritual path with you.
                </p>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <div>
                  <h4 className="text-base font-bold text-brand-charcoal dark:text-white font-serif">{admin?.name || 'Ven. Precious Okereke, Ph.D.'}</h4>
                  <p className="text-xs text-brand-orange font-medium">{admin?.position || 'Cathedral Administrator'}</p>
                </div>
                <Link
                  href="/about"
                  className="text-xs font-bold text-brand-blue hover:text-brand-orange dark:text-sky-400 dark:hover:text-brand-orange transition-colors flex items-center space-x-1"
                >
                  <span>Learn Our History</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WEEKLY SERVICES */}
      <section className="py-24 bg-brand-cream/35 dark:bg-slate-950/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green px-3 py-1 bg-brand-green/10 rounded-full">Liturgical Schedule</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
              Our Weekly Services
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Join us in solemn prayers, praises, and sacramental holy communion. There is a service designed for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800/80 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-brand-orange/15 text-brand-orange rounded-lg">
                      {service.day}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-charcoal dark:text-white font-serif leading-snug">
                    {service.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-50 dark:border-slate-800/60 mt-4 flex items-center space-x-2 text-xs text-brand-blue dark:text-sky-400 font-bold">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{service.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET OUR BISHOP, CLERGY & WORKERS */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Leadership</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
              Meet Our Clergy & Workers
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Guided by the Holy Spirit to feed the flock and administer the work of God in the Cathedral.
            </p>
          </div>

          {/* Bishop Spotlight */}
          {bishop && (
            <div className="bg-brand-cream/20 dark:bg-slate-950/20 p-8 sm:p-12 rounded-3xl border border-brand-orange/10 mb-16 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 aspect-square rounded-2xl overflow-hidden bg-brand-grey dark:bg-slate-800 border-2 border-brand-orange shadow-md relative">
                  <img
                    src={bishop.image}
                    alt={bishop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange px-2.5 py-1 bg-brand-orange/15 rounded-md">
                    President of Synod & Bishop
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-white font-serif leading-tight">
                    {bishop.name}
                  </h4>
                  <p className="text-xs text-brand-green font-bold tracking-wider uppercase leading-none">
                    Bishop, Aba Ngwa North Diocese
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 font-sans">
                    {bishop.bio}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-5 py-2.5 rounded-lg inline-flex items-center space-x-1.5 transition-colors font-serif shadow-sm"
                    >
                      <span>Request Bishop Consultation</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sub-leaders Tabs */}
          <div className="flex justify-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-4 mb-8">
            {(['all', 'clergy', 'teachers'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveClergyTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-colors ${
                  activeClergyTab === tab
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-slate-500 hover:bg-brand-grey dark:text-slate-400 dark:hover:bg-white/5'
                }`}
              >
                {tab === 'all' ? 'All Staff' : tab === 'clergy' ? 'Cathedral Clergy' : 'Church Teachers'}
              </button>
            ))}
          </div>

          {/* Clergy & Teachers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedClergy().map((person) => (
              <div
                key={person.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-brand-grey dark:bg-slate-800 relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-charcoal dark:text-white font-serif leading-tight">
                      {person.name}
                    </h5>
                    <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider mt-1">
                      {person.position}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans line-clamp-3">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST SERMONS & TEACHINGS */}
      <section className="py-24 bg-brand-cream/35 dark:bg-slate-950/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Digital Library</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
                Sermons & Devotionals
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl font-sans">
                Nourish your soul with messages, teaching outlines, Bible studies, and articles from the Cathedral clergy.
              </p>
            </div>
            <Link
              href="/sermons"
              className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors flex items-center space-x-1 shrink-0"
            >
              <span>Explore Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-video bg-brand-orange/10 relative overflow-hidden">
                    <img
                      src={`/public/sermons/${sermon.id === 'sermon-1' ? 'sermon1.jpg' : 'sermon2.jpg'}`}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                        {sermon.category === 'Wermon' ? 'Sermon' : sermon.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>{sermon.speaker.split(',')[0]}</span>
                      <span>•</span>
                      <span>{new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <h4 className="text-sm font-bold text-brand-charcoal dark:text-white font-serif leading-snug line-clamp-2">
                      {sermon.title}
                    </h4>
                    <p className="text-[10px] italic font-semibold text-brand-blue dark:text-sky-400">
                      Scripture: {sermon.scripture}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {sermon.summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50 dark:border-slate-800/50 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">{sermon.readingTime} read</span>
                  <Link
                    href="/sermons"
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange dark:text-sky-400 dark:hover:text-brand-orange transition-colors flex items-center space-x-0.5"
                  >
                    <span>Read Message</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WEEKLY ANNOUNCEMENTS & EVENTS */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Announcements Side */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green">Bulletin updates</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
                    Weekly Announcements
                  </h3>
                </div>
                <Link
                  href="/announcements"
                  className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors"
                >
                  All Bulletins
                </Link>
              </div>

              <div className="space-y-4">
                {recentAnnouncements.map((announce) => (
                  <div
                    key={announce.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      announce.isPinned
                        ? 'bg-brand-cream/20 border-brand-orange/20 dark:bg-slate-950/20'
                        : 'bg-white border-slate-100 dark:bg-slate-900 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-green/10 text-brand-green px-2.5 py-0.5 rounded-full">
                        {announce.category}
                      </span>
                      {announce.isPinned && (
                        <span className="text-[8px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded">
                          Pinned
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-brand-charcoal dark:text-white font-serif leading-snug">
                      {announce.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-sans">
                      {announce.content}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800/40 mt-4 text-[10px] text-slate-400">
                      <span>Published: {new Date(announce.date).toLocaleDateString()}</span>
                      {announce.pdfBulletin && (
                        <a
                          href={announce.pdfBulletin}
                          className="font-bold text-brand-blue hover:underline flex items-center space-x-1"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>PDF Outline</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline/Events Side */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Calendar</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
                  Upcoming Events
                </h3>
              </div>

              <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-8 pl-6 pt-2">
                {events.map((event) => (
                  <div key={event.id} className="relative">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-white dark:border-slate-900 shadow-sm"></div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <h4 className="text-sm font-bold text-brand-charcoal dark:text-white font-serif leading-tight">
                        {event.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-2 text-[10px] font-semibold text-slate-400 uppercase">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-brand-green" />
                          <span>{event.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-green" />
                          <span>{event.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. MINISTRIES PREVIEW */}
      <section className="py-24 bg-brand-cream/35 dark:bg-slate-950/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Our Work</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white">
              Cathedral Ministries & Societies
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Discover areas where you can grow, fellowship, and render stewardship service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministryIcons.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-start space-y-4"
                >
                  <div className="p-3.5 rounded-xl bg-brand-orange/15 text-brand-orange">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-brand-charcoal dark:text-white font-serif">
                    {ministry.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {ministry.desc}
                  </p>
                  <Link
                    href="/activities"
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange dark:text-sky-400 dark:hover:text-brand-orange transition-colors flex items-center space-x-1 pt-2"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
