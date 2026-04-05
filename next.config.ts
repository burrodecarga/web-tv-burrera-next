import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
        
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'wvtbqhwauoysaisqwizo.supabase.co', // Sustituye con el hostname de tu proyecto
        pathname: '**',
      },
       {
        protocol: 'https',
        hostname: 'wvtbqhwauoysaisqwizo.supabase.co', // Sustituye con el hostname de tu proyecto
        pathname: '**',
      },
    ],
  },
};

//https://supabase.com/dashboard/project/wvtbqhwauoysaisqwizo/storage/files/buckets/avatars

export default nextConfig;
