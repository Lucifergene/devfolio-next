import { MetadataRoute } from 'next';

/**
 * Generate robots.txt configuration for the website
 * @returns {MetadataRoute.Robots} - The robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.avikkundu.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow any URLs that might contain private or sensitive information
        disallow: ['/api/', '/_next/', '/[redirects]'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
