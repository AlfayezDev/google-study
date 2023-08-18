/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    serverActions: true,
  },
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
