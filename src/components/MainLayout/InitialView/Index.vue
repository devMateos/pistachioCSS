<script setup>
import { colors } from '@/assets/js/colors.js'
import { typographies } from '@/assets/js/typographies.js'
import { spacing } from '@/assets/js/spacing.js'
import InitialSettings from './InitialSettings.vue';

</script>

<template>
  <section>
    <form action="">
      <InitialSettings
        :formSection="'Colors'"
        :formSectionTitle="'Enter the colors settings'"
        :formItemsList="colors[0]"
      />
      <InitialSettings
        :formSection="'Font'"
        :formSectionTitle="'Enter the typography settings'"
        :formItemsList="typographies[0]"
      />
      <InitialSettings
        :formSection="'Spacing'"
        :formSectionTitle="'Enter the spacing settings'"
        :formItemsList="spacing[0]"
      />
    </form>
  </section>
</template>
<style></style>