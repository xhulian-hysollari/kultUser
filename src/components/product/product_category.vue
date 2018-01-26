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
          routePath: 'shopOption/' + $route.params.shopOption +
            '/category/' + $route.params.category +
            '/filter' //add link further
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
      this.$store.commit('getProducts', {
        routePath: 'shopOption/' + this.$route.params.shopOption + '/category/' + this.$route.params.category
      })
      //
      this.$store.commit('getFilters',{
        routePath: 'shopOption/' + this.$route.params.shopOption + '/category/' + this.$route.params.category
      })
      //
      this.$store.state.gen.thisOfVueComp = this
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
