/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
      return [
        {
          source: '/',
          destination: '/signin',
          permanent: false, // temporary redirect to allow future changes
        },
      ];
    },
  };
  
  module.exports = nextConfig;  