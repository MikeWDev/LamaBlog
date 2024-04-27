const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "gfx.rozrywka.radiozet.pl",
      },
    ],
  },
};

module.exports = nextConfig;
