import axios from 'axios'
import auth from '../auth'
const state = {
  wishlistObj:{}
}
const getters = {
  wishlistObj:state=>state.wishlistObj
}
const mutations = {
  addWishlist(state,pid){
    alert(pid)
    if(auth.state.isLoggedIn){
      axios.get('https://us-central1-kult-2.cloudfunctions.net/addWishlist', {
        params: {
          uid:auth.state.user.uid,
          pid
        }
      }).then(function (response) {
        console.log(response.data)
        mutations.getWishlist()
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  removeWishlist(state,pid){
    if(auth.state.isLoggedIn){
      axios.get('https://us-central1-kult-2.cloudfunctions.net/removeWishlist', {
        params: {
          uid:auth.state.user.uid,
          pid
        }
      }).then(function (response) {
        console.log(response.data)
        mutations.getWishlist()
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  getWishlist(){
    if(auth.state.isLoggedIn){
      axios.get('https://us-central1-kult-2.cloudfunctions.net/getWishlist', {
        params: {
          uid:auth.state.user.uid
        }
      }).then(function (response) {
        console.log(response.data)
        if(response.data!=='noProductAdded'){
          state.wishlistObj={}
         for(let i in response.data){
            console.log(response.data[i])
           state.wishlistObj[i] = response.data[i]

         }
         console.log(state.wishlistObj)
        }
      }).catch(function (error) {
        console.log(error)
      }).then(function () {

      })
    }
  }
}
export default {
  mutations,
  state,
  getters
}
