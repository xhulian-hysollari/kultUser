<template>
  <div>

    Products of Category i.e Foundation

    <button @click="loadMore_SubCategoryProducts({
      //
      shopOption: $route.params.shopOption,
      category: $route.params.category,
      subCategory: $route.params.subCategory
      //
    })">
      Load More Button => Products of Category i.e Face.....
    </button>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    created(){
      this.$store.commit('get_SubCategoryProducts', {
        //
        shopOption: this.$route.params.shopOption,
        category: this.$route.params.category,
        subCategory: this.$route.params.subCategory
        //
      })
    },
    methods:{
      ...mapMutations([
        'loadMore_SubCategoryProducts'
      ])
    }
  }
</script>
