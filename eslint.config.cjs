const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = defineConfig([
   {
      files: ["**/*.js", "**/*.ts"],
      languageOptions: {
         parser: tsParser,
         parserOptions: { project: "tsconfig.json", ecmaVersion: "latest", sourceType: "module" }
      },
      plugins: { js: js, "@typescript-eslint": tsPlugin },
      extends: ["js/recommended", "@typescript-eslint/recommended"]
   },
   {
      rules: {
         "no-unused-vars": "off", // prefer ts
         "no-undef": "warn"
      }
   }
]);