<template>
  <div id="app">
    <div
      class="d-flex justify-content-between align-items-center container flex-wrap"
    >
      <div>
        <h1>Fima's</h1>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
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
  padding-top: 35px;
}
/* html,
#app {
  background-color: #e6e6fa;
} */
a {
  margin-left: 10px;
  margin-right: px;
  font-size: 25px;
  color: black !important;
  text-decoration: none;
}
</style>
