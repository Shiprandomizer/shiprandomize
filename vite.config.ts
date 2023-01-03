import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: `${process.env.PUBLIC_URL || ""}`,
  plugins: [react()],
});
