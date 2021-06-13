<template>
  <div class="container p-5">
    <div class="row d-flex justify-content-center">
      <div class="col d-flex flex-column">
        <div
          v-for="card in allCards.slice(0, allCards.length / 2)"
          :key="card.id"
          class="p-2"
        >
          <div class="card-style d-flex justify-content-center ">
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <div class="card-content">{{ card.post.title }}</div>
              <b-img :src="card.photo.urls.small" class="card-content"></b-img>

              <b-card-text class="card-content">
                {{ card.photo.alt_description }}
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column align-items-end ">
        <div
          v-for="card in allCards.slice(allCards.length / 2)"
          :key="card.id"
          class="p-2"
        >
          <div class="card-style d-flex justify-content-center">
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <div class="card-content">{{ card.post.title }}</div>
              <b-img :src="card.photo.urls.small" class="card-content"></b-img>

              <b-card-text class="card-content">
                {{ card.photo.alt_description }}
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AllCards',
  data() {
    return {
      PostsCount: 10,
    }
  },
  computed: {
    ...mapGetters(['allCards']),
  },
  methods: {
    ...mapActions(['getPhotos', 'getPosts', 'getCards']),
  },
  mounted() {
    this.getPhotos()
    this.getPosts()
    console.log(this.$store.state.photos)
    console.log(this.$store.state.posts)
    this.getCards()
    console.log(this.allCards)
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
