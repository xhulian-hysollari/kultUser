import axios from 'axios'
import router from '../../../router'
//
import gen from '../gen'
import product from '../product/product'

const state = {
  filter : {},
  filterLoader : false,
  //
  //selectedFilters : {},
}

const getters = {
  filter: state => state.filter,
  filterLoader : state => state.filterLoader,
  //
  //selectedFilters:state => state.selectedFilters,
}

const mutations ={
  //
  getFilters(state2, payload){
    //console.log(payload)
    //
    state.filterLoader = true
    //
    gen.state.firestore
    //.collection("shopOption").doc(payload.shopOption)
    //.collection("category").doc(payload.category)
      .doc(payload.routePath)
      .collection("filter")
      .get().then((queryfilter)=>{

      if(queryfilter.size == 0){
        state.filterLoader = false
      }

      let cQueryfilter = 0
      queryfilter.forEach((queryfilterDoc)=>{

        if(queryfilterDoc.exists){
          //
          //
          //console.log(queryfilterDoc.id) // we need this => age, brand etc
          //console.log(queryfilterDoc.data())
          //
          state.filter[queryfilterDoc.id] = {
            //
          }
          //
          gen.state.firestore
          //.collection("shopOption").doc(payload.shopOption)
          //.collection("category").doc(payload.category)
          //.collection("filter").doc(queryfilterDoc.id)
            .doc(payload.routePath + '/filter/' + queryfilterDoc.id)
            .collection("para")
            .get().then((queryfilterPara)=>{

            if(queryfilterPara.size == 0){
              state.filterLoader = false
            }
            //
            cQueryfilter++
            //

            let cQueryfilterPara = 0
            queryfilterPara.forEach((queryfilterParaDoc)=>{


              if(queryfilterParaDoc.exists){
                //
                cQueryfilterPara++
                //
                //console.log(queryfilterParaDoc.id) // we need this => 20s, 30s etc
                //console.log(queryfilterParaDoc.data())
                //
                //
                state.filter[queryfilterDoc.id][queryfilterParaDoc.id] = {
                  //
                }

                //
                //
                if(queryfilter.size == cQueryfilter && queryfilterPara.size == cQueryfilterPara){
                  //
                  //console.log("queryfilter.size => " + queryfilter.size + " | " + "cqueryfilter => " + cQueryfilter)
                  //console.log("queryfilterPara.size =>" + queryfilterPara.size + " | " + "cqueryfilterPara => " + cQueryfilterPara)
                  //
                  state.filterLoader = false
                  //
                  console.log("[Filter Queried Final] => ", state.filter)
                  //
                  gen.state.thisOfVueComp.$forceUpdate()
                }
              }

            })

          })
        }
      })

    })
  },
  //
  send_SelFilter_toCloud_toGetProducts_accordingToFilter_2(state, payload){
    //
    //console.log("[AXIOS FILTER CATEGORY]",payload)
    //console.log(payload.sel_setOfFilters)
    //console.log(payload.routePath)
    //
    gen.state.thisOfVueComp.$forceUpdate() //update dom => the tick on filter
    //
    state.selectedFilters = payload.sel_setOfFilters // if this func is called directly from => comp on basis of filter in url.
    //
    axios.get('https://us-central1-kult-2.cloudfunctions.net/productFilter', {
      params: {
        sel_setOfFilters: payload.sel_setOfFilters,
        routePath: payload.routePath
      }
    }).then(function (response) {
      //console.log(response);
      //console.log(response.data)
      //
      product.state.products = {}
      //
      product.state.products = response.data // update products according to filter.
      console.log("[FILTER APPLIED] [UPDATE PRODUCTS]", product.state.products)
      //
      state.filterLoader = false //filter loader stops
      //
      //
    }).catch(function (error) {
      console.log(error);
      //alert(error.data)
    });
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
