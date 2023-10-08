/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["firebasestorage.googleapis.com"] },
  appDir: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
