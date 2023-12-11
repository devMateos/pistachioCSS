export { borders, bordersInfo };

let borders = [{
  style: [{
      label: 'Border Style',
      cssVariable: '--border-style',
      variableValue: 'solid',
    }],
  width: [{
      label: 'Border Width',
      cssVariable: '--border-width',
      variableValue: 0.2,
    }],
  radius: [{
      label: 'Border Radius',
      cssVariable: '--border-radius-standard',
      variableValue: 'var(--border-round)',
    }],
}];

const bordersInfo = {
style: `Choose the style of your borders from the following options. Select the style that best suits your design to achieve the desired visual effect for the borders in your application`,
width: `Specify the size of your borders by entering a numerical value. Adjusting this parameter allows you to control the visual weight of borders throughout your application, ensuring a custom, cohesive layout.

Keep in mind that this parameter, along with the border style and color, will be applied to your components automatically using the "--border-standard" variable
`,
radius: `Tailor the curvature of your borders by choosing from three options:
- Round: Equivalent to the value of "L Spacing Unit".
- Rounded: Equivalent to the value of "M Spacing Unit".
- Sharp: Equivalent to 0.

Select the option that aligns with your design preferences. This will be applied to your components automatically using the "--border-radius-standard" variable`,
}