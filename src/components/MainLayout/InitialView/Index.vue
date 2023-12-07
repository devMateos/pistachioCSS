<script setup>
import { computed, reactive, ref } from 'vue';

import { colors } from '@/assets/js/settings-objects/colors.js'
import { typographies } from '@/assets/js/settings-objects/typographies.js'
import { spacing } from '@/assets/js/settings-objects/spacing.js'
import { borders } from '@/assets/js/settings-objects/borders.js'

import { generateTokens } from '@/assets/js/boilerplates/tokens.js'
import { lightColorsTemplate } from '@/assets/js/boilerplates/light-colors.js'
import { darkColorsTemplate } from '@/assets/js/boilerplates/dark-colors.js'
import { resetTemplate } from '@/assets/js/boilerplates/reset.js'
import { generateAtoms } from '@/assets/js/boilerplates/atoms.js'
import { utilityClasses } from '@/assets/js/boilerplates/utility-classes.js'

import ColorsSettings from './SettingSections/ColorsSettings.vue';
import FontsSettings from './SettingSections/FontsSettings.vue';
import SpacingSettings from './SettingSections/SpacingSettings.vue';
import BorderSettings from './SettingSections/BorderSettings.vue';
import CodeBlock from '@/components/CodeBlock/Index.vue';
import CopyButton from '../../CodeBlock/CopyButton.vue';

let colorsData = reactive(colors);
let typographiesData = reactive(typographies);
let spacingData = reactive(spacing);
let borderData = reactive(borders);

let showCode = ref(false);


const generateTokensCSS = computed(() => {
  return generateTokens(colorsData, typographiesData, spacingData, borderData);
});
const generateLightTokens = computed(() => {
  return lightColorsTemplate;
});
const generateDarkTokens = computed(() => {
  return darkColorsTemplate;
});
const generateReset = computed(() => {
  return resetTemplate;
});
const generateAtomsCSS = computed(() => {
  return generateAtoms(typographiesData);
});

const generateUtilityClasses = computed(() => {
  return utilityClasses;
});

const completeCSS = generateTokensCSS.value + generateLightTokens.value + generateDarkTokens.value + generateReset.value + generateAtomsCSS.value + generateUtilityClasses.value;

function copy(text) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <section id="settings">
    <form action="">
      <section id="settings-colors">
        <ColorsSettings
          :formSection="'Colors'"
          :formSectionTitle="'Enter the colors settings'"
          :formItemsList="colorsData[0]"
        />
      </section>
      <section id="settings-typographies">
        <FontsSettings
          :formSection="'Typographies'"
          :formSectionTitle="'Enter the typographies settings'"
          :formItemsList="typographiesData[0]"
        />
      </section>
      
      <section id="settings-spacing">
        <SpacingSettings
          :formSection="'Spacing'"
          :formSectionTitle="'Enter the spacing settings'"
          :formItemsList="spacingData[0]"
        />
      </section>
      
      <section id="settings-border">
        <BorderSettings
          :formSection="'Border'"
          :formSectionTitle="'Enter the border settings'"
          :formItemsList="borderData[0]"
        />
      </section>
      
      <div class="form__button-container">
        <CopyButton class="button copy-complete-code"
          :text="'Copy all'"
          v-if="showCode"
          @copy-code="copy(completeCSS)"
        />
        <button class="button button--primary"
        @click.prevent="showCode = true">Create CSS</button>
        <button class="button button--negative"
        @click.prevent="showCode = false">Delete</button>
      </div>
    </form>
  </section>

  <section id="code"
    v-if="showCode"
    >
    <section id="code-tokens">
      <CodeBlock
        :codeBlockName="'Tokens'"
        :code="generateTokensCSS"
      />
    </section>
    <section id="code-light">
      <CodeBlock
        :codeBlockName="'Light Mode'"
        :code="generateLightTokens"
      />
    </section>
    <section id="code-dark">
      <CodeBlock
        :codeBlockName="'Dark Mode'"
        :code="generateDarkTokens"
      />
    </section>
    <section id="code-reset">
      <CodeBlock
        :codeBlockName="'ResetCSS'"
        :code="generateReset"
      />
    </section>
    <section id="code-items">
      <CodeBlock
        :codeBlockName="'Items'"
        :code="generateAtomsCSS"
      />
    </section>

    <section id="code-utility">
      <CodeBlock
        :codeBlockName="'Utility Classes'"
        :code="generateUtilityClasses"
      />
    </section>
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
  border-radius: var(--border-radius-standard);
  padding: var(--spacing-XL);
  position: relative;
}
.card__title {
  align-items: center;
  display: flex;
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

.form__button-container {
  display: flex;
  gap: var(--spacing-M);
  justify-content: end;
}
.form__button-container > .button {
  padding: var(--spacing-S) var(--spacing-M);
}

.copy-complete-code {
  background-color: var(--color-light-text);
}
</style>