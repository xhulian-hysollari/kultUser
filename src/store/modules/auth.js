import firebase from 'firebase'
import editProfile from './profile/editProfile'
import gen from './gen'

const state = {
  //email-pass
  email : '',
  password: '',
  //
  name: '', //signup
  //
  dob: '', //signup (optional)
  //
  phone: '',
  //
  user: {},
  isLoggedIn : false,
  //
  authLoader: true,
  showForgot:false,
  showAuthPopup:''
}

const getters = {
  //
  email: state => state.email,
  password: state => state.password,
  //
  user : state => state.user,
  isLoggedIn: state => state.isLoggedIn,
  //
  authLoader : state => state.authLoader,
  showForgot : state => state.showForgot,
  showAuthPopup : state => state.showAuthPopup
}

const mutations = {
  //
  //LOGIN STATUS
  getLoginStatus(state2){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("// User is signed in.", user.uid)
        //
        state.isLoggedIn = true
        state.user = user

        //
        console.log("user => ", user)
        //
        //
      } else {
        console.log("// No user is signed in.")
        //
        state.isLoggedIn = false
        state.user = {}
        //
      }
      //
      state.authLoader = false
    });
  },
  //
  //GOOGLE - LOGIN
  googleP(state2, payload){ // p => provider
    //console.log(payload)
    //
    let provider = new firebase.auth.GoogleAuthProvider();
    //
    mutations.gotProvider_next(state, {
      provider,
      todo: payload.todo
    })
  },
  //
  //FB - LOGIN
  fbP(state2, payload){
    //console.log(payload)
    //
    let provider = new firebase.auth.FacebookAuthProvider();
    //
    mutations.gotProvider_next(state, {
      provider,
      todo: payload.todo
    })
  },
  //
  //TWITTER - Login
  twitterP(state2, payload){
    console.log(payload)
    //
    let provider = new firebase.auth.TwitterAuthProvider();
    //
    mutations.gotProvider_next(state, {
      provider,
      todo: payload.todo
    })
  },
  //
  //gotProvider
  gotProvider_next(state2, payload){
    //
    if(payload.todo == 'login'){
      mutations.pLogin(state, {
        provider : payload.provider
      })
    }else if(payload.todo == 'linkAcc'){
      editProfile.mutations.linkAcc(state, {
        provider: payload.provider
      })
    }
  },
  //
  //
  pLogin(state2, payload){
    //console.log("[provider] => ", payload)
    //
    firebase.auth().signInWithPopup(payload.provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      //
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      //console.log(error)
      //
      //
      if(error.code == 'auth/account-exists-with-different-credential'){ //detailed error
        alert('Error: This email address is already linked with google account, ' +
          'please login with google and link other auth providers to login with them !')
      }else{
        alert(error.message)
      }
    });
  },
  //
  //email & password => signup
  emailPasswordSignup(state2, payload){
    console.log(payload)
    //
    firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      .then(()=>{
        // displayName
        firebase.auth().currentUser.updateProfile({
          displayName: payload.name
        }).then(function() {
          console.log("// Display Name Updated successful.")
          //
          setTimeout(()=>{
            gen.state.firestore
              .collection("user").doc(state.user.uid)
              .set({
                dob: payload.dob,
                phone : payload.phone
              }).then(()=>{
              console.log("dob updated!")
             // state.showAuthPopup=false
            })
          },100)
          //
          //email verfication link
          mutations.sendVerLink(state)
          //
          window.thisOfVueComp_2.$forceUpdate() //to update display name
          //
        }).catch(function(error) {
          console.log("// An error happened, update display name")
          console.log(error)
          //
          alert(error.message)
        });
        //
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert("Error: " + error.message)
    });
  },
  //
  //
  emailPasswordLogin(state2, payload){
    let c = 0
    console.log(payload)
    //
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(()=>{
        //
        //
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      //
      // ...
      alert("Error: " + error.message)
    })
  },
  //
  // LOGOUT
  logout(state2){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      //
      location.reload()
      //
    }).catch(function(error) {
      // An error happened.
    });
  },
  //
  sendVerLink(state2){
    //
    firebase.auth().currentUser.sendEmailVerification().then(function() {
      // Email sent.
      alert('A link to verify your account is sent to the registered email address, Please verify you account by clicking on the link !')
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  },
  //
  forgotPassword(state2, payload){
    //
    console.log(payload)
    //
    firebase.auth().sendPasswordResetEmail(payload.email).then(function() {
      // Email sent.
      alert('Email to reset password has been sent !')
    }).catch(function(error) {
      // An error happened.
      alert(error.message)
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

