<template>
  <div>
    <div class="d-flex container mt-3">
      <router-link to="/All">Back</router-link>
    </div>
    <div class="container card-content">
      <div class="d-flex justify-content-center flex-wrap">
        <div class="main-photo">
          <b-img :src="card.urls.small"></b-img>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-content-center card-text"
        >
          <h3>{{ card.alt_description }}</h3>
          <h5>Photo by {{ card.user.name }}</h5>
          <div class="d-flex justify-content-center card-buttons">
            <b-button variant="dark" @click="log">Dark</b-button>
            <b-button variant="dark">Dark</b-button>
          </div>
        </div>
      </div>
    </div>
    <h2 v-if="up.length" class="pt-5">{{ card.user.name }} portfolio</h2>
    <div class="d-flex justify-content-center row user-photos">
      <div v-for="photo in up" :key="photo.id" class="d-flex flex-column">
        <div v-for="url in photo.preview_photos" :key="url.id">
          <b-img :src="url.urls.small"></b-img>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserPhotos from '../photos'
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
    return {
      up: [],
    }
  },
  computed: {},
  methods: {
    log() {
      console.log('up', this.up)
    },
  },
  mounted() {
    console.log(this.card)
    UserPhotos(this.card.user.username)
      .then((x) => {
        return x.response
      })
      .then((data) => {
        console.log('d', data.results)
        this.up = data.results
      })
  },
}
</script>
<style scoped>
button {
  margin: 10px;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 80vh;
  max-height: 100%;
}
.main-photo img {
  width: 100%;
}
.card-text {
  padding: 20px;
  max-width: 500px;
}
.row {
  margin: 0 !important;
  padding: 0 !important;
}
.user-photos img {
  padding: 10px;
  width: 100%;
}
</style>
