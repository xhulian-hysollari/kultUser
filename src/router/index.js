import Vue from 'vue'
import Router from 'vue-router'
//
const Hello = resolve => {
  require.ensure(['@/components/Hello'],()=>{
    resolve(require('@/components/Hello'));
  });
};
//product
const product_particularProduct = resolve => {
  require.ensure(['@/components/product/particularProduct'],()=>{
    resolve(require('@/components/product/particularProduct'));
  });
};
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
//global Best Seller
const globalBestSeller_product = resolve => {
  require.ensure(['@/components/globalBestSeller/globalBestSeller_product'],()=>{
    resolve(require('@/components/globalBestSeller/globalBestSeller_product'));
  });
};
const globalBestSellerShopOption_product = resolve => {
  require.ensure(['@/components/globalBestSeller/globalBestSellerShopOption_product'],()=>{
    resolve(require('@/components/globalBestSeller/globalBestSellerShopOption_product'));
  });
};
//kult pick
const kultPick_product = resolve => {
  require.ensure(['@/components/kultPick/kultPick_product'],()=>{
    resolve(require('@/components/kultPick/kultPick_product'));
  });
};
const kultPickShopOption_product = resolve => {
  require.ensure(['@/components/kultPick/kultPickShopOption_product'],()=>{
    resolve(require('@/components/kultPick/kultPickShopOption_product'));
  });
};
//howTo
const howTo = resolve => {
  require.ensure(['@/components/howTo/howTo'],()=>{
    resolve(require('@/components/howTo/howTo'));
  });
};
//blog
const blog = resolve => {
  require.ensure(['@/components/blog/blog'],()=>{
    resolve(require('@/components/blog/blog'));
  });
};
const article = resolve => {
  require.ensure(['@/components/blog/article'],()=>{
    resolve(require('@/components/blog/article'));
  });
};
//auth
const auth_login = resolve => {
  require.ensure(['@/components/auth/login'],()=>{
    resolve(require('@/components/auth/login'));
  });
};
const auth_signup = resolve => {
  require.ensure(['@/components/auth/signup'],()=>{
    resolve(require('@/components/auth/signup'));
  });
};
const emailVer = resolve => {
  require.ensure(['@/components/auth/emailVer'],()=>{
    resolve(require('@/components/auth/emailVer'));
  });
};
const forgotPassword = resolve => {
  require.ensure(['@/components/auth/forgotPassword'],()=>{
    resolve(require('@/components/auth/forgotPassword'));
  });
};
//profile
const editProfile = resolve => {
  require.ensure(['@/components/profile/editProfile'],()=>{
    resolve(require('@/components/profile/editProfile'));
  });
};
const changePassword = resolve => {
  require.ensure(['@/components/profile/changePassword'],()=>{
    resolve(require('@/components/profile/changePassword'));
  });
};
const deleteAccount = resolve => {
  require.ensure(['@/components/profile/deleteAccount'],()=>{
    resolve(require('@/components/profile/deleteAccount'));
  });
};
const updatePhoneNo = resolve => {
  require.ensure(['@/components/profile/updatePhoneNo'],()=>{
    resolve(require('@/components/profile/updatePhoneNo'));
  });
};

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    //product
    { path: '/particularProduct/:pId', name: 'Particular Product', component: product_particularProduct},
    { path: '/productCategory/:shopOption/:category', name: 'Product Category', component: product_category},
    { path: '/productSubCategory/:shopOption/:category/:subCategory', name: 'Product SubCategory', component: product_subCategory},
    //brand
    { path: '/brandAll', name: 'Brand All', component: brand_all},
    { path: '/brandProduct/:brand', name: 'Brand Product', component: brand_product},
    //special
    { path: '/globalBestSeller', name: 'Global Best Seller', component: globalBestSeller_product },
    { path: '/globalBestSeller/shopOption/:shopOption', name: 'Global Best Seller - Shop', component: globalBestSellerShopOption_product},
    //
    { path: '/kultPick', name: 'Kult Pick', component: kultPick_product },
    { path: '/kultPick/shopOption/:shopOption', name: 'Kult Pick - Shop', component: kultPickShopOption_product},
    //howTo
    { path: '/howTo', name: 'How To', component: howTo },
    //blog
    { path: '/blog', name: 'Blog', component: blog},
    { path: '/article', name: 'Article', component: article},
    //auth
    { path: '/login', name: 'Login', component: auth_login },
    { path: '/signup', name: 'Signup', component: auth_signup },
    { path: '/emailVer', name: 'Email Verification', component: emailVer },
    { path: '/forgotPassword', name: 'Forgot Password', component: forgotPassword },
    //profile
    { path: '/editProfile', name: 'Edit Profile', component: editProfile },
    { path: '/changePassword', name: 'Change Password', component: changePassword },
    { path: '/deleteAccount', name: 'Delete Account', component: deleteAccount },
    { path: '/updatePhoneNo', name: 'Update Phone No', component: updatePhoneNo }
  ]
})
