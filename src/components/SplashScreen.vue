<template>
  <div class="splashscreen">
    <img src="@/assets/img/isotype-logo-pistachiocss.webp" alt="PistachioCSS Isotype">
    <img src="@/assets/img/text-logo-pistachiocss.webp" alt="PistachioCSS logotype">
    <h1>PistachioCSS: The best way to create your design system for CSS</h1>
  </div>
</template>

<style scoped>
.splashscreen {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100vw;
}

img {
  width: clamp(100px, 60%, 300px);
}
</style>