module.exports = {
  '*.{js, jsx, css, json}': ['lint:fix', 'pretty-quick --staged', 'git add'],
  '*.{md,mdx}': ['prettier --write'],
}
