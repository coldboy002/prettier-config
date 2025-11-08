module.exports = {
  // * https://prettier.io/docs/en/options.html
  plugins: ['@prettier/plugin-pug'],
  singleQuote: true,
  trailingComma: 'all',

  // * https://github.com/prettier/plugin-pug#options
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

  // Overrides for specific files .css, .sass, .scss
  overrides: [
    {
      files: ['*.css', '*.sass', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
