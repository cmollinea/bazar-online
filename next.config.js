/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.dummyjson.com'
      }
    ]
  }
};

module.exports = nextConfig;
