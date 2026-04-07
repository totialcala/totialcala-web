import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // server-only uses the 'react-server' condition to export empty.js,
      // but the middleware Edge runtime doesn't set that condition in Turbopack.
      // Map it to the empty module so Clerk's auth/currentUser imports don't throw.
      "server-only": path.resolve("./node_modules/server-only/empty.js"),
    },
  },
};

export default nextConfig;
