import Vue from 'vue'
import Vuex from 'vuex'
//modules
import auth from './modules/auth'
import gen from './modules/gen'
//header
import header_shopOption from './modules/header/header_shopOption'
import header_brand from './modules/header/header_brand'
//product
import product from './modules/product/product'
//filter
import filter from './modules/filter/filter'
//brand
import brand_all from './modules/brand/brand_all'
//howTo
import howTo from './modules/howTo/howTo'
//blog
import blog from './modules/blog/blog'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    //
    auth,
    gen,
    //
    header_shopOption,
    header_brand,
    //
    product,
    //
    filter,
    //
    brand_all,
    //
    howTo,
    //
    blog
  }
})
