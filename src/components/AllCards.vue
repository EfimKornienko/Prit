<template>
  <div class="p-3">
    <div class="row d-flex justify-content-center">
      <Photos :photos="FirstColumnPhotos" />
      <Photos :photos="SecondColumnPhotos" />
      <Photos :photos="ThirdColumnPhotos" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Photos from './Photos.vue'
export default {
  name: 'AllCards',
  components: {
    Photos,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allPhotos']),
    FirstColumnPhotos() {
      return this.allPhotos.slice(0, this.allPhotos.length / 3)
    },
    SecondColumnPhotos() {
      return this.allPhotos.slice(
        this.allPhotos.length / 3,
        this.allPhotos.length - this.allPhotos.length / 3,
      )
    },
    ThirdColumnPhotos() {
      return this.allPhotos.slice(
        this.allPhotos.length - this.allPhotos.length / 3,
      )
    },
  },
  methods: {
    ...mapActions(['getPhotos']),
  },
  mounted() {
    this.getPhotos()
    console.log(this.$store.state.photos)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-style {
  border-radius: 2rem;
}
.card-content {
  padding: 5px;
}
</style>
