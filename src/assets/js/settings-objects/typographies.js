export { typographies, typographiesInfo };

let typographies = [{
  family: [
    {
      label: 'Headings',
      cssVariable: '--font-family-heading',
      variableValue: 'Montserrat',
    }, {
      label: 'Body',
      cssVariable: '--font-family-body',
      variableValue: 'Nunito',
    },
  ],
/*   weight: [    <!-- ⛔ TEMPORARILY DISABLED -->
    {
      label: 'Thin',
      cssVariable: '--font-weight-thin',
      variableValue: 100,
      checked: true,
    }, {
      label: 'Extra Light',
      cssVariable: '--font-weight-extra-light',
      variableValue: 200,
      checked: true,
    }, {
      label: 'Light',
      cssVariable: '--font-weight-light',
      variableValue: 300,
      checked: true,
    }, {
      label: 'Regular',
      cssVariable: '--font-weight-regular',
      variableValue: 400,
      checked: true,
    }, {
      label: 'Medium',
      cssVariable: '--font-weight-medium',
      variableValue: 500,
      checked: true,
    }, {
      label: 'Semi Bold',
      cssVariable: '--font-weight-semi-bold',
      variableValue: 600,
      checked: true,
    }, {
      label: 'Bold',
      cssVariable: '--font-weight-bold',
      variableValue: 700,
      checked: true,
    }, {
      label: 'Extra Bold',
      cssVariable: '--font-weight-extra-bold',
      variableValue: 800,
      checked: true,
    }, {
      label: 'Heavy',
      cssVariable: '--font-weight-heavy',
      variableValue: 900,
      checked: true,
    },
  ], */
  size: [
  {
      label: 'XXL',
      cssVariable: '--font-size-XXL',
      variableValue: 4,
    }, {
      label: 'XL',
      cssVariable: '--font-size-XL',
      variableValue: 3.2,
    }, {
      label: 'L',
      cssVariable: '--font-size-L',
      variableValue: 2.4,
    }, {
      label: 'M',
      cssVariable: '--font-size-M',
      variableValue: 2,
    }, {
      label: 'S',
      cssVariable: '--font-size-S',
      variableValue: 1.6,
    }, {
      label: 'XS',
      cssVariable: '--font-size-XS',
      variableValue: 1.2,
    },
  ],
  config: [
    {
      label: 'H1',
      family: 'heading',
      size: 'XXL',
      weight: 'bold',
    }, {
      label: 'H2',
      family: 'heading',
      size: 'XL',
      weight: 'bold',
    }, {
      label: 'H3',
      family: 'heading',
      size: 'L',
      weight: 'medium',
    }, {
      label: 'H4',
      family: 'heading',
      size: 'M',
      weight: 'medium',
    }, {
      label: 'H5',
      family: 'heading',
      size: 'S',
      weight: 'medium',
    }, {
      label: 'Body',
      family: 'body',
      size: 'S',
      weight: 'regular',
    }, {
      label: 'Small',
      family: 'body',
      size: 'XS',
      weight: 'regular',
    },
  ],
}];

const typographiesInfo = {
family: `Specify the font family for your headings and body text by entering the respective font names. While you provide the font family names here, remember to integrate the actual font files into your application's CSS for them to take effect. This ensures consistent and cohesive typography across your headings and body text`,
size: `Specify font sizes using the rem unit for XXL, XL, L, M, S, and XS. Keep in mind that Pistachio defaults to setting 1rem as equivalent to 10px`,
config: `Customize typography for each element by entering these parameters:
- Font Family
- Font Size
- Font Weight`,
}