/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // set to false due to the following issue: https://github.com/kirill-konshin/next-redux-wrapper/issues/422
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
