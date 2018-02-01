<template>
  <div>

    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/kultPick', //db path
        routeQuery: $route.query,
        compRoutePath: '/kultPick'
      }"
    >
    </product>

    <div
      v-for="(shopOptionDet, shopOption) in shopOptions"
      @click="goTo('/kultPick/shopOption/' + shopOption)"
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
      window.thisOfVueComp = this
    }
  }
</script>
