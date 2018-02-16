<template>
  <div>
    <div class="banner_strip"></div>
    <div class="breads">
      <div class="container">
        <ul class="list-unstyled list-inline">
          <li><a >Shop</a></li>
          <li><span>></span></li>
          <li  v-for="(shopOptionDet, shopOption) in shopOptions"
               @click="goTo('/kultPick/shopOption/' + shopOption)"> {{shopOption}}
          </li>
        </ul>
        <h3>Kult Picks</h3>
      </div>
    </div>
    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/kultPick', //db path
        routeQuery: $route.query,
        compRoutePath: '/kultPick'
      }"
    >
    </product>

    <br>
    SHOP OPTION =>
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
      window.thisOfVueComp_3 = this
    }
  }
</script>
