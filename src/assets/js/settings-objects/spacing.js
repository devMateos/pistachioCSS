export { spacing, spacingInfo };

let spacing = [{
  'Minimum Spacing Unit': [{
      label: 'Minimum spacing unit',
      cssVariable: '--spacing-min-unit',
      variableValue: 0.4,
    }],
  'Spacing Units': [
    {
      label: 'XS spacing unit',
      cssVariable: '--spacing-XS',
      multiplier: 1,
    }, {
      label: 'S spacing unit',
      cssVariable: '--spacing-S',
      multiplier: 2,
    }, {
      label: 'M spacing unit',
      cssVariable: '--spacing-M',
      multiplier: 4,
    }, {
      label: 'L spacing unit',
      cssVariable: '--spacing-L',
      multiplier: 6,
    }, {
      label: 'XL spacing unit',
      cssVariable: '--spacing-XL',
      multiplier: 8,
    }, {
      label: 'XXL spacing unit',
      cssVariable: '--spacing-XXL',
      multiplier: 10,
    },
  ],
  'Responsive Multiplier Unit': [
    {
      label: 'Mobile unit',
      cssVariable: '--responsive-multiplier-unit',
      multiplier: 0.75,
      breakpoint: 768,
    }, {
      label: 'Tablet unit',
      cssVariable: '--responsive-multiplier-unit',
      multiplier: 0.875,
      breakpoint: 992,
    }, {
      label: 'Desktop unit',
      cssVariable: '--responsive-multiplier-unit',
      multiplier: 1,
      breakpoint: 992,
    },
  ],
}];

spacing[0]['Responsive Multiplier Unit'].forEach(e => {
  e.variableValue = e.multiplier;
});

const spacingInfo = {
'Minimum Spacing Unit': `
The Minimum Spacing Unit, measured in rems, acts as the fundamental building block for spacing within the application. This smallest unit forms the basis for a scale, enabling consistent hierarchy, uniformity, and coherence in design. All other spacing units are multiples of this base, ensuring a systematic and well-balanced layout. Adjusting this unit provides a central point for maintaining spacing harmony throughout your design
`,

'Spacing Units': `
Define spacing sizes by entering the multiplier for XS, S, M, L, XL, and XXL. Each spacing measure is determined by multiplying the Minimum Spacing Unit by the specified number.

Default equivalences:
XS: 0.4rem/4px
S: 0.8rem/8px
M: 1.6rem/16px
L: 2.4rem/24px
XL: 3.2rem/32px
XXL: 4rem/40px

Adjust these values to customize spacing, ensuring a well-proportioned layout in your application
`,


'Responsive Multiplier Unit': `
The Responsive Multiplier Unit dynamically adjusts the rem unit throughout the code based on window size:

- For sizes under 768px, it's 0.75, making 1rem equal to 7.5px.
- For sizes between 768px and 992px, it's 0.875, making 1rem equal to 8.75px.
- For sizes over 992px, it's 1, making 1rem equal to 10px.

These values are implemented by the following code in "Tokens" section:
html {
  font-size: calc(62.5% * var(--responsive-multiplier-unit));
}

Adjust these multipliers as needed for a responsive design in your application
`,
}