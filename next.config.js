/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/my-stories",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
