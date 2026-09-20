import type { NextConfig } from "next";

// A project site lives at https://<owner>.github.io/<repository>/.
// A user site named <owner>.github.io instead lives directly at the domain root.
const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isProjectSite =
  process.env.GITHUB_ACTIONS === "true" &&
  repository !== undefined &&
  repository !== `${owner}.github.io`;
const basePath = isProjectSite ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  // Keeps generated build state separate from any interrupted local build.
  distDir: "build",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
