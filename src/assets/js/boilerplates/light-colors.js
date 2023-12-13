export { lightColorsTemplate }

const lightColorsTemplate = `
.light-mode {
  /* Background colors */
  --color-background-primary: var(--color-light);
  --color-background-secondary: var(--color-light-gray);
  /* Text colors */
  --color-text: var(--color-darker);
  --color-light-text: var(--color-dark);
  /* Action colors */
  --color-action-default: var(--color-action-primary);
  --color-action-active: var(--color-action-secondary);
  /* Border colors */
  --border-color: var(--color-gray);
  --border-standard: var(--border-style) var(--border-width) var(--border-color);
}
`;