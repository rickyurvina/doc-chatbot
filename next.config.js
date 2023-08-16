/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true, asyncWebAssembly: true, layers: true };
    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports ={
  output:"standalone",
}

export default nextConfig;
