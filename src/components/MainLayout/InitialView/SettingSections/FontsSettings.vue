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
        Font {{ key }}
        <ToolTip
          :info="info[key]"
        />
      </label>
      
    <!-- FONTS FORM -->
      <div class="card__grid">
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
        
        <!-- Font weight --> <!-- ⛔ TEMPORARILY DISABLED -->
<!--         <div class="card__item"
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
        </div> -->

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

        <!-- Font config -->
        <div class="card__item--two-column"
        v-if="key === 'config'"
        >
          <div
            v-for="(element, index) in item"
            :key="index"
          >
            <div>
              <label for="">{{ element.label }}</label>
              <select class="form__input-item"
                v-model="element.family"
              >
                <option value="heading">Heading</option>
                <option value="body">Body</option>
              </select>
              <select class="form__input-item"
                v-model="element.size"
              >
                <option value="XXL">XXL</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XS">XS</option>
              </select>
              <select class="form__input-item"
                v-model="element.weight"
              >
                <option value="thin">Thin (100)</option>
                <option value="extra-light">Extra Light (200)</option>
                <option value="light">Light (300)</option>
                <option value="regular">Regular (400)</option>
                <option value="medium">Medium (500)</option>
                <option value="Semi Bold">Semi Bold (600)</option>
                <option value="bold">Bold (700)</option>
                <option value="extra-bold">Extra Bold (800)</option>
                <option value="Heavy">Heavy (900)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__item--two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-M);
}
</style>