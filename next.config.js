/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/team',
        destination: 'https://jebbit.com/',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
