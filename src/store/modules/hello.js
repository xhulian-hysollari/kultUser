import axios from 'axios'
const state = {
  homeGlobalProd:{}
}

const getters = {
  homeGlobalProd:state=>state.homeGlobalProd
}

const mutations = {
  getGlobalBestSellersOnHomePage(){
      let arr=["603","116","950","2270","1048","1155","1313","366","1113","1425","747","440"]
    actions.getProdFromArr(state,arr).then(function (res) {
            state.homeGlobalProd=res
    })
  }
}
const actions = {
  getProdFromArr(state,arr){
  return new Promise(function (resolve) {
    console.log(arr)
    axios.get('https://us-central1-kult-2.cloudfunctions.net/getProductDetailByPid?pIds='+ JSON.stringify(arr)).then(function (response) {
      console.log(response.data)
      resolve(response.data)
    }).catch(function (err) {
      console.log(err)
    })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

