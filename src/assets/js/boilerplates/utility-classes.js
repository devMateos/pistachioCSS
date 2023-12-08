export { utilityClasses }

const utilityClasses = `
/* Background color */
.bg-brand {
  background-color: var(--color-brand);
}.bg-action-primary {
  background-color: var(--color-action-primary);
}.bg-action-secondary {
  background-color: var(--color-action-secondary);
}.bg-affirmative-primary {
  background-color: var(--color-affirmative-primary);
}.bg-affirmative-secondary {
  background-color: var(--color-affirmative-secondary);
}.bg-negative-primary {
  background-color: var(--color-negative-primary);
}.bg-negative-secondary {
  background-color: var(--color-negative-secondary);
}.bg-light {
  background-color: var(--color-light);
}.bg-light-gray {
  background-color: var(--color-light-gray);
}.bg-gray {
  background-color: var(--color-gray);
}.bg-dark {
  background-color: var(--color-dark);
}.bg-darker {
  background-color: var(--color-darker);
}

/* Text color */
.text-brand {
  color: var(--color-brand);
}.text-action-primary {
  color: var(--color-action-primary);
}.text-action-secondary {
  color: var(--color-action-secondary);
}.text-affirmative-primary {
  color: var(--color-affirmative-primary);
}.text-affirmative-secondary {
  color: var(--color-affirmative-secondary);
}.text-negative-primary {
  color: var(--color-negative-primary);
}.text-negative-secondary {
  color: var(--color-negative-secondary);
}.text-light {
  color: var(--color-light);
}.text-light-gray {
  color: var(--color-light-gray);
}.text-gray {
  color: var(--color-gray);
}.text-dark {
  color: var(--color-dark);
}.text-darker {
  color: var(--color-darker);
}

/* Font family */
.font-heading {
  font-family: var(--font-family-heading);
}.font-body {
  font-family: var(--font-family-body);
}

/* Font weight */
.font-thin {
  font-weight: var(--font-weight-thin);
}.font-extra-light {
  font-weight: var(--font-weight-extra-light);
}.font-light {
  font-weight: var(--font-weight-light);
}.font-regular {
  font-weight: var(--font-weight-regular);
}.font-medium {
  font-weight: var(--font-weight-medium);
}.font-semi-bold {
  font-weight: var(--font-weight-semi-bold);
}.font-bold {
  font-weight: var(--font-weight-bold);
}.font-extra-bold {
  font-weight: var(--font-weight-extra-bold);
}.font-heavy {
  font-weight: var(--font-weight-heavy);
}

/* Font Size */
.text-XXL {
  font-size: var(--font-size-XXL);
}.text-XL {
  font-size: var(--font-size-XL);
}.text-L {
  font-size: var(--font-size-L);
}.text-M {
  font-size: var(--font-size-M);
}.text-S {
  font-size: var(--font-size-S);
}.text-XS {
  font-size: var(--font-size-XS);
}

/* Margin */
.m-XS {
  margin: var(--spacing-XS);
}
.m-S {
  margin: var(--spacing-S);
}
.m-M {
  margin: var(--spacing-M);
}
.m-L {
  margin: var(--spacing-L);
}
.m-XL {
  margin: var(--spacing-XL);
}
.m-XXL {
  margin: var(--spacing-XXL);
}

/* X axis margins (left + right) */
.mx-XS {
  margin-left: var(--spacing-XS);
  margin-right: var(--spacing-XS);
}
.mx-S {
  margin-left: var(--spacing-S);
  margin-right: var(--spacing-S);
}
.mx-M {
  margin-left: var(--spacing-M);
  margin-right: var(--spacing-M);
}
.mx-L {
  margin-left: var(--spacing-L);
  margin-right: var(--spacing-L);
}
.mx-XL {
  margin-left: var(--spacing-XL);
  margin-right: var(--spacing-XL);
}
.mx-XXL {
  margin-left: var(--spacing-XXL);
  margin-right: var(--spacing-XXL);
}

/* Y axis margins (top + bottom) */
.my-XS {
  margin-top: var(--spacing-XS);
  margin-bottom: var(--spacing-XS);
}
.my-S {
  margin-top: var(--spacing-S);
  margin-bottom: var(--spacing-S);
}
.my-M {
  margin-top: var(--spacing-M);
  margin-bottom: var(--spacing-M);
}
.my-L {
  margin-top: var(--spacing-L);
  margin-bottom: var(--spacing-L);
}
.my-XL {
  margin-top: var(--spacing-XL);
  margin-bottom: var(--spacing-XL);
}
.my-XXL {
  margin-top: var(--spacing-XXL);
  margin-bottom: var(--spacing-XXL);
}

/* Margin-top */
.mt-XS {
  margin-top: var(--spacing-XS);
}
.mt-S {
  margin-top: var(--spacing-S);
}
.mt-M {
  margin-top: var(--spacing-M);
}
.mt-L {
  margin-top: var(--spacing-L);
}
.mt-XL {
  margin-top: var(--spacing-XL);
}
.mt-XXL {
  margin-top: var(--spacing-XXL);
}

/* Margin-right */
.mr-XS {
  margin-right: var(--spacing-XS);
}
.mr-S {
  margin-right: var(--spacing-S);
}
.mr-M {
  margin-right: var(--spacing-M);
}
.mr-L {
  margin-right: var(--spacing-L);
}
.mr-XL {
  margin-right: var(--spacing-XL);
}
.mr-XXL {
  margin-right: var(--spacing-XXL);
}

/* Margin-bottom */
.mb-XS {
  margin-bottom: var(--spacing-XS);
}
.mb-S {
  margin-bottom: var(--spacing-S);
}
.mb-M {
  margin-bottom: var(--spacing-M);
}
.mb-L {
  margin-bottom: var(--spacing-L);
}
.mb-XL {
  margin-bottom: var(--spacing-XL);
}
.mb-XXL {
  margin-bottom: var(--spacing-XXL);
}

/* Margin-left */
.ml-XS {
  margin-left: var(--spacing-XS);
}
.ml-S {
  margin-left: var(--spacing-S);
}
.ml-M {
  margin-left: var(--spacing-M);
}
.ml-L {
  margin-left: var(--spacing-L);
}
.ml-XL {
  margin-left: var(--spacing-XL);
}
.ml-XXL {
  margin-left: var(--spacing-XXL);
}

/* Padding */
.p-XS {
  padding: var(--spacing-XS);
}
.p-S {
  padding: var(--spacing-S);
}
.p-M {
  padding: var(--spacing-M);
}
.p-L {
  padding: var(--spacing-L);
}
.p-XL {
  padding: var(--spacing-XL);
}
.p-XXL {
  padding: var(--spacing-XXL);
}

/* X axis padding (left y right) */
.px-XS {
  padding-left: var(--spacing-XS);
  padding-right: var(--spacing-XS);
}
.px-S {
  padding-left: var(--spacing-S);
  padding-right: var(--spacing-S);
}
.px-M {
  padding-left: var(--spacing-M);
  padding-right: var(--spacing-M);
}
.px-L {
  padding-left: var(--spacing-L);
  padding-right: var(--spacing-L);
}
.px-XL {
  padding-left: var(--spacing-XL);
  padding-right: var(--spacing-XL);
}
.px-XXL {
  padding-left: var(--spacing-XXL);
  padding-right: var(--spacing-XXL);
}

/* Y axis padding (top + bottom) */
.py-XS {
  padding-top: var(--spacing-XS);
  padding-bottom: var(--spacing-XS);
}
.py-S {
  padding-top: var(--spacing-S);
  padding-bottom: var(--spacing-S);
}
.py-M {
  padding-top: var(--spacing-M);
  padding-bottom: var(--spacing-M);
}
.py-L {
  padding-top: var(--spacing-L);
  padding-bottom: var(--spacing-L);
}
.py-XL {
  padding-top: var(--spacing-XL);
  padding-bottom: var(--spacing-XL);
}
.py-XXL {
  padding-top: var(--spacing-XXL);
  padding-bottom: var(--spacing-XXL);
}

/* Padding-top */
.pt-XS {
  padding-top: var(--spacing-XS);
}
.pt-S {
  padding-top: var(--spacing-S);
}
.pt-M {
  padding-top: var(--spacing-M);
}
.pt-L {
  padding-top: var(--spacing-L);
}
.pt-XL {
  padding-top: var(--spacing-XL);
}
.pt-XXL {
  padding-top: var(--spacing-XXL);
}

/* Padding-right */
.pr-XS {
  padding-right: var(--spacing-XS);
}
.pr-S {
  padding-right: var(--spacing-S);
}
.pr-M {
  padding-right: var(--spacing-M);
}
.pr-L {
  padding-right: var(--spacing-L);
}
.pr-XL {
  padding-right: var(--spacing-XL);
}
.pr-XXL {
  padding-right: var(--spacing-XXL);
}

/* Padding-bottom */
.pb-XS {
  padding-bottom: var(--spacing-XS);
}
.pb-S {
  padding-bottom: var(--spacing-S);
}
.pb-M {
  padding-bottom: var(--spacing-M);
}
.pb-L {
  padding-bottom: var(--spacing-L);
}
.pb-XL {
  padding-bottom: var(--spacing-XL);
}
.pb-XXL {
  padding-bottom: var(--spacing-XXL);
}

/* Padding-left */
.pl-XS {
  padding-left: var(--spacing-XS);
}
.pl-S {
  padding-left: var(--spacing-S);
}
.pl-M {
  padding-left: var(--spacing-M);
}
.pl-L {
  padding-left: var(--spacing-L);
}
.pl-XL {
  padding-left: var(--spacing-XL);
}
.pl-XXL {
  padding-left: var(--spacing-XXL);
}

/* Gap */
.gap-XS {
  gap: var(--spacing-XS);
}
.gap-S {
  gap: var(--spacing-S);
}
.gap-M {
  gap: var(--spacing-M);
}
.gap-L {
  gap: var(--spacing-L);
}
.gap-XL {
  gap: var(--spacing-XL);
}
.gap-XXL {
  gap: var(--spacing-XXL);
}

/* Row-gap */
.row-gap-XS {
  row-gap: var(--spacing-XS);
}
.row-gap-S {
  row-gap: var(--spacing-S);
}
.row-gap-M {
  row-gap: var(--spacing-M);
}
.row-gap-L {
  row-gap: var(--spacing-L);
}
.row-gap-XL {
  row-gap: var(--spacing-XL);
}
.row-gap-XXL {
  row-gap: var(--spacing-XXL);
}

/* Column-gap */
.column-gap-XS {
  column-gap: var(--spacing-XS);
}
.column-gap-S {
  column-gap: var(--spacing-S);
}
.column-gap-M {
  column-gap: var(--spacing-M);
}
.column-gap-L {
  column-gap: var(--spacing-L);
}
.column-gap-XL {
  column-gap: var(--spacing-XL);
}
.column-gap-XXL {
  column-gap: var(--spacing-XXL);
}


/* Border color */
.border-brand {
  border-color: var(--color-brand);
}.border-action-primary {
  border-color: var(--color-action-primary);
}.border-action-secondary {
  border-color: var(--color-action-secondary);
}.border-affirmative-primary {
  border-color: var(--color-affirmative-primary);
}.border-affirmative-secondary {
  border-color: var(--color-affirmative-secondary);
}.border-negative-primary {
  border-color: var(--color-negative-primary);
}.border-negative-secondary {
  border-color: var(--color-negative-secondary);
}.border-light {
  border-color: var(--color-light);
}.border-light-gray {
  border-color: var(--color-light-gray);
}.border-gray {
  border-color: var(--color-gray);
}.border-dark {
  border-color: var(--color-dark);
}.border-darker {
  border-color: var(--color-darker);
}

/* Border width */
.border-width-thin {
  border-width: var(--border-width);
}

.border-width-thick {
  border-width: calc(var(--border-width) * 2);
} 

/* Border radius */
.border-sharp {
  border-radius: var(--border-sharp);
}
.border-rounded {
  border-radius: var(--border-rounded);
}
.border-round {
  border-radius: var(--border-round);
}
`;