'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const albums = [
  { id: 'sunday-worship', name: 'Sunday Worship', count: 12, color: 'from-brand-orange/30 to-brand-orange/10' },
  { id: 'easter', name: 'Easter Celebration', count: 8, color: 'from-brand-green/30 to-brand-green/10' },
  { id: 'christmas', name: 'Christmas Service', count: 15, color: 'from-brand-blue/30 to-brand-blue/10' },
  { id: 'fathers-week', name: "Father's Week", count: 6, color: 'from-amber-400/30 to-amber-400/10' },
  { id: 'mothers-day', name: "Mother's Day", count: 9, color: 'from-rose-400/30 to-rose-400/10' },
  { id: 'harvest', name: 'Harvest & Thanksgiving', count: 18, color: 'from-brand-orange/30 to-amber-400/10' },
  { id: 'weddings', name: 'Weddings & Marriages', count: 7, color: 'from-pink-400/30 to-pink-400/10' },
  { id: 'baptism', name: 'Baptism & Confirmation', count: 5, color: 'from-sky-400/30 to-sky-400/10' },
  { id: 'conferences', name: 'Conferences & Retreats', count: 11, color: 'from-indigo-400/30 to-indigo-400/10' },
  { id: 'choir', name: 'Choir & Music', count: 10, color: 'from-purple-400/30 to-purple-400/10' },
  { id: 'youth', name: 'Youth Activities (AYF)', count: 14, color: 'from-brand-green/30 to-sky-400/10' },
];

// Generate mock gallery items per album (3 per album)
const getAlbumItems = (albumId: string) =>
  Array.from({ length: 3 }, (_, i) => ({
    id: `${albumId}-${i}`,
    src: `/public/gallery/${albumId}.jpg`,
    alt: `Gallery photo ${i + 1}`,
    isVideo: i === 2,
  }));

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<{ src: string; alt: string; isVideo: boolean } | null>(null);

  const currentAlbum = activeAlbum ? albums.find(a => a.id === activeAlbum) : null;
  const items = activeAlbum ? getAlbumItems(activeAlbum) : [];

  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full filter blur-[80px] animate-glow pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Memories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">Photo & Video Gallery</h2>
          <p className="text-sm text-slate-300 font-sans">Browse our cathedral moments — worship services, celebrations, outreaches, and community life.</p>
        </div>
      </section>

      {/* Albums or Album Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {!activeAlbum ? (
          <>
            <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white mb-8">Select an Album</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {albums.map(album => (
                <button
                  key={album.id}
                  onClick={() => setActiveAlbum(album.id)}
                  className="group text-left rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-full aspect-video bg-gradient-to-br ${album.color} relative overflow-hidden`}>
                    <img src={`/public/gallery/${album.id}.jpg`} alt={album.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900">
                    <h4 className="text-xs font-bold font-serif text-brand-charcoal dark:text-white leading-snug">{album.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{album.count} photos & videos</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={() => setActiveAlbum(null)}
                className="text-xs font-bold text-brand-orange hover:underline flex items-center space-x-1"
              >
                ← All Albums
              </button>
              <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white">{currentAlbum?.name}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="group relative rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 aspect-video shadow-sm hover:shadow-lg transition-all"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/40">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setLightboxItem(null)}
            />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative z-10 max-w-4xl w-full rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-black/40 rounded-xl text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={lightboxItem.src} alt={lightboxItem.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-3xl" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
