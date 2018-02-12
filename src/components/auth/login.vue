<template>
  <div>




    <el-dialog
      :visible.sync="$store.state.auth.showLoginPopup"
      width="40%"
      >
      <div>
        <div>
          <div>
            <div class="modal_left">
              <h2>Enter your account</h2>
              <div class="login_form" v-if="!showForgot && !showRefCode">
                <input type="text" placeholder="Username"  v-model="$store.state.auth.email" class="form-control">
                <input type="text" placeholder="Enter password"  v-model="$store.state.auth.password" class="form-control">
                {{showAuthPopup}}
                <button class="login_btn"
                        @click="emailPasswordLogin({
                        email: $store.state.auth.email,
                        password: $store.state.auth.password
                      })"
                >Login</button>
              </div>
              <p class="forgot_pass" @click="$store.state.auth.showForgot=true,$store.state.auth.showRefCode=false" v-if="!showForgot && ! showRefCode"><a href="#">Forgot password?</a></p>
              <forgot v-if="showForgot && !showRefCode"></forgot>
              <phone-ref v-if="showRefCode"></phone-ref>
            </div>
            <div class="modal_right">
              <img src="/static/images/login.png" alt="image">
              <div class="login_social">
                <p>Enter via</p>
                <div class="connect_social text-center">
                  <a class="fb" href="#"
                     @click="fbP({
                      todo: 'login'
                    })">
                    <i class="fa fa-facebook"></i>LOGIN</a>
                  <a class="twitter" href="#"
                     @click="twitterP({
                    todo:'login'
                  })"
                  ><i class="fa fa-twitter"></i>LOGIN</a>
                </div>
              </div>
              <div class="reg_cont">
                <p>
                  New to Kult? <br>
                  <a data-target="#regModal" data-toggle="modal" href="#">Join Kult</a>
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
  //
  export default {
    components:{
      forgot,
      phoneRef
    },
    computed:{
      ...mapGetters([
        'showForgot',
        'showAuthPopup',
        'showRefCode',
        'showLoginPopup'
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

