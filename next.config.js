// Set NEXT_PUBLIC_BASE_PATH when the site is served under a sub-path
// (e.g. /LabSite on GitHub Pages). Leave it unset for root deployments
// like lab.hyphy.org. next/image does not apply basePath to src, so
// image paths go through withBasePath() in src/lib/basePath.js.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
