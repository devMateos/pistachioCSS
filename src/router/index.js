import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/init', component: import('../views/InitView.vue') },
  ]
})

export default router