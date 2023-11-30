import { colors } from '@/assets/js/colors.js';
import { typographies } from '@/assets/js/typographies.js';
import { spacing } from '@/assets/js/spacing.js';

export { generateTokens }

function generateTokens(spacingData){

const responsive = {
  mobile: spacingData[0]['Responsive Multiplier Unit'][0],
  tablet: spacingData[0]['Responsive Multiplier Unit'][1],
  desktop: spacingData[0]['Responsive Multiplier Unit'][2],
}

let tokensBoilerplate = `
  /* ----- TOKENS ----- */

  /* CSS Variables */
  /* Responsive measures */

  @media (max-width: ${responsive.mobile.breakpoint}px) {
    :root {
      ${responsive.mobile.cssVariable}: ${responsive.mobile.variableValue};
    }
  }
  @media (min-width: ${responsive.mobile.breakpoint}px) and (max-width: ${responsive.tablet.breakpoint}px) {
    :root {
      ${responsive.mobile.cssVariable}: ${responsive.tablet.variableValue};
    }
  }
  @media (min-width: ${responsive.tablet.breakpoint}px) {
    :root {
      ${responsive.mobile.cssVariable}: ${responsive.desktop.variableValue};
    }
  }
  :root {
    /* Fonts */
    --font-heading: 'Montserrat';
    --font-body: 'Nunito';
    
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    --font-size-XXL: 4rem;
    --font-size-XL: 3.2rem;
    --font-size-L: 2.4rem;
    --font-size-M: 2rem;
    --font-size-S: 1.6rem;
    --font-size-XS: 1.2rem;

    /* Spacing */
    --spacing-min-unit: .4rem;

    --spacing-XS: var(--spacing-min-unit);
    --spacing-S: calc(var(--spacing-min-unit) * 2);
    --spacing-M: calc(var(--spacing-min-unit) * 4);
    --spacing-L: calc(var(--spacing-min-unit) * 6);
    --spacing-XL: calc(var(--spacing-min-unit) * 8);
    --spacing-XXL: calc(var(--spacing-min-unit) * 10);

    /* Colors */

    /* Brand colors */
    --color-brand: #98cf58;
    /* Action colors */
    --color-accent-primary: #639F55;
    --color-accent-secondary: #478054;
    /* Boolean colors */
    --color-affirmative: #11922f;
    --color-affirmative-secondary: #61ab72;
    --color-negative: #FF7272;
    --color-negative-secondary: #EE0000;
    /* Gray colors */
    --color-light: #F8F9FA;
    --color-light-gray: #E9ECEF;
    --color-gray: #DEE2E6;
    --color-dark: #343A40;
    --color-darker: #212529;

    /* Borders */
    --border-style: solid;
    --border-width: 2px;
    --border-sharp: 0;
    --border-rounded: var(--spacing-M);
    --border-round: var(--spacing-L);
    --border-standard: var(--border-style) var(--border-width) var(--border-color);
  }

  /* RESET STYLES */
  html {
    font-size: calc(62.5% * var(--responsive-multiplier-unit));
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  button {
    all: unset;
    cursor: pointer;
  } 
  li {
    list-style: none;
  }

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
`;

return tokensBoilerplate;
}