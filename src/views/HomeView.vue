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
    <!-- <h1>heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
    <h4>heading 4</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in reiciendis laborum deserunt quo maxime.</p>
    <small>small text</small><br>
    <a href="www.google.com">link</a>
    <ul>
      <li>list item</li>
      <li>list item</li>
      <li>list item</li>
    </ul>
    <form action="">
      <label for="form">form label</label><br>
      <input type="text" name="" id="" placeholder="input de ejemplo" class="form__input-item">
      <br>
      <input type="number" name="" id="" class="form__input-item">
      <br>
      <select name="select" class="form__input-item">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <br>
      <input type="color" name="" id="" value="#98cf58" class="form__input-color">
      <input type="checkbox" name="" id="" class="form__input-checkbox">
      <br>
      <div>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input class="form__input-radio" type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
        </div>

        <div>
          <input class="form__input-radio" type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input class="form__input-radio" type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>
      </div>

      <button class="form__button button--primary">Button</button>
    </form>
    <a href="" class="button button--secondary">CTA</a>
    <a href="" class="button button--negative">Reset</a>

    <nav>
      <ul class="header__nav">
        <li class="navbar__button navbar__button--active"><a href="">headerbtn</a></li>
        <li class="navbar__button"><a href="">headerbtn</a></li>
        <li class="navbar__button"><a href="">headerbtn</a></li>
        <li class="navbar__button"><a href="">headerbtn</a></li>
      </ul>
    </nav>
    <form action="">
      <label for="form">form label</label><br>
      <input type="text" name="" id="" placeholder="input de ejemplo" class="form__input-item">
      <br>
      <input type="number" name="" id="" class="form__input-item">
      <br>
      <select name="select" class="form__input-item">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <br>
      <input type="color" name="" id="" value="#98cf58" class="form__input-color">
      <input type="checkbox" name="" id="" class="form__input-checkbox">
      <br>
      <div>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input class="form__input-radio" type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
        </div>

        <div>
          <input class="form__input-radio" type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input class="form__input-radio" type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>
      </div>

      <button class="form__button button--primary">Button</button>
    </form>
    <a href="" class="button button--secondary">CTA</a>
    <a href="" class="button button--negative">Reset</a>

    <nav>
      <ul class="header__nav">
        <li class="navbar__button navbar__button--active"><a href="">headerbtn</a></li>
        <li class="navbar__button"><a href="">headerbtn</a></li>
        <li class="navbar__button"><a href="">headerbtn</a></li>
        <li class="navbar__button"><a href="">headerbtn</a></li>
      </ul>
    </nav>

    <a class="nav-button">
      <svg class="nav-button__icon" width="12" height="12" viewBox="0 0 11 10" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3333 5L0.999919 5M0.999919 5L4.99992 1M0.999919 5L4.99992 9" stroke-width="1" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      Back
    </a>
    <a class="nav-button">
      <svg class="nav-button__icon" width="12" height="12" viewBox="0 0 11 10" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5H10.3333M10.3333 5L6.33333 9M10.3333 5L6.33333 1" stroke-width="1" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      Next
    </a> -->

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