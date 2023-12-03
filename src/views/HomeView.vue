<script setup>
import Header from '@/components/Header/Index.vue';
import SideMenu from '@/components/SideMenu/Index.vue';
import MainLayout from '@/components/MainLayout/Index.vue';
</script>

<template>
  <div class="grid-layout">
    <Header class="l-header"/>
    <SideMenu class="l-sidebar"/>
    <MainLayout class="l-main"/>
  </div>
</template>

<style>
.grid-layout{
  display: grid;
  grid-template-areas:
  "header"
  "sidebar"
  "main";
  height: 100vh;
  position: fixed;
  width: 100vw;
}
.l-header {
  grid-area: header;
}
.l-sidebar {
  grid-area: sidebar;
}
.l-main {
  grid-area: main;
  overflow-y: auto;
}
@media(min-width: 778px) {
  .grid-layout{
    grid-template-areas:
    "header header header header header header header header header header header header"
    "sidebar sidebar main main main main main main main main main main";
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 1fr;

  }
  .l-sidebar {
    overflow-y: auto;
  }
}
</style>