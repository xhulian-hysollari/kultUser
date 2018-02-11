import router from '@/router'
import blogFunc from './blogFunctions'
import blog from './blog'
const state = {
  blogName:'',
  blogDet:{},
  sideBlogs:{},
  articleLike:'',
  articleViews:'',
  userLike:false,
  likeBtnLoader:false
}
const mutations = {
  articleContents(){
    state.blogName = router.currentRoute.query.name
    state.blogDet = JSON.parse(router.currentRoute.query.selArticle)
    state.sideBlogs = JSON.parse(router.currentRoute.query.sideBlogs)
    blogFunc.actions.getLikes(state,{blogCat:state.blogDet.blogCat,blogName:router.currentRoute.query.name}).then(function (likes) {
      state.articleLike=likes
      blog.mutations.blogView(state,{blogCat:state.blogDet.blogCat,blogName:router.currentRoute.query.name,blog:'article'})
    })
  }
}
const getters = {
  articleLike:state => state.articleLike,
  articleViews:state=>state.articleViews,
  blogName:state => state.blogName,
  blogDet:state=> state.blogDet,
  sideBlogs:state=>state.sideBlogs,
  userLike:state=>state.userLike,
  likeBtnLoader:state=>state.likeBtnLoader
}
export default{
  state,
  getters,
  mutations
}
