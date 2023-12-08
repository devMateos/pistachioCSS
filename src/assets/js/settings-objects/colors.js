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
      cssVariable: '--color-action-primary',
      variableValue: '#639F55',
      
    }, {
      cssVariable: '--color-action-secondary',
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
    cssVariable: '--color-action-default',
    variableValue:  findVariableValue('--color-action-primary', colors),
    
  }, {
    cssVariable: '--color-action-active',
    variableValue:  findVariableValue('--color-action-secondary', colors),
    
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
    cssVariable: '--color-action-default',
    variableValue: findVariableValue('--color-action-secondary', colors),
    
  }, {
    cssVariable: '--color-action-active',
    variableValue: findVariableValue('--color-action-primary', colors),
    
  }, {
    cssVariable: '--border-color',
    variableValue: findVariableValue('--color-light-gray', colors),
    
  },
];

const colorsInfo = {
brand: `This parameter, represented by "--color-brand," sets the primary tone that will identify and stand out across your interface. Choose a color that reflects your project's personality and style, creating a cohesive and memorable experience for users.`,
action: `Action colors play a pivotal role in steering user interactions across the app. The parameters, denoted by "--color-action-primary" and "--color-action-secondary," define the primary and secondary colors, respectively. The primary color serves as the default action color, while the secondary color activates upon interaction, such as hovering over specific elements. This distinction enhances user engagement by providing clear visual feedback and reinforcing the hierarchy of interactive elements`,
boolean: `Boolean colors are vital for showcasing binary states in your app. The first two, "--color-affirmative-primary" and "--color-affirmative-secondary," are affirmative colors for "true" states, typically in green shades. The last two, "--color-negative-primary" and "--color-negative-secondary," represent negative or "false" colors, often in red tones. The primary color is default, while the secondary, is used for actions like hover`,
gray: `The gray scale consists of 5 tones, ranging from light (near white) to dark (near black), with various shades of gray in between. Respectively:
--color-light
--color-light-gray
--color-gray
--color-dark
--color-darker

In "Light Mode Colors", the lightest color, "--color-light", serves as the interface background, while the darkest color, "--color-dark", is used for text.

In "Dark Mode Color", "--color-light" becomes the text color and "--color-dark" becomes the background`,
lightColors: `The 'light-mode' class should be applied to the HTML or body element of your website or application. This class facilitates the connection between a range of color variables, encompassing background, text, action, and border colors, with pre-established parameters. This connection allows for automated application to components. Keep in mind that these variables are adaptable; feel free to customize them based on your preferences and design specifications`,
darkColors: `The 'dark-mode' class functions similarly to the 'light-mode' class. Apply it to the HTML or body element of your application to activate the dark mode seamlessly`,
}
/* colors[0].light = lightColors;
colors[0].dark = darkColors; */