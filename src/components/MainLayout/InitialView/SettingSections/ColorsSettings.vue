<script setup>
import ToolTip from '../../../ToolTip.vue';

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
  info: {
    type: Object,
  }
});
console.log(props.info);
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
          <ToolTip
            :info="info[key]"
          />
        </label>
    <!-- COLORS FORM -->
      <div class="card__grid"
        v-if="formSection === 'Colors'"
      >
        <div class="card__item"
          v-for="(element, index) in item"
          :key="index"
        >
          <input type="color" class="form__input-color"
            v-model="element.variableValue"
          >
          </div>
      </div>
    </div>
  </div>
</template>