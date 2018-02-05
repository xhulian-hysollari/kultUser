import gen from '../gen'

const state = {
  blogs : {},
  blogLoader : false,
  //
  blogTags: {},
  blogTagLoader : false,
  //
  blogsAtHome : {},
  blogsAtHomeLoader : false
}

const getters = {
  blogs: state => state.blogs,
  blogLoader: state => state.blogLoader,
  //
  blogTags: state => state.blogTags,
  blogTagLoader: state => state.blogTagLoader,
  //
  blogsAtHome: state => state.blogsAtHome,
  blogsAtHomeLoader: state => state.blogsAtHomeLoader
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
      .collection("blogCat")
      .get()
      .then((queryBlogCat)=>{
        //
        if(queryBlogCat.size == 0){
          //
          state.blogLoader = false
        }
        //
        let c = 0
        //
        queryBlogCat.forEach((queryBlogCatDoc)=>{

          //
          //console.log(queryBlogsDoc.id) // blog name
          //console.log(queryBlogsDoc.data()) // blog detail
          //

          state.blogs[queryBlogCatDoc.id] = {
            //
          }
          //
          gen.state.firestore
            .collection("blogCat").doc(queryBlogCatDoc.id)
            .collection("blog")
            .get().then((queryBlog)=>{

            c++
            //
            queryBlog.forEach((queryBlogDoc)=>{
              //
              state.blogs[queryBlogCatDoc.id][queryBlogDoc.id] = {
                //
                blogContent: queryBlogDoc.data().blogContent,
                blogImgUrl: queryBlogDoc.data().blogImgUrl,
                blogTag: queryBlogDoc.data().blogTag,
                date: queryBlogDoc.data().date
                //
              }
            })
            //
            if(c == queryBlogCat.size){
              //
              console.log("[BLOGS] => ", state.blogs)
              window.thisOfVueComp.$forceUpdate()
              state.blogLoader = false
            }
          })
        })
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
    state.blogsAtHomeLoader = true
    //
    state.blogsAtHome = {}
    //
    gen.state.firestore
      .collection("blogTag").doc(payload.tagName)
      .collection("blog")
      .get().then((queryBlogOfThisTag)=>{

      if(queryBlogOfThisTag.size == 0){
        // if no blogs of this tag
        state.blogsAtHomeLoader = false
      }

      let c = 0
      queryBlogOfThisTag.forEach((queryBlogOfThisTagDoc)=>{

        //
        //console.log(queryBlogOfThisTagDoc.id) // blog name
        //console.log(queryBlogOfThisTagDoc.data()) //empty //blog cat
        //

        gen.state.firestore
          .collection("blogCat").doc(queryBlogOfThisTagDoc.data().blogCat)
          .collection("blog").doc(queryBlogOfThisTagDoc.id)
          .get().then((queryBlogDet)=>{

          c++
          //
          if(queryBlogDet.exists){
            state.blogsAtHome[queryBlogOfThisTagDoc.id] = {
              //
              blogContent: queryBlogDet.data().blogContent,
              blogImgUrl: queryBlogDet.data().blogImgUrl,
              blogTag: queryBlogDet.data().blogTag,
              //
            }

            //console.log(c + " | " + queryBlogOfThisTag.size)
            if(c == queryBlogOfThisTag.size){
              //
              console.log("[blogs at home page][this tag blog on home]", state.blogsAtHome)
              window.thisOfVueComp.$forceUpdate()
              state.blogsAtHomeLoader = false
            }
          }
        })
      })
    })
  },
  //
  getBlogsAtHome(state2){
    state.blogsAtHomeLoader = true
    //
    gen.state.firestore
      .collection("blogHome")
      .get().then((queryBlogsAtHome)=>{

      let queryBlogsAtHomeSize = queryBlogsAtHome.size
      //
      if(queryBlogsAtHome.size == 0){
        state.blogsAtHomeLoader = false
      }

      let c = 0
      //
      queryBlogsAtHome.forEach((queryBlogsAtHome)=>{
        //console.log(queryBlogsAtHome.id) //blog name
        //console.log(queryBlogsAtHome.data()) //blog cat

        gen.state.firestore
          .collection("blogCat").doc(queryBlogsAtHome.data().blogCat)
          .collection("blog").doc(queryBlogsAtHome.id)
          .get().then((queryBlogDoc)=>{

          //console.log("b=>",queryBlogDoc.id)
          //console.log("b=>",queryBlogDoc.data())

          //
          if(queryBlogDoc.exists){

            //
            state.blogsAtHome[queryBlogsAtHome.id] = {
              //
              blogContent: queryBlogDoc.data().blogContent,
              blogImgUrl: queryBlogDoc.data().blogImgUrl,
              blogTag: queryBlogDoc.data().blogTag,
              //
            }

            c++
            //
            //console.log(c + " | " + queryBlogsAtHomeSize)
            if(c == queryBlogsAtHomeSize){
              console.log("[blogs at home page]", state.blogsAtHome)
              window.thisOfVueComp.$forceUpdate()
              state.blogsAtHomeLoader = false
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
