/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     remotePatterns: [
      {
        protocol: 'https', // or 'http' if needed
        hostname: 'images.unsplash.com',
        port: '', // leave empty if default (80/443)
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      
    ],    
  },
};

export default nextConfig;
