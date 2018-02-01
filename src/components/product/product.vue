<template>
  <div>

    PRODUCTS=>
    {{products}}


    <!-- load more button --> <!-- only for product, hide for filter products -->
    <button @click="loadMoreProducts({
      routePath: routeDet.routePath
    })">
      Load More Button => Products of Category i.e Face.....
    </button>
    <!--load more button ends -->

    <br>
    FILTERS =>
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
          routePath: routeDet.routePath , //add filter later
          //
          compRoutePath: routeDet.compRoutePath
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

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  //
  import productNfilter from '../../mixins/productNfilter'
  //
  export default{
    //
    mixins:[productNfilter],
    props: ['routeDet'],
    //
    methods:{
      ...mapMutations([
        'loadMoreProducts'
      ])
    },
    //
    computed:{
      ...mapGetters([
        'filter', // all filters // to show all filters properly on DOM
        'filterLoader', // till filter is not loaded this is true.
        'products', // all products gets loaded in this, show in DOM
        'productsLoader' // till products are loaded this is true
      ])
    },
    //
    created(){
      window.thisOfVueComp = this
      //
      this.productsOrFilterProducts_initCompCreatedFunc({
        //
        thisOfVueComp: this, //
        routePath: this.routeDet.routePath, // (1) these should be props
        routeQuery: this.routeDet.routeQuery // (2)
        //
      })
    }
  }
</script>
