module.exports = {
  // https://prettier.io/docs/en/options.html
  plugins: ['@prettier/plugin-pug'],
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    // Overrides for specific files .css, .sass, .scss
    {
      files: ['*.css', '*.sass', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    // Overrides for specific files .pug
    {
      files: ['*.pug'],
      options: {
        // See: https://github.com/prettier/plugin-pug#options
        pugBracketSameLine: false,
        pugAttributeSeparator: 'always',
        pugCommentPreserveSpaces: 'keep-all',
        pugSortAttributes: 'as-is',
        pugEmptyAttributes: 'as-is',
        pugClassNotation: 'literal',
        pugIdNotation: 'literal',
        pugClassLocation: 'before-attributes',
        pugExplicitDiv: false,
        pugPreserveAttributeBrackets: false,
        pugPreserveWhitespace: true,
      },
    },
  ],
};
