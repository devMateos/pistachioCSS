<script setup>
import { colors } from '@/assets/js/colors.js'
import { typographies } from '@/assets/js/typographies.js'
import InitialSettings from './InitialSettings.vue';

</script>

<template>
  <section>
    <form action="">
      <InitialSettings
        :formSection="'Colors'"
        :formSectionTitle="'Enter the colors of your application or website'"
        :formItemsList="colors[0]"
        :methods="findvariableValue"
      />
      <InitialSettings
        :formSection="'Font'"
        :formSectionTitle="'Enter the typography settings'"
        :formItemsList="typographies[0]"
        :methods="findvariableValue"
      />
    </form>
  </section>
</template>
<style></style>