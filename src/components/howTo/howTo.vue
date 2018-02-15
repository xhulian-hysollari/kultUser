<template>
  <div>


    <div class="banner_strip"></div>
    <div class="comm_pagebreads">
      <loader v-if="howToVidLoader"></loader>
      <div class="container" v-if="!howToVidLoader">
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
            <loader v-if="howToCatLoader"></loader>
            <ul v-for="(vidCatDet ,vidCatName) in howToCat" v-else>
              <li @click="getHowToCatVid({howToCat: vidCatName })" v-if=" $route.query.selVidCat == vidCatName " class="active">
                <a>
                  <span >{{vidCatName}}</span>
                  <!--span v-else>{{vidCatName}}</span-->
                </a>
              </li>
              <li @click="getHowToCatVid({howToCat: vidCatName })" v-else>
                <a >
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
              <div class="col-md-4 col-xs-12 comm_imp" v-for="(vidDet, vidName) in howToVid">
                <div class="image_box hidden-xs" data-toggle="modal" data-target="#videoModal" @click="getCatVidProduct({vidCat: $route.query.selVidCat,vidName }); selectedLink=vidDet.videoLink" >
                  <div class="cont_part">
                    <a class="shop_btn">Shop Now</a>
                  </div>
                  <img :src="vidDet.videoImgUrl" alt="item"  ><!--thumbnail image-->
                </div>
                <div class="image_box visible-xs"   @click="dialog = true ; selectedLink=vidDet.videoLink" >
                  <div class="cont_part">
                    <a class="shop_btn">Shop Now</a>
                  </div>
                  <img :src="vidDet.videoImgUrl" alt="item"  ><!--thumbnail image-->
                </div>
                <div class="title_part hidden-xs" data-toggle="modal" data-target="#videoModal" @click="getCatVidProduct({vidCat: $route.query.selVidCat,vidName });selectedLink=vidDet.videoLink" >
                  <h5>Watch Videos and Get Inspired</h5><!--Video Tag-->
                  <a class="shop_btn">Learn More</a>
                  <a class="go_btn">
                    <img src="static/images/player.svg" alt="player">
                  </a>
                </div>
                <div class="title_part visible-xs" @click="dialog = true ; selectedLink=vidDet.videoLink"  >
                  <h5>Watch Videos and Get Inspired</h5><!--Video Tag-->
                  <a class="shop_btn">Learn More</a>
                  <a class="go_btn">
                    <img src="static/images/player.svg" alt="player">
                  </a>
                </div>
                <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal" >
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content comm_modal">
                      <button type="button" class="modal_close" data-dismiss="modal" aria-label="Close"><img src="/static/images/close.svg" alt="close"></button>
                      <div class="modal_video">
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" width="560" height="315" :src="selectedLink" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div>
                        <div v-for="(p,k) in products" class="modal_video_right hidden-xs hidden-sm" >

                          <div class="prod_repeat scroll_card">
                            <loader v-if="productsLoader" class="modal_video_right hidden-xs hidden-sm"></loader>
                            <div>
                              <a class="prod_image" >
                                <img :src="p.pBasicDetail.pPicUrl" alt="product" >
                              </a>
                              <div class="prod_cont">
                                <h4><a href="#">{{p.pBasicDetail.pBrand}}</a></h4>
                                <p>{{p.pBasicDetail.pName}}</p>
                              </div>
                              <rating :num="Math.round(p.pBasicDetail.pRating)"></rating>
                              <div class="prod_misc">

                                <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency">{{p.priceStartsFrom}}</div>
                              </div>
                              <a  class="prod_compare" v-if="isLoggedIn" ><span  data-dismiss="modal" @click="$router.push({path:`/particularProduct/${k}`,query:{prodDet:JSON.stringify(p)}})">Compare price</span>
                                <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(k) === -1" @click="addWishlist(k),$forceUpdate();wishlistObj[k] = p">
                                <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(k) !== -1" @click="removeWishlist(k),$forceUpdate(); delete wishlistObj[k];">
                              </a>
                              <a  class="prod_compare" v-if="!isLoggedIn"  ><span data-dismiss="modal" @click="$router.push({path:`/particularProduct/${k}`,query:{prodDet:JSON.stringify(p)}})">Compare price</span>
                                <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                              </a>
                              <a href="#" class="go_store">Go to store</a>
                            </div>
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
    <el-dialog
      :visible.sync="dialog"
      width="100%"
      center>
      <div class="modal_video">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" width="560" height="315"  frameborder="0" :src="selectedLink" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

      </div>
    </el-dialog>

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
    {{Object.keys(howToVid).length}}
    <div v-for="(vidDet, vidName) in howToVid" @click="getCatVidProduct({ //click to open video in popup, i.e when product will get load
      vidCat: $route.query.selVidCat,
      vidName
    })">
      {{vidName}}
      {{vidDet}}
    </div>

    <br>
    PRODUCTS =>
  < {{products}}>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import rating from '@/components/rating.vue'
  import loader from '@/components/gen/loader'
  //
  export default {
    //
    data(){
      return{
        dialog:false,
        selectedLink:''
      }
    },
    components:{
      rating,
      loader
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
        'productsLoader',  // loader for products associated with videos
        'isLoggedIn',
        'wishlistObj'
      ])
    },
    methods:{
      ...mapMutations([
        'getHowToCatVid','getCatVidProduct','goTo',
        'addWishlist',
        'removeWishlist'
      ]),
    }
  }
</script>
<style>
.scroll_card{
  max-height: 430px;
  overflow-y: scroll;
}
</style>
