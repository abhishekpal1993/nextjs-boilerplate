/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'app'],
    styledComponents: true,
  },
}

module.exports = nextConfig
