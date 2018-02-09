// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import Slick from 'vue-slick'
//store
import {store} from './store'
//firebase
import firebase from 'firebase'
import {config} from './firebase/config'
//vuetify
import Vuetify from 'vuetify'
import Element from 'element-ui'
//import '../node_modules/vuetify/dist/vuetify.min.css'
//import './assets/cssLib/googleFont.css'
//import '../node_modules/vuetify/src/stylus/main.styl'
//
//import './css/bootstrap.min.css'
//import './css/slick.css'
//import './css/slick-theme.css'
//import './css/style.css'
//
import './js/jquery.min.js'
//import './js/bootstrap.min.js'
//import './js/slick.min.js'
//
//

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
    this.$store.state.auth.firebaseApp = firebase.initializeApp(config)
    this.$store.commit('defineDbDef')
  }
})
