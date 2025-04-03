import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/cynthiachenn.github.io' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
