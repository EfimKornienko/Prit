<template>
  <div class="p-3">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-3 col-lg-4 col-10 d-flex flex-column">
        <Photos :photos="allPhotos.slice(0, allPhotos.length / 3)" />
      </div>
      <div class="col-xl-3 col-lg-4 col-10 d-flex flex-column">
        <Photos
          :photos="
            allPhotos.slice(
              allPhotos.length / 3,
              allPhotos.length - allPhotos.length / 3,
            )
          "
        />
      </div>
      <div class="col-xl-3 col-lg-4 col-10 d-flex flex-column">
        <Photos
          :photos="allPhotos.slice(allPhotos.length - allPhotos.length / 3)"
        />
      </div>
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
