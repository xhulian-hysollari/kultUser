<template>
  <div>
    <div class="banner_strip"></div>
    <div class="breads">
      <div class="container">
        <ul class="list-unstyled list-inline">
          <li><a href="#">Shop</a></li>
          <li><span>></span></li>
          <li  v-for="(shopOptionDet, shopOption) in shopOptions"
               @click="goTo('/globalBestSeller/shopOption/' + shopOption)"> {{shopOption}}
          </li>
        </ul>
        <h3>Bestsellers</h3>
      </div>
    </div>
    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/globalBestSeller', //db path
        routeQuery: $route.query,
        compRoutePath: '/globalBestSeller'
      }"
    >
    </product>

    <!--br>
    SHOP OPTIONS=>
    <div
      v-for="(shopOptionDet, shopOption) in shopOptions"
      @click="goTo('/globalBestSeller/shopOption/' + shopOption)"
    >
      {{shopOption}}
    </div-->

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
