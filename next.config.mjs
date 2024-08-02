/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/professional-info",
        permanent: true,
      },
      {
        source: "/",
        destination: "/welcome",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
