import Vue from 'vue'
import Router from 'vue-router'
//
const Hello = resolve => {
  require.ensure(['@/components/Hello'],()=>{
    resolve(require('@/components/Hello'));
  });
};
//product
const product_category = resolve => {
  require.ensure(['@/components/product/product_category'],()=>{
    resolve(require('@/components/product/product_category'));
  });
};
const product_subCategory = resolve => {
  require.ensure(['@/components/product/product_subCategory'],()=>{
    resolve(require('@/components/product/product_subCategory'));
  });
};
//brand
const brand_all = resolve => {
  require.ensure(['@/components/brand/brand_all'],()=>{
    resolve(require('@/components/brand/brand_all'));
  });
};
const brand_product = resolve => {
  require.ensure(['@/components/brand/brand_product'],()=>{
    resolve(require('@/components/brand/brand_product'));
  });
};
//special
const globalBestSeller_product = resolve => {
  require.ensure(['@/components/special/globalBestSeller_product'],()=>{
    resolve(require('@/components/special/globalBestSeller_product'));
  });
};
const kultPick_product = resolve => {
  require.ensure(['@/components/special/kultPick_product'],()=>{
    resolve(require('@/components/special/kultPick_product'));
  });
};
//howTo
const howTo = resolve => {
  require.ensure(['@/components/howTo/howTo'],()=>{
    resolve(require('@/components/howTo/howTo'));
  });
};
//
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    //product
    { path: '/productCategory/:shopOption/:category', name: 'Product Category', component: product_category},
    { path: '/productSubCategory/:shopOption/:category/:subCategory', name: 'Product SubCategory', component: product_subCategory},
    //brand
    { path: '/brandAll', name: 'Brand All', component: brand_all},
    { path: '/brandProduct/:brand', name: 'Brand Product', component: brand_product},
    //special
    { path: '/globalBestSeller', name: 'Global Best Seller', component: globalBestSeller_product },
    { path: '/kultPick', name: 'Kult Pick', component: kultPick_product },
    //howTo
    { path: '/howTo', name: 'How To', component: howTo }
  ]
})
