'use client';

import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { 
  Lock, 
  LayoutDashboard, 
  BookOpen, 
  Bell, 
  Calendar, 
  Users, 
  Image,
  Settings,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Save,
  Eye,
  BarChart3,
  Link,
  CheckCircle2,
  X
} from 'lucide-react';

const ADMIN_PIN = '1234'; // Simple local auth — change in production

type AdminSection = 'dashboard' | 'sermons' | 'announcements' | 'events' | 'clergy' | 'groups' | 'whatsapp';

export default function AdminPage() {
  const {
    analytics, sermons, announcements, events, clergy, groups,
    addSermon, deleteSermon, addAnnouncement, deleteAnnouncement,
    addEvent, deleteEvent, updateGroup
  } = useData();

  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const [savedMsg, setSavedMsg] = useState('');

  // Sermon form state
  const [sermonForm, setSermonForm] = useState({
    title: '', speaker: '', scripture: '', date: '', readingTime: '5 mins',
    summary: '', fullArticle: '', topic: '', category: 'Wermon' as const, pdfUrl: '', audioUrl: '', videoUrl: ''
  });

  // Announcement form
  const [announceForm, setAnnounceForm] = useState({
    title: '', category: 'General' as const, content: '', date: new Date().toISOString().split('T')[0],
    expiryDate: '', isPinned: false
  });

  // Event form
  const [eventForm, setEventForm] = useState({
    title: '', date: '', time: '', location: '', description: '', category: ''
  });

  // Whatsapp edit state
  const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
  const [newWhatsappLink, setNewWhatsappLink] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const showSaved = (msg = 'Saved successfully!') => {
    setSavedMsg(msg);
    setTimeout(() => setSavedMsg(''), 3000);
  };

  const handleAddSermon = (e: React.FormEvent) => {
    e.preventDefault();
    addSermon(sermonForm);
    setSermonForm({ title: '', speaker: '', scripture: '', date: '', readingTime: '5 mins', summary: '', fullArticle: '', topic: '', category: 'Wermon', pdfUrl: '', audioUrl: '', videoUrl: '' });
    showSaved('Sermon published successfully!');
  };

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    addAnnouncement(announceForm);
    setAnnounceForm({ title: '', category: 'General', content: '', date: new Date().toISOString().split('T')[0], expiryDate: '', isPinned: false });
    showSaved('Announcement published!');
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent(eventForm);
    setEventForm({ title: '', date: '', time: '', location: '', description: '', category: '' });
    showSaved('Event added!');
  };

  const handleSaveWhatsapp = (groupId: string) => {
    const group = groups.find(g => g.id === groupId);
    if (group) {
      updateGroup({ ...group, whatsappLink: newWhatsappLink });
      setEditingGroupId(null);
      showSaved('WhatsApp link updated!');
    }
  };

  const navItems: { id: AdminSection; label: string; icon: React.ComponentType<any> }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sermons', label: 'Sermons', icon: BookOpen },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'clergy', label: 'Clergy Profiles', icon: Users },
    { id: 'groups', label: 'Group WhatsApp', icon: Link },
  ];

  // ─── Login gate ───────────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-grey dark:bg-slate-950 px-4">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-10 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange mx-auto flex items-center justify-center">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-xl font-extrabold font-serif text-brand-blue dark:text-white">Admin Panel</h2>
            <p className="text-xs text-slate-400">All Saints' Cathedral CMS — Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Admin PIN</label>
              <input
                type="password"
                required
                maxLength={8}
                value={pin}
                onChange={e => setPin(e.target.value)}
                placeholder="Enter your PIN"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-4 py-3 text-base tracking-widest text-center focus:outline-none focus:border-brand-orange dark:text-white"
              />
              {authError && <p className="text-xs text-red-500 font-semibold mt-1">Incorrect PIN. Please try again.</p>}
              <p className="text-[10px] text-slate-400 mt-1">Default demo PIN: 1234</p>
            </div>
            <button type="submit"
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-serif font-bold text-sm py-3.5 rounded-xl transition-colors shadow-sm">
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Admin Dashboard ───────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-screen bg-brand-grey dark:bg-slate-950">
      
      {/* Sidebar */}
      <aside className="w-64 bg-brand-charcoal dark:bg-slate-900 text-slate-300 flex flex-col py-8 px-4 shrink-0">
        <div className="mb-8 px-2 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">CMS Panel</p>
          <h2 className="text-sm font-bold font-serif text-white leading-snug">All Saints' Cathedral</h2>
        </div>

        <nav className="flex-grow space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-brand-orange text-white'
                    : 'hover:bg-white/5 text-slate-400 hover:text-white'
                }`}>
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button onClick={() => setAuthenticated(false)}
          className="flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-slate-500 hover:text-white transition-colors mt-8">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* Main area */}
      <main className="flex-grow overflow-y-auto p-8 space-y-8">
        
        {/* Saved toast */}
        {savedMsg && (
          <div className="fixed top-4 right-4 z-50 bg-brand-green text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{savedMsg}</span>
          </div>
        )}

        {/* ── Dashboard Overview ── */}
        {activeSection === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-extrabold font-serif text-brand-charcoal dark:text-white">Dashboard Overview</h1>
              <p className="text-xs text-slate-400 mt-1">Welcome, Admin. Here's a snapshot of the cathedral's digital presence.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Page Views', value: analytics.pageViews, color: 'bg-brand-orange/10 text-brand-orange', icon: Eye },
                { label: 'Sermon Downloads', value: analytics.sermonDownloads, color: 'bg-brand-blue/10 text-brand-blue', icon: BookOpen },
                { label: 'Form Submissions', value: analytics.formSubmissions, color: 'bg-brand-green/10 text-brand-green', icon: Save },
                { label: 'WhatsApp Clicks', value: analytics.whatsappClicks, color: 'bg-purple-500/10 text-purple-600', icon: Link },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                    <div className={`p-2.5 rounded-xl w-fit ${stat.color} mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-extrabold text-brand-charcoal dark:text-white">{stat.value.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                <p className="text-2xl font-extrabold text-brand-charcoal dark:text-white">{sermons.length}</p>
                <p className="text-xs text-slate-400 mt-1">Total Sermons / Teachings</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                <p className="text-2xl font-extrabold text-brand-charcoal dark:text-white">{announcements.length}</p>
                <p className="text-xs text-slate-400 mt-1">Active Announcements</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                <p className="text-2xl font-extrabold text-brand-charcoal dark:text-white">{events.length}</p>
                <p className="text-xs text-slate-400 mt-1">Upcoming Events</p>
              </div>
            </div>
          </div>
        )}

        {/* ── Sermons Management ── */}
        {activeSection === 'sermons' && (
          <div className="space-y-8">
            <h1 className="text-2xl font-extrabold font-serif text-brand-charcoal dark:text-white">Sermons & Teachings</h1>

            {/* Add form */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white flex items-center space-x-2">
                <Plus className="w-4 h-4" /><span>Publish New Sermon / Article</span>
              </h3>
              <form onSubmit={handleAddSermon} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Sermon / Article Title" value={sermonForm.title}
                    onChange={e => setSermonForm({...sermonForm, title: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <input required type="text" placeholder="Speaker Name" value={sermonForm.speaker}
                    onChange={e => setSermonForm({...sermonForm, speaker: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <input required type="text" placeholder="Scripture (e.g. John 3:16)" value={sermonForm.scripture}
                    onChange={e => setSermonForm({...sermonForm, scripture: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <input required type="date" value={sermonForm.date}
                    onChange={e => setSermonForm({...sermonForm, date: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <input type="text" placeholder="Topic (e.g. Faith & Prayer)" value={sermonForm.topic}
                    onChange={e => setSermonForm({...sermonForm, topic: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <select value={sermonForm.category}
                    onChange={e => setSermonForm({...sermonForm, category: e.target.value as any})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-slate-300 w-full">
                    <option value="Wermon">Sermon</option>
                    <option value="Bible Study">Bible Study</option>
                    <option value="Article">Article</option>
                    <option value="Devotional">Devotional</option>
                    <option value="Conference">Conference</option>
                    <option value="Teaching">Teaching</option>
                  </select>
                </div>
                <textarea required rows={3} placeholder="Brief Summary (shown in cards)" value={sermonForm.summary}
                  onChange={e => setSermonForm({...sermonForm, summary: e.target.value})}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full resize-none" />
                <textarea required rows={6} placeholder="Full Article Text (displayed in reading modal)" value={sermonForm.fullArticle}
                  onChange={e => setSermonForm({...sermonForm, fullArticle: e.target.value})}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full resize-none" />
                <button type="submit"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors font-serif">
                  Publish Sermon
                </button>
              </form>
            </div>

            {/* Sermons list */}
            <div className="space-y-3">
              {sermons.map(s => (
                <div key={s.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                  <div>
                    <p className="text-xs font-bold text-brand-charcoal dark:text-white font-serif">{s.title}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{s.speaker} · {s.scripture} · {new Date(s.date).toLocaleDateString()}</p>
                  </div>
                  <button onClick={() => deleteSermon(s.id)}
                    className="p-2 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Announcements Management ── */}
        {activeSection === 'announcements' && (
          <div className="space-y-8">
            <h1 className="text-2xl font-extrabold font-serif text-brand-charcoal dark:text-white">Weekly Announcements</h1>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white flex items-center space-x-2">
                <Plus className="w-4 h-4" /><span>Add New Announcement</span>
              </h3>
              <form onSubmit={handleAddAnnouncement} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Announcement Title" value={announceForm.title}
                    onChange={e => setAnnounceForm({...announceForm, title: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <select value={announceForm.category}
                    onChange={e => setAnnounceForm({...announceForm, category: e.target.value as any})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-slate-300 w-full">
                    {['Worship','Events','Baptism','Weddings','Thanksgiving','Youth','Men','Women','Finance','General'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <input required type="date" value={announceForm.date}
                    onChange={e => setAnnounceForm({...announceForm, date: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  <input type="date" placeholder="Expiry Date" value={announceForm.expiryDate}
                    onChange={e => setAnnounceForm({...announceForm, expiryDate: e.target.value})}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                </div>
                <textarea required rows={4} placeholder="Announcement content" value={announceForm.content}
                  onChange={e => setAnnounceForm({...announceForm, content: e.target.value})}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full resize-none" />
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" checked={announceForm.isPinned}
                    onChange={e => setAnnounceForm({...announceForm, isPinned: e.target.checked})}
                    className="accent-brand-orange w-4 h-4" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Pin this announcement to the top</span>
                </label>
                <button type="submit"
                  className="bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors font-serif">
                  Publish Announcement
                </button>
              </form>
            </div>

            <div className="space-y-3">
              {announcements.map(a => (
                <div key={a.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {a.isPinned && <span className="text-[9px] font-bold uppercase bg-brand-orange text-white px-1.5 py-0.5 rounded">Pinned</span>}
                      <span className="text-[9px] font-bold uppercase text-brand-green">{a.category}</span>
                    </div>
                    <p className="text-xs font-bold text-brand-charcoal dark:text-white font-serif">{a.title}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{new Date(a.date).toLocaleDateString()}</p>
                  </div>
                  <button onClick={() => deleteAnnouncement(a.id)}
                    className="p-2 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Events Management ── */}
        {activeSection === 'events' && (
          <div className="space-y-8">
            <h1 className="text-2xl font-extrabold font-serif text-brand-charcoal dark:text-white">Upcoming Events</h1>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white flex items-center space-x-2">
                <Plus className="w-4 h-4" /><span>Add New Event</span>
              </h3>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'title', placeholder: 'Event Title', type: 'text', required: true },
                    { key: 'date', placeholder: 'Event Date', type: 'date', required: true },
                    { key: 'time', placeholder: 'Event Time (e.g. 10:00 AM)', type: 'text', required: false },
                    { key: 'location', placeholder: 'Venue / Location', type: 'text', required: false },
                    { key: 'category', placeholder: 'Category (e.g. Conference, Vigil)', type: 'text', required: false },
                  ].map(field => (
                    <input key={field.key} type={field.type} placeholder={field.placeholder}
                      required={field.required}
                      value={(eventForm as any)[field.key]}
                      onChange={e => setEventForm({...eventForm, [field.key]: e.target.value})}
                      className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full" />
                  ))}
                </div>
                <textarea rows={3} placeholder="Event Description" value={eventForm.description}
                  onChange={e => setEventForm({...eventForm, description: e.target.value})}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-orange dark:text-white w-full resize-none" />
                <button type="submit"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-sm transition-colors font-serif">
                  Add Event to Calendar
                </button>
              </form>
            </div>

            <div className="space-y-3">
              {events.map(ev => (
                <div key={ev.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-sm">
                  <div>
                    <p className="text-xs font-bold text-brand-charcoal dark:text-white font-serif">{ev.title}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{new Date(ev.date).toLocaleDateString()} · {ev.time} · {ev.location}</p>
                  </div>
                  <button onClick={() => deleteEvent(ev.id)}
                    className="p-2 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Clergy Profiles (read-only listing) ── */}
        {activeSection === 'clergy' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-extrabold font-serif text-brand-charcoal dark:text-white">Clergy Profiles</h1>
            <p className="text-xs text-slate-400">Clergy information is seeded from the central data store. Contact your developer to update photo paths or biographies.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clergy.map(c => (
                <div key={c.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex items-center space-x-4">
                  <img src={c.image} alt={c.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange/20 bg-slate-100 dark:bg-slate-800 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-brand-charcoal dark:text-white font-serif">{c.name}</p>
                    <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider mt-0.5">{c.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── WhatsApp Group Links ── */}
        {activeSection === 'groups' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-extrabold font-serif text-brand-charcoal dark:text-white">Saint Group WhatsApp Links</h1>
            <p className="text-xs text-slate-400">Update the WhatsApp community invite links for each saint group below. Changes are saved to local storage instantly.</p>
            <div className="space-y-4">
              {groups.map(g => (
                <div key={g.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold font-serif text-brand-charcoal dark:text-white">{g.name}</h4>
                    {editingGroupId !== g.id ? (
                      <button onClick={() => { setEditingGroupId(g.id); setNewWhatsappLink(g.whatsappLink); }}
                        className="text-[10px] font-bold text-brand-blue hover:text-brand-orange transition-colors flex items-center space-x-1">
                        <Pencil className="w-3 h-3" /><span>Edit Link</span>
                      </button>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <button onClick={() => handleSaveWhatsapp(g.id)}
                          className="text-[10px] font-bold text-brand-green flex items-center space-x-1 hover:underline">
                          <Save className="w-3 h-3" /><span>Save</span>
                        </button>
                        <button onClick={() => setEditingGroupId(null)}
                          className="text-[10px] font-bold text-slate-400 hover:text-red-400 transition-colors">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                  {editingGroupId === g.id ? (
                    <input type="url" value={newWhatsappLink}
                      onChange={e => setNewWhatsappLink(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-brand-orange rounded-xl px-3 py-2 text-xs focus:outline-none dark:text-white" />
                  ) : (
                    <p className="text-[11px] text-slate-400 font-mono break-all">{g.whatsappLink}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
