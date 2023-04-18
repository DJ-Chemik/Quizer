const envObject = {
  API_URL: process.env.API_URL,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: envObject,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig;
