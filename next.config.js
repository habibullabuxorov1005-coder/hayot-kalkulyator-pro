/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hayot-kalkulyator-pro',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig