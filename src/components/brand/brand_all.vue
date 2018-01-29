<template>
  <div>

    <div v-for="(brandDet ,brand) in allBrands">
      <span @click="goTo('/brandProduct/' + brand)">{{brand}}</span>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //
  export default {
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('getAllBrands', {
        // no para
      })
    },
    computed:{
      ...mapGetters([
        'allBrands', // all brands //to show properly on dom
        'allBrandLoader' //loader var for all brands //true => if allBrands is yet not loaded | false => when all brand is loaded
      ])
    },
    methods:{
      ...mapMutations([
        'goTo'
      ])
    }
  }
</script>
