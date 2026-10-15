import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a static site that Firebase Hosting can serve directly.
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
