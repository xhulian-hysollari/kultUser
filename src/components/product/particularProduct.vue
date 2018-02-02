<template>
  <div>

    <!-- sometimes there isn't price for a domain, in this case hide the links too -->
    {{pTypes}}

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  //
  export default{
    computed:{
      ...mapGetters([
        'pTypes'
      ])
    },
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('getTypeNLinkOfThisProduct', {
        pId: this.$route.params.pId
      })
    }
  }
</script>
