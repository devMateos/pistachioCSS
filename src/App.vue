<script setup>
import SplashScreen from './components/SplashScreen.vue';


</script>

<template>
  <SplashScreen />
  <div>
    <router-link to="/">Home</router-link><br>
    <router-link to="/init">Init</router-link>
  </div>
  <router-view />
</template>

<style scoped></style>
