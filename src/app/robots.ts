import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: 'https://allsaintscathedralaba.org/sitemap.xml',
    host: 'https://allsaintscathedralaba.org',
  };
}
