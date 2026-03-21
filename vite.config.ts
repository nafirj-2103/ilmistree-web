import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "development" ? "/" : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  plugins: [
    react(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  },
  build: {
    // Raise the warning bar a bit while still catching unexpectedly large bundles
    chunkSizeWarningLimit: 1400,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          "react-three-fiber": ["@react-three/fiber"],
          "react-three-drei": ["@react-three/drei"],
          "framer-motion": ["framer-motion"],
          // keep core react libs bundled together for caching
          react: ["react", "react-dom", "react-router", "react-router-dom"],
        },
      },
    },
  },
});
