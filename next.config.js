/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'familydoctor.org',
      },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
    ],
  },
}

module.exports = nextConfig
