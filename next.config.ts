/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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

export default nextConfig
