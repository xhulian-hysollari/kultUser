<template>
  <div>


    <el-dialog
      :visible.sync="$store.state.auth.showRegisterPopup"
      width="60%"
    >
      <div>
        <div>
        <div class="modal-content comm_modal">
          <div class="reg_pop"><img src="/static/images/arrow-down.svg" alt="arrow-down"> Register in a few easy steps</div>
          <button type="button" class="modal_close" @click="$store.state.auth.showRegisterPopup" aria-label="Close"><img src="/static/images/close.svg" alt="close"></button>
          <div class="modal_left">
            <h2>Join Kult.</h2>
            <ul class="list-unstyled reg_steps">
              <li class="active"><a href="#">Let’s start with your email</a></li>
              <li class="active"><a href="#">What name do you go by</a></li>
              <li class="active"><a href="#">OK, let’s get you protected</a></li>
              <li class="active"><a href="#" >You’re done!</a></li>
            </ul>
            <h4>Want to speed things up?</h4>
            <div class="right_modalform">
              <div class="cont_out">
                <div class="cont_inn">
                  <div id="right_tab1" class="right_tabs active">
                    <input type="text" placeholder="Enter email address" v-model="$store.state.auth.email" class="form-control">
                  </div>
                  <div id="right_tab2" class="right_tabs active">
                    <input type="text" placeholder="Enter Name" v-model="$store.state.auth.name" class="form-control">
                  </div>
                  <div id="right_tab3" class="right_tabs active">
                    <input type="text" placeholder="Enter password"  v-model="$store.state.auth.password" class="form-control">
                  </div>

                  <div id="right_tab5" class="right_tabs active">
                    <input v-model="$store.state.auth.dob" class="form-control textbox-n" placeholder="Enter Date Of Birth"  type="text" onfocus="(this.type='date')"  onblur="(this.type='text')" id="date">
                  </div>
                  <div id="right_tab4"class="right_tabs active text-center" >
                    <button   class="login_btn mt_30 "
                      v-if="btnLoader"
                    >
                      <i class='fa fa-spinner fa-spin ' ></i>
                    </button>
                    <button   class="login_btn mt_30 "
                              v-else
                               @click="emailPasswordSignup({
                                email: $store.state.auth.email,
                                password: $store.state.auth.password,
                                //
                                name: $store.state.auth.name,
                                //
                                dob: $store.state.auth.dob
                              })"
                    >
                      DONE!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="connect_social">
              <a class="fb" href="#"
                 @click="fbP({
                      todo: 'login'
                    })"
              >
                <i class="fa fa-facebook"></i>
                LOGIN
              </a>
              <a class="twitter" href="#"
                 @click="twitterP({
                      todo: 'login'
                    })"
              >
                <i class="fa fa-twitter"></i>
                LOGIN
              </a>
            </div>
            <a @click="$store.state.auth.showLoginPopup= true, $store.state.auth.showRegisterPopup= false" class="modal_login_link">Login with email</a>
          </div>
          <div class="modal_right" >
            <div class="top_mod_strip"><i class="fa fa-angle-left"></i> Join with email</div>
          </div>
          <div class="clearfix"></div>
        </div>
        </div>
      </div>
   <!-- EMAIL PASSWORD LOGIN => <br>
    <input
      v-model="$store.state.auth.email"
      placeholder="Email"
    /> <br>

    <input
      v-model="$store.state.auth.password"
      placeholder="Password"
    /> <br>

    <input
      placeholder="Name"
      v-model="$store.state.auth.name"
    /> <br>

    <input
      placeholder="Date of Birth"
      v-model="$store.state.auth.dob"
    /> <br>

    <input
      placeholder="Phone Number"
      v-model="$store.state.auth.phone"
    /> <br>

    <button
      @click="emailPasswordSignup({
        email: $store.state.auth.email,
        password: $store.state.auth.password,
        //
        name: $store.state.auth.name,
        //
        dob: $store.state.auth.dob,
        //
        phone: $store.state.auth.phone
      })"
    >
      SIGNUP
    </button> <br-->
    </el-dialog>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  //
  export default {
    data(){
     return{
       modal:''
     }
    },
    computed:{
      ...mapGetters([
        'closeAuthDialog',
        'btnLoader'
      ])
    },
    methods:{
      ...mapMutations([
        'emailPasswordSignup',
        'fbP',
        'twitterP'
      ]),
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
