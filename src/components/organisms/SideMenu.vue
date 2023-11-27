<script setup>
import { ref } from 'vue';
import SideMenuMobileMenu from '@/components/molecules/SideMenuMobileMenu.vue';

const isSideMenuActive = ref('');
const showMenu = (data) => {
  isSideMenuActive.value = data;
  console.log(isSideMenuActive.value);
}
</script>
<template>
  <aside class="left-aside">
    <SideMenuMobileMenu @open-menu="showMenu" />
    <nav :class="{ 'side-navmenu': true, 'side-navmenu--active': isSideMenuActive }">
      <ul>
        <li class="nav-menu__category navbar__button navbar__button--active">
          <a href="">TOKENS</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 1</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 2</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 3</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 4</a></li>
          </ul>
        </li>
        <li class="nav-menu__category navbar__button">
          <a href="">ATOMS</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 1</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 2</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 3</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 4</a></li>
          </ul>
        </li>
        <li class="nav-menu__category navbar__button">
          <a href="">MOLECULES</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 1</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 2</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 3</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 4</a></li>
          </ul>
        </li>
        <li class="nav-menu__category navbar__button">
          <a href="">ORGANISMS</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 1</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 2</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 3</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 4</a></li>
          </ul>
        </li>
        <li class="nav-menu__category navbar__button">
          <a href="">TEMPLATES</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 1</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 2</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 3</a></li>
            <li class="nav-menu__item navbar__button"><a href="">Categoría 4</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style>
.left-aside {
  border-bottom: var(--border-style) .1rem var(--color-light-gray);
  background-color: (--color-background-primary);
}

.side-navmenu {
  display: none;
  margin: auto;
  padding: var(--spacing-S);
  width: fit-content;
}

.side-navmenu--active {
  display: flex;
}

.nav-menu__category {
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-M);
}

.nav-menu__item{
  font-weight: var(--font-weight-medium);
  margin: var(--spacing-S) 0 0 var(--spacing-S);
}
@media(min-width: 778px) {
  .left-aside {
    border-bottom: none;
    border-right: var(--border-standard);
  }
  .side-navmenu {
    display: flex;
  }
  .side-navmenu .nav-menu__category > ul {
    display: none;
  }
  .side-navmenu .navbar__button--active > ul {
    display: block;
  }
}
</style>