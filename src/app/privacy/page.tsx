import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | All Saints\' Cathedral Abayi-Umuocham',
  description: 'Read the Privacy Policy of All Saints\' Cathedral Abayi-Umuocham covering cookies, data collection, analytics, forms, user rights, and security.',
};

const sections = [
  {
    title: '1. Introduction',
    content: `All Saints' Cathedral Abayi-Umuocham ("the Cathedral", "we", "us", or "our"), under the Diocese of Aba Ngwa North (Anglican Communion), is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website at allsaintscathedralaba.org (the "Site") or interact with us through contact forms, newsletter subscriptions, or online media.

By using our Site, you consent to the practices described in this policy.`
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following categories of information:

a. Personal Information You Provide Voluntarily:
When you submit a contact form, join a ministry, subscribe to our newsletter, or register for an event, you may provide: Full name, email address, phone number, subject/category of inquiry, and message content.

b. Automatically Collected Information:
When you visit our website, we may automatically collect: IP address (anonymized), browser type and version, pages visited and time spent, device type (desktop, mobile, tablet), referring URLs, and general geographic location (country/region level only).

c. Cookies and Tracking Technologies:
We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and remember your preferences (e.g., dark mode settings). We do not use cookies for advertising or third-party tracking.`
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information collected for the following purposes:
• To respond to your enquiries and messages in a timely manner
• To send you parish newsletters, event notifications, and sermon updates if you have subscribed
• To improve the functionality and content of our website
• To analyze how our pages are used in order to improve the user experience
• To comply with legal obligations and protect the Cathedral's legitimate interests
• To manage ministry membership and group communications

We will never sell, rent, or trade your personal information to third parties for marketing purposes.`
  },
  {
    title: '4. Cookies Policy',
    content: `Our website uses the following types of cookies:

Strictly Necessary Cookies: These are required for the basic functioning of the site, including navigation and dark/light mode preferences. You cannot opt out of these cookies while using the site.

Analytics Cookies: We use anonymized analytics data (page views, session duration) to understand how visitors interact with our site. This data does not identify individual users.

Preference Cookies: These remember your settings (e.g., language, theme preferences) to provide a personalized experience on subsequent visits.

You may disable cookies through your browser settings at any time. However, some features of the site may not function correctly without cookies.`
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected. Specifically:

• Contact form submissions are retained for 12 months and then securely deleted.
• Newsletter subscription data is retained until you unsubscribe.
• Analytics data is aggregated and anonymized; it is not linked to identifiable individuals.
• Ministry membership records are maintained for administrative purposes and updated annually.`
  },
  {
    title: '6. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include:

• HTTPS encryption for all data transmitted between your browser and our servers
• Regular security audits and software updates
• Access controls limiting who within the Cathedral administration can access personal data
• Secure, password-protected admin areas with authentication

While we take every reasonable precaution, no method of online data transmission is completely secure. We cannot guarantee absolute security but will notify you promptly if a data breach is discovered that may affect your rights.`
  },
  {
    title: '7. Third-Party Services',
    content: `Our website may use the following third-party services:

• Google Analytics (anonymized, for website traffic analysis)
• Google Maps (for embedded location map on the Contact page)
• YouTube (for embedded sermon and service video recordings)
• WhatsApp (for group community link redirections)

Each of these services has its own Privacy Policy governing their data collection and use. We encourage you to review their respective policies. We are not responsible for the privacy practices of these external services.`
  },
  {
    title: '8. Your Rights',
    content: `You have the following rights regarding your personal data:

• Right of Access: You may request a copy of the personal information we hold about you.
• Right to Rectification: You may request that we correct inaccurate or incomplete information.
• Right to Erasure: You may request that we delete your personal data where there is no compelling legal reason for us to continue holding it.
• Right to Object: You may object to the use of your data for specific purposes (e.g., newsletter communications).
• Right to Withdraw Consent: Where processing is based on your consent, you may withdraw it at any time.

To exercise any of these rights, please contact us at: info@allsaintscathedralaba.org`
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately and we will take steps to delete such information promptly.`
  },
  {
    title: '10. Changes to This Privacy Policy',
    content: `We reserve the right to update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or website features. Any material changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.`
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions, concerns, or requests related to this Privacy Policy, please contact:

All Saints' Cathedral Abayi-Umuocham
Diocese of Aba Ngwa North (Anglican Communion)
Abayi-Umuocham Road, Aba, Abia State, Nigeria

Email: info@allsaintscathedralaba.org
Phone: +234 803 123 4567

Office Hours: Monday – Friday, 8:00 AM – 4:00 PM (WAT)`
  }
];

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full filter blur-[80px] animate-glow pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full">Legal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">Privacy Policy</h2>
          <p className="text-sm text-slate-300 font-sans">Last revised: July 5, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-10">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold font-serif text-brand-blue dark:text-white">{section.title}</h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line font-sans">
              {section.content}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
