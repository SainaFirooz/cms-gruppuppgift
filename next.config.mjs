/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["a.storyblok.com"],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // Allow embedding within the same origin
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.storyblok.com", // Allow Storyblok to embed your site
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://app.storyblok.com", // Allow requests from Storyblok
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Allow necessary HTTP methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization", // Allow necessary headers
          },
        ],
      },
    ];
  },
};

export default nextConfig;
