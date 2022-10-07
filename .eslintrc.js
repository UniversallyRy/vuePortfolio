module.exports = {
  parser: "vue-eslint-parser",
  plugins: ["gridsome"],
  rules: {
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
  },
    "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true,
      "tsx": true,
      "vue": true,
    }
  }
};
