<template>
  <div>

    <!--{{selected}}-->
    <loader v-if="pTypeLoader "></loader>
    <div v-if="!pTypeLoader ">
      <!--{{ amazonLinkPrice}}-->
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
                  <h2>{{JSON.parse($route.query.prodDet).pBasicDetail.pBrand}}</h2>
                  <h3>{{JSON.parse($route.query.prodDet).pBasicDetail.pName}}</h3>
                  <div class="prod_wishadd">
                    <div class="prod_rate float">

                        <span v-for="icon in 5" >
                          <span v-if="icon <= Math.round(JSON.parse($route.query.prodDet).pBasicDetail.pRating)"  >
                              <i class="material-icons p_star"  >star</i>
                          </span>
                           <span v-else>
                              <i class="material-icons p_star_unchecked" >star</i>
                          </span>
                      </span>
                    </div>
                    <a v-if="isLoggedIn" class="ml_24" >
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf($router.currentRoute.params.pId) === -1"
                           @click="addWishlist({pId:$router.currentRoute.params.pId,pDet:JSON.parse($route.query.prodDet)});
                           wishlistObj[$router.currentRoute.params.pId] = JSON.parse($route.query.prodDet); $forceUpdate()">
                      <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf($router.currentRoute.params.pId) !== -1"
                           @click="removeWishlist({pId:$router.currentRoute.params.pId,pDet:JSON.parse($route.query.prodDet)});
                           delete wishlistObj[$router.currentRoute.params.pId]; $forceUpdate()">
                    </a>
                    <a   v-if="!isLoggedIn"  class="ml_24">
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                    </a>
                  </div>
                </div>
                <ul class="prod_type_list ">
                  <div >
                      <span v-for="i in prodArr" v-if="i.det.swatchImgUrl !== ''">
                    <li v-if="selected.key!==i.key" @click="$store.state.particularProduct.selected = i">
                      <img :src="i.det.swatchImgUrl" style="height: 50px;width: 50px">
                    </li>
                     <li v-if="selected.key===i.key" class="active">
                      <img :src="i.det.swatchImgUrl" style="height: 50px;width: 50px">
                    </li>
                  </span>
                  </div>
                </ul>
                <ul class="prod_type_list mt_30">
                  <div>
                      <span v-for="i in prodArr" >
                    <li  v-if="selected.key!==i.key" @click="$store.state.particularProduct.selected = i">
                      <a> {{i.key}}</a>
                    </li>
                    <li  v-if="selected.key===i.key" class="active"><a > {{i.key}}</a></li>
                  </span>
                  </div>
                  <!--span-- v-for="i in prodArr"  v-if="i.det.swatchImgUrl === ''">
                    <li  v-if="selected.key!==i.key" @click="$store.state.particularProduct.selected = i">
                      <a> {{i.key}}</a>
                    </li>
                    <li  v-if="selected.key===i.key" class="active"><a > {{i.key}}</a></li>
                  </span-->
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
                  <ul class="prod_shoplinks list-unstyled" v-if="!isLoggedIn " >
                    <li  v-for="(l,k) in selected.det.affliateDomains">
                      <a @click="$store.state.auth.showLoginPopup=true; $store.state.particularProduct.selectedLink =l.link"target="_blank" v-if="parseInt(l.price) < 10001 || parseInt(amazonLinkPrice) <10001" class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <!--span class="aff_price" v-if="l.price===undefined || l.price===999999999"> Out Of Stock</span-->
                        <div class="show_price" v-if="k !== 'amazon'">
                          <span class="aff_price" > ₹ {{l.price}}</span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                        <div class="show_price" v-else >
                          <span class="aff_price" v-if="!isNaN(amazonLinkPrice)"> ₹ {{parseInt(amazonLinkPrice)}}</span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                      </a>
                      <a v-else-if="(parseInt(l.price) || parseInt(amazonLinkPrice)) == ('999999999' ||  999999999)" class="box">

                        <span class="aff_name" >{{k.toUpperCase()}}</span>
                        <div  class="show_price" >
                          <span class="aff_price" ></span>
                          <span >
                            <strong style="float: right">Out Of Stock</strong>
                          </span>
                        </div>
                      </a>
                      <a v-else @click="$store.state.auth.showLoginPopup=true; $store.state.particularProduct.selectedLink =l.link" class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <div class="show_price" >
                          <span class="aff_price" ></span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul class="prod_shoplinks list-unstyled" v-if="isLoggedIn && email" >
                    <li  v-for="(l,k) in selected.det.affliateDomains" class="box">
                      <a :href="l.link + '&subid=' + $store.state.auth.user.email" target="_blank" v-if="parseInt(l.price) < 10001 || parseInt(amazonLinkPrice) <10001">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <!--span class="aff_price" v-if="l.price===undefined || l.price===999999999"> Out Of Stock</span-->
                        <div class="show_price" v-if="k !== 'amazon'">
                          <span class="aff_price" > ₹ {{l.price}}</span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                        <div class="show_price" v-else >
                          <span class="aff_price"  v-if="!isNaN(amazonLinkPrice)"> ₹ {{parseInt(amazonLinkPrice)}}</span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                      </a>
                      <a v-else-if="(parseInt(l.price) || parseInt(amazonLinkPrice)) == ('999999999' ||  999999999)" class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <div  class="show_price" >
                          <span class="aff_price" ></span>
                          <span>
                            <strong style="float: right">Out Of Stock</strong>
                          </span>
                        </div>
                      </a>
                      <a v-else :href="l.link + '&subid=' + $store.state.auth.user.email" class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <div class="show_price" >
                          <span class="aff_price" ></span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul class="prod_shoplinks list-unstyled" v-if="isLoggedIn &&   !email" >
                    <li  v-for="(l,k) in selected.det.affliateDomains" >
                      <a @click="dialog=true;$store.state.particularProduct.selectedLink =l.link " v-if="parseInt(l.price) < 10001 || parseInt(amazonLinkPrice) <10001" class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <!--span class="aff_price" v-if="l.price===undefined || l.price===999999999"> Out Of Stock</span-->
                        <div class="show_price" v-if="k !== 'amazon'">
                          <span class="aff_price" > ₹ {{l.price}}</span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                        <div class="show_price" v-else >
                          <span class="aff_price"  v-if="!isNaN(amazonLinkPrice)"> ₹ {{parseInt(amazonLinkPrice)}}</span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                      </a>
                      <a v-else-if="(parseInt(l.price) || parseInt(amazonLinkPrice)) == ('999999999' ||  999999999)" class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <div  class="show_price" >
                          <span class="aff_price" ></span>
                          <span>
                            <strong style="float: right">Out Of Stock</strong>
                          </span>
                        </div>
                      </a>
                      <a v-else @click="dialog=true;$store.state.particularProduct.selectedLink =l.link " class="box">
                        <span class="aff_name">{{k.toUpperCase()}}</span>
                        <div class="show_price" >
                          <span class="aff_price" ></span>
                          <span>
                            <strong>BUY NOW</strong>
                        </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <el-dialog
                    :visible.sync="dialog"
                    width="40%"
                   >
                    <span slot="footer" class="dialog-footer">
                       <h5>Account Not Verified!!! Click to continue and you will losse the cashback</h5>
                       <p class="forgot_pass" @click="$store.state.particularProduct.selectedLink=''; dialog=false"><a :href="selectedLink" target="_blank">Continue Anyway</a></p>
                    </span>
                  </el-dialog>
                  <!--el-dialog
                    :visible.sync="dialog"
                  >
                    <span>
                         <div  v-if="selectedLink !== ''">
                         <a :href="selectedLink" target="_blank" @click="$store.state.particularProduct.selectedLink=''; dialog=false">
                            <h5>>Account Not Verified!!! Click to continue and you will losse the cashback</h5>
                             <el-button>Continue Anyway</el-button>
                         </a>
                        </div>
                    </span>
                  </el-dialog-->
                  <!---*********************** Show when Price is available for affliate!!! To Do once price is uploaded*******---->
                  <!--li class="prod_shoplinks list-unstyled"  v-if="!isLoggedIn">
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
                  </li-->
                </div>
              </div>
            </div>
            <div class="col-md-7 col-xs-12">
              <div class="prod_gallery">
                <div class="gall_main" v-if="selected.det !== undefined">
                  <a >
                    <img  :src="selected.det.pTypeImgUrl" >
                  </a>
                  <el-button @click="dialog2=true" icon="el-icon-zoom-in"></el-button>
                </div>
                <el-dialog
                  width="80%"
                  :visible.sync="dialog2"
                >
                        <img class="main_image" :src="selected.det.pTypeImgUrl" alt="gallery" >
                </el-dialog>
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
                <!--li><a  target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a  target="_blank"><i class="fa fa-pinterest"></i></a></li>
                <li><a  target="_blank"><i class="fa fa-twitter"></i></a></li-->
              </ul>
            </div>
          </div>
          <!--div class="prod_rel_cats text-center">
            <div class="comm_title">
              <h3>Recommended</h3>
            </div>
            <div class="prod_repeater">
              <div class="prod_repeat prod_repeat1">
                <a class="prod_image" >
                  <img src="/static/images/item-1@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a >MAXFACOR</a></h4>
                  <p>Miracle Touch Foundation</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a  class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a  class="go_store">Go to store</a>
              </div>
              <div class="prod_repeat prod_repeat2">
                <a class="prod_image" >
                  <img src="/static/images/item-2@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a >CLINIQUE</a></h4>
                  <p>Even Better Glow</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a  class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a  class="go_store">Go to store</a>
              </div>
              <div class="prod_repeat prod_repeat3">
                <a class="prod_image" >
                  <img src="/static/images/item-3@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a >ELF</a></h4>
                  <p>Glossy Lipstick</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a  class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a  class="go_store">Go to store</a>
              </div>
              <div class="prod_repeat prod_repeat4">
                <a class="prod_image" >
                  <img src="/static/images/item-4@2x.jpg" alt="product">
                </a>
                <div class="prod_cont">
                  <h4><a >NYX</a></h4>
                  <p>Eyeshadow Palette</p>
                </div>
                <div class="prod_misc">
                  <div class="half"><img src="/static/images/rate-4.svg" alt="rating"></div>
                  <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                </div>
                <a  class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                <a  class="go_store">Go to store</a>
              </div>
            </div>
          </div-->
        </div>
      </div>
    </div>

   <span style="visibility: hidden;"> {{updateSelVar}}</span>



    <!-- sometimes there isn't price for a domain, in this case hide the links too -->
    <!--{{pTypes}}-->

  </div>
