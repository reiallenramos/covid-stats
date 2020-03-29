<template>
  <div id="app">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">COVID 19 Global Statistics</a>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar main-pad-top">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                Home
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 main-pad-top">
          <DataFetcher />
        </main>
      </div>
    </div>
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
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.main-pad-top {
  padding-top: 48px;
}
</style>
