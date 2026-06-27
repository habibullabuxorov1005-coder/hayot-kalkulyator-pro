/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hayot-kalkulyatori',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
