import withNuxt from "./.nuxt/eslint.config.mjs";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import vueParser from "vue-eslint-parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default withNuxt([
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
  /**
   * Игноры
   */
  {
    ignores: [
      "node_modules",
      ".output",
      ".vscode",
      ".idea",
      ".nuxt",
      "components/ui",
      "eslint.config.js",
    ],
  },

  /**
   * Базовые правила (общие)
   */
  {
    rules: {
      "semi": ["error", "always"],
      "no-console": "warn",
      "no-debugger": "error",
      "eqeqeq": "error",
      "prefer-const": "error",
    },
  },

  /**
   * TypeScript (общие правила)
   */
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-inferrable-types": "error",
    },
  },

  /**
   * TypeScript файлы
   */
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-imports": "warn"
    },
  },

  /**
   * Vue файлы
   */
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "vue/max-attributes-per-line": "off",
    },
  },
]);
