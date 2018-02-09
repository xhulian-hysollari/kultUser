<template>
  <div>


    <div class="banner_strip"></div>
    <div class="comm_pagebreads">
      <div class="container">
        <div class="max_width">
          <div class="row">
            <div class="col-sm-5 col-xs-12 comm_page_title">
              <span>Welcome</span>
              <h2>Kult Blog</h2>
            </div>
            <div class="col-sm-7 col-xs-12 text-right cust_left">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tv_area">
      <div class="container">
        <div class="max_width">
          <div class="tv_left">
            <div class="howto">HOW TO’S</div>
            <ul v-for="(vidCatDet ,vidCatName) in howToCat" >
              <li @click="getHowToCatVid({howToCat: vidCatName })" v-if=" $route.query.selVidCat == vidCatName " class="active">
                <a href="#">
                  <span >{{vidCatName}}</span>
                  <!--span v-else>{{vidCatName}}</span-->
                </a>
              </li>
              <li @click="getHowToCatVid({howToCat: vidCatName })" v-else>
                <a href="#">
                  <span >{{vidCatName}}</span>
                  <!--span v-else>{{vidCatName}}</span-->
                </a>
              </li>
            </ul>
            <div class="left_ad hidden-xs">
              <a href="#">
                <img src="static/images/item-81@2x.jpg" alt="item">
                <span>100% PURE ORGANIC</span>
              </a>
            </div>
          </div>
          <div class="tv_right">
            <div class="row" >
              <div class="col-md-6 col-xs-12 comm_imp" v-for="(vidDet, vidName) in howToVid">
                <div class="image_box">
                  <div class="cont_part">
                    <h4>
                      {{vidName}}
                    </h4>
                    <a href="#" class="shop_btn">Shop Now</a>
                  </div>
                  <img src="static/images/item-11@2x.jpg" alt="item"><!--thumbnail image-->
                </div>
                <div class="title_part">
                  <h5>Running Late Routine</h5><!--Video Tag-->
                  <a class="title_link">5 Minutes Makeup Look.</a>
                  <a class="go_btn" data-toggle="modal" data-target="#videoModal" href="#" @click="getCatVidProduct({vidCat: $route.query.selVidCat,vidName })">
                    <img src="static/images/player.svg" alt="player">
                  </a>
                </div>


                <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content comm_modal">
                      <button type="button" class="modal_close" data-dismiss="modal" aria-label="Close"><img src="static/images/close.svg" alt="close"></button>
                      <div class="modal_video">
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" width="560" height="315" :src="vidDet.videoLink" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="modal_video_right hidden-xs hidden-sm ">
                        <div v-for="p in products">
                          <h4 class="text-center">Contouring with Cream</h4>
                          <div class="prod_repeat">
                            <a class="prod_image" href="#">
                              <img :src="p.pBasicDetail.pPicUrl" alt="product">
                            </a>
                            <div class="prod_cont">
                              <h4><a href="#">{{p.pBasicDetail.pBrand}}</a></h4>
                              <p>{{p.pBasicDetail.pName}}</p>
                            </div>
                            <rating :num="Math.round(p.pBasicDetail.pRating)"></rating>
                            <div class="prod_misc">
                              <!--div class="half"><img src="static/images/rate-4.svg" alt="rating"></div-->
                              <div class="half text-right">From <img src="static/images/rupee-2.svg" alt="currency"> 2,036</div><!--price-->
                            </div>
                            <a href="#" class="prod_compare">Compare price <img src="static/images/wishlist-add.svg" alt="wishlist-add"></a>
                            <a href="#" class="go_store">Go to store</a>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



   <!-- VIDEO CAT =>
    <!-- video cat -->
    <!--div v-for="(vidCatDet ,vidCatName) in howToCat"  @click="getHowToCatVid({
      howToCat: vidCatName
    })">
      <span v-if=" $route.query.selVidCat == vidCatName ">{{vidCatName}} tick !</span>
      <span v-else>{{vidCatName}}</span>
    </div>


    <br>
    VIDEOS =>
    <!-- videos in vid cat -->
    <!--div v-for="(vidDet, vidName) in howToVid" @click="getCatVidProduct({ //click to open video in popup, i.e when product will get load
      vidCat: $route.query.selVidCat,
      vidName
    })">
      {{vidName}}
      {{vidDet}}
    </div>

    <br>
    PRODUCTS =>
    {{products}}--> <!-- show when a video is selected -->

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import rating from '@/components/rating.vue'
  //
  export default {
    //
    components:{
      rating
    },
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

