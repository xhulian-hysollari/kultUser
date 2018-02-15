<template>
  <div >

    <loader v-if="dbRefLoader"></loader>
    <div v-else >
      <loader v-if="authLoader"></loader>
      <div v-else>
        <div class="wrapper" >
          <header>
            <div class="top_strip">
              <div class="container text-center">
                <p @click="goTo('/cashback')">
                  <img src="/static/images/price.svg" alt="price">
                  Get 5% Cashback on all your purchases.
                  <img src="/static/images/arrow.svg" alt="price">
                  <a href="#">Learn more</a>
                </p>
              </div>
            </div>
            <div class="container top_misc hidden-xs">
              <div class="row">
                <div class="col-xs-6">
                  <p><img src="/static/images/pin-locate.svg" alt="pin-locate"><span>Mumbai, India</span></p>
                </div>
                <div class="col-xs-6 text-right head_drop">
                  <div class="dropdown">
                    <p class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <a href="#">
                        <img src="/static/images/user-profile.svg" alt="user-profile">
                        <span v-if="!isLoggedIn">Login/Register</span>
                        <span @click="logout" v-if="isLoggedIn">Logout</span>
                        <img  class="drop_arrow" src="/static/images/down.svg" alt="down">
                      </a>
                    </p>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2" v-if="isLoggedIn">
                      <li><span>Your Account</span></li>
                      <li><a >{{user.displayName}}</a></li>
                      <li><a >{{user.email}}</a></li>
                      <li><a >Edit Profile</a></li>
                    </ul>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2" v-if="!isLoggedIn">
                      <li><span>Your Account</span></li>
                      <li @click="$store.state.auth.showLoginPopup=true"><a >Login</a></li>
                      <li @click="$store.state.auth.showRegisterPopup=true"><a  >Create an Account</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="container top_main_area">
              <div class="row">
                <div class="col-sm-4 col-xs-12 pull-right text-right">
                  <button type="button" class="hamburger is-closed visible-xs" data-toggle="offcanvas" @click="hamburger_cross()">
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                  </button>
                  <a class="logo visible-xs" ><img src="/static/images/logo.svg" alt="logo"></a>
                  <ul class="top_quick_links">
                    <li>
                      <a href="#" v-if="isLoggedIn">
                        <img src="/static/images/wishlist.svg" alt="wishlist">
                        <span class="hidden-xs" @click="goTo('/wishlist')" >Wishlist ({{wishlistCnt}})</span>
                      </a>
                      <a href="#" v-if="!isLoggedIn"  @click="$store.state.auth.showLoginPopup = true" >
                        <img src="/static/images/wishlist.svg" alt="wishlist">
                        <span class="hidden-xs" @click="goTo('/wishlist')" v-if="isLoggedIn">Wishlist </span>
                      </a>
                    </li>
                    <li class="sec">
                      <a href="#">
                        <span class="rupee"><img src="/static/images/rupee.svg" alt="rupee"></span>
                        <img src="/static/images/wallet.svg" alt="wallet">
                        <span class="hidden-xs">Kult Wallet</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-8 col-xs-12 pull-left">
                  <div class="search_form">
                    <a @click="goTo('/')"  class="logo hidden-xs"><img src="/static/images/logo.svg" alt="logo"></a>
                    <div>
                      <input type="text" v-model="$store.state.gen.searchInput" @keyup="search()" placeholder="What are you looking for?" class="form-control">
                      <button ><img src="/static/images/search.svg" alt="search"></button>
                      <img class="search_close" src="/static/images/64-px-close.svg" alt="search">
                    </div>
                    <el-card class="box-card" v-show=" searchList !== {} && $store.state.gen.searchInput !== ''">
                      <div v-for="search in searchList" class="text item">
                        <!--{{search}}-->
                        <img :src="search.pBasicDetail.pPicUrl" width="50px" height="50px">
                        <span v-for="(i,j) in search.pBasicDetail.pName" v-show="j < 16">
                          <span>{{i}}</span>
                        </span>
                        <span v-if="search.pBasicDetail.pName.length > 15">...</span>
                      </div>
                    </el-card>
                  </div>
                </div>
              </div>
            </div>
            <div class="container hidden-xs">
              <ul class="main_menu">
                <li class="has_submenu " @mouseover="showdiv=true"><a  >SHOP</a>


                  <!--el-card class="opts">
                    <div class="opts" v-for="(shop,i) in Object.keys(shopOptions)">
                      {{shop.toUpperCase()}}
                      <span class="sub_opt" v-for="j in Object.keys(shopOptions[shop])">
                  <b>{{j.toUpperCase()}}</b>
                  <div v-for="k in Object.keys(shopOptions[shop][j])">
                    {{k.toUpperCase()}}
                  </div>
                </span>
                      <div class="cat" >
                        {{shopOptions[i]}}
                      </div>
                    </div>
                  </el-card-->
                </li>
                <li class="has_submenu shop"><a href="#">BRANDS</a>
                  <el-card class="opts">
                    <div @click="goTo(`/brandAll`)">
                      <b>Brands A to Z</b>
                    </div>
                    <div class="opts" v-for="(shop,i) in Object.keys(brandCat)">
                      <b>{{shop.toUpperCase()}}</b>
                      <div v-for="j in Object.keys(brandCat[shop])" @click="goTo(`/brandProduct/${j}`)">
                        <div>{{j.toUpperCase()}}</div>
                      </div>
                      <div class="cat" >
                        {{brandCat[i]}}
                      </div>
                    </div>
                  </el-card>
                  <!--div class="opts" v-for="(shop,i) in Object.keys(brandCat)">
                    {{shop}}
                    {{brandCat[shop]}}
                    <div class="cat" >
                      {{brandCat[i]}}
                    </div>
                  </div-->
                </li>

                <li><a @click="goTo('/kultPick')">KILT PICKS</a></li>
                <li><a @click="goTo('/globalBestseller')">GLOBAL BESTSELLERS</a></li>
                <li class="has_submenu shop"><a href="#">BEAUTY GUIDE</a>
                  <el-card class="opts">
                    <div class="opts" v-for="guide in beautyGuideArr">
                      {{guide.toUpperCase()}}
                    </div>
                  </el-card>
                </li>
                <li><a @click="goTo('/blog')">EDITOR’S BLOG</a></li>
                <li ><a @click="goTo('/howTo')">KULT TV</a></li>
              </ul>

            </div>
            <div  @mouseleave="showdiv=false" v-if="showdiv" style="min-height: 300px">
              <div  v-for="(shop,i) in Object.keys(shopOptions)" class="shop_pa">
                <div class="shop_pa">
                  <span class="shop_pa">{{shop.toUpperCase()}}</span>
                  <div class="row make-columns shop_child">
                    <div class="col-xs-6 col-md-4 col-lg-6 col-lg-push-4"  v-for="j in Object.keys(shopOptions[shop])" >
                      <div class="panel panel-default">
                        <div >
                          <b @click="goTo(`/productSubCategory/${shop}/${j}`)">{{j.toUpperCase()}}</b>
                          <div v-for="k in Object.keys(shopOptions[shop][j])" v-if="k.toUpperCase() !== 'DUMMY'" @click="goTo(`/productSubCategory/${shop}/${j}/${k}`)">
                            {{k.toUpperCase()}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav class="navbar navbar-inverse navbar-fixed-top visible-xs" id="sidebar-wrapper" role="navigation" >
              <ul class="nav sidebar-nav"  >
                <v-expansion-panel expand >
                  <v-expansion-panel-content >
                    <div slot="header" class="white ml_5"   >SHOP</div>
                    <v-card flat>
                      <v-card-text  class="white" >
                        <v-expansion-panel expand v-for="(shop,i) in Object.keys(shopOptions)">
                          <v-expansion-panel-content >
                            <div slot="header" class="white"  >{{shop.toUpperCase()}}</div>
                            <v-card flat>
                              <v-card-text  class="white" >
                                <v-expansion-panel expand  v-for="j in Object.keys(shopOptions[shop])">
                                  <v-expansion-panel-content >
                                    <div slot="header" class="white" @click="goTo(`/productSubCategory/${shop}/${j}`)">{{j.toUpperCase()}}</div>
                                    <v-card>
                                      <v-card-text  class="white" v-for="k in Object.keys(shopOptions[shop][j])">
                                        <div class="ml_20" v-if="k.toUpperCase() !== 'DUMMY'" @click="goTo(`/productSubCategory/${shop}/${j}/${k}`)">{{k.toUpperCase()}}</div>
                                      </v-card-text>
                                    </v-card>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel expand >
                  <v-expansion-panel-content >
                    <div slot="header" class='white ml_5'  >BRANDS</div>
                    <v-card flat>
                      <v-card-text  class="white">
                        <div class="white" @click="goTo('/brandAll')" >BRANDS A TO Z</div>
                        <!--v-expansion-panel >
                          <v-expansion-panel-content >

                          </v-expansion-panel-content>
                        </v-expansion-panel-->
                        <v-expansion-panel v-for="(shop,i) in Object.keys(brandCat)">
                          <v-expansion-panel-content >
                            <div slot="header" class="white" >{{shop.toUpperCase()}}</div>
                            <v-card flat>
                              <v-card-text  class="white" >
                                <div  v-for="j in Object.keys(brandCat[shop])">
                                  <div >
                                    <div  class="white ml_20"   @click="goTo(`/brandProduct/${j}`)">{{j.toUpperCase()}}</div>
                                  </div>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel  v-for="name in headerCatNames">
                  <v-expansion-panel-content v-if="name.name!=='beauty guide'">
                    <div slot="header"  class="white ml_5"  @click="goTo(name.funcPath)">{{name.name.toUpperCase()}}</div>
                    <v-card flat v-if="name.name==='beauty guide'" class="white ml_20" >
                      <v-card-text v-for="guide in beautyGuideArr">
                        {{guide.toUpperCase()}}
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                  <v-expansion-panel-content v-if="!isLoggedIn">
                    <div slot="header"  class="white ml_5">LOGIN/REGISTER</div>
                    <v-card flat class="white ml_20" >
                      <v-card-text >
                       <li  @click="hamburger_cross() ; $store.state.auth.showLoginPopup=true "> LOGIN</li>
                      </v-card-text>
                      <v-card-text >
                        <li @click="hamburger_cross() ; $store.state.auth.showRegisterPopup=true  "> CREATE AN ACCOUNT</li>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                  <v-expansion-panel-content v-if="isLoggedIn">
                    <div slot="header"  class="white ml_5">MY PROFILE</div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel >
                  <v-expansion-panel-content v-if="isLoggedIn">
                    <div slot="header"  class="white ml_5" @click="logout">LOGOUT</div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </ul>
            </nav>

          </header>
          <login_form></login_form>
          <signup_form></signup_form>
          <!--div id="opts">{{shopOptions}}</div-->
          <!--{{brandCat}}-->
          <!--div v-if="isLoggedIn">
            Email: {{user.email}} <br>  <!-- take whatever is needed ! -->
           <!-- Name: {{user.displayName}}
            <button @click="logout">
              LOGOUT
            </button>
          </div-->
          <br>
          <div class="min_height">
            <router-view></router-view>
          </div>
          <br>

          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-7 col-xs-12">
                  <div class="row">
                    <div class="col-md-3 col-xs-4">
                      <h4>KULT.IN</h4>
                      <ul class="foot_menu">
                        <li @click="goTo('/about')"><a >About Us</a></li>
                        <li @click="goTo('/contact')"><a >Contact us</a></li>
                        <li @click="goTo('/tnc')"><a >Terms of Cashback</a></li>
                        <li @click="goTo('/blog')"><a >Blog</a></li>
                      </ul>
                    </div>
                    <div class="col-md-3 col-xs-4">
                      <h4>Account</h4>
                      <ul class="foot_menu">
                        <li v-if="isLoggedIn" @click="goTo('/editProfile')"><a >My Account</a></li>
                        <li v-else @click="$store.state.auth.showLoginPopup=true"><a >My Account</a></li>
                        <li v-if="isLoggedIn" @click="goTo('/wishlist')"><a >Wishlist</a></li>
                        <li v-else @click="$store.state.auth.showLoginPopup=true"><a >Wishlist</a></li>
                        <li v-if="!isLoggedIn" @click="$store.state.auth.showRegisterPopup=true"><a >Register</a></li>
                      </ul>
                    </div>
                    <div class="col-md-3 col-xs-4">
                      <h4>Support</h4>
                      <ul class="foot_menu">
                        <li><a  href= "mailto:info@kult.in" target="_top">Info@Kult.In</a></li>
                        <li @click="goTo(`/howTo`)"><a >How to’s</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5 col-xs-12">
                  <div >
                    <h4><em>Gain expert advice for looking red-carpet ready  24/7.</em></h4>
                    <div v-if="!showNewsletterInput"><btn-loader></btn-loader></div>
                    <div v-if="showNewsletterInput">
                      <el-input placeholder="Enter your email to subscribe" v-model="$store.state.gen.newsLetterEmail" class="input-with-select ">
                        <el-button slot="append" icon="fa fa-arrow-right" @click="newsletter_saveEmail"></el-button>
                      </el-input>
                    </div>
                    <!--form>
                      <input type="text" placeholder="Enter your email to subscribe" v-model="$store.state.gen.newsLetterEmail" class="form-control">
                      <button @click="newsletter_saveEmail"><img src="/static/images/tail-right.svg" alt="tail-right"></button>
                    </form-->
                    <h6>Secure Payments</h6>
                    <img src="/static/images/group-18.svg" alt="payments">
                  </div>
                </div>
              </div>
              <hr>
              <div class="row copy_right">
                <div class="col-sm-3 col-xs-6">
                  <a href="/" class="foot_logo"><img src="/static/images/logo-white.svg" alt="logo"></a>
                </div>
                <div class="col-sm-3 text-right cust_center pull-right col-xs-6">
                  <ul class="foot_social list-unstyled list-inline">
                    <!--li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li-->
                    <li><a href="https://www.instagram.com/kult.in/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://goo.gl/UHWH1o" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                    <!--li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li-->
                  </ul>
                </div>
                <div class="col-sm-6 text-center col-xs-12">
                  <p>Copyright &copy; 2018 - All Right Reserved.</p>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import "./js/jquery-ui.js"
  import './js/jquery.min.js'
  import './js/bootstrap.min.js'
  import './js/slick.min.js'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import loader from '@/components/gen/loader'
  import VExpansionPanel from "vuetify/es5/components/VExpansionPanel/VExpansionPanel";
  import VCard from "vuetify/es5/components/VCard/VCard";
  import login_form from '@/components/auth/login.vue'
  import signup_form from '@/components/auth/signup.vue'
  import btnLoader from '@/components/gen/btnLoader'
  //
  //
  export default {
    data(){
      return{
        isClosed:false,
        headerCatNames:[
          {name:'kult picks',funcPath:'/kultPick'},
          {name:'global bestsellers',funcPath:'/globalBestSeller'},
          {name:'beauty guide',funcPath:'/beautyGuide'},
          {name:`editor's blog`,funcPath:'/blog'},
          {name:'kult Tv',funcPath:'/howTo'},
        ],
        showdiv:false,
        beautyGuideArr:[
          'Blush',
          'Contouring',
          'Foundation Shade Matrix',
          'Highlighting',
          'Mascaras',
          'Neutral Lips',
          'Acne',
          'Cleansers',
          'Masks',
          'Skincare By Age',
          'Sunscreens',
          'Antiaging'
        ]
      }
    },
    methods:{
      ...mapMutations([
        'goTo',
        'logout',
        'newsletter_saveEmail',
        'search'
      ]),
        hamburger_cross(){
          let vm = this
          var trigger = $('.hamburger')
          if (vm.isClosed) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            vm.isClosed = false;
          } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            vm.isClosed = true;
          }
          $('.wrapper').toggleClass('toggled');
        },
    },
    computed:{
      ...mapGetters([
        'showNewsletterInput',
        'dbRefLoader',
        // SHOP DROPDOWN
        'shopOptions', // shop dropdown var
        'shopOptionLoader', //its true till shop dropdown is not loaded.
        // BRAND DROPDOWN
        'brandCat', // brand dropdown var
        'allBrandLoader' , //its true till brand dropdown is not loaded.
        //
        'user', //user object
        'isLoggedIn',
        //
        'authLoader',
        'showAuthPopup',
        'wishlistObj',
        'wishlistCnt',
        'searchList'
      ])
    },
    components:{
      VCard,
      VExpansionPanel,
      loader,
      login_form,
      signup_form,
      btnLoader
    },
    created(){
      window.thisOfVueComp_2 = this
    },
    updated(){
      this.$store.commit('getLoginStatus')
    }

  }
