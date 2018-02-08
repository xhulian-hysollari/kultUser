<template>
  <div>

    set password for first time => <br>
    <input
      placeholder="password"
      v-model="$store.state.changePassword.firstTimePassword"
    />
    <button
      @click="setPassword({
         password: $store.state.changePassword.firstTimePassword
      })"
    >
      set password
    </button>
    <reAuth_2 v-if="showReAuth_2"></reAuth_2> <!-- show in dialog -->


    change password=>
    <input
      placeholder="old password"
      v-model="$store.state.changePassword.oldPassword"
    />
    <input
      placeholder="new password"
      v-model="$store.state.changePassword.newPassword"
    />
    <button
      @click="changePassword({
        newPassword: $store.state.changePassword.newPassword,
        oldPassword: $store.state.changePassword.oldPassword
      })"
    >
      update password
    </button>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  //
  import reAuth_2 from '@/components/auth/reAuth_2'
  //
  export default {
    methods:{
      ...mapMutations([
        'changePassword',
        'setPassword'
      ])
    },
    computed:{
      ...mapGetters([
        'showReAuth_2'
      ])
    },
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('profile_checkIfLoggedIn')
    },
    components:{
      reAuth_2
    }
  }
</script>
