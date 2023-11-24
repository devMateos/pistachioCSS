<script setup>
import HeaderLogo from '@/components/molecules/HeaderLogo.vue';
import HeaderNav from '@/components/molecules/HeaderNav.vue';
import SwitchModeButton from '@/components/atoms/SwitchModeButton.vue';
</script>
<template>
  <header>
    <HeaderLogo />
    <div class="header__right-column">
      <HeaderNav />
      <SwitchModeButton />
    </div>
  </header>
</template>
<style>
header {
  align-items: center;
  display: flex;
  background-color: var(--color-interface);
  border-bottom: var(--border-style) var(--border-width) var(--border-color);
  height: 8rem;
  justify-content: space-between;
  padding: var(--spacing-M) var(--spacing-XL);
}

.header__right-column {
  align-items: center;
  display: flex;
  gap: var(--spacing-XL);
}
</style>