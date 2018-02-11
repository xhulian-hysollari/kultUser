<template>
  <div>
    <div id="right_tab6" class="right_tabs active" style="margin-top: 30px">
      <input type="text" placeholder="Enter Email"  v-model="$store.state.auth.email" class="form-control">
    </div>
    <div id="right_tab4"class="right_tabs active text-center" >
      <el-button style="background-color:  #eca8b5;" class="text-center"
                 @click="forgotPassword({
                    email: $store.state.auth.email
                  })"
                  >
        CONFIRM
      </el-button>
    </div>

    <p class="forgot_pass" @click="$store.state.auth.showForgot=false" style="margin-top: 30px"><a href="#">Login with email</a></p>



  <!--  forgot password =>
    <input
      placeholder="email"
      v-model="$store.state.auth.email"
    />
    <button
      @click="forgotPassword({
        email: $store.state.auth.email
      })"
    >
     send link to reset password
    </button-->

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  //
  export default{
    methods:{
      ...mapMutations([
        'forgotPassword'
      ])
    }
  }
</script>
