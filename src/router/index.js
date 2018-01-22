import Vue from 'vue'
import Router from 'vue-router'
//
const Hello = resolve => {
  require.ensure(['@/components/Hello'],()=>{
    resolve(require('@/components/Hello'));
  });
};
//
const product_category = resolve => {
  require.ensure(['@/components/product/product_category'],()=>{
    resolve(require('@/components/product/product_category'));
  });
};
const product_sub = resolve => {
  require.ensure(['@/components/product/product_sub'],()=>{
    resolve(require('@/components/product/product_sub'));
  });
};

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/productCategory/:shopOption/:category', name: 'Product Category', component: product_category},
    { path: '/productSub', name: 'Product Sub', component: product_sub}
  ]
})
