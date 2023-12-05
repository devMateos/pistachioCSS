export { generateTokens }

function generateTokens(colorsData, typographiesData, spacingData){

  /* COLORS SETTINGS*/
  const colors = {
    brand: colorsData[0].brand,
    action: colorsData[0].action,
    boolean: colorsData[0].boolean,
    gray: colorsData[0].gray,
  };

  /* TYPOGRAPHIES SETTINGS */
  const typographies = {
    family: typographiesData[0].family,
    weight:typographiesData[0].weight.filter((e) => e.checked === true ),
    size: typographiesData[0].size,
  };
  /* Font Weight template */
  let fontWeightTemplate = '';
  typographies.weight.forEach((e) => {
    fontWeightTemplate += `${e.cssVariable}: ${e.variableValue};
  `
  })

  /* SPACING SETTINGS */
  const minimumSpacingUnit = spacingData[0]['Minimum Spacing Unit'];
  
  const spacingUnits = spacingData[0]['Spacing Units'];
  let spacingUnitsTemplate = '';
  spacingUnits.forEach((e) => {
    spacingUnitsTemplate += `${e.cssVariable}: calc(var(${minimumSpacingUnit.cssVariable}) * ${e.multiplier});
  `
  })

  /* Responsive measures */
  const responsive = {
    mobile: spacingData[0]['Responsive Multiplier Unit'][0],
    tablet: spacingData[0]['Responsive Multiplier Unit'][1],
    desktop: spacingData[0]['Responsive Multiplier Unit'][2],
  };

  console.log(minimumSpacingUnit);

let tokensBoilerplate = `
/* ----- TOKENS ----- */

/* CSS Variables */

:root {
  /* Colors */

  /* Brand colors */
  ${colors.brand[0].cssVariable}: ${colors.brand[0].variableValue};
  /* Action colors */
  ${colors.action[0].cssVariable}: ${colors.action[0].variableValue};
  ${colors.action[1].cssVariable}: ${colors.action[1].variableValue};
  /* Boolean colors */
  ${colors.boolean[0].cssVariable}: ${colors.boolean[0].variableValue};
  ${colors.boolean[1].cssVariable}: ${colors.boolean[1].variableValue};
  ${colors.boolean[2].cssVariable}: ${colors.boolean[2].variableValue};
  ${colors.boolean[3].cssVariable}: ${colors.boolean[3].variableValue};
  /* Gray colors */
  ${colors.gray[0].cssVariable}: ${colors.gray[0].variableValue};
  ${colors.gray[1].cssVariable}: ${colors.gray[1].variableValue};
  ${colors.gray[2].cssVariable}: ${colors.gray[2].variableValue};
  ${colors.gray[3].cssVariable}: ${colors.gray[3].variableValue};
  ${colors.gray[4].cssVariable}: ${colors.gray[4].variableValue};
  
  
  /* Fonts */
  ${typographies.family[0].cssVariable}: '${typographies.family[0].variableValue}';
  ${typographies.family[1].cssVariable}: '${typographies.family[1].variableValue}';
  
  ${fontWeightTemplate}
  ${typographies.size[0].cssVariable}: ${typographies.size[0].variableValue}rem;
  ${typographies.size[1].cssVariable}: ${typographies.size[1].variableValue}rem;
  ${typographies.size[2].cssVariable}: ${typographies.size[2].variableValue}rem;
  ${typographies.size[3].cssVariable}: ${typographies.size[3].variableValue}rem;
  ${typographies.size[4].cssVariable}: ${typographies.size[4].variableValue}rem;
  ${typographies.size[5].cssVariable}: ${typographies.size[5].variableValue}rem;
  

  /* Spacing */
  ${minimumSpacingUnit.cssVariable}: ${minimumSpacingUnit.variableValue}rem;

  ${spacingUnitsTemplate}
  
  /* Borders */
  --border-style: solid;
  --border-width: 2px;
  --border-sharp: 0;
  --border-rounded: var(--spacing-M);
  --border-round: var(--spacing-L);
  --border-standard: var(--border-style) var(--border-width) var(--border-color);
}

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