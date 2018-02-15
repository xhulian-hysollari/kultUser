<template>
  <div>





    <loader v-if="pTypeLoader"></loader>
    <div v-if="!pTypeLoader">
      <div class="banner_strip"></div>
      <div class="go_back">
        <div class="container">
          <a @click="$router.go(-1)"class="go_link"><i class="fa fa-angle-left"></i> Go Back</a>
        </div>
      </div>
      <div class="prod_single">
        <div class="container">
          <div class="row">
            <div class="col-md-5 col-xs-12">
              <div class="prod_left">
                <div class="prod_leftmisc">
                  <a class="prod_cat" href="#">Make Up</a>
                  <h2>{{JSON.parse($route.query.prodDet).pBasicDetail.pBrand}}</h2>
                  <h3>{{JSON.parse($route.query.prodDet).pBasicDetail.pName}}</h3>
                  <div class="prod_wishadd">
                    <div class="prod_rate float"><rating :num="Math.round(JSON.parse($route.query.prodDet).pBasicDetail.pRating)"></rating></div>
                    <a v-if="isLoggedIn">
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf($router.currentRoute.params.pId) === -1"
                           @click="addWishlist({pId:$router.currentRoute.params.pId,pDet:JSON.parse($route.query.prodDet)});
                           wishlistObj[$router.currentRoute.params.pId] = JSON.parse($route.query.prodDet); $forceUpdate()">
                      <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf($router.currentRoute.params.pId) !== -1"
                           @click="removeWishlist({pId:$router.currentRoute.params.pId,pDet:JSON.parse($route.query.prodDet)});
                           delete wishlistObj[$router.currentRoute.params.pId]; $forceUpdate()">
                    </a>
                    <a   v-if="!isLoggedIn">
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                    </a>
                  </div>
                </div>
                <ul class="prod_type_list">
                  <span v-for="i in prodArr" v-if="i.det.swatchImgUrl !== ''">
                    <span v-if="selected.key!==i.key" @click="$store.state.particularProduct.selected = i">
                      <img :src="i.det.swatchImgUrl" style="max-height: 50px;max-width: 50px">
                    </span>
                     <span v-if="selected.key===i.key" class="active">
                      <img :src="i.det.swatchImgUrl" style="max-height: 50px;max-width: 50px">
                    </span>
                  </span>
                  <span v-for="i in prodArr"  v-if="i.det.swatchImgUrl === ''">
                    <li  v-if="selected.key!==i.key" @click="$store.state.particularProduct.selected = i">
                      <a> {{i.key}}</a>
                    </li>
                    <li  v-if="selected.key===i.key" class="active"><a > {{i.key}}</a></li>
                  </span>
                </ul>
              <!--  <div class="prod_pricerange" v-if="Object.keys(JSON.parse($route.query.prodDet)).indexOf(priceStartsFrom) != -1">
                  From <strong>{{JSON.parse($route.query.prodDet).priceStartsFrom}}</strong>Rupee
                </div> -->
                <div class="prod_storelinks">
                  <div class="store_nos">
                    <!--img src="/static/images/price-2.svg" alt="price">
                    <span>3 - Stores</span>
                    <img src="/static/images/infos.svg" alt="info"-->
                  </div>
                  <!--div class="prod_pricerange">
                    From <strong>2,036</strong> to <strong>7,999</strong> Rupee
                  </div-->
                  <!---*********************** Show when Price is available for affliate!!! To Do once price is uploaded*******---->
                  <li class="prod_shoplinks list-unstyled"  v-if="!isLoggedIn">
                    <a  @click="$store.state.auth.showLoginPopup=true"
                        v-for="(l,k) in selected.det.affliateDomains"
                    >
                      <span >{{k}}</span>
                      <span  style="float: right" >
                          <strong>BUY NOW</strong>
                      </span>
                      <br>
                    </a>
                  </li>
                  <li class="prod_shoplinks list-unstyled"  v-if="isLoggedIn && email">
                    <a v-for="(j,k) in selected.det.affliateDomains"
                       target="_blank"
                       :href="j.link + '&subid=' + $store.state.auth.user.email"
                    >
                      <span >{{k}}</span>
                      <span  style="float: right" >
                          <strong>BUY NOW</strong>
                      </span>
                      <br>
                    </a>
                  </li>
                  <li class="prod_shoplinks list-unstyled"  v-if="isLoggedIn &&   !email">
                    <a v-for="(j,k) in selected.det.affliateDomains"
                      @click="alertEmailNotVerified()"
                    >
                      <span >{{k}}</span>
                      <span  style="float: right" >
                          <strong>BUY NOW</strong>
                      </span>
                      <br>
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-xs-12">
              <div class="prod_gallery">
                <div class="gall_main" v-if="selected.det !== undefined">
                  <a :href="selected.det.pTypeImgUrl">
                    <img class="main_image" :src="selected.det.pTypeImgUrl" alt="gallery">
                    <span class="zoom"><img src="/static/images/zoom-in.svg" alt="zomm"></span>
                  </a>
                </div>
                <div class="gall_thumbs">
                  <!--ul>
                    <li class="active">
                      <a :href="selected.det.pTypeImgUrl">
                        <img src="/static/images/rectangle-18@2x.jpg" alt="gallery">
                      </a>
                    </li>
                    <li>
                      <a :href="selected.det.pTypeImgUrl">
                        <img src="/static/images/rectangle-18-copy@2x.jpg" alt="gallery">
                      </a>
                    </li>
                    <li>
                      <a :href="selected.det.pTypeImgUrl">
                        <img src="/static/images/rectangle-18-copy-19@2x.jpg" alt="gallery">
                      </a>
                    </li>
                    <li>
                      <a :href="selected.det.pTypeImgUrl">
                        <img src="/static/images/rectangle-18-copy-20@2x.jpg" alt="gallery">
                      </a>
                    </li>
                  </ul-->
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="prod_inncont">
                <h3>Overview</h3>
                <div v-html="JSON.parse($route.query.prodDet).pOtherDetail.pAbout"></div>
                <h3>Product Details</h3>
              </div>
              <ul class="prod_social">
                <li><a href="https://www.instagram.com/kult.in/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://goo.gl/UHWH1o" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                <!--li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li-->
              </ul>
            </div>
          </div>
          <!--div class="prod_rel_cats text-center">
            <div class="comm_title">
              <h3>Recommended</h3>
            </div>
            <div class="prod_repeater">
              <div class="prod_repeat prod_repeat1">
                <a class="prod_image" href="#">
                  <img src="/static/images/item-1@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a href="#">MAXFACOR</a></h4>
                  <p>Miracle Touch Foundation</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a href="#" class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a href="#" class="go_store">Go to store</a>
              </div>
              <div class="prod_repeat prod_repeat2">
                <a class="prod_image" href="#">
                  <img src="/static/images/item-2@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a href="#">CLINIQUE</a></h4>
                  <p>Even Better Glow</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a href="#" class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a href="#" class="go_store">Go to store</a>
              </div>
              <div class="prod_repeat prod_repeat3">
                <a class="prod_image" href="#">
                  <img src="/static/images/item-3@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a href="#">ELF</a></h4>
                  <p>Glossy Lipstick</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a href="#" class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a href="#" class="go_store">Go to store</a>
              </div>
              <div class="prod_repeat prod_repeat4">
                <a class="prod_image" href="#">
                  <img src="/static/images/item-4@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a href="#">NYX</a></h4>
                  <p>Eyeshadow Palette</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a href="#" class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a href="#" class="go_store">Go to store</a>
              </div>
            </div>
          </div-->
        </div>
      </div>
    </div>



    <!-- sometimes there isn't price for a domain, in this case hide the links too -->
    <!--{{pTypes}}-->

  </div>
