/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build para Docker/Coolify: bundle mínimo con server.js autosuficiente.
  output: "standalone",
};

export default nextConfig;
