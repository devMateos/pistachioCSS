export { darkColorsTemplate }


const darkColorsTemplate = `
.dark-mode {
  /* Background colors */
  --color-background-primary: var(--color-darker);
  --color-background-secondary: var(--color-dark);
  /* Text colors */
  --color-text: var(--color-light);
  --color-light-text: var(--color-light-gray);
  /* Action colors */
  --color-action-default: var(--color-action-secondary);
  --color-action-active: var(--color-action-primary);
  /* Border colors */
  --border-color: var(--color-light-gray);
  --border-standard: var(--border-style) var(--border-width) var(--border-color);
}
`;