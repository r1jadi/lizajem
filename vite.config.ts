import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tanstackStart(), nitro(), react(), tailwindcss(), tsConfigPaths()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" ||
          (warning.code === "UNUSED_EXTERNAL_IMPORT" &&
            typeof warning.message === "string" &&
            warning.message.includes("never used"))
        ) {
          return;
        }

        warn(warning);
      },
    },
  },
});
