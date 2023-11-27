<template>
  <div class="splashscreen">
    <img src="@/assets/img/isotype-logo-pistachiocss.webp" alt="PistachioCSS Isotype" class="splashscreen__isotype">
    <img src="@/assets/img/text-logo-pistachiocss.webp" alt="PistachioCSS logotype" class="splashscreen__logotype">
    <h1>Create your design system for CSS</h1>
  </div>
</template>

<style scoped>
.splashscreen {
  align-items: center;
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  text-align: center;
  width: 100vw;
}

.splashscreen__isotype {
  width: clamp(80px, 48%, 240px);
}

.splashscreen__logotype {
  width: clamp(100px, 60%, 300px);
}
</style>