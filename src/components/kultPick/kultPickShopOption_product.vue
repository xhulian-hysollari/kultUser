<template>
  <div>

    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/kultPick/shopOption/' + $route.params.shopOption, //db path
        routeQuery: $route.query,
        compRoutePath: '/kultPick/shopOption/' + $route.params.shopOption
      }"
    >
    </product>

  </div>
</template>

<script>

  import product from '@/components/product/product.vue'
  //
  export default {
    //
    components:{
      product
    },
  }
</script>
