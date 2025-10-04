import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// next.config.js
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.incolmotos-yamaha.com.co",
      },
    ],
  },
};


export default nextConfig;