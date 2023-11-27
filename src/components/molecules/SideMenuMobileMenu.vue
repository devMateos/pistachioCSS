<script setup>
import { ref } from 'vue';
let isAsideMenuActive = ref(false);
</script>
<template>
  <div class="aside-menu__button">
    <button @click="isAsideMenuActive = !isAsideMenuActive">
      <svg :class="{ 'aside-menu__button--active': isAsideMenuActive }" width="12" height="10" viewBox="0 0 12 10"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 9L7 5L11 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 9L1 5L5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Menu
    </button>
  </div>
</template>
<style>
.aside-menu__button {
  align-items: center;
  border-bottom: var(--border-style) .1rem var(--color-light-gray);
  display: flex;
  height: 4rem;
  padding: var(--spacing-XS) var(--spacing-XL);
  width: 100vw;
}

.aside-menu__button svg {
  height: 1rem;
  stroke: var(--color-text);
  transform: rotate(180deg);
  transition-duration: .4s;
}

.aside-menu__button--active {
  transform: rotate(270deg) !important;
}

@media(min-width: 778px) {
  .aside-menu__button {
    display: none;
  }
}
</style>