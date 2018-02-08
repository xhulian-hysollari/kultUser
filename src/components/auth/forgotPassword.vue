<template>
  <div>

    forgot password =>
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
    </button>

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
