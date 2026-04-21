import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/lydianoh-tech-se_finalProject_frondend/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
