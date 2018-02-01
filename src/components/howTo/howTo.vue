<template>
  <div>

    VIDEO CAT =>
    <!-- video cat -->
    <div v-for="(vidCatDet ,vidCatName) in howToCat"  @click="getHowToCatVid({
      howToCat: vidCatName
    })">
      <span v-if=" $route.query.selVidCat == vidCatName ">{{vidCatName}} tick !</span>
      <span v-else>{{vidCatName}}</span>
    </div>


    <br>
    VIDEOS =>
    <!-- videos in vid cat -->
    <div v-for="(vidDet, vidName) in howToVid" @click="getCatVidProduct({ //click to open video in popup, i.e when product will get load
      vidCat: $route.query.selVidCat,
      vidName
    })">
      {{vidName}}
      {{vidDet}}
    </div>

    <br>
    PRODUCTS =>
    {{products}} <!-- show when a video is selected -->

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //
  export default {
    //
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('getHowToCat')
    },
    computed:{
      ...mapGetters([
        'howToCat',
        'howToVid',
        'products',
          //
        'howToCatLoader', // loader for vid cat
        'howToVidLoader', // loader for videos in cat
        'productsLoader'  // loader for products associated with videos
      ])
    },
    methods:{
      ...mapMutations([
        'getHowToCatVid','getCatVidProduct'
      ])
    }
  }
</script>
