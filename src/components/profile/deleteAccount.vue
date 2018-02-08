<template>
  <div>

    delete account =>
    <input
      placeholder="password"
      v-model="$store.state.deleteAccount.passwordDelAcc"
    />
    <button
      @click="deleteAccount({
        password: $store.state.deleteAccount.passwordDelAcc
      })"
    >
      delete
    </button>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  //
  export default {
    //
    methods:{
      ...mapMutations([
        'deleteAccount'
      ])
    },
    //
    created(){
      //
      this.$store.commit('profile_checkIfLoggedIn')
    }
  }
</script>
