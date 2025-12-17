// ==========================================================================
// production vite.config.ts
// ===========================================================================
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), cloudflare()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
// =========================================================================
// development vite.config.ts
// =========================================================================
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { cloudflare } from "@cloudflare/vite-plugin";
// import path from "path";

// export default defineConfig({
//   plugins: [react(), cloudflare()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
