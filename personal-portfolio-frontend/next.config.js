/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["ucarecdn.com"],
  },
}

module.exports = nextConfig
