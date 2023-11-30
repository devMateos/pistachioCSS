export { spacing };

let spacing = [{
  'Minimum Spacing Unit': {
      label: 'Minimum spacing unit',
      cssVariable: '--spacing-min-unit',
      variableValue: 0.4,
    },
  'Spacing Units': [
    {
      label: 'XS spacing unit',
      cssVariable: '--spacing-XS',
      multiplier: 1,
      variableValue: '',
    }, {
      label: 'S spacing unit',
      cssVariable: '--spacing-S',
      multiplier: 2,
      variableValue: '',
    }, {
      label: 'M spacing unit',
      cssVariable: '--spacing-M',
      multiplier: 4,
      variableValue: '',
    }, {
      label: 'L spacing unit',
      cssVariable: '--spacing-L',
      multiplier: 6,
      variableValue: '',
    }, {
      label: 'XL spacing unit',
      cssVariable: '--spacing-XL',
      multiplier: 8,
      variableValue: '',
    }, {
      label: 'XXL spacing unit',
      cssVariable: '--spacing-XXL',
      multiplier: 10,
      variableValue: '',
    },
  ],
  'Responsive Multiplier Unit': [
    {
      label: 'Mobile unit',
      cssVariable: '--responsive-multiplier-unit',
      multiplier: 0.75,
      breakpoint: 768,
      variableValue: '',
    }, {
      label: 'Tablet unit',
      cssVariable: '--responsive-multiplier-unit',
      multiplier: 0.825,
      breakpoint: 992,
      variableValue: '',
    }, {
      label: 'Desktop unit',
      cssVariable: '--responsive-multiplier-unit',
      multiplier: 1,
      breakpoint: 992,
      variableValue: '',
    },
  ],
}];


spacing[0]['Spacing Units'].forEach(e => {
  let result = spacing[0]['Minimum Spacing Unit'].variableValue * e.multiplier;
  e.variableValue = result;
});
spacing[0]['Responsive Multiplier Unit'].forEach(e => {
  e.variableValue = e.multiplier;
});