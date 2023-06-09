module.exports = {
  // * https://prettier.io/docs/en/options.html

  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.css', '*.sass', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
