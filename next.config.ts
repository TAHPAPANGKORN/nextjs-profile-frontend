import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bmkebleqcsqdeenjbgcz.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'your-image-url.com',
      },
    ],
  },
};

export default nextConfig;
