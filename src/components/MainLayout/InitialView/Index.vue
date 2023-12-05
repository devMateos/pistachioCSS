<script setup>
import { computed, reactive, ref } from 'vue';

import { colors } from '@/assets/js/settings-objects/colors.js'
import { typographies } from '@/assets/js/settings-objects/typographies.js'
import { spacing } from '@/assets/js/settings-objects/spacing.js'
import { borders } from '@/assets/js/settings-objects/borders.js'

import { generateTokens } from '@/assets/js/boilerplates/tokens.js'

import ColorsSettings from './ColorsSettings.vue';
import FontsSettings from './FontsSettings.vue';
import SpacingSettings from './SpacingSettings.vue';
import BorderSettings from './BorderSettings.vue';
import CodeBlock from '@/components/CodeBlock/Index.vue';

let colorsData = reactive(colors);
let typographiesData = reactive(typographies);
let spacingData = reactive(spacing);
let borderData = reactive(borders);

let showCode = ref(false);


const generateTokensCSS = computed(() => {
  return generateTokens(colorsData, typographiesData, spacingData, borderData);
});
</script>

<template>
  <section>
    <form action="">
      <section>
        <ColorsSettings
          :formSection="'Colors'"
          :formSectionTitle="'Enter the colors settings'"
          :formItemsList="colorsData[0]"
        />
      </section>

      <section>
        <FontsSettings
          :formSection="'Typographies'"
          :formSectionTitle="'Enter the typographies settings'"
          :formItemsList="typographiesData[0]"
        />
      </section>
      
      <section>
        <SpacingSettings
          :formSection="'Spacing'"
          :formSectionTitle="'Enter the spacing settings'"
          :formItemsList="spacingData[0]"
        />
      </section>
      
      <section>
        <BorderSettings
          :formSection="'Border'"
          :formSectionTitle="'Enter the border settings'"
          :formItemsList="borderData[0]"
        />
      </section>
      
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