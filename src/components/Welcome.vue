<template>
  <div class="welcome">
    <p>Welcome</p>
    <p>to the test pint app</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style>
a {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 27px;
  color: black !important;
  text-decoration: none;
}
.welcome {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  padding-top: 30px;
}
.welcome p {
  font-size: 75px;
}
@media screen and (max-width: 800px) {
  .welcome p {
    font-size: 40px;
  }
}
</style>
