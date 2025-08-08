/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    projects: [
      {
        extends: true,
      },
      {
        test: {
          name: "unit",
          environment: "jsdom",
          setupFiles: ["./src/tests/setup.ts"],
          include: ["./src/**/*.test.{js,ts,jsx,tsx}"],
          globals: true,
        },
        resolve: {
          alias: {
            src: path.resolve(dirname, "src"),
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
