<script setup>
import { ref } from 'vue';
import SideMenuMobileMenu from '@/components/SideMenu/SideMenuMobileMenu.vue';

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
        <li class="nav-menu__category navbar__button">
          <a href="#settings">SETTINGS</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="#settings-colors">Colors</a></li>
            <li class="nav-menu__item navbar__button"><a href="#settings-typographies">Typographies</a></li>
            <li class="nav-menu__item navbar__button"><a href="#settings-spacing">Spacing</a></li>
            <li class="nav-menu__item navbar__button"><a href="#settings-border">Borders</a></li>
          </ul>
        </li>
        <li class="nav-menu__category navbar__button">
          <a href="#code">CODE</a>
          <ul>
            <li class="nav-menu__item navbar__button"><a href="#code-tokens">Custom properties (Tokens)</a></li>
            <li class="nav-menu__item navbar__button"><a href="#code-light">Light Mode Colors</a></li>
            <li class="nav-menu__item navbar__button"><a href="#code-dark">Dark Mode Colors</a></li>
            <li class="nav-menu__item navbar__button"><a href="#code-reset">ResetCSS</a></li>
            <li class="nav-menu__item navbar__button"><a href="#code-items">Items (Atoms)</a></li>
            <li class="nav-menu__item navbar__button"><a href="#code-utility">Utility Classes</a></li>
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
  margin: var(--spacing-XS) 0 0 var(--spacing-XS);
}
@media(min-width: 778px) {
  .left-aside {
    border-bottom: none;
    border-right: var(--border-standard);
  }
  .side-navmenu {
    display: flex;
  }
  /* .side-navmenu .nav-menu__category > ul {
    display: none;
  }
  .side-navmenu .navbar__button--active > ul {
    display: block;
  } */
}
</style>