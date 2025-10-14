import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  // 👇 This is the critical line for correct asset paths
  base: "./", // Change this from "/" to "./"

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
