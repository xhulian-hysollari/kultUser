import firebase from 'firebase'
import 'firebase/firestore'
import axios from 'axios'
//
import router from '../../router'
//
import header_shopOption from './header/header_shopOption'
import header_brand from './header/header_brand'
//
import auth from './auth'


const state = {
  searchList:{},
  storage: {},
  firestore: {},
  //
  dbRefLoader: true,
  //
  thisOfVueComp : {},
  //
  btnLoader: false,
  //
  newsLetterEmail:'',
  showNewsletterInput:true,
  searchInput:'',

  //
  pObj: {}
}

const getters = {
  dbRefLoader: state => state.dbRefLoader,
  btnLoader: state => state.btnLoader,
  showNewsletterInput:state=>state.showNewsletterInput,
  searchList:state=>state.searchList
}

const mutations = {
  newsletter_saveEmail(){
    actions.validateEmail(state,state.newsLetterEmail).then(function (valid) {
     if(valid){
       state.showNewsletterInput=false
       axios.get('https://us-central1-kult-2.cloudfunctions.net/newsletter_saveEmail', {
         params: {
           email:state.newsLetterEmail,
         }
       }).then(function (response) {
         alert("You Subscribed to Newsletter")
         state.showNewsletterInput=true
       }).catch(function (error) {
         alert(error.data)
         state.showNewsletterInput=true
       })
     }else{
       alert('Not a valid Email')
     }
    })
  },
  //go to => route function
  goTo(state,path){
    router.push(path)
  },
  //
  //define refernces of the database
  defineDbDef(state2){
    //
    //console.log("firebase", firebase)
    //
    state.storage = firebase.storage() //got storage ref
    //console.log("storgae => ", state.storage)
    //
    firebase.firestore().enablePersistence()
      .then(function() {
        //console.log('// Initialize Cloud Firestore through firebase')
        //
        state.firestore = firebase.firestore(); //got firestore ref
        //console.log("firestore =>", state.firestore)
        //
        mutations.getHeaderContent(state)
        //
        state.dbRefLoader = false
      })
      .catch(function(err) {
        if (err.code == 'failed-precondition') {
          //console.log('// Multiple tabs open, persistence can only be enabled // in one tab at a a time.')
          //
          state.firestore = firebase.firestore();  //got firestore ref
          //console.log("firestore =>", state.firestore)
          //
          mutations.getHeaderContent(state)
          // ...
          state.dbRefLoader = false
          //
        } else if (err.code == 'unimplemented') {
          //console.log(' // The current browser does not support all of the // features required to enable persistence')
          state.firestore = firebase.firestore();  //got firestore ref
          //console.log("firestore =>", state.firestore)
          // ...
          //
          mutations.getHeaderContent(state)
          //
          state.dbRefLoader = false
          //
        }
      });
  },
  //
  // get header contents (dropdown values)
  getHeaderContent(state2){
    //
    header_shopOption.mutations.getShopOptions(state) // get shop dropdown content
    header_brand.mutations.getBrandCat(state) // brand dropdown content

    //
  },
  //
  profile_checkIfLoggedIn(state2){
    //
    if(!auth.state.isLoggedIn){ //if not logged in
      //
      router.push({
        path: '/'
      })
    }
  },
  search(){
   // alert('hi')
   // alert(document.getElementById('search').value)
    axios.get('https://us-central1-kult-2.cloudfunctions.net/searchProduct', {
      params: {
        qStr:state.searchInput
      }
    }).then(function (response) {
      console.log(response.data)
      state.searchList={}
      state.searchList = response.data
      console.log(Object.keys(response.data).length)
    }).catch(function (error) {
      console.log(error)
    })
  },
  //
  uploadImg(state2, payload){
    //
    let pUrl = URL.createObjectURL(payload.event.target.files[0])
    let pKey = pUrl.slice(pUrl.lastIndexOf('/') + 1)
    //
    let pBlob = payload.event.target.files[0]
    //
    state.pObj = {}
    //
    //if(!payload.mulImg){ // if not multiple image clear obj
      //state.pObj = {}
    //}
    //
    state.pObj = {
      pBlob,
      pUrl
    }
    //
    console.log(state.pObj)
    //
    //window.tag.$forceUpdate() //no need not showing pic
  },
  //

}

const actions = {
  //
  validateEmail({commit}, email) {
    return new Promise(function(resolve){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      resolve(re.test(email))
    })
  },
  //
  isEmpty(state, payload){
    return new Promise((res)=>{
      let re = /([^\s])/
      if(!re.test(payload)){
        res(true)
        //
        alert('Empty Field !')
        state.showSnackBar = true
      }else{
        res(false)
      }
    })
  },
  //
  saveImgInStorage(state2, payload){

    let pKey =   payload.pUrl.slice(payload.pUrl.lastIndexOf('/')+1)

    console.log("2 => ",state.storage)
    //
    console.log(payload)
    console.log(pKey)
    console.log(payload.pBlob)
    //
    return new Promise((res)=>{
      //
      let uploadTask = state.storage.ref('amazonCashback/' + pKey).put(payload.pBlob)

      //
      uploadTask.on('state_changed', function(snapshot) {

      }, function(error){
        //
        console.log(error)
        //
      },function() {
        console.log(uploadTask.snapshot.downloadURL)
        //
        res(uploadTask.snapshot.downloadURL)
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

