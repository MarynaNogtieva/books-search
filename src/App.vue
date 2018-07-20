<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <book-info></book-info>
    <search-input></search-input>
    <search-results></search-results>
  </div>
</template>

<script>

import SearchInput from './components/search-input.vue';
import SearchResults from './components/search-results.vue';
import BookInfo from './components/book-info.vue';

export default {
  name: 'app',
  components: {
    SearchInput,
    SearchResults,
    BookInfo
  }
}
</script>

<style>
body {
  font: 1rem/1.5 var(--font-family-sans-serif);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
