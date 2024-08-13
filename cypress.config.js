const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.saucedemo.com/",
    //pageLoadTimeout: 120000,
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: true,
    experimentalOriginDependencies:true,
    includeShadowDom: true,
    //for the safari browser 
    experimentalStudio:true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
