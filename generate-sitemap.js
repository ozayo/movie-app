// src/generate-sitemap.js

import { writeFileSync } from 'fs';
import path from 'path';
import routes from './src/routes.js'; // Route'ları import ediyoruz

const hostname = 'https://your-website.com'; // Projenizin canlı URL'sini buraya yazın

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${hostname}${route.path}</loc>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>`;

  // Sitemap.xml dosyasını public klasörüne yazıyoruz
  writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap has been generated.');
};

//npm run generate-sitemap

generateSitemap();
