<template>
  <div>

    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/globalBestSeller', //db path
        routeQuery: $route.query,
        compRoutePath: '/globalBestSeller'
      }"
    >
    </product>

    <br>
    SHOP OPTIONS=>
    <div
      v-for="(shopOptionDet, shopOption) in shopOptions"
      @click="goTo('/globalBestSeller/shopOption/' + shopOption)"
    >
      {{shopOption}}
    </div>

  </div>
</template>

<script>
  import product from '@/components/product/product.vue'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //
  export default {
    //
    components:{
      product
    },
    computed:{
      ...mapGetters([
        'shopOptions'
      ])
    },
    methods:{
      ...mapMutations([
        'goTo'
      ])
    },
    created(){
      window.thisOfVueComp_3 = this
    }
  }
</script>
