import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'media.licdn.com', 
      'sdmntpritalynorth.oaiusercontent.com', 
      "sdmntprwestus.oaiusercontent.com",
      "qwcyhvevwjacjawavqgx.supabase.co",
      "mendoncagabriel.github.io"
    ],
  },
};

export default nextConfig;
