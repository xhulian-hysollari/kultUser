<template>
  <div>

    Products of Category i.e Face

    <!-- load more button --> <!-- only for product, hide for filter product -->
    <button @click="loadMoreProducts({
      routePath: 'shopOption/' + $route.params.shopOption + '/category/' + $route.params.category
    })">
      Load More Button => Products of Category i.e Face.....
    </button>
    <!--load more button ends -->


    <!-- show filters -->
    <div v-for="(filteNameContent, filterName) in filter">
      {{filterName}}
      <div v-for="(fitlerParaContent, filterPara) in filteNameContent">
        <div @click="sel_disSel_thisFilter({
          sel_filterDetail : {
            filterName : filterName,
            filterPara: filterPara,
          },
          //
          routePath: 'shopOption/' + $route.params.shopOption +
            '/category/' + $route.params.category , //add filter later
          //
          compRoutePath: '/productCategory/' + $route.params.shopOption + '/' + $route.params.category
          })"
        >
            {{filterPara}}

          <span v-if=" Object.keys(selectedFilters).indexOf(filterName) != -1 ">
            <span v-if=" Object.keys(selectedFilters[filterName]).indexOf(filterPara) != -1 ">
              tick !
            </span>
          </span>

        </div>
      </div>
    </div>
    <!-- show filters ends-->

    <!-- hidden ele (patch)-->
    <span style="visibility: hidden;">

    </span>


  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  //
  import productNfilter from '../../mixins/productNfilter'

  export default {
    mixins:[productNfilter],
    //
    created(){
      this.productsOrFilterProducts_initCompCreatedFunc({
        //
        thisOfVueComp: this,
        routePath: 'shopOption/' + this.$route.params.shopOption + '/category/' + this.$route.params.category,
        routeQuery: this.$route.query
        //
      })
    },
    //
    methods:{
      ...mapMutations([
        'loadMoreProducts'
      ])
    },
    //
    computed:{
      ...mapGetters([
        'filter'
      ])
    }
  }
</script>
