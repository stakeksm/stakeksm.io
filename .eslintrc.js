module.exports = {
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["@typescript-eslint", /*"react"*/, "prettier"],
    extends: [
      // "airbnb",
      // "airbnb/hooks",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      // "plugin:react/recommended",
      // "plugin:import/errors",
      // "plugin:import/warnings",
      // "plugin:import/typescript",
      "prettier",
    ],
}