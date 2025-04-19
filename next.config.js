/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/signin',
          permanent: false, // Set to true if you want search engines to cache the redirect
        },
      ];
    },
  };
  
  module.exports = nextConfig;  