/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:slug*",
        destination: "/api/auth/github",
      },
    ];
  },
};

module.exports = nextConfig;
