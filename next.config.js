/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['appevent.ru'],
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

module.exports = nextConfig
