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
main {
  padding: 0 var(--spacing-XL);
}
section {
  padding: var(--spacing-M) 0;
}

/* Scrollbar */
*::-webkit-scrollbar {
  width: var(--spacing-S);
}
* ::-webkit-scrollbar-thumb {
  background: var(--color-gray);
  border-radius: var(--border-round);
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
  font-family: var(--font-family-${typographiesConfig[0].family});
  font-size: var(--font-size-${typographiesConfig[0].size});
  font-weight: var(--font-weight-${typographiesConfig[0].weight});
}
h2, .h2 {
  font-family: var(--font-family-${typographiesConfig[1].family});
  font-size: var(--font-size-${typographiesConfig[1].size});
  font-weight: var(--font-weight-${typographiesConfig[1].weight});
}
h3, .h3 {
  font-family: var(--font-family-${typographiesConfig[2].family});
  font-size: var(--font-size-${typographiesConfig[2].size});
  font-weight: var(--font-weight-${typographiesConfig[2].weight});
}
h4, .h4 {
  font-family: var(--font-family-${typographiesConfig[3].family});
  font-size: var(--font-size-${typographiesConfig[3].size});
  font-weight: var(--font-weight-${typographiesConfig[3].weight});
}
h5, .h5 {
  font-family: var(--font-family-${typographiesConfig[4].family});
  font-size: var(--font-size-${typographiesConfig[4].size});
  font-weight: var(--font-weight-${typographiesConfig[4].weight});
}

/* BUTTONS */
.button {
  border: var(--border-standard);
  border-radius: var(--border-round);
  display: flex;
  font-family: var(--font-family-${typographiesConfig[0].family});
  font-size: var(--font-size-${typographiesConfig[0].size});
  font-weight: var(--font-weight-${typographiesConfig[0].weight});
  justify-content: center;
  min-width: 9.6rem;
  padding: var(--spacing-XS) var(--spacing-S);
  width: fit-content;
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
.navbar__button > a {
  color: var(--color-text);
  font-family: var(--font-family-${typographiesConfig[0].family});
  font-size: var(--font-size-${typographiesConfig[0].size});
  font-weight: var(--font-weight-${typographiesConfig[0].weight});
}
.navbar__button > a:hover {
  color: var(--color-action-active);
}
.navbar__button--active > a {
  color: var(--color-action-default);
}

.nav-button {
  align-items: center;
  color: var(--color-text);
  display: flex;
  gap: var(--spacing-XS);
}
.nav-button__icon {
  stroke: var(--color-text);
}
.nav-button:hover * {
  color: var(--color-action-active);
}
.nav-button:hover .nav-button__icon {
  stroke: var(--color-action-active);
}

/* FORMS */
/* Input */
.form__input-item {
  border: var(--border-standard);
  border-radius: var(--border-round);
  font-family: var(--font-family-${typographiesConfig[0].family});
  outline: none;
  padding: var(--spacing-XS) var(--spacing-S);
  width: 15.2rem;
}
/* Input color */
.form__input-color {
  appearance: auto;
  border: var(--border-standard);
  border-radius: var(--border-round);
  cursor: pointer;
  height: var(--font-size-${typographiesConfig[0].size});
  padding: 0;
  width: var(--font-size-${typographiesConfig[0].size});
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
  border-radius: var(--border-round);
}
/* Input checkbox */
.form__input-checkbox {
  appearance: none;
  background-color: var(--color-negative-primary);
  border: var(--border-style) var(--border-width) var(--color-negative-secondary);
  border-radius: var(--border-round);
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
  border-radius: var(--border-round);
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