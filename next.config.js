/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bbts1.azureedge.net"],
  },
};
module.exports = nextConfig;
