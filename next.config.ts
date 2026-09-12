import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages は静的ファイルのみを配信するため、静的エクスポートを有効化する。
  // これにより `next build` が `out/` を生成し、Actions がそれをアップロードできる。
  output: "export",
  // `out/foo/index.html` を出力させ、GitHub Pages 上でのパス解決を安定させる。
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    // 静的エクスポートでは Next.js の画像最適化サーバーが動かないため無効化する。
    unoptimized: true,
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
