<template>
  <div>

    <product :routeDet = "{
        routePath: 'kultPickGlobalBestSeller/globalBestSeller', //db path
        routeQuery: $route.query,
        compRoutePath: '/globalBestSeller'
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
