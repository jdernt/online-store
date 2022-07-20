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
  basePath: '',
}

module.exports = nextConfig
