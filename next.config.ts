import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/IEEE-Campaign",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;