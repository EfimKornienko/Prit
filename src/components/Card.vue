<template>
  <div>
    <div class="d-flex container mt-3">
      <router-link to="/All">Back</router-link>
    </div>
    <div class="m-5 d-flex flex-column">
      <div class="p-2">
        <b-img :src="card.urls.small"></b-img>
      </div>
      <div class="d-flex flex-column justify-content-center">
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
<style scoped></style>
