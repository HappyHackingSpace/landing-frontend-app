import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: false,
  images: {
    deviceSizes: [360, 435, 768, 1024, 1280],
    formats: ["image/avif"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.kommunity.com',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
  experimental: {
    webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
  },
  async headers() {
    return [
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default withContentCollections(nextConfig);
