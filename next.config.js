/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comment out for server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
