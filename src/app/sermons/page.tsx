'use client';

import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  BookOpen, 
  Download, 
  Play, 
  Volume2, 
  Tv, 
  X, 
  ChevronRight, 
  User, 
  Clock, 
  FileText 
} from 'lucide-react';

interface Sermon {
  id: string;
  title: string;
  speaker: string;
  scripture: string;
  date: string;
  readingTime: string;
  summary: string;
  fullArticle: string;
  pdfUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  topic: string;
  category: string;
}

export default function SermonsPage() {
  const { sermons, trackMetric } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  // Extract unique filters from sermons data
  const speakers = Array.from(new Set(sermons.map(s => s.speaker)));
  const topics = Array.from(new Set(sermons.map(s => s.topic)));
  const years = Array.from(new Set(sermons.map(s => new Date(s.date).getFullYear().toString())));
  const categories = Array.from(new Set(sermons.map(s => s.category)));

  // Filter logic
  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = 
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesSpeaker = selectedSpeaker === 'all' || sermon.speaker === selectedSpeaker;
    const matchesTopic = selectedTopic === 'all' || sermon.topic === selectedTopic;
    const matchesYear = selectedYear === 'all' || new Date(sermon.date).getFullYear().toString() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || sermon.category === selectedCategory;

    return matchesSearch && matchesSpeaker && matchesTopic && matchesYear && matchesCategory;
  });

  const handleDownload = () => {
    trackMetric('sermonDownloads');
    alert('Mock Action: PDF Download initiated!');
  };

  const handleAudioPlay = () => {
    trackMetric('pageViews');
    alert('Mock Action: Playing sermon audio podcast!');
  };

  return (
    <div className="pb-24">
      
      {/* Header Banner */}
      <section className="bg-brand-charcoal text-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-orange/15 rounded-full filter blur-[70px] animate-glow"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Digital Library</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">
            Sermons & Teachings
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Browse through weekly sermons, theological articles, Bible study outlines, and spiritual devotionals.
          </p>
        </div>
      </section>

      {/* Library Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm space-y-4">
          
          {/* Search bar */}
          <div className="relative w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by sermon title, speaker, scripture text or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl pl-12 pr-4 py-3.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white font-medium"
            />
          </div>

          {/* Filters grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            
            {/* Category */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-slate-300 font-semibold"
              >
                <option value="all">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat === 'Wermon' ? 'Sermon' : cat}</option>
                ))}
              </select>
            </div>

            {/* Speaker */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Preacher</label>
              <select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-slate-300 font-semibold"
              >
                <option value="all">All Speakers</option>
                {speakers.map((sp, idx) => (
                  <option key={idx} value={sp}>{sp.split(',')[0]}</option>
                ))}
              </select>
            </div>

            {/* Topic */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Topic</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-slate-300 font-semibold"
              >
                <option value="all">All Topics</option>
                {topics.map((top, idx) => (
                  <option key={idx} value={top}>{top}</option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-slate-300 font-semibold"
              >
                <option value="all">All Years</option>
                {years.map((yr, idx) => (
                  <option key={idx} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* Sermons Library Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 relative">
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-brand-orange text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded z-10">
                    {sermon.category === 'Wermon' ? 'Sermon' : sermon.category}
                  </span>
                  <img
                    src={`/public/sermons/${sermon.id === 'sermon-1' || sermon.id === 'sermon-3' ? 'sermon1.jpg' : 'sermon2.jpg'}`}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{sermon.speaker.split(',')[0]}</span>
                    <span>•</span>
                    <span>{new Date(sermon.date).toLocaleDateString('en-NG', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-sm font-bold font-serif text-brand-charcoal dark:text-white leading-snug line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-[10px] italic font-semibold text-brand-blue dark:text-sky-400 leading-none">
                    Scripture: {sermon.scripture}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {sermon.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 dark:border-slate-850/50 mt-4 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-semibold">{sermon.readingTime} read</span>
                <button
                  onClick={() => setSelectedSermon(sermon)}
                  className="text-xs font-bold text-brand-blue hover:text-brand-orange dark:text-sky-400 dark:hover:text-brand-orange transition-colors flex items-center space-x-0.5"
                >
                  <span>Study Message</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
          
          {filteredSermons.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-slate-300" />
              <h4 className="text-base font-bold font-serif text-slate-500">No message matches your filters</h4>
              <p className="text-xs">Try tweaking the search query or reset dropdown criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sermon Detail Modal Dialog */}
      <AnimatePresence>
        {selectedSermon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
              onClick={() => setSelectedSermon(null)}
            ></motion.div>

            {/* Content card */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative z-10 w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-50 dark:border-slate-800 shrink-0 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2.5 py-0.5 rounded">
                    {selectedSermon.category === 'Wermon' ? 'Sermon Outline' : selectedSermon.category}
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                    Delivered: {new Date(selectedSermon.date).toLocaleDateString()} • Speaker: {selectedSermon.speaker.split(',')[0]}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow font-sans">
                
                {/* Title & Scripture Spotlight */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-brand-blue dark:text-white leading-tight">
                    {selectedSermon.title}
                  </h3>
                  <div className="p-3 bg-brand-cream/35 dark:bg-slate-950/30 rounded-xl border border-brand-orange/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-brand-orange">Scripture Spotlight:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 italic">{selectedSermon.scripture}</span>
                  </div>
                </div>

                {/* Media Players (if exists) */}
                <div className="flex flex-wrap gap-4 shrink-0 py-2">
                  {selectedSermon.audioUrl && (
                    <button
                      onClick={handleAudioPlay}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-1.5"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Listen to Podcast</span>
                    </button>
                  )}
                  {selectedSermon.pdfUrl && (
                    <button
                      onClick={handleDownload}
                      className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-1.5"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Bulletin</span>
                    </button>
                  )}
                </div>

                {/* Full Article Text */}
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 whitespace-pre-line pt-2">
                  {selectedSermon.fullArticle}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shrink-0 text-center text-[10px] text-slate-400 font-medium">
                © All Saints' Cathedral Abayi-Umuocham Digital Library
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
