import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 50000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: ["cypress/api/*.cy.ts"],
  },
});
