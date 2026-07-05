'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Compass, Award, ShieldAlert, Heart, Calendar, BookOpen, MapPin } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    { name: 'Holiness', desc: 'Living lives consecrated to God, reflecting His purity in our moral conduct.', icon: Shield },
    { name: 'Excellence', desc: 'Giving our absolute best in ministry administration, music, and stewardship.', icon: Award },
    { name: 'Fellowship', desc: 'Fostering deep, loving, and supportive relationships among all parishioners.', icon: Heart },
    { name: 'Evangelism', desc: 'Preaching the undiluted Gospel of Christ to all, plant cell groups, and win souls.', icon: Compass },
    { name: 'Reverence', desc: 'Maintaining solemnity, biblical liturgy, and order in our worship services.', icon: BookOpen },
  ];

  const timelineEvents = [
    { year: '1974', title: 'Humble Beginnings', desc: 'Started as a small local prayer meeting in Abayi-Umuocham, serving a handful of Anglican families in Aba.' },
    { year: '1988', title: 'Parish Status', desc: 'Elevated to a full-fledged parish owing to rapid growth in congregation size, fellowships, and structural developments.' },
    { year: '2004', title: 'Diocesan Birth', desc: 'Diocese of Aba Ngwa North is inaugurated. The church begins preparing for cathedral designation.' },
    { year: '2008', title: 'Cathedral Seat Designation', desc: 'Official designation as All Saints\' Cathedral, Abayi-Umuocham, the primary seat of the Diocesan Bishop.' },
    { year: '2018', title: 'Cathedral Sanctuary Dedication', desc: 'Completion and grand dedication of the new multi-thousand-seater Cathedral auditorium.' },
    { year: '2026', title: 'Digital Transformation & Community Clinic', desc: 'Launching online database, digital library resources, and the St. Luke weekly free welfare medical clinic.' }
  ];

  return (
    <div className="py-12 space-y-24">
      
      {/* Page Header */}
      <section className="relative bg-brand-charcoal text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Animated Background Highlights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-orange/15 rounded-full filter blur-[70px] animate-glow"></div>
          <div className="absolute bottom-1/2 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full filter blur-[70px] animate-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Our Heritage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif leading-tight">
            About All Saints' Cathedral
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Discover our history, mission, vision, values, and what defines us as a leading cathedral in the Anglican Communion.
          </p>
        </div>
      </section>

      {/* History and Diocese Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Foundations</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white leading-tight">
              Our Historic Journey
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-sans">
              <p>
                All Saints' Cathedral, Abayi-Umuocham began as a modest gathering of faithful Anglican believers. Over the decades, through persistent prayer, evangelism, and community welfare, it grew into one of the largest and most influential parishes in Aba, Abia State.
              </p>
              <p>
                In 2008, following the creation and expansion of the **Diocese of Aba Ngwa North (Anglican Communion)**, the parish was chosen to house the Cathedra—the official seat of the Diocesan Bishop. Under the leadership of **Rt. Rev. Nathan C. O. Kanu, Ph.D.**, the cathedral has pioneered major spiritual and social welfare programs across the region.
              </p>
              <p>
                Today, All Saints' Cathedral serves as the spiritual heart of the diocese, coordinating clergy training, missionary outreaches, youth conventions, and major synod meetings, all while maintaining a warm, welcoming community of fellowship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-brand-cream/30 dark:bg-slate-900 border border-brand-orange/10 p-8 rounded-3xl space-y-6 shadow-sm">
              <h4 className="text-lg font-bold font-serif text-brand-charcoal dark:text-white">Diocese of Aba Ngwa North</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                The Diocese of Aba Ngwa North is a constituent diocese of the Church of Nigeria (Anglican Communion). Known for its mission-driven approach, the diocese operates several schools, healthcare clinics, agricultural projects, and evangelistic outposts in both urban Aba and surrounding rural areas.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-brand-orange font-bold uppercase tracking-wider">Diocesan Bishop</span>
                  <p className="text-xs font-bold font-serif text-slate-700 dark:text-slate-300 mt-1">Rt. Rev. Nathan C. O. Kanu, Ph.D.</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-brand-green font-bold uppercase tracking-wider">Diocesan Seat</span>
                  <p className="text-xs font-bold font-serif text-slate-700 dark:text-slate-300 mt-1">All Saints' Cathedral</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="bg-brand-cream/35 dark:bg-slate-950/45 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/80 flex space-x-6">
              <div className="p-4 rounded-2xl bg-brand-orange/15 text-brand-orange shrink-0 h-fit">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold font-serif text-brand-charcoal dark:text-white">Our Vision</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  To be a premier Anglican center of spiritual excellence, raising a holy, united, and transforming community of believers who display Christ in character, word, and service.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/80 flex space-x-6">
              <div className="p-4 rounded-2xl bg-brand-green/15 text-brand-green shrink-0 h-fit">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold font-serif text-brand-charcoal dark:text-white">Our Mission</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  To feed the flock of Christ with sound biblical teaching, administer solemn liturgical sacraments, cultivate deep fellowship, support the needy, and run active evangelism to win Aba Ngwa North and beyond for Christ.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h4 className="text-xl font-bold font-serif text-brand-blue dark:text-white">Our Core Values</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                These principles guide our conduct, worship, and services at All Saints' Cathedral.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl text-center space-y-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-cream dark:bg-slate-800 text-brand-orange mx-auto flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-brand-charcoal dark:text-white font-serif">{val.name}</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Anglican Heritage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden bg-brand-grey dark:bg-slate-800 border-2 border-brand-orange/20 relative shadow-md">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 to-brand-blue/10 flex items-center justify-center p-8 text-center text-xs text-slate-400">
              [Image showing Traditional Anglican Choral Worship & Book of Common Prayer]
            </div>
            <img src="/public/gallery/choir.jpg" alt="Anglican Heritage Worship" className="w-full h-full object-cover relative z-10 opacity-80" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Doctrine & Liturgy</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-brand-blue dark:text-white leading-tight">
              Our Anglican Heritage
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-sans">
              <p>
                All Saints' Cathedral is proud of its identity as part of the **Church of Nigeria (Anglican Communion)**. We stand on the historic three-legged stool of Anglican theology: **Scripture, Tradition, and Reason**.
              </p>
              <p>
                Our worship is guided by the **Book of Common Prayer (BCP)**, which ensures structured, orderly, and deeply scriptural liturgy. In our services, you will hear prayers, readings, and creeds that have been repeated by saints across centuries, uniting us in a global voice of faith.
              </p>
              <p>
                We maintain active communion with the global Anglican body, upholding the historic creeds (Apostles' and Nicene), the Articles of Religion, and the sacraments of Holy Baptism and Holy Communion as instituted by Christ.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-brand-cream/35 dark:bg-slate-950/45 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">History in Steps</span>
            <h3 className="text-3xl font-extrabold font-serif text-brand-blue dark:text-white">Church Development Timeline</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Trace the steps of faith that took us from a small prayer house to a Cathedral seat.
            </p>
          </div>

          {/* Timeline component */}
          <div className="relative border-l-2 border-brand-orange/20 max-w-3xl mx-auto pl-8 space-y-10">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative">
                {/* Node marker */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-brand-orange text-white text-[9px] font-bold flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-sm">
                  {event.year.slice(2)}
                </div>

                <div className="space-y-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                    Year {event.year}
                  </span>
                  <h4 className="text-sm font-bold font-serif text-brand-charcoal dark:text-white">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
