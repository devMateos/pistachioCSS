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
        <ToolTip :info="info[key]"/>
      </label>
      <!-- SPACING FORM -->
      <!--  -->
      <div class="card__item"
      v-if="key === 'Minimum Spacing Unit'"
      >
        <input type="number" class="form__input-item" step="0.1"
          v-model="item[0].variableValue"
        >
      </div>
      <div class="card__item"
      v-if="key !== 'Minimum Spacing Unit'"
      >
        <div
        v-for="(element, index) in item"
            :key="index"
          >
          <label for="" class="ml-S">{{ element.label }}</label>
          <input type="number" class="form__input-item" step="0.1"
            v-model="element.multiplier"
          >
          </div>
      </div>
    </div>
  </div>
</template>