</template>

<script>
  import rating from '@/components/rating'
  import {mapGetters} from 'vuex'
  import loader from '@/components/gen/loader'
  import {mapMutations} from 'vuex'
  import axios from 'axios'
  //
  export default{
    data(){
      return{
        email:false,
        dialog:false,
        dialog2:false,
        amazonPrice:'',
        //
        amazonPriceLoaded: false ,//amazon price,
        selVar : {},
        amazonLinkPrice: ''  ///////////show this var at amzon price
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
        'isLoggedIn',
        'selectedLink',
        'amazonLoader',
        //
        //'amazonLinkPrice' //show this ******
      ]),
      updateSelVar(){
        this.selVar = this.$store.state.particularProduct.selected
        return this.selVar
      }
    },
    watch:{
     dialog:function () {
       let vm = this
       if(!this.dialog){
         this.$store.state.particularProduct.selectedLink=''
       }
     },
      $route:function () {
        this.$store.commit('getTypeNLinkOfThisProduct', {
          pId: this.$route.params.pId
        })
        //
        console.log("[selected]", this.$store.state.particularProduct.selected)
        //
        //if(!this.amazonPriceLoaded)
          //this.fetchAmazonPrice()
        //
      },
      selVar : ()=>{

       let vm = this
        //setTimeout(()=>{

          console.log("[@@@] => "  ,  window.thisOfVueComp.$store.state.particularProduct.selected )
          //
          let x =  window.thisOfVueComp.$store.state.particularProduct.selected
          console.log("[###]",x)
          let y = ''

          if( Object.keys(x.det.affliateDomains).indexOf('amazon') != -1 ){ //amazon is there
            let url = x.det.affliateDomains.amazon.link
            let pId = window.thisOfVueComp.$route.params.pId
            let pType = x.key
            //
            //
            console.log("[pid] => ", pId)
            console.log("[pType] => ", pType)
            console.log("[url] => ", url)
            //
            //
            window.thisOfVueComp.$store.dispatch('axiosReq', {
              params: {
                pId, //fill **
                pType //fill**
              },
              funcName: 'getAmazonPriceFromDb'
            }).then((result_1)=>{
              console.log("1 => ", result_1)
              if(result_1 == '-1' || result_1 == '999999999'){ //not in db / or out of stock etc ...
                window.thisOfVueComp.$store.dispatch('axiosReq', {
                  params: {
                    url //amazon lik url , fill**
                  },
                  funcName: 'getAmazonPriceFromAPI'
                }).then((result_2)=>{
                  //
                  console.log("2 => ", result_2)
                  if(result_2 == '-1'){
                    y = 'Failed to fetch Price !'
                    window.thisOfVueComp.amazonLinkPrice = y
                    console.log("[%] => ", window.thisOfVueComp.amazonLinkPrice )
                    //state.amazonLoader = false
                    window.thisOfVueComp.$forceUpdate()
                    //failed to fetch price, show accordingly(message) on dom
                  }else if(result_2 == '999999999'){
                    y = 'Out Of Stock'
                    window.thisOfVueComp.amazonLinkPrice = y
                    console.log("[%%] => ", window.thisOfVueComp.amazonLinkPrice )
                    //state.amazonLoader = false
                    window.thisOfVueComp.$forceUpdate()
                    //show out of stock on dom
                  }else{
                    console.log("[save] => ",result_2)  // show result on dom //this is price of amazon link
                    y = result_2
                    window.thisOfVueComp.amazonLinkPrice = y
                    console.log("[%] => ", window.thisOfVueComp.amazonLinkPrice )
                    window.thisOfVueComp.$forceUpdate()
                    //
                    window.thisOfVueComp.$store.dispatch('axiosReq', {
                      params: {
                        pId, // fill**,
                        pType, // fill**
                        price: result_2
                      },
                      funcName: 'saveAmazonPriceToDb'
                    })
                    //
                  }
                  //*turn loader off*
                  //state.amazonLoader = false
                  //window.thisOfVueComp.$forceUpdate()
                  //
                })
              } else {
                console.log(result_1) // show result on dom //this is price of amazon link
                y = result_1
                window.thisOfVueComp.amazonLinkPrice = y
                console.log("[%] => ", window.thisOfVueComp.amazonLinkPrice )
                //*turn loader off*
                //state.amazonLoader = false
                window.thisOfVueComp.$forceUpdate()
              }
            })
            //
            //
          }else{
            //do nothing
            //state.amazonLoader = false  //stop loader
          }
          //
          //
        /*
          window.thisOfVueComp.$forceUpdate()
        console.log(y)
          console.log(window.thisOfVueComp.amazonLinkPrice) */
        //},6000)
      }
    },
    methods:{
      ...mapMutations([
        'addWishlist',
        'removeWishlist'
      ])
    },
    //
    beforeDestroy(){
      this.$store.state.particularProduct.selectedLink=''
    },
    created(){
      let vm = this
      window.thisOfVueComp = this
      //
      this.$store.commit('getTypeNLinkOfThisProduct', {
        pId: this.$route.params.pId
      })
      if(vm.$store.state.auth.isLoggedIn){
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
      }
      //
      this.$store.state.gen.f = true
      //
      //if(!this.amazonPriceLoaded)
        //this.fetchAmazonPrice()
    },
  }
