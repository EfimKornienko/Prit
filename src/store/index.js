import Vue from 'vue'
import Vuex from 'vuex'
import { getPhoto } from '../photos'
// import { getPosts } from '../posts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    photos: [],
  },
  getters: {
    allPhotos(state) {
      return state.photos
    },
  },
  mutations: {
    setPhotos(state, photos) {
      photos.then((data) => {
        state.photos = data
      })
    },
  },
  actions: {
    getPhotos(context) {
      let photos = getPhoto
      context.commit('setPhotos', photos)
    },
  },
})
