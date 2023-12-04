<script setup>
import { computed, reactive, ref } from 'vue';

import ColorsSettings from './ColorsSettings.vue';
import FontsSettings from './FontsSettings.vue';
import SpacingSettings from './SpacingSettings.vue';
import CodeBlock from '@/components/CodeBlock/Index.vue';

import { colors } from '@/assets/js/colors.js'
import { typographies } from '@/assets/js/typographies.js'
import { spacing } from '@/assets/js/spacing.js'
import { generateTokens } from '@/assets/js/tokens-boilerplate.js'

let colorsData = reactive(colors);
let typographiesData = reactive(typographies);
let spacingData = reactive(spacing);

let showCode = ref(false);


const generateTokensCSS = computed(() => {
  return generateTokens(colorsData, typographiesData, spacingData);
});
</script>

<template>
  <section>
    <form action="">
      <ColorsSettings
        :formSection="'Colors'"
        :formSectionTitle="'Enter the colors settings'"
        :formItemsList="colorsData[0]"
      />
      <FontsSettings
        :formSection="'Typographies'"
        :formSectionTitle="'Enter the typographies settings'"
        :formItemsList="typographiesData[0]"
      />
      <SpacingSettings
        :formSection="'Spacing'"
        :formSectionTitle="'Enter the spacing settings'"
        :formItemsList="spacingData[0]"
      />
      
      <button class="button button--primary"
      @click.prevent="showCode = true">Create CSS</button>
      <button class="button button--negative"
      @click.prevent="showCode = false">Delete</button>
    </form>
  </section>

  <section>
    <CodeBlock
      v-if="showCode"
      :code="generateTokensCSS"
    />
  </section>
</template>

<style>
.initial-settings__form {
  display: grid;
  gap: var(--spacing-M);
  grid-auto-columns: auto;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
}
.initial-settings__card {
  display: flex;
  flex-direction: column;
  border: var(--border-standard);
  border-radius: var(--border-round);
  padding: var(--spacing-XL);
  position: relative;
}
label.h3 {
  text-transform: capitalize;
}
.card__grid {
  display: grid;
  gap: var(--spacing-S);
  grid-template-columns: repeat(3, 1fr);
}
.card__item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-XS);
}
.form__input-color {
  height: 8rem;
  width: 100%;
}
.remove-button {
  margin-left: var(--spacing-S);
}
.add-button {
  position: relative;
  bottom: 0;
}
</style>