<template>
  <div>

    <product :routeDet = "{
        routePath: 'shopOption/' + $route.params.shopOption + '/category/' + $route.params.category,
        routeQuery: $route.query,
        compRoutePath: '/productCategory/' + $route.params.shopOption + '/' + $route.params.category
      }"
    >
    </product>

  </div>
</template>

<script>
  import product from './product.vue'
  //
  export default {
    //
    components:{
      product
    },

  }
</script>
