'use client';

import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, Send } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsappIcon } from '../../components/SocialIcons';

export default function ContactPage() {
  const { trackMetric } = useData();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      trackMetric('formSubmissions');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full filter blur-[80px] animate-glow pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Reach Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">Contact the Cathedral</h2>
          <p className="text-sm text-slate-300 font-sans">We'd love to hear from you. Reach out for spiritual counselling, partnership, or general enquiries.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Details + Map */}
          <div className="lg:col-span-5 space-y-8">

            {/* Contact Info Cards */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-lg font-bold font-serif text-brand-blue dark:text-white">Cathedral Details</h3>
              {[
                { icon: MapPin, label: 'Address', value: 'Abayi-Umuocham Road, Opp. Ngwa High School, Abayi, Aba, Abia State, Nigeria.', color: 'text-brand-orange' },
                { icon: Phone, label: 'Telephone', value: '+234 803 123 4567 / +234 805 765 4321', color: 'text-brand-green' },
                { icon: Mail, label: 'Email', value: 'info@allsaintscathedralaba.org', color: 'text-brand-blue' },
                { icon: Clock, label: 'Office Hours', value: 'Monday – Friday: 8:00 AM – 4:00 PM\nSaturday: 9:00 AM – 1:00 PM', color: 'text-amber-500' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className={`p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 ${item.color} shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5 whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp & Social */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white">Social Media</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/2348031234567" target="_blank" rel="noopener noreferrer"
                  onClick={() => trackMetric('whatsappClicks')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors col-span-2">
                  <WhatsappIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center space-x-1.5 transition-colors">
                  <FacebookIcon className="w-4 h-4" /><span>Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-purple-600 to-pink-500 hover:opacity-90 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center space-x-1.5 transition-all">
                  <InstagramIcon className="w-4 h-4" /><span>Instagram</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center space-x-1.5 transition-colors col-span-2">
                  <YoutubeIcon className="w-4 h-4" /><span>YouTube — Live Services</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
              <iframe
                title="All Saints Cathedral Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1523810428397!2d7.360833!3d5.127778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042e5e1e1a5e1e5%3A0x1234567890abcdef!2sAbayi%2C+Aba%2C+Abia+State!5e0!3m2!1sen!2sng!4v1720000000000"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold font-serif text-brand-blue dark:text-white mb-2">Send Us a Message</h3>
              <p className="text-xs text-slate-400 mb-8 font-sans">Fill the form below and we'll respond within 24 hours on working days.</p>

              {submitted ? (
                <div className="py-16 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
                  <h4 className="text-base font-bold font-serif text-brand-charcoal dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-500">Our team will respond to your enquiry shortly. God bless you.</p>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors mt-2">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="Your full name"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        placeholder="your@email.com"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange dark:text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+234 800 000 0000"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Subject *</label>
                      <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange dark:text-white dark:text-slate-300">
                        <option value="">Select subject</option>
                        <option>General Enquiry</option>
                        <option>Pastoral Counselling Request</option>
                        <option>Booking / Event Request</option>
                        <option>Marriage Preparation</option>
                        <option>Baptism / Christening</option>
                        <option>Thanksgiving Service</option>
                        <option>Media / Press</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Message *</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Describe your enquiry in detail…"
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange dark:text-white resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-serif font-bold text-sm py-4 rounded-2xl shadow-sm transition-all flex items-center justify-center space-x-2 disabled:opacity-60">
                    {loading ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
