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
import product_category from './modules/product/product_category'
import product_sub from './modules/product/product_sub'

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
    product_category,
    product_sub
  }
})
