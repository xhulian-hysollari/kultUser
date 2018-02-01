<template>
  <div >

    <loader v-if="dbRefLoader"></loader>
    <div v-else>

      Header
      <br>
      <router-view></router-view>
      <br>
      Footer

    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
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
      ])
    },
    components:{
      loader
    },
    created(){
      window.thisOfVueComp = this
    }
  }
</script>