</template>

<script>
  import rating from '@/components/rating'
  import {mapGetters} from 'vuex'
  import loader from '@/components/gen/loader'
  import {mapMutations} from 'vuex'
  //
  export default{
    data(){
      return{
        email:false
      }
    },
    components:{
      loader,
      rating
    },
    computed:{
      ...mapGetters([
        'wishlistObj',
        'pTypes',
        'prodArr',
        'selected',
        'pTypeLoader',
        'isLoggedIn'

      ])
    },
    methods:{
      ...mapMutations([
        'addWishlist',
        'removeWishlist'
      ]),
      alertEmailNotVerified(){
        alert('Email not Verified')
      }
    },
    created(){
      let vm = this
      window.thisOfVueComp = this
      //
      this.$store.commit('getTypeNLinkOfThisProduct', {
        pId: this.$route.params.pId
      })
      for(let i in Object.values(vm.$store.state.auth.user.providerData)){
        console.log(vm.$store.state.auth.user)
      if(Object.values(vm.$store.state.auth.user.providerData)[i].providerId === 'password'){
       if(vm.$store.state.auth.user.emailVerified){
            vm.email= true
        }
      }else{
        vm.email=true
      }
      }
    },
  }
</script>
<style>
  .ml_40{
    margin-left: 30px;
  }
  .float{
    float: left;
  }
</style>
