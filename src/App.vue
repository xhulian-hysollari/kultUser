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
        'dbRefLoader'
      ])
    },
    components:{
      loader
    }
  }
</script>
