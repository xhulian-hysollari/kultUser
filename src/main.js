// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//store
import {store} from './store'
//firebase
import firebase from 'firebase'
import {config} from './firebase/config'
//vuetify
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/cssLib/googleFont.css'
import '../node_modules/vuetify/src/stylus/main.styl'
//
import './css/bootstrap.min.css'
import './css/slick.css'
import './css/slick-theme.css'
import './css/style.css'
//
import './js/jquery.min.js'
import './js/bootstrap.min.js'
import './js/slick.min.js'
//
//

$(document).ready(function(){
  var trigger = $('.hamburger'),
    isClosed = false;
  trigger.click(function () {
    hamburger_cross();
  });
  function hamburger_cross() {
    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
  $('[data-toggle="offcanvas"]').click(function () {
    $('.wrapper').toggleClass('toggled');
  });
});

$(document).ready(function() {
  $('.insta_slider').slick({
    dots: false,
    infinite: true,
    arrows : false,
    speed: 700,
    slidesToShow: 5,
    autoplay : true,
    autoplaySpeed : 7500,
    pauseOnHover : false,
    slidesToScroll : 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

Vue.config.productionTip = false

Vue.use(Vuetify)

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
