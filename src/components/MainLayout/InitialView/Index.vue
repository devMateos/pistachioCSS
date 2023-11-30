<script setup>
import { computed, reactive, ref } from 'vue';
import { colors } from '@/assets/js/colors.js'
import { typographies } from '@/assets/js/typographies.js'
import { spacing } from '@/assets/js/spacing.js'
import { generateTokens } from '@/assets/js/tokens-boilerplate.js'
import InitialSettings from './InitialSettings.vue';

let colorsData = reactive(colors);
let typographiesData = reactive(typographies);
let spacingData = reactive(spacing);

let showCode = ref(false);


const generateTokensCSS = computed(() => {
  return generateTokens(spacingData);
});
</script>

<template>
  <section>
    <form action="">
      <InitialSettings
        :formSection="'Colors'"
        :formSectionTitle="'Enter the colors settings'"
        :formItemsList="colorsData[0]"
      />
      <InitialSettings
        :formSection="'Font'"
        :formSectionTitle="'Enter the typography settings'"
        :formItemsList="typographiesData[0]"
      />
      <InitialSettings
        :formSection="'Spacing'"
        :formSectionTitle="'Enter the spacing settings'"
        :formItemsList="spacingData[0]"
      />
      <button class="button button--primary"
      @click.prevent="showCode = true; generateCSS()">Create CSS</button>
      <button class="button button--negative"
      @click.prevent="showCode = false;">Delete</button>
    </form>

    <div
    v-if="showCode">{{ generateTokensCSS }}</div>
  </section>
</template>
<style></style>