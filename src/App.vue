<template>
  <div id="app" class="container">
    <div class=" d-flex justify-content-between">
      <div>
        <h3>Fima's</h3>
      </div>
      <div>
        <router-link to="/All">All</router-link>
        <router-link to="/By">By</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
a {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
