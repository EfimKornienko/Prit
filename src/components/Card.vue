<template>
  <div>
    <div class="d-flex container mt-3">
      <router-link to="/All">Back</router-link>
    </div>
    <div class="m-3 d-flex flex-column card-photo">
      <div class="p-2 main-photo">
        <b-img :src="card.urls.small"></b-img>
      </div>
      <div class="d-flex flex-column justify-content-center text-photo">
        <h1>{{ card.alt_description }}</h1>
        <h4>Photo by {{ card.user.name }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.card)
  },
}
</script>
<style scoped>
.card-photo {
  max-height: 85vh;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}
.main-photo img {
  max-width: 50%;
  min-width: 25%;
}
</style>
