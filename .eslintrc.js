module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest", "cypress"],
  rules: {
    eqeqeq: "error",
    "no-console": "error",
    "react/prop-types": 0,
  },
};
