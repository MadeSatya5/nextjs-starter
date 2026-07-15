import nextConfig from "eslint-config-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".next",
      "node_modules/**",
      "public/**",
      "build/**",
      "dist/**",
      "coverage/**",
    ],
  },

  // Next.js config (react, react-hooks, jsx-a11y, import, @next/next)
  ...nextConfig,

  // TypeScript recommended rules
  ...typescriptPlugin.configs["flat/recommended"],

  // Custom rules
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },

    rules: {
      "no-unused-vars": "off",
      "no-console": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",

      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
          children: "never",
        },
      ],

      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "simple-import-sort/exports": "warn",

      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^@?\\w", "^\\u0000"],
            ["^.+\\.s?css$"],
            ["^@/lib", "^@/hooks"],
            ["^@/data"],
            ["^@/components", "^@/container"],
            ["^@/store"],
            ["^@/"],
            [
              "^\\./?$",
              "^\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\.\\.(?!/?$)",
              "^\\.\\./\\.\\./?$",
              "^\\.\\./\\.\\.(?!/?$)",
              "^\\.\\./\\.\\./\\.\\./?$",
              "^\\.\\./\\.\\./\\.\\.(?!/?$)",
            ],
            ["^@/types"],
            ["^"],
          ],
        },
      ],
    },
  },

  // Prettier — must be last to disable conflicting rules
  prettierConfig,
];

export default eslintConfig;
