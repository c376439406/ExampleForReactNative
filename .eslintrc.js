module.exports = {
  env: {
    browser: true,
    commonjs: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: [1, "double"],
    semi: [1, "always"],

    "no-console": 1, // disallow use of console (off by default in the node environment)
    "no-unused-vars": 1, // disallow declaration of variables that are not used in the code
    "no-string-refs": 0,
    //
    // ECMAScript 6
    //
    // These rules are only relevant to ES6 environments and are off by default.
    //
    "no-var": 2, // require let or const instead of var (off by default)
    "generator-star-spacing": [2, "before"] // enforce the spacing around the * in generator functions (off by default)
  }
};
