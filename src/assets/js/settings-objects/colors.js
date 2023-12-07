import { findVariableValue } from './findVariableValue.js'
export { colors, lightColors, darkColors, colorsInfo };

let colors = [{
  /* BRAND COLORS */
  brand: [
    {
      cssVariable: '--color-brand',
      variableValue: '#98cf58',
    },
  ],
  /* ACTION COLORS */
  action: [
    {
      cssVariable: '--color-accent-primary',
      variableValue: '#639F55',
      
    }, {
      cssVariable: '--color-accent-secondary',
      variableValue: '#478054',
      
    },
  ],
  /* Boolean colors */
  boolean: [
    {
      cssVariable: '--color-affirmative-primary',
      variableValue: '#11922f',
      
    }, {
      cssVariable: '--color-affirmative-secondary',
      variableValue: '#61ab72',
      
    }, {
      cssVariable: '--color-negative-primary',
      variableValue: '#FF7272',
      
    }, {
      cssVariable: '--color-negative-secondary',
      variableValue: '#EE0000',
      
    },
  ],
  /* GRAY SCALE COLORS */
  gray: [
    {
      cssVariable: '--color-light',
      variableValue: '#F8F9FA',
      
    }, {
      cssVariable: '--color-light-gray',
      variableValue: '#E9ECEF',
      
    }, {
      cssVariable: '--color-gray',
      variableValue: '#DEE2E6',
      
    }, {
      cssVariable: '--color-dark',
      variableValue: '#343A40',
      
    }, {
      cssVariable: '--color-darker',
      variableValue: '#212529',
      
    },
  ],
}];

/* LIGHT MODE COLORS */
let lightColors = [
  {
    cssVariable: '--color-background-primary',
    variableValue:  findVariableValue('--color-light', colors),
    
  }, {
    cssVariable: '--color-background-secondary',
    variableValue:  findVariableValue('--color-light-gray', colors),
    
  }, {
    cssVariable: '--color-text',
    variableValue:  findVariableValue('--color-darker', colors),
    
  }, {
    cssVariable: '--color-action',
    variableValue:  findVariableValue('--color-accent-primary', colors),
    
  }, {
    cssVariable: '--color-action-secondary',
    variableValue:  findVariableValue('--color-accent-secondary', colors),
    
  }, {
    cssVariable: '--border-color',
    variableValue:  findVariableValue('--color-gray', colors),
    
  },
];
/* DARK MODE COLORS */
let darkColors = [
  {
    cssVariable: '--color-background-primary',
    variableValue: findVariableValue('--color-dark', colors),
    
  }, {
    cssVariable: '--color-background-secondary',
    variableValue: findVariableValue('--color-darker', colors),
    
  }, {
    cssVariable: '--color-text',
    variableValue: findVariableValue('--color-light', colors),
    
  }, {
    cssVariable: '--color-action',
    variableValue: findVariableValue('--color-accent-secondary', colors),
    
  }, {
    cssVariable: '--color-action-secondary',
    variableValue: findVariableValue('--color-accent-primary', colors),
    
  }, {
    cssVariable: '--border-color',
    variableValue: findVariableValue('--color-light-gray', colors),
    
  },
];

const colorsInfo = {
  brand: `This parameter, represented by "--color-brand," sets the primary tone that will identify and stand out across your interface. Choose a color that reflects your project's personality and style, creating a cohesive and memorable experience for users.`,
  action: `Action colors play a pivotal role in steering user interactions across the app. The parameters, denoted by "--color-action-primary" and "--color-action-secondary," define the primary and secondary colors, respectively. The primary color serves as the default action color, while the secondary color activates upon interaction, such as hovering over specific elements. This distinction enhances user engagement by providing clear visual feedback and reinforcing the hierarchy of interactive elements`,
  boolean: ``,
  gray: ``,
  lightColors: ``,
  darkColors: ``,
}
/* colors[0].light = lightColors;
colors[0].dark = darkColors; */