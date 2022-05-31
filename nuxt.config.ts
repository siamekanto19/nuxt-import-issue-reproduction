import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  build: {
    transpile: ["bcryptjs"],
  },
});
