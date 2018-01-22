import gen from '../gen'
import product from './product'

const state = {
  productCategory : {},
  productCategoryLoader : false
}

const getters = {

}

const mutations = {
  //
  getCategoryProducts(state2, payload){
    console.log(payload)
    //
    state.productCategoryLoader = true
    //
    console.log("[Firestore] in product_category =>", gen.state.firestore)
    //
    gen.state.firestore //Query 1
      .collection("shopOption").doc(payload.shopOption)
      .collection("category").doc(payload.category)
      .collection("product")
      .get().then((queryProductCategory)=>{

      //
      if(queryProductCategory.size == 0){
        //turn loader off
        state.productCategoryLoader = false
      }

      let cCategoryProduct = 0
      queryProductCategory.forEach((queryProductCategoryDoc)=>{

        if(queryProductCategoryDoc.exists){
          //
          //
          console.log(queryProductCategoryDoc.id) //need only this => product id
          console.log(queryProductCategoryDoc.data())
          //
          //get Product Details
          //
          product.mutations.getProducts(state, {
            pId: queryProductCategoryDoc.id,
            cProduct: cCategoryProduct,
            cProductSize: queryProductCategory.size
          })
        }
      })

    })
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}

