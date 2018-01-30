import gen from '../gen'

const state = {
  blogs : {},
  blogLoader : false,
  //
  blogTags: {},
  blogTagLoader : false
}

const getters = {
  blogs: state => state.blogs,
  blogLoader: state => state.blogLoader,
  //
  blogTags: state => state.blogTags,
  blogTagLoader: state => state.blogTagLoader
}

const mutations = {
  //
  getBlogs(state2){
    //
    state.blogLoader = true
    //
    state.blogs = {}
    //
    gen.state.firestore
      .collection("blog")
      .get()
      .then((queryBlogs)=>{
        //
        if(queryBlogs.size == 0){
          //stop loader if no blogs
          state.blogLoader = false
        }
        //
        queryBlogs.forEach((queryBlogsDoc)=>{

          //
          //console.log(queryBlogsDoc.id) // blog name
          //console.log(queryBlogsDoc.data()) // blog detail

          //
          state.blogs[queryBlogsDoc.id] = {
            //
            blogContent: queryBlogsDoc.data().blogContent,
            blogImgUrl: queryBlogsDoc.data().blogImgUrl,
            blogTag: queryBlogsDoc.data().blogTag,
            //
          }
        })
        //
        //
        console.log("[BLOGS] => ", state.blogs)
        window.thisOfVueComp.$forceUpdate()
        state.blogLoader = false
      })
  },
  //
  getBlogTags(state2){
    //
    state.blogTagLoader = true
    //
    gen.state.firestore
      .collection("blogTag")
      .get()
      .then((queryBlogTags)=>{
        //
        if(queryBlogTags.size == 0){
          //stop loader if no blog tag
          state.blogTagLoader = false
        }
        //
        queryBlogTags.forEach((queryBlogTagsDoc)=>{
          //
          //console.log(queryBlogTagsDoc.id) // tags
          //console.log(queryBlogTagsDoc.data()) // empty
          //
          state.blogTags[queryBlogTagsDoc.id] = {
            //
          }
          //
        })
        //
        window.thisOfVueComp.$forceUpdate()
        state.blogTagLoader = false
      })
  },
  getBlogsOfThisTag(state2, payload){
    //console.log(payload)
    //
    state.blogLoader = true
    //
    state.blogs = {}
    //
    gen.state.firestore
      .collection("blogTag").doc(payload.tagName)
      .collection("blog")
      .get().then((queryBlogOfThisTag)=>{

      if(queryBlogOfThisTag.size == 0){
        // if no blogs of this tag
        state.blogLoader = false
      }

      let c = 0
      queryBlogOfThisTag.forEach((queryBlogOfThisTagDoc)=>{

        //
        //console.log(queryBlogOfThisTagDoc.id) // blog name
        //console.log(queryBlogOfThisTagDoc.data()) //empty
        //

        gen.state.firestore
          .collection("blog").doc(queryBlogOfThisTagDoc.id)
          .get().then((queryBlogDet)=>{

          c++
          //
          if(queryBlogDet.exists){
            state.blogs[queryBlogOfThisTagDoc.id] = {
              //
              blogContent: queryBlogDet.data().blogContent,
              blogImgUrl: queryBlogDet.data().blogImgUrl,
              blogTag: queryBlogDet.data().blogTag,
              //
            }

            //console.log(c + " | " + queryBlogOfThisTag.size)
            if(c == queryBlogOfThisTag.size){
              console.log("[Blog of this Tag]", state.blogs)
              state.blogLoader = false
            }
          }
        })
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
