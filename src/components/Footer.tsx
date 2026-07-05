'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useData } from '../context/DataContext';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

export default function Footer() {
  const { sermons, trackMetric } = useData();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      trackMetric('formSubmissions');
    }
  };

  // Get latest 3 sermons for footer display
  const latestSermons = sermons.slice(0, 3);

  return (
    <footer className="bg-brand-charcoal text-slate-300 pt-16 pb-8 border-t border-white/5 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-lg border border-white/20">
                <span className="font-serif">AS</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight text-white leading-tight font-serif">
                  All Saints' Cathedral
                </h3>
                <p className="text-[10px] text-brand-orange font-semibold tracking-wider uppercase leading-none">
                  Abayi-Umuocham
                </p>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2">
              A Place of Worship, Fellowship, Spiritual Growth, and Transformation. We represent excellence, holiness, warmth, and Anglican reverence under the Diocese of Aba Ngwa North.
            </p>
            {/* Social Links */}
            <div className="flex space-y-0 space-x-3 pt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-brand-orange hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-brand-orange hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-brand-orange hover:text-white transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-serif border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">About the Cathedral</Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-brand-orange transition-colors">Cathedral Activities</Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-brand-orange transition-colors">Sermons & Devotionals</Link>
              </li>
              <li>
                <Link href="/announcements" className="hover:text-brand-orange transition-colors">Weekly Announcements</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-orange transition-colors">Photo & Video Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact & Map</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Latest Sermons */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-serif border-b border-white/10 pb-2">
              Latest Teachings
            </h4>
            <div className="space-y-4">
              {latestSermons.map((sermon) => (
                <Link key={sermon.id} href="/sermons" className="block group">
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider block">
                    {sermon.speaker.split(',')[0]}
                  </span>
                  <span className="text-xs text-slate-300 group-hover:text-brand-orange font-semibold block transition-colors leading-snug">
                    {sermon.title}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </Link>
              ))}
              {latestSermons.length === 0 && (
                <p className="text-xs text-slate-500">No sermons published yet.</p>
              )}
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-serif border-b border-white/10 pb-2">
                Connect With Us
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Abayi-Umuocham Road, Opposite Ngwa High School, Abayi, Aba, Abia State, Nigeria</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>+234 803 123 4567, +234 805 765 4321</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>info@allsaintscathedralaba.org</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Office: Mon - Fri (08:00 AM - 04:00 PM)</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-white mb-2 font-serif">Newsletter Signup</p>
              {subscribed ? (
                <p className="text-xs text-brand-green font-semibold">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 text-white rounded-l-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-brand-orange"
                  />
                  <button
                    type="submit"
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-r-lg px-4 flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-[11px] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} All Saints' Cathedral Abayi-Umuocham.</p>
          <p className="mt-1">Diocese of Aba Ngwa North (Anglican Communion). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
