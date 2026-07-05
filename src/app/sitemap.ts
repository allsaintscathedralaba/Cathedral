import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://allsaintscathedralaba.org';
  const groups = [
    'st-mark','st-andrew','st-jude','st-simon','st-philip',
    'st-paul','st-bartholomew','st-luke','st-michael','st-stephen'
  ];

  const staticRoutes = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.9 },
    { url: `${baseUrl}/activities`, priority: 0.8 },
    { url: `${baseUrl}/groups`, priority: 0.8 },
    { url: `${baseUrl}/sermons`, priority: 0.9 },
    { url: `${baseUrl}/announcements`, priority: 0.85 },
    { url: `${baseUrl}/gallery`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
    { url: `${baseUrl}/privacy`, priority: 0.5 },
  ].map(r => ({
    url: r.url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: r.priority,
  }));

  const groupRoutes = groups.map(g => ({
    url: `${baseUrl}/groups/${g}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...groupRoutes];
}
