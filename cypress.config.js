import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.js", // Bu satırı ekleyin: Cypress test dosyalarının bulunduğu dizini belirtir
    baseUrl: 'http://localhost:5173', 
  },
});