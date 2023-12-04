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
      </div>

      <AddButton
        v-if="key !== 'Minimum Spacing Unit' && key !== 'weight'"/>
    </div>
  </div>
</template>