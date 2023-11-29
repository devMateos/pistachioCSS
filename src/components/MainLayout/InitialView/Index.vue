<script setup>
import { reactive } from 'vue'
import InitialSettings from './InitialSettings.vue';

let colors = reactive([{
  /* BRAND COLORS */
  brand: [
    {
      cssVariable: '--color-brand',
      colorCode: '#98cf58',
      
    },
  ],
  /* ACTION COLORS */
  action: [
    {
      cssVariable: '--color-accent-primary',
      colorCode: '#639F55',
      
    }, {
      cssVariable: '--color-accent-secondary',
      colorCode: '#478054',
      
    },
  ],
  /* Boolean colors */
  boolean: [
    {
      cssVariable: '--color-affirmative-primary',
      colorCode: '#11922f',
      
    }, {
      cssVariable: '--color-affirmative-secondary',
      colorCode: '#61ab72',
      
    }, {
      cssVariable: '--color-negative-primary',
      colorCode: '#FF7272',
      
    }, {
      cssVariable: '--color-negative-secondary',
      colorCode: '#EE0000',
      
    },
  ],
  /* GRAY SCALE COLORS */
  gray: [
    {
      cssVariable: '--color-light',
      colorCode: '#F8F9FA',
      
    }, {
      cssVariable: '--color-light-gray',
      colorCode: '#E9ECEF',
      
    }, {
      cssVariable: '--color-gray',
      colorCode: '#DEE2E6',
      
    }, {
      cssVariable: '--color-dark',
      colorCode: '#343A40',
      
    }, {
      cssVariable: '--color-darker',
      colorCode: '#212529',
      
    },
  ],
}]);
const findColorCode = (colorVariable) => {
  for (let key in colors[0]) {
    let color = colors[0][key].find(color => color.cssVariable === colorVariable);
    if (color) {
      return color.colorCode;
    }
  }
  return undefined;
}

/* LIGHT MODE COLORS */
let lightColors = [
  {
    cssVariable: '--color-background-primary',
    colorCode:  findColorCode('--color-light'),
    
  }, {
    cssVariable: '--color-background-secondary',
    colorCode:  findColorCode('--color-light-gray'),
    
  }, {
    cssVariable: '--color-text',
    colorCode:  findColorCode('--color-darker'),
    
  }, {
    cssVariable: '--color-action',
    colorCode:  findColorCode('--color-accent-primary'),
    
  }, {
    cssVariable: '--color-action-secondary',
    colorCode:  findColorCode('--color-accent-secondary'),
    
  }, {
    cssVariable: '--border-color',
    colorCode:  findColorCode('--color-gray'),
    
  },
];
/* DARK MODE COLORS */
let darkColors = [
  {
    cssVariable: '--color-background-primary',
    colorCode: findColorCode('--color-dark'),
    
  }, {
    cssVariable: '--color-background-secondary',
    colorCode: findColorCode('--color-darker'),
    
  }, {
    cssVariable: '--color-text',
    colorCode: findColorCode('--color-light'),
    
  }, {
    cssVariable: '--color-action',
    colorCode: findColorCode('--color-accent-secondary'),
    
  }, {
    cssVariable: '--color-action-secondary',
    colorCode: findColorCode('--color-accent-primary'),
    
  }, {
    cssVariable: '--border-color',
    colorCode: findColorCode('--color-light-gray'),
    
  },
];

colors[0].light = lightColors;
colors[0].dark = darkColors;


/* let typographies = ref([]); */

</script>

<template>
  <section>
      <InitialSettings
        :formSection="'Colors'"
        :formSectionTitle="'Enter the colors of your application or website'"
        :formItemsList="colors[0]"
        :methods="findColorCode"
      />
      <!-- <h2></h2>
      <form class="start-form__colors">
        <div class="form__category-color"
        v-for="(colorCategory, key) in colors" :key="key">
          <label
          :for="`${key} colors`">{{ key }} Colors</label>
          <div
            v-for="(color, index) in colorCategory" :key="index">
            <input type="text" :value="`${color.cssVariable}`">
            <input type="color"
            :value="`${color.colorCode}`">
          </div><br>
        </div><br>
      </form> -->
  </section>
</template>
<style></style>