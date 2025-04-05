import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['media.licdn.com', 'sdmntpritalynorth.oaiusercontent.com', "sdmntprwestus.oaiusercontent.com"], // ← adiciona aqui
  },
};

export default nextConfig;
