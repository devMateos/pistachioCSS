<script setup>
function reload() {
  location.reload();
}
</script>
<template>
  <div class="header__logo" @click="reload()">
    <img src="@/assets/img/isotype-logo-pistachiocss.webp" alt="PistachioCSS Isotype">
    <img src="@/assets/img/text-logo-pistachiocss.webp" alt="PistachioCSS logotype">
  </div>
</template>
<style>
.header__logo {
  cursor: pointer;
  display: flex;
  gap: var(--spacing-XS);
  height: 100%;
}
</style>