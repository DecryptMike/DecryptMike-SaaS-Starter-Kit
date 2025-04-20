/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ must be an object
  },
};

module.exports = nextConfig;