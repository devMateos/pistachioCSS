<script setup>
import AddButton from '@/components/AddButton.vue';

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
        {{ key }} {{ formSection }}
      </label>
      
    <!-- FONTS FORM -->
      <div class="card__grid"
        v-if="formSection === 'Font'"
      >
        <!-- Font family -->
        <div class="card__item"
        v-if="key === 'family'"
        >
        <div
        v-for="(element, index) in item"
            :key="index"
          >
          <label for="">{{ element.label }}</label>
            <input type="text" class="form__input-item"
              v-model="element.variableValue"
            >
          </div>
        </div>
        
        <!-- Font weight -->
        <div class="card__item"
          v-if="key === 'weight'"
        >
          <div
            v-for="(element, index) in item"
            :key="index"
          >
          <input type="checkbox" class="form__input-checkbox"
            v-model="element.checked"
          >
            <label for="">{{ element.label }}: {{ element.variableValue }}</label>
          </div>
        </div>
      </div>

      <!-- Font size -->
      <div class="card__item"
      v-if="key === 'size'"
      >
        <div
        v-for="(element, index) in item"
            :key="index"
          >
          <label for="">{{ element.label }}</label>
          <input type="number" class="form__input-item" step="0.1"
            v-model="element.variableValue"
          >
          </div>
      </div>

      <AddButton
        v-if="key !== 'Minimum Spacing Unit' && key !== 'weight'"/>
    </div>
  </div>
</template>