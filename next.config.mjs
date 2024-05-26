/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'srzirtkdhnlmurxucjad.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/product-image/**',
      },
    ],
  },
};

export default nextConfig;
