/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ggcfapdcaehqbchzsfqh.supabase.co',
        pathname: '/storage/**',
      },
    ],
  },
}

export default nextConfig
