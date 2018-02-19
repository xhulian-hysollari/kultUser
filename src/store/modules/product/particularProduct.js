import gen from '../gen'
import product from './product'

const state = {
  pTypes: {},
  pTypeLoader : false,
  prodArr:[],
  selected:{},
  selectedLink:'',
  emailVerified:false,
  amazonLoader:false,

}

const getters = {
  //
  pTypes : state => state.pTypes,
  pTypeLoader: state => state.pTypeLoader,
  prodArr: state => state.prodArr,
  selected: state => state.selected,
  selectedLink:state=>state.selectedLink,
  amazonLoader:state=>state.amazonLoader
}

const mutations = {
  //
  getTypeNLinkOfThisProduct(state2, payload) {
    state.pTypes={}
    //console.log(payload) // product id, get from url
    //
    state.pTypeLoader = true
    //
    //
    gen.state.firestore
      .collection("product").doc(payload.pId)
      .collection("type")
      .get().then((queryPType)=>{

      //
      //
      if(queryPType.size == 0){
        state.pTypeLoader = false // stop loader
      }
      //
      let c1 = 0
      //
      queryPType.forEach((queryPTypeDoc)=>{
        //
        //
        //console.log(queryPTypeDoc.id) //pType
        //console.log(queryPTypeDoc.data()) //images, swatchImages
        //
        state.pTypes[queryPTypeDoc.id] = {
          swatchImgUrl :queryPTypeDoc.data().pTypeColor,
          pTypeImgUrl: queryPTypeDoc.data().pTypeImgLink
        }
        //

        gen.state.firestore
          .collection("product").doc(payload.pId)
          .collection("type").doc(queryPTypeDoc.id)
          .collection("link")
          .get().then((queryPTypeLink)=>{

          c1++
          //
          if(queryPTypeLink.size == 0){
            if(c1 == queryPType.size){
              state.pTypeLoader = false //stop loader

            }
          }

          queryPTypeLink.forEach((queryPTypeLinkDoc)=>{

            //
            //console.log(queryPTypeLinkDoc.id) // linkDomainName
            //console.log(queryPTypeLinkDoc.data()) // affliateLink (link)
            //
            if( Object.keys(state.pTypes[queryPTypeDoc.id]).indexOf('affliateDomains') == -1 ){
              state.pTypes[queryPTypeDoc.id]['affliateDomains'] = {
                //
              }
            }
            state.pTypes[queryPTypeDoc.id]['affliateDomains'][queryPTypeLinkDoc.id] = {
              link: queryPTypeLinkDoc.data().link,
              price: queryPTypeLinkDoc.data().price
            }
          })
          //
          if(c1 == queryPType.size){
            //
            console.log("[PARTICULAR PRODUCT DETAIL FINAL]", state.pTypes)
            //force update dom
            window.thisOfVueComp.$forceUpdate()
            actions.getProd().then(function (snap) {
              state.selected = state.prodArr[0]
              console.log(state.selected)
            }).then(function () {
              state.pTypeLoader = false //stop loader
            })
          }
          //
        })
      })
    })
  }
}

const actions = {
  getProd(){
    return new Promise(function (resolve) {
      state.prodArr=[]
      let cnt = 0
      for(let i in state.pTypes){
        cnt++
        let temp = {
          key:i,
          det:state.pTypes[i]
        }
        state.prodArr.push(temp)
        if(cnt === Object.keys(state.pTypes).length){
          resolve('done')
        }
      }
     // console.log(state.prodArr)
    })
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
