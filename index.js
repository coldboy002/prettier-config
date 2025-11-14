/**
 * @see https://prettier.io/docs/en/options.html
 */

/** @type {import("prettier").Config} */
const config = {
  /**
   * Plugin adds support for the Pug language to Prettier
   * @see https://prettier.github.io/plugin-pug/
   * A Prettier plugin to sort the keys of a package.json file using sort-package-json
   * @see https://github.com/matzkoh/prettier-plugin-packagejson
   */
  plugins: ['@prettier/plugin-pug', 'prettier-plugin-packagejson'],

  printWidth: 100,
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
      /**
       * @see https://github.com/prettier/plugin-pug#options
       */
      options: {
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

export default config;
