import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Repository එකේ නමට අනුව base path එකක් ඕන නම් විතරක් පහළ line එක දාන්න:
  // basePath: '/repo-name',
};

export default nextConfig;