<template>
  <div id="change" @click='toggleVersion()'>Cambiar colores</div>
</template>
<style scoped>
#change {
  background-color: blue;
  color: white;
  cursor: pointer;
  height: fit-content;
  margin-top: 30px;
  padding: 25px;
  width: fit-content;
}
</style>

<script setup>

let version = 'light';
changeMode();
function toggleVersion() {
  document.documentElement.classList.remove(`${version}-mode`);
  if (version === 'light') {
    version = 'dark';
  } else if (version === 'dark') {
    version = 'light';
  }
  changeMode();
}
function changeMode() {
  document.documentElement.classList.add(`${version}-mode`);
  console.log(version);
}
</script>