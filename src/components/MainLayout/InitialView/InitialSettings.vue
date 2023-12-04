<script setup>
import ColorsSettings from './ColorsSettings.vue';
import FontsSettings from './FontsSettings.vue';
import SpacingSettings from './SpacingSettings.vue';


const props = defineProps({
  data: {
    type: Array,
  },
});

</script>

<template>
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
</template>

<style scoped>
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