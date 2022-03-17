/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
