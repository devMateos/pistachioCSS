<script setup>
import SplashScreen from './components/SplashScreen.vue';
import SwitchMode from './components/SwitchMode.vue';
</script>

<template>
  <!-- <SplashScreen /> -->
  <div>
    <router-link to="/">Home</router-link><br>
    <router-link to="/init">Init</router-link>
  </div>
  <router-view />
  <main>
    <h1>heading 1</h1>
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
      <button class="form__button button--primary">Button</button>
    </form>

    <SwitchMode />
  </main>
</template>

<style scoped></style>