</script>
<style>
  @import './assets/css/bootstrap.min.css';
  @import '../node_modules/element-ui/lib/theme-chalk/index.css';
  @import './assets/css/bootstrap.css';
  @import './assets/css/style.css';
  @import './assets/css/slick.css';
  @import './assets/css/slick-theme.css';
  @import './assets/css/jquery-ui.css';
  @import './assets/css/jquery.fancybox.css';
  @import './assets/cssLib/googleFont.css';
  .opts{
    display: none;
  }
  .opts:hover .sub_opt{
    display: block;
    float: right;
    margin-left: 30px;
  }
  .shop:hover .opts{
    display: block;
    top: 0;
    left: 100%;
    margin-top: -1px;
  }
  .cat{
    display: none;
  }
  .sub_opt{
    display: none;
  }

  .min_height{
    min-height: 300px;
  }
  .white{
    color:white
  }
  .ml_20{
    margin-left: 20px;
  }
  .ml_5{
    margin-left: 5px;
  }
  .row.make-columns {
    -moz-column-width: 19em;
    -webkit-column-width: 19em;
    -moz-column-gap: 1em;
    -webkit-column-gap:1em;
    border-color: transparent;

  }
  .shop_child{
    display: none;
  }

  .shop_pa:hover .shop_child{
    display: block;
    top: 0;
    left: 100%;
    margin-top: -1px;
    padding: 40px;
  }
  .row.make-columns > div {
    display: inline-block;
    padding:  .5rem;
    width:  100%;
  }

  /* demo only* */
  .panel {
    box-shadow: 0 0px 0px rgba(0,0,0,0) ! important ;
    height: 100%;
    width:  100%;

  }
  .panel-default {
    border-color: #fff ! important;
  }
</style>

