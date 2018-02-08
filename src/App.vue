<template>
  <div >

    <loader v-if="dbRefLoader"></loader>
    <div v-else>
      <loader v-if="authLoader"></loader>
      <div v-else>

        Header
        {{shopOptions}}
        {{brandCat}}

        <br>
        USER=>
        <div v-if="isLoggedIn">
          Email: {{user.email}} <br>  <!-- take whatever is needed ! -->
          Name: {{user.displayName}}
          <button @click="logout">
            LOGOUT
          </button>
        </div>

        <br>
        <router-view></router-view>
        <br>
        Footer

      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import loader from '@/components/gen/loader'
  //
  //
  export default {
    computed:{
      ...mapGetters([
        'dbRefLoader',
        // SHOP DROPDOWN
        'shopOptions', // shop dropdown var
        'shopOptionLoader', //its true till shop dropdown is not loaded.
        // BRAND DROPDOWN
        'brandCat', // brand dropdown var
        'allBrandLoader' , //its true till brand dropdown is not loaded.
        //
        'user', //user object
        'isLoggedIn',
        //
        'authLoader'
      ])
    },
    methods:{
      ...mapMutations([
        'logout'
      ])
    },
    components:{
      loader
    },
    created(){
      window.thisOfVueComp_2 = this
    },
    updated(){
      this.$store.commit('getLoginStatus')
    }
  }
</script>
