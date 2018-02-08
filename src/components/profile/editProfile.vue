<template>
  <div>

    <loader v-if="uDetLoader"></loader>
    <div v-else>

      update detail=>
      <input
        v-model="$store.state.editProfile.uName"
        placeholder="name"
      />
      <input
        v-model="$store.state.editProfile.uEmail"
        placeholder="email"
      />
      <input
        v-model="$store.state.editProfile.uDob"
        placeholder="dob"
      />
      <input
        v-model="$store.state.editProfile.uPhone"
        placeholder="phone number"
      />

      <btnLoader v-if="btnLoader"></btnLoader>
      <button
        v-else
        @click="updateUserDet({
          name: $store.state.editProfile.uName,
          email: $store.state.editProfile.uEmail,
          dob: $store.state.editProfile.uDob,
          phone: $store.state.editProfile.uPhone
        })"
      >
        update
      </button> <br>


      link google account =>
      <button @click="googleP({
      todo: 'linkAcc'
    })">
        google
      </button> <br>

      link facebook account =>
      <button @click="fbP({
      todo: 'linkAcc'
    })">
        facebook
      </button> <br>

      link twitter login =>
      <button @click="twitterP({
        todo: 'linkAcc'
      })">
        twitter
      </button>
    </div>

    <!-- show in dialog, use v-if var in flag -->
    <reAuth
      v-if="$store.state.editProfile.showReAuth">
    </reAuth>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  //
  import reAuth from '@/components/auth/reAuth.vue'
  //
  import loader from '@/components/gen/loader'
  //
  import btnLoader from '@/components/gen/btnLoader'

  export default {
    methods:{
      ...mapMutations([
        'googleP',
        'fbP',
        'twitterP',
        //
        'updateUserDet'
      ])
    },
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('profile_checkIfLoggedIn')
      //
      if(this.$store.state.auth.isLoggedIn) //if loggedin
        this.$store.commit('getUserDet') //fetch user details
    },
    components:{
      loader,
      reAuth,
      btnLoader
    },
    computed:{
      ...mapGetters([
        'uDetLoader',
        //
        'uName',
        'uEmail',
        'uDob',
        'uPhone',
        'btnLoader'
      ])
    }
  }
</script>
