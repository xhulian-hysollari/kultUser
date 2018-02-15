import axios from 'axios'
import auth from '../auth'
import article from './article'
const actions = {
  getLikes(state,payload){
    return new Promise(function (resolve) {
      axios.get('https://us-central1-kult-2.cloudfunctions.net/getBlogLike', {
        params: {
          blogCat: payload.blogCat,
          blogName: payload.blogName
        }
      }).then(function (response) {
        console.log(response)
        resolve(response.data)
      }).catch(function (error) {
        resolve('error')
      }).then(function () {
        if(auth.state.isLoggedIn){
          actions.getLikeStatus(auth.state,{blogCat: payload.blogCat,blogName: payload.blogName,userUid:auth.state.user.uid})
        }
      })
    })
  },
  getLikeStatus(state,payload){
    return new Promise(function (resolve) {
      console.log( payload.blogCat+"-------------"+payload.blogName+"------------"+payload.userUid)
      axios.get('https://us-central1-kult-2.cloudfunctions.net/getBlogLikeStatus', {
        params: {
          blogCat: payload.blogCat,
          blogName: payload.blogName,
          userUid:payload.userUid
        }
      }).then(function (response) {
        console.log(response)
        if(response.data==='liked'){
          article.state.userLike=true
        }else{
          article.state.userLike=false
        }
        resolve(response.data)
      }).catch(function (error) {
        resolve('error')
      })
    })
  }
}
export default {
  actions
}
