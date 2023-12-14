export { generateAtoms }

function generateAtoms(typographiesData){
  const typographiesConfig = typographiesData[0].config;
const atomsTemplate = `
/* ----- Items (Atoms) ----- */

/* Interface Color */
body {
  background-color: var(--color-background-primary);
}

/* Spacing */
section {
  padding: var(--spacing-M) 0;
}

/* Scrollbar */
*::-webkit-scrollbar {
  width: var(--spacing-S);
}
* ::-webkit-scrollbar-thumb {
  background: var(--color-gray);
  border-radius: var(--border-radius-standard);
}

/* Links */
a {
  color: var(--color-action-default);
}
a:hover {
  color: var(--color-action-active);
  cursor: pointer;
}

/* Text */
label, li, p, small, div {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[5].family});
  font-size: var(--font-size-${typographiesConfig[5].size});
  font-weight: var(--font-weight-${typographiesConfig[5].weight});
}
small {
  font-family: var(--font-family-${typographiesConfig[6].family});
  font-size: var(--font-size-${typographiesConfig[6].size});
  font-weight: var(--font-weight-${typographiesConfig[6].weight});
}

/* Headings */
h1, .h1 {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[0].family});
  font-size: var(--font-size-${typographiesConfig[0].size});
  font-weight: var(--font-weight-${typographiesConfig[0].weight});
}
h2, .h2 {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[1].family});
  font-size: var(--font-size-${typographiesConfig[1].size});
  font-weight: var(--font-weight-${typographiesConfig[1].weight});
}
h3, .h3 {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[2].family});
  font-size: var(--font-size-${typographiesConfig[2].size});
  font-weight: var(--font-weight-${typographiesConfig[2].weight});
}
h4, .h4 {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[3].family});
  font-size: var(--font-size-${typographiesConfig[3].size});
  font-weight: var(--font-weight-${typographiesConfig[3].weight});
}
h5, .h5 {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[4].family});
  font-size: var(--font-size-${typographiesConfig[4].size});
  font-weight: var(--font-weight-${typographiesConfig[4].weight});
}

/* BUTTONS */
.button {
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  display: flex;
  font-family: var(--font-family-body);
  font-size: var(--font-size-S);
  font-weight: var(--font-weight-bold);
  justify-content: center;
  max-width: 16rem;
  padding: var(--spacing-XS) var(--spacing-M);
}
.button--primary {
  background-color: var(--color-action-default);
  border-color: var(--color-action-default);
  color: var(--color-light);
}
.button--primary:hover {
  background-color: var(--color-action-active);
  border-color: var(--color-action-active);
  color: var(--color-light);
}
.button--secondary {
  background-color: var(--color-background-primary);
  border-color: var(--color-action-default);
  color: var(--color-action-default);
}
.button--secondary:hover {
  background-color: var(--color-action-active);
  border-color: var(--color-action-active);
  color: var(--color-light);
}
.button--affirmative {
  background-color: var(--color-background-primary);
  border-color: var(--color-affirmative-primary);
  color: var(--color-affirmative-primary);
}
.button--affirmative:hover {
  background-color: var(--color-affirmative-secondary);
  border-color: var(--color-affirmative-secondary);
  color: var(--color-light);
}
.button--negative {
  background-color: var(--color-background-primary);
  border-color: var(--color-negative-primary);
  color: var(--color-negative-primary);
}
.button--negative:hover {
  background-color: var(--color-negative-secondary);
  border-color: var(--color-negative-secondary);
  color: var(--color-light);
}

/* Nav Buttons */
.navbar__button {
  color: var(--color-text);
  font-family: var(--font-family-body);
  font-size: var(--font-size-S);
  font-weight: var(--font-weight-bold);
}
.navbar__button:hover {
  color: var(--color-action-active);
}
.navbar__button--active {
  color: var(--color-action-default);
}

.nav-button {
  align-items: center;
  color: var(--color-text);
  display: flex;
  gap: var(--spacing-XS);
}
.nav-button * {
  color: var(--color-text);
  fill: var(--color-text);
  stroke: var(--color-text);
}
.nav-button:hover * {
  color: var(--color-action-active);
  fill: var(--color-action-active);
  stroke: var(--color-action-active);
}

/* FORMS */
/* Input */
.form__input-item {
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  font-family: var(--font-family-body);
  outline: none;
  padding: var(--spacing-XS) var(--spacing-S);
}
/* Input color */
.form__input-color {
  appearance: auto;
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  cursor: pointer;
  height: var(--font-size-XXL);
  padding: 0;
  width: var(--font-size-XXL);
}
.form__input-item:focus, .form__input-color:focus {
  border-color: var(--color-affirmative-primary);
}
.form__input-item:disabled, .form__input-color:disabled {
  background-color: var(--color-dark);
  color: var(--color-gray);
}
.form__input-color::-webkit-color-swatch-wrapper {
  padding: 0;
}
.form__input-color::-webkit-color-swatch {
  border-radius: var(--border-radius-standard);
}
/* Input checkbox */
.form__input-checkbox {
  appearance: none;
  background-color: var(--color-negative-primary);
  border: var(--border-style) var(--border-width) var(--color-negative-secondary);
  border-radius: var(--border-radius-standard);
  cursor: pointer;
  height: var(--spacing-M);
  width: var(--spacing-M);
}
.form__input-checkbox:checked {
  border-color: var(--color-affirmative-primary);
  background-color: var(--color-affirmative-primary);
}
/* Input radio */
.form__input-radio {
  appearance: none;
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  margin: 0 var(--spacing-XS);
  height: var(--spacing-M);
  width: var(--spacing-M);
}
.form__input-radio:focus {
  border-color: var(--color-affirmative-primary);
}
.form__input-radio:checked {
  background-color: var(--color-affirmative-secondary);
}
.form__input-radio:indeterminate {
  background-color: var(--color-negative-primary);
}
`;

return atomsTemplate;
}