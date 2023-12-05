<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['copy-code']);

const copyCode = () => emit('copy-code');
</script>

<template>
  <button class="code-block__copy-button" @click="copyCode">
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.1001 7.3001C3.1001 5.3205 3.1001 4.33 3.7154 3.7154C4.33 3.1001 5.3205 3.1001 7.3001 3.1001H9.4001C11.3797 3.1001 12.3702 3.1001 12.9848 3.7154C13.6001 4.33 13.6001 5.3205 13.6001 7.3001V10.8001C13.6001 12.7797 13.6001 13.7702 12.9848 14.3848C12.3702 15.0001 11.3797 15.0001 9.4001 15.0001H7.3001C5.3205 15.0001 4.33 15.0001 3.7154 14.3848C3.1001 13.7702 3.1001 12.7797 3.1001 10.8001V7.3001Z" stroke-width="0.625"/>
      <path d="M3.1 12.9C2.54305 12.9 2.0089 12.6788 1.61508 12.2849C1.22125 11.8911 1 11.357 1 10.8V6.6C1 3.9603 1 2.6401 1.8204 1.8204C2.6401 1 3.9603 1 6.6 1H9.4C9.95695 1 10.4911 1.22125 10.8849 1.61508C11.2788 2.0089 11.5 2.54305 11.5 3.1" stroke-width="0.625"/>
    </svg>
    <span>Copy</span>
  </button>
</template>

<style scoped>
button {
  align-items: center;
  color: var(--color-background-primary);
  display: flex;
  gap: var(--spacing-XS);
  stroke: var(--color-background-primary);
}
button:hover {
  color: var(--color-gray);
  stroke: var(--color-gray);
}
</style>