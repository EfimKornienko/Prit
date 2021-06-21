<template>
  <div>
    <div v-for="photo in photos" :key="photo.id" class="photo">
      <router-link :to="{ name: 'Card', params: { card: photo } }"
        ><b-img :src="photo.urls.small" class="p-2"></b-img
      ></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Photos',
  props: {
    photos: {
      type: Array,
      default() {
        return null
      },
    },
  },
  data() {
    return {}
  },
}
</script>
<style>
@media screen and (max-width: 1650px) {
  .photo img {
    width: 90%;
  }
}
</style>
