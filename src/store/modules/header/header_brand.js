import gen from '../gen'

const state = {
  brandCat : {},
  brandCatLoader : false
}

const getters = {
  brandCat : state => state.brandCat,
  brandCatLoader: state => state.brandCatLoader
}

const mutations = {
  getBrandCat(state2){
    //
    state.brandCatLoader = true
    //
    gen.state.firestore
      .collection("brandCat")
      .get().then((queryBrandCat)=>{
      //
      if(queryBrandCat.size == 0){
        //stop loader
        state.brandCatLoader = false
      }
      //
      let cQueryBrandCat = 0
      queryBrandCat.forEach((queryBrandCatDoc)=>{

        //
        //
        if(queryBrandCatDoc.exists){

          cQueryBrandCat++

          //console.log(queryBrandCatDoc.id) //only this is req
          //console.log(queryBrandCatDoc.data())
          //
          state.brandCat[queryBrandCatDoc.id] = {
           //
          }
          //
          gen.state.firestore
            .collection("brandCat").doc(queryBrandCatDoc.id)
            .collection("brand")
            .get().then((queryBrand)=>{

            if(queryBrand.size == 0){
              //stop loader
              state.brandCatLoader = false
            }

            let cQueryBrand = 0
            queryBrand.forEach((queryBrandDoc)=>{

              if(queryBrandDoc.exists){
                //
                cQueryBrand++
                //
                //console.log(queryBrandDoc.id)
                //console.log(queryBrandDoc.data())

                //
                state.brandCat[queryBrandCatDoc.id][queryBrandDoc.id] = {

                }
                //
                //
                //
                if(cQueryBrandCat == queryBrandCat.size && queryBrand.size == cQueryBrand){
                  state.brandCatLoader = false
                  //
                  //console.log("****BRAND CATEGORY QUERIED****")
                  console.log("Brand Category [Final]", state.brandCat)
                }
              }

            })

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
