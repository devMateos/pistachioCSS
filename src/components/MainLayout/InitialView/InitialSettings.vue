<script setup>
import { toRefs } from 'vue';
import RemoveButton from '@/components/RemoveButton.vue';
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

const { formItemsList } = toRefs(props);
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
          <RemoveButton/>
        </div>
      </div><br>

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
            <RemoveButton/>
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
      </div><br>

      <!-- Font family -->
      <div class="card__item"
      v-if="key === 'size'"
      >
        <div
        v-for="(element, index) in item"
            :key="index"
          >
          <input type="text" class="form__input-item"
            v-model="element.cssVariable"
          >
          <input type="text" class="form__input-item"
            v-model="element.variableValue"
          >
          </div>
        </div>
      <AddButton />
    </div><br>
  </div>
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