<script setup>
import { ref } from 'vue';

import HeaderLogo from '@/components/molecules/HeaderLogo.vue';
import HeaderNav from '@/components/molecules/HeaderNav.vue';
import SwitchModeButton from '@/components/atoms/SwitchModeButton.vue';
import HeaderMenuIcon from '../atoms/HeaderMenuIcon.vue';

let isMenuActive = ref(false);

let toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
}

</script>
<template>
  <header>
    <HeaderLogo />
    <HeaderMenuIcon @click="toggleMenu" />
    <div :class="{ 'header__menu': true, 'header__mobile-menu--active': isMenuActive }">
      <HeaderNav />
      <SwitchModeButton />
    </div>
  </header>
</template>
<style>
header {
  align-items: center;
  display: flex;
  background-color: var(--color-background-primary);
  border-bottom: var(--border-standard);
  height: 8rem;
  justify-content: space-between;
  padding: var(--spacing-M) var(--spacing-XL);
  position: relative;
}

.header__menu {
  align-items: center;
  background-color: var(--color-background-primary);
  border-bottom: var(--border-standard);
  display: none;
  flex-direction: column;
  gap: var(--spacing-XL);
  height: fit-content;
  left: 0;
  padding: var(--spacing-XL);
  position: absolute;
  top: 8rem;
  width: 100vw;
}

@media(max-width: 777px) {
  .header__mobile-menu--active {
    display: flex;
  }
}

@media(min-width: 778px) {
  .header__menu {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: end;
    left: 0;
    padding: 0;
    position: relative;
    top: 0;
  }
}
</style>