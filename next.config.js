/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // rimosso serverActions
  },
  poweredByHeader: false,
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
