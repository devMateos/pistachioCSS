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
  methods: {
    type: Function,
  },
});

</script>

<template>
  <h2>{{ formSectionTitle }}</h2>

  <div class="initial-settings__form"
  >
  
    <div class="initial-settings__card"
      v-for="(item, key) in formItemsList"
      :key="key"
    >

      <label class="h3"
        :for="`${key} ${formSection}`"
        >
        {{ key }}
      </label>
      
      <!-- SPACING FORM -->
      <!--  -->
      <div class="card__item"
      v-if="key === 'Minimum Spacing Unit'"
      >
        <input type="number" class="form__input-item" step="0.1"
          v-model="item.variableValue"
        >
      </div>
      <div class="card__item"
      v-if="key !== 'Minimum Spacing Unit'"
      >
        <div
        v-for="(element, index) in item"
            :key="index"
          >
          <label for="">{{ element.label }}</label>
          <input type="number" class="form__input-item" step="0.1"
            v-model="element.multiplier"
          >
          </div>
      </div>
    </div>
  </div>
</template>