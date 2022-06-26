/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/portfolio-next-tailwind",
  assetPrefix: "/portfolio-next-tailwind",
};

module.exports = nextConfig;
