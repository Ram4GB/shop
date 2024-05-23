module.exports = {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports'), 'prettier-plugin-organize-imports'],
  importOrder: ['^(react|react-dom)$', '^([a-z]|@[a-z])', '', '.*'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
