/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=()",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self'; object-src 'none'",
  },
];

const nextConfig = {
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
