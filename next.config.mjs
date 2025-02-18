import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  removeConsole: {
    exclude: ["error", "info"],
  },
  trailingSlash: false,
  images: {
    deviceSizes: [360, 435, 768, 1024, 1280],
    formats: ["image/avif"],
  },
  experimental: {
    webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
  },
  images: {
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
    reactCompiler: true,
  },
};

export default withContentCollections(nextConfig);
