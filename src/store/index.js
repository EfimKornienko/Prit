import Vue from 'vue'
import Vuex from 'vuex'
import { getPhoto } from '../photos'
import { getPosts } from '../posts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    photos: [],
    posts: [],
    cards: [],
  },
  getters: {
    allPhotos(state) {
      return state.photos
    },
    allPosts(state) {
      return state.posts
    },
    allCards(state) {
      return state.cards
    },
    // name(state) {
    //   return state.name
    // },
  },
  mutations: {
    setPhotos(state, photos) {
      photos.then((data) => {
        state.photos = data
      })
    },
    setPosts(state, posts) {
      posts.then((data) => {
        state.posts = data
      })
    },
    setCards(state, cards) {
      state.cards = cards
    },
  },
  actions: {
    getPhotos(context) {
      let photos = getPhoto
      context.commit('setPhotos', photos)
    },
    getPosts(context) {
      let posts = getPosts
      context.commit('setPosts', posts)
    },
    getCards(context) {
      let cards = []
      for (var i = 0; this.state.photos.length - 1; i++) {
        cards.push({
          id: i + 1,
          post: this.state.posts[i],
          photo: this.state.photos[i],
          userId: this.state.posts[i].userId,
        })
      }
      context.commit('setCards', cards)
    },
  },
})
