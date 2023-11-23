<script setup>
import SplashScreen from './components/SplashScreen.vue';


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
      <input type="text" name="" id="" placeholder="input de ejemplo">
      <br>
      <!-- The second value will be selected initially -->
      <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <br>
      <input type="color" name="" id="">
      <input type="checkbox" name="" id="">
      <br>
      <button>Button</button>
    </form>
  </main>
</template>

<style scoped></style>
