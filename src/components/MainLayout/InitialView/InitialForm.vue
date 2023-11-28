<script setup>
const props = defineProps({
  formSection: {
    type: String,
  },
  formSectionTitle: {
    type: String,
  },
  formItemsList: {
    type: Object,
  },
});
</script>

<template>
  <section>
    <h2>{{ formSectionTitle }}</h2>
    <form>
      <div
        v-for="(item, key) in formItemsList"
        :key="key">
        <label
          :for="`${key} ${formSection}`">{{ key }} {{ formSection }}</label>
        <div
          v-if="formSection === 'Colors'"
          v-for="(color, index) in item"
          :key="index">
          <input type="text" :value="`${color.cssVariable}`">
          <input type="color"
          :value="`${color.colorCode}`">
        </div><br>
      </div><br>
    </form>
  </section>
</template>