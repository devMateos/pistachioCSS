<template>
  <nav class="header__nav">
    <ul>
      <li class="navbar__button navbar__button--active"><a href="">headerbtn</a></li>
      <li class="navbar__button"><a href="">headerbtn</a></li>
      <li class="navbar__button"><a href="">headerbtn</a></li>
      <li class="navbar__button"><a href="">headerbtn</a></li>
    </ul>
  </nav>
  <div class="navbar__separator"></div>
</template>
<style>
.header__nav {
  display: flex;
}

.navbar__separator {
  border: var(--border-style) .1rem var(--border-color);
  height: 5.6rem;
  margin-left: var(--spacing-L);
}

.header__nav>ul {
  display: flex;
  gap: var(--spacing-L);
}
</style>