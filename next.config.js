/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // compress: true, // Not needed for static export - handled by hosting provider
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Uncomment and set basePath if deploying to a subdirectory (e.g., /winsights_website)
  // basePath: '/winsights_website',
  // trailingSlash: true,
}

module.exports = nextConfig

