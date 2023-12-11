<template>
  <nav class="header__nav">
    <ul>
      <li class="navbar__button"><a href="">What is Pistachio?</a></li>
      <li class="navbar__button"><a href="">How to use</a></li>
      <li class="navbar__button"><a href="">About Me</a></li>
      <li class="navbar__button"><a href="">Support Us</a></li>
      <li><a href="" class="button button--secondary">Start</a></li>
    </ul>
  </nav>
  <div class="navbar__separator"></div>
</template>
<style>
.header__nav {
  display: flex;
}

.navbar__separator {
  display: none;
}

.header__nav>ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-L);
}

@media(min-width: 778px) {
  .navbar__separator {
    border: var(--border-style) .1rem var(--border-color);
    display: flex;
    height: 5.6rem;
  }

  .header__nav>ul {
    flex-direction: row;
  }
}
</style>