<script setup>
import SplashScreen from '@/views/SplashScreen.vue';
import { defineAsyncComponent } from 'vue';


const HomeView = defineAsyncComponent(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./views/HomeView.vue'))
    }, 2000);
  })
)
</script>

<template>
  <Suspense>
    <template #default>
      <HomeView />
    </template>
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>
