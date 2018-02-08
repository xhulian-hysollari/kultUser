<template>
  <div>

    EMAIL PASSWORD LOGIN => <br>
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
    </button> <br>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  //
  export default {
    methods:{
      ...mapMutations([
        'emailPasswordSignup'
      ])
    }
  }
</script>
