/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["ucarecdn.com"],
  },
}

module.exports = nextConfig
