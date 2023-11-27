<script setup>
import { ref } from 'vue'

let colors = ref([{
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
    }, {
    /* Boolean colors */
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
console.log(colors.value[0]);
/* LIGHT MODE COLORS */
/* let lightColors = ref([
  {
    cssVariable: '--color-background-primary',
    colorCode: 'var(--color-light)',
  }, {
    cssVariable: '--color-background-secondary',
    colorCode: 'var(--color-light-gray)',
  }, {
    cssVariable: '--color-text',
    colorCode: 'var(--color-darker)',
  }, {
    cssVariable: '--color-action',
    colorCode: 'var(--color-accent-primary)',
  }, {
    cssVariable: '--color-action-secondary',
    colorCode: 'var(--color-accent-secondary)',
  }, {
    cssVariable: '--border-color',
    colorCode: 'var(--color-gray)',
  },
]); */

/* DARK MODE COLORS */
/* let darkColors = ref([
  {
    cssVariable: '--color-background-primary',
    colorCode: 'var(--color-dark)',
  }, {
    cssVariable: '--color-background-secondary',
    colorCode: 'var(--color-darker)',
  }, {
    cssVariable: '--color-text',
    colorCode: 'var(--color-light)',
  }, {
    cssVariable: '--color-action',
    colorCode: 'var(--color-accent-secondary)',
  }, {
    cssVariable: '--color-action-secondary',
    colorCode: 'var(--color-accent-primary)',
  }, {
    cssVariable: '--border-color',
    colorCode: 'var(--color-light-gray)',
  },
]); */

/* let typographies = ref([]); */

</script>
<template>
  <section>
    <div class="h1">Let's Start</div>
    <h2>Enter the colors of your application or website</h2>
    <form class="start-form__colors">
      <div class="form__category-color"
      v-for="(colorCategory, key) in colors[0]" :key="key">
        <label
          :for="`${key} colors`">{{ key }} Colors</label>
        <div
          v-for="(color, index) in colorCategory" :key="index">
          <input type="text" :value="`${color.cssVariable}`">
          <input type="color"
          :value="`${color.colorCode}`">
        </div><br>
      </div><br>
    </form>
  </section>
</template>
<style></style>