import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { watch } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react(
      {
        include: "**/*.jsx",
      }
  )]
});