</script>
<style>
  .splash-banner {
    background: #1b70d3;
    position: absolute;
    bottom: 20px;
    left: -15px;
    width: 95%;
    text-align: center;
    z-index: 12000;
  }

  .splash-banner-title {
    color: #fff;
    font-weight: 700;
    padding: 12px;
    font-size: 12px;
    font-style: italic;
    display: block;
  }

  .splash-banner:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 15px 0;
    border-color: transparent #074778 transparent transparent;
  }
  .splash-banner:after {
    content: '';
    display: block;
    position: absolute;
    right: -20px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 43px 20px 0 0;
    border-color: #1b71d3 transparent transparent transparent;
  }
  .ml_40{
    margin-left: 30px;
  }
  .float{
    float: left;
  }
  .p_star{
    font-size: 20px;
    color: #eca8b5 ;
  }
  .p_star_unchecked{
    font-size: 20px;
    color: #959595;
  }
  .ml_24{
    margin-left: 24px !important;
  }
  .mt_30{
    margin-top: 5vh;
  }
.aff_name {
  position: inherit !important;
  margin-left: -80px !important;
}
.aff_price{
  margin-top: -1vh;
  position: relative !important;
  margin-left: 20px !important;
  margin-right: 10px !important;
}
  .prod_shoplinks li a span strong {
    margin-top: 14px !important;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    display: block;
  }
  .tv_left ul {
    padding: 0;
    margin: 0px 0 !important;
    list-style: none;
  }

  /*ul, ol {
    margin-top: 0;
    margin-bottom: 10px !important;
  }*/ /* it brings nav bar up */
  .main_image{
    width:100%;
    min-height: 500px;
    max-height: 600px;

  }
  .show_price{
    padding: 0px;
    /* margin: 0px; */
    margin-top: -22px;
  }
  .box{
    height: 60px;
  }
</style>

