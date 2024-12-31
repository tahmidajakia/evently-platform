/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
   },
}

module.exports = nextConfig
