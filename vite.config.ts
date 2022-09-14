import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { webfontDownload } from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500&display=swap",
    ]),
    ,
    react(),
  ],
});
