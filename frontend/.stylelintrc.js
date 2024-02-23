module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/vue',
    require.resolve("./base-stylelint.js")
  ],
  rules: {
    'color-function-notation': 'modern',
  },
};
