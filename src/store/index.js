import Vue from 'vue'
import Vuex from 'vuex'
import { getPhoto } from '../photos'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    photos: [],
    name: 'FF',
  },
  getters: {
    allPhotos(state) {
      return state.photos
    },
    // name(state) {
    //   return state.name
    // },
  },
  mutations: {
    setPhoto(state, photos) {
      photos.then((data) => {
        state.photos = data
      })
    },
  },
  actions: {
    getPhoto(context) {
      let photos = getPhoto
      context.commit('setPhoto', photos)
    },
  },
})
