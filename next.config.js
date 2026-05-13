/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LabSite',
  assetPrefix: '/LabSite',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
