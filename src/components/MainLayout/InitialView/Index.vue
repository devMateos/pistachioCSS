<script setup>
import { computed, reactive, ref } from 'vue';

import { colors, colorsInfo } from '@/assets/js/settings-objects/colors.js'
import { typographies, typographiesInfo } from '@/assets/js/settings-objects/typographies.js'
import { spacing, spacingInfo } from '@/assets/js/settings-objects/spacing.js'
import { borders, bordersInfo } from '@/assets/js/settings-objects/borders.js'

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

const completeCSS = computed(() => {
  return generateTokensCSS.value + generateLightTokens.value + generateDarkTokens.value + generateReset.value + generateAtomsCSS.value + generateUtilityClasses.value;
})

function copy(text) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <section id="settings" class="pb-XXL">
    <form action="">
      <section id="settings-colors">
        <ColorsSettings
          :formSection="'Colors'"
          :formSectionTitle="'Enter the colors settings'"
          :formItemsList="colorsData[0]"
          :info="colorsInfo"
          />
        </section>
        <section id="settings-typographies">
          <FontsSettings
          :formSection="'Typographies'"
          :formSectionTitle="'Enter the typographies settings'"
          :formItemsList="typographiesData[0]"
          :info="typographiesInfo"
          />
        </section>
      
      <section id="settings-spacing">
        <SpacingSettings
          :formSection="'Spacing'"
          :formSectionTitle="'Enter the spacing settings'"
          :formItemsList="spacingData[0]"
          :info="spacingInfo"
          />
        </section>
        
        <section id="settings-border">
          <BorderSettings
          :formSection="'Border'"
          :formSectionTitle="'Enter the border settings'"
          :formItemsList="borderData[0]"
          :info="bordersInfo"
        />
      </section>
      
      <div class="form__button-container mb-XXL">
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
        :info="`The following code contains all the previously set custom properties ('tokens' in Atomic Design). These properties systematize and automate your design, offering a simplified approach to ensure a consistent style throughout your application`"
      />
    </section>
    <section id="code-light">
      <CodeBlock
        :codeBlockName="'Light Mode'"
        :code="generateLightTokens"
        :info="colorsInfo.lightColors"
        />
      </section>
      <section id="code-dark">
        <CodeBlock
        :codeBlockName="'Dark Mode'"
        :code="generateDarkTokens"
        :info="colorsInfo.darkColors"
        />
      </section>
      <section id="code-reset">
        <CodeBlock
        :codeBlockName="'ResetCSS'"
        :code="generateReset"
        :info="`Copy the CSS reset snippet from this section to reset certain default styles, giving you a clean starting point for customization. It ensures consistent styling and helps avoid unexpected conflicts with existing styles in your project, as this technique is designed to overlay and reset the browser's original styles`"
      />
    </section>
    <section id="code-items">
      <CodeBlock
        :codeBlockName="'Items'"
        :code="generateAtomsCSS"
        :info="`The following code block includes styles for various elements related to Atomic Design's atoms, the smallest components of a design system. Currently, you'll find settings for:
        Interface color
        Spacing (for main and section tags)
        Scrollbar
        Links
        Text (label, li, p, small and headings)
        Buttons (primary, secondary, affirmative, negative, and navigation buttons)
        Form elements (input text, color, checkbox, radio)
        I'll be adding more items over time`"
      />
    </section>

    <section id="code-utility">
      <CodeBlock
        :codeBlockName="'Utility Classes'"
        :code="generateUtilityClasses"
        :info="`These utility classes simplify styling based on previously defined custom properties. Apply them to elements in your HTML to achieve consistent design choices effortlessly.

Background Color: 'bg-[color name]'
Example: 'bg-action-primary'

Text Color: 'text-[color name]'
Example: 'text-brand'

Font Family: 'font-[family]'
Example: 'font-heading', 'font-body'

Font Weight: 'font-[weight]'
Example: 'font-regular'

Font Size: 'text-[size]'
Example: 'text-M'

Margin and Padding:
- m for margin and p for padding
- x for 'x axis' (left + right), y for 'y axis' (top + bottom) or t/r/b/l for top, right, bottom, left respectively. Don't use it to apply a general margin or padding
- Spacing (XS, S, M, L, XL, XXL)
Example: 'm-L', 'px-XS'

Gap: '[row/column]-gap-[spacing]', 'gap-[spacing]' (general gap)

Border color: 'border-[color]'
Example: 'border-action-color'

Border Width: 'border-[width]'
Example: 'border-thin'

Border Radius: 'border-[sharp/rounded/round]'
Example: 'border-round'`"
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