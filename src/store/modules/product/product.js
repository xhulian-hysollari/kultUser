import gen from '../gen'
import product_category from './product_category'

const state = {

}

const getters = {

}

const mutations = {
  getProducts(state2, payload){
    //
    console.log("Get Product Payload =>", payload)
    //
    gen.state.firestore //Query 2
      .collection("product").doc(payload.pId)
      .get().then((queryProductDetail)=>{

      payload.cProduct++
      //
      if(queryProductDetail.exists){
        //
        console.log(queryProductDetail.id) //product id
        console.log(queryProductDetail.data()) //product detail

        //
        product_category.state.productCategory[queryProductDetail.id] = {
          pBasicDetail : queryProductDetail.data().pBasicDetail,
          pOtherDetail: queryProductDetail.data().pOtherDetail
        }
      }

      console.log('cCategoryProduct => ' + payload.cProduct + ' | ' + 'queryProductCategory.size => ' + payload.cProductSize)
      if(payload.cProduct == payload.cProductSize){
        //
        product_category.state.productCategoryLoader = false
        //
        console.log("***** PRODUCT CATEGORY QUERIED *****")
        //
        console.log('[PRODUCT QUERIED FINAL]', product_category.state.productCategory)
      }

    })
    //
  }
}

const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
