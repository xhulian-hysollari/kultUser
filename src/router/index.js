import Vue from 'vue'
import Router from 'vue-router'
//
import Hello from '@/components/Hello'
import products from '@/components/products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/products', name: 'Products', component: products}
  ]
})
