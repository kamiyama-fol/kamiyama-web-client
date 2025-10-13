import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: '',
        pathname: '/production/uploads/**',
      },
    ],
  },
};

export default nextConfig;
