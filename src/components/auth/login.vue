<template>
  <div>




    <el-dialog
      :visible.sync="$store.state.auth.showLoginPopup"
      width="60%"
      >
      <div>
        <div>
          <div class="modal-content comm_modal">
            <button type="button" class="modal_close" @click="$store.state.auth.showLoginPopup=false" aria-label="Close"><img src="/static/images/close.svg" alt="close"></button>
            <div  class=" modal_left">
              <h2>Enter your account</h2>
              <div class="login_form" v-if="!showForgot && !showRefCode">
                <input type="text" placeholder="Email"  v-model="$store.state.auth.email" class="form-control">
                <input type="text" placeholder="Enter password"  v-model="$store.state.auth.password" class="form-control">
                <button class="login_btn"
                        v-if="loginBtnLoader"
                >
                  <i class='fa fa-spinner fa-spin ' ></i>
                </button>
                <button class="login_btn"
                        v-else
                        @click="emailPasswordLogin({
                        email: $store.state.auth.email,
                        password: $store.state.auth.password
                      })"
                >
                 <span> Login </span>
                </button>
              </div>
              <p class="forgot_pass" @click="$store.state.auth.showForgot=true,$store.state.auth.showRefCode=false" v-if="!showForgot && ! showRefCode"><a >Forgot password?</a></p>
              <forgot v-if="showForgot && !showRefCode"></forgot>
              <phone-ref v-if="showRefCode"></phone-ref>
            </div>
            <div class="modal_right">
              <img src="/static/images/login.png" alt="image">
              <div v-if="showRefCode">
                <h2>Join Kult.</h2>
                <ul class="list-unstyled reg_steps">
                  <li class="active"><a >Enter Phone Number</a></li>
                  <li class="active"><a >Enter Refral Code</a></li>
                  <li class="active"><a >Done</a></li>
                </ul>
              </div>
              <div class="login_social" v-if="!showRefCode">
                <p>Enter via</p>
                <div class="connect_social text-center">
                  <a class="fb"
                     @click="fbP({
                      todo: 'login'
                    })">
                    <i class="fa fa-facebook"></i>LOGIN</a>
                  <a class="twitter"
                     @click="twitterP({
                    todo:'login'
                  })"
                  ><i class="fa fa-twitter"></i>LOGIN</a>
                </div>
              </div>
              <div class="reg_cont" v-if="!showRefCode">
                <p>
                  New to Kult? <br>
                  <a @click="$store.state.auth.showLoginPopup= false, $store.state.auth.showRegisterPopup= true">Join Kult</a>
                </p>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </el-dialog>
   <!-- EMAIL PASSWORD LOGIN =>
    <input
      v-model="$store.state.auth.email"
      placeholder="Email"
    />

    <input
      v-model="$store.state.auth.password"
      placeholder="Password"
    />

    <button
      @click="emailPasswordLogin({
        email: $store.state.auth.email,
        password: $store.state.auth.password
      })"
    >
      LOGIN
    </button> <br>

    FACEBOOK LOGIN =>
    <button
      @click="fbP({
        todo: 'login'
      })"
    >
      FACEBOOK
    </button> <br>


    GOOGLE LOGIN =>
    <button
      @click="googleP({
        todo: 'login'
      })"
    >
      GOOGLE
    </button> <br>

    TWITTER LOGIN=>
    <button
      @click="twitterP({
        todo:'login'
      })"
    >
      twitter
    </button-->

  </div>
</template>

<script>
  import phoneRef from './phoneRef.vue'
  import forgot from './forgotPassword.vue'
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  import btnLoader from '@/components/gen/btnLoader'
  //
  export default {
    components:{
      forgot,
      phoneRef,
      btnLoader
    },
    computed:{
      ...mapGetters([
        'showForgot',
        'showAuthPopup',
        'showRefCode',
        'showLoginPopup',
        'loginBtnLoader'
      ])
    },
    methods:{
      ...mapMutations([
        'afterLogin_userDetail',
        'googleP',
        'fbP',
        'twitterP',
        //
        'emailPasswordLogin'
      ])
    }
  }
</script>
<style>
  .el-dialog__body {
     padding: 0px 0px !important;
    /* color: #606266; */
     line-height: 18px !important;
    font-size: 14px;
  }
  .el-dialog__header {
    padding: 0px 0px 0px !important;
  }
</style>
