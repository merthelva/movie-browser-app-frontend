/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    MONGODB_BASE_URL: process.env.MONGODB_BASE_URL,
  },
};

module.exports = nextConfig;
