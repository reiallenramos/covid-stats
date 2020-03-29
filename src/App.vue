<template>
  <div id="app">
    <DataFetcher />
  </div>
</template>

<script>
import DataFetcher from './components/DataFetcher.vue'

export default {
  name: 'app',
  components: {
    DataFetcher
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
