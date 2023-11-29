<script setup>
import { reactive } from 'vue'
import InitialSettings from './InitialSettings.vue';

let colors = reactive([{
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
}]);
const findvariableValue = (colorVariable) => {
  for (let key in colors[0]) {
    let color = colors[0][key].find(color => color.cssVariable === colorVariable);
    if (color) {
      return color.variableValue;
    }
  }
  return undefined;
}

/* LIGHT MODE COLORS */
let lightColors = [
  {
    cssVariable: '--color-background-primary',
    variableValue:  findvariableValue('--color-light'),
    
  }, {
    cssVariable: '--color-background-secondary',
    variableValue:  findvariableValue('--color-light-gray'),
    
  }, {
    cssVariable: '--color-text',
    variableValue:  findvariableValue('--color-darker'),
    
  }, {
    cssVariable: '--color-action',
    variableValue:  findvariableValue('--color-accent-primary'),
    
  }, {
    cssVariable: '--color-action-secondary',
    variableValue:  findvariableValue('--color-accent-secondary'),
    
  }, {
    cssVariable: '--border-color',
    variableValue:  findvariableValue('--color-gray'),
    
  },
];
/* DARK MODE COLORS */
let darkColors = [
  {
    cssVariable: '--color-background-primary',
    variableValue: findvariableValue('--color-dark'),
    
  }, {
    cssVariable: '--color-background-secondary',
    variableValue: findvariableValue('--color-darker'),
    
  }, {
    cssVariable: '--color-text',
    variableValue: findvariableValue('--color-light'),
    
  }, {
    cssVariable: '--color-action',
    variableValue: findvariableValue('--color-accent-secondary'),
    
  }, {
    cssVariable: '--color-action-secondary',
    variableValue: findvariableValue('--color-accent-primary'),
    
  }, {
    cssVariable: '--border-color',
    variableValue: findvariableValue('--color-light-gray'),
    
  },
];
/* colors[0].light = lightColors;
colors[0].dark = darkColors; */


let typographies = reactive([{
  headings: [
    {
      cssVariable: '--font-heading',
      variableValue: 'Times New Roman',
    },
  ],
}]);
</script>

<template>
  <section>
    <InitialSettings
      :formSection="'Colors'"
      :formSectionTitle="'Enter the colors of your application or website'"
      :formItemsList="colors[0]"
      :methods="findvariableValue"
    />
    <InitialSettings
      :formSection="'Fonts'"
      :formSectionTitle="'Enter the typography settings'"
      :formItemsList="typographies[0]"
      :methods="findvariableValue"
    />
  </section>
</template>
<style></style>