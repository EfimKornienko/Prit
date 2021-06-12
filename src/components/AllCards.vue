<template>
  <div class="hello container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
      <div v-for="photo in slicePhotos" :key="photo.id" class="p-2">
        <div>
          <div v-for="post in filterPosts(photo)" :key="post.id" class="p-2">
            <b-card
              title="post.title"
              img-src="photo.urls.thumb"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                post.body
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
    // ...mapState(['name']),
    ...mapGetters(['allPhotos', 'allPosts']),
    slicePosts() {
      return this.allPosts.slice(0, 10)
    },
    slicePhotos() {
      let photos = this.allPhotos
      for (var i = 0; i < photos.length - 1; i++) {
        photos[i].idx = i + 1
      }
      console.log(photos)
      return photos
    },
    filterPosts(photo) {
      return this.slicePosts.filter((post) => post.userId === photo.idx)
    },
  },
  methods: {
    ...mapActions(['getPhotos', 'getPosts']),
  },
  mounted() {
    this.getPhotos()
    this.getPosts()
    console.log(this.allPhotos)
    console.log(this.allPosts)
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
