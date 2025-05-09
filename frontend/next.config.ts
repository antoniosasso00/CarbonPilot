/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  poweredByHeader: false,
  images: {
    domains: ['localhost'],
  },
} 