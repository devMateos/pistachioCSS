<script setup>
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

</script>

<template>
  <h2>{{ formSectionTitle }}</h2>

  <!-- COLORS FORM -->
  <form class="initial-settings__form"
    v-if="formSection === 'Colors'"
  >
  <div class="initial-settings__card"
  v-for="(item, key) in formItemsList"
      :key="key">
      <label class="h3"
        :for="`${key} ${formSection}`">{{ key }} {{ formSection }}</label>
      <div class="card__grid">
        <div class="card__color-item"
        v-for="(color, index) in item"
        :key="index"
        >
        <input type="color" class="form__input-color"
          v-model="color.variableValue"
          >
          <RemoveButton/>
        </div>
      </div><br>
      <AddButton />
    </div><br>
  </form>

  <!-- TYPOGRAPHY FORM -->
  <form class="initial-settings__form"
    v-if="formSection === 'Fonts'"
  >
  <div class="initial-settings__card"
  v-for="(item, key) in formItemsList"
      :key="key">
      <label class="h3"
        :for="`${key} ${formSection}`">{{ key }} {{ formSection }}</label>
      <div class="card__grid">
        <div class="card__color-item"
        v-for="(color, index) in item"
        :key="index"
        >
        <input type="color" class="form__input-color"
          v-model="color.variableValue"
          >
          <RemoveButton/>
        </div>
      </div><br>
      <AddButton />
    </div><br>
  </form>
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
.card__color-item {
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