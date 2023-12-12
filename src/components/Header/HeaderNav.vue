<template>
  <nav class="header__nav">
    <ul>
      <li><a href="" class="navbar__button text-gray text-gray-hover" title="This page is not finished">What is Pistachio?</a></li>
      <li><a href="" class="navbar__button text-gray text-gray-hover" title="This page is not finished">How to use</a></li>
      <li><a href="" class="navbar__button text-gray text-gray-hover" title="This page is not finished">About Me</a></li>
      <li><a href="" class="navbar__button text-gray text-gray-hover" title="This page is not finished">Support Us</a></li>
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

.header__nav a{
  cursor: not-allowed;
}

@media(min-width: 768px) {
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