<template>
  <div class="hello container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
      <div v-for="photo in allPhotos" :key="photo.id" class="p-2">
        <img :src="photo.urls.thumb" />
        {{ photo.id }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  computed: mapGetters(['allPhotos']),
  methods: mapActions(['getPhoto']),
  mounted() {
    this.getPhoto()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
