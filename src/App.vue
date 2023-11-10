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
    <label for="form">form label</label>
    <input type="text" name="" id="">
    <button>Button</button>
  </form>
</template>

<style scoped></style>
