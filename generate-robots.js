// src/generate-robots.js

import { writeFileSync } from 'fs';
import { join } from 'path';

// Function to generate robots.txt
const generateRobotsTxt = () => {
  const env = process.env.NODE_ENV; // Check the environment

  let content = '';

  if (env === 'development') {
    // Block all pages in development environment
    content = `User-agent: *\nDisallow: /`;
  } else if (env === 'production') {
    // Allow all pages in production environment
    content = `User-agent: *\nAllow: /\n\nSitemap: https://movie-app-sage-six.vercel.app/sitemap.xml`;
  }

  // Write the content to robots.txt in public folder
  writeFileSync(join(process.cwd(), 'public', 'robots.txt'), content);
  console.log(`robots.txt has been generated for ${env} environment.`);
};

//npm run generate-robots-dev
//npm run generate-robots-prod

generateRobotsTxt();
