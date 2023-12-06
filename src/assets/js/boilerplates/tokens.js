export { generateTokens }

function generateTokens(colorsData, typographiesData, spacingData, borderData){

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
    /* weight:typographiesData[0].weight.filter((e) => e.checked === true ), */
    size: typographiesData[0].size,
  };
  /* Font Weight template */
/*   let fontWeightTemplate = '';
  typographies.weight.forEach((e) => {
    fontWeightTemplate += `${e.cssVariable}: ${e.variableValue};
  `
  }) */

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


  /* BORDER SETTINGS */
  const border = {
    style: borderData[0].style,
    width: borderData[0].width,
    radius: borderData[0].radius,
  };

let tokensBoilerplate = `
/* ----- Custom properties (Tokens) ----- */

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
  
  --font-weight-thin: 100;
  --font-weight-extra-light: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;
  --font-weight-heavy: 900;

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
  ${border.style.cssVariable}: ${border.style.variableValue};
  ${border.width.cssVariable}: ${border.width.variableValue}rem;
  --border-sharp: 0;
  --border-rounded: var(--spacing-M);
  --border-round: var(--spacing-L);
  
  --border-standard: var(--border-style) var(--border-width) var(--border-color);
  ${border.radius.cssVariable}: ${border.radius.variableValue};
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
`;
  
  return tokensBoilerplate;
}