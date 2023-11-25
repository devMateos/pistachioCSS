<script setup>
import { ref } from "vue";

import HeaderLogo from '@/components/molecules/HeaderLogo.vue';
import HeaderNav from '@/components/molecules/HeaderNav.vue';
import SwitchModeButton from '@/components/atoms/SwitchModeButton.vue';
import HeaderMenuIcon from '../atoms/HeaderMenuIcon.vue';

const mobileScreen = window.innerWidth < 778;
console.log(mobileScreen, innerWidth);
let headerMenuOpen = ref();
const toggleMenu = (data) => {
  headerMenuOpen.value = data;
}

handleResize();
window.addEventListener('resize', handleResize);

function handleResize() {
  if (mobileScreen) {
    headerMenuOpen.value = false;
  } else {
    headerMenuOpen.value = true;
  }
}
</script>
<template>
  <header>
    <HeaderLogo />
    <HeaderMenuIcon @click="toggleMenu" />
    <div v-show="!mobileScreen || (mobileScreen && headerMenuOpen)" class="header__right-column">
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

.header__right-column {
  align-items: center;
  background-color: var(--color-background-primary);
  border-bottom: var(--border-standard);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-XL);
  height: fit-content;
  left: 0;
  padding: var(--spacing-XL);
  position: absolute;
  top: 8rem;
  width: 100vw;
}


@media(min-width: 778px) {
  .header__right-column {
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