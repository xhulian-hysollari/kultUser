<template>
  <div>

    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/kultPick', //db path
        routeQuery: $route.query,
        compRoutePath: '/kultPick'
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
    }
  }
</script>
