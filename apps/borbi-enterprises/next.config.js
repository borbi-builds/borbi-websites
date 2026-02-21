/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@borbi/glass-ui'],
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
