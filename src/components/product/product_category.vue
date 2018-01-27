<template>
  <div>

    Products of Category i.e Face

    <!-- load more button -->
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
            '/category/' + $route.params.category +
            '/filter',
          //
          compPath: '/productCategory/' + $route.params.shopOption + '/' +  $route.params.category
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

  export default {
    created(){
      this.$store.state.gen.thisOfVueComp = this // needed at *start* of created.
      //
      this.$store.commit('getProducts', {
        routePath: 'shopOption/' + this.$route.params.shopOption + '/category/' + this.$route.params.category
      })
      //
      this.$store.commit('getFilters',{
        routePath: 'shopOption/' + this.$route.params.shopOption + '/category/' + this.$route.params.category
      })
      //
      if( Object.keys(this.$route.query).length != 0 ){
        console.log("[GOT SEL ROUTE FROM URL]", JSON.parse(this.$route.query.selFilter))
        //
        this.$store.commit('send_SelFilter_toCloud_toGetProducts_accordingToFilter', {
          sel_setOfFilters : JSON.parse(this.$route.query.selFilter),
          routePath: 'shopOption/' + this.$route.params.shopOption +
          '/category/' + this.$route.params.category +
          '/filter'
        })
      }
    },
    //
    methods:{
      ...mapMutations([
        'loadMoreProducts','sel_disSel_thisFilter'
      ])
    },
    //
    computed:{
      ...mapGetters([
        'filter','selectedFilters'
      ])
    }
  }
</script>
