import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"],
    ["html", {open: "always"}]
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: "on"
  },
});