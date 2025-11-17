/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.winsights.info'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

