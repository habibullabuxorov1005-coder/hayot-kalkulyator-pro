/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hayot-kalkulyator-pro',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  i18n: {
    locales: ['uz', 'en'],
    defaultLocale: 'uz',
  },
}

module.exports = nextConfig
