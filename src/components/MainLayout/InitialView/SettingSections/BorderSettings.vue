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
    type: String,
  }
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
        {{ item[0].label }}
        <ToolTip
          :info="`info.${key}`"
        />
      </label>
      
      <!-- BORDERS FORM -->
      <!-- Style -->
      <div class="card__item"
      v-if="key === 'style'"
      >
        <select id="borderStyle" class="form__input-item"
          v-model="item[0].variableValue"
        >
          <option value="solid">Solid</option>
          <option value="hidden">Hidden</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="inset">Inset</option>
          <option value="outset">Outset</option>
          <option value="none">None</option>
        </select>
      </div>
      
      <!-- Width -->
      <div class="card__item"
      v-if="key === 'width'"
      >
        <input type="number" class="form__input-item" step="0.1"
          v-model="item[0].variableValue"
        >
      </div>

      <!-- Radius -->
      <div class="card__radio-options"
      v-if="key === 'radius'"
      >
        
        <div>
          <input type="radio" class="form__input-radio" v-model="item[0].variableValue" value="var(--border-round)">
          <label for="round border">Round</label>
        </div>

        <div>
          <input type="radio" class="form__input-radio" v-model="item[0].variableValue" value="var(--border-rounded)">
          <label for="rounded border">Rounded</label>
        </div>
        
        <div>
          <input type="radio" class="form__input-radio" v-model="item[0].variableValue" value="var(--border-sharp)">
          <label for="sharp border">Sharp</label>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.card__radio-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-S);
}
</style>