import firebase from 'firebase'
import 'firebase/firestore'
//
import router from '../../router'
//
import header_shopOption from './header/header_shopOption'
import header_brand from './header/header_brand'
//
import auth from './auth'

const state = {
  storage: {},
  firestore: {},
  //
  dbRefLoader: true,
  //
  thisOfVueComp : {},
  //
  btnLoader: false
}

const getters = {
  dbRefLoader: state => state.dbRefLoader,
  btnLoader: state => state.btnLoader
}

const mutations = {
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

