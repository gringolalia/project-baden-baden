import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './config/store'
import router from './config/router'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import Root from './components/Root'

Vue.use(Vuetify)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Root
})

export {app, router, store}
