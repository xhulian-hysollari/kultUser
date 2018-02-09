<template>
  <div >

    <loader v-if="dbRefLoader"></loader>
    <div v-else>
      <loader v-if="authLoader"></loader>
      <div v-else>
        <div class="wrapper" >
          <header>
            <div class="top_strip">
              <div class="container text-center">
                <p>
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
                        <span>Login/Register</span>
                        <img class="drop_arrow" src="/static/images/down.svg" alt="down">
                      </a>
                    </p>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                      <li><span>Your Account</span></li>
                      <li><a data-toggle="modal" data-target="#loginModal" href="#">Login</a></li>
                      <li><a data-toggle="modal" data-target="#regModal" href="#">Create an Account</a></li>
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
                  <a href="index.html" class="logo visible-xs"><img src="/static/images/logo.svg" alt="logo"></a>
                  <ul class="top_quick_links">
                    <li>
                      <a href="#">
                        <img src="/static/images/wishlist.svg" alt="wishlist">
                        <span class="hidden-xs">Wishlist (0)</span>
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
                    <a href="index.html" class="logo hidden-xs"><img src="/static/images/logo.svg" alt="logo"></a>
                    <form>
                      <input type="text" placeholder="What are you looking for?" class="form-control">
                      <button><img src="/static/images/search.svg" alt="search"></button>
                      <img class="search_close" src="/static/images/64-px-close.svg" alt="search">
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="container hidden-xs">
              <ul class="main_menu">
                <li class="has_submenu shop" ><a href="#" >SHOP</a>
                  <el-card class="opts">
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
                  </el-card>
                </li>
                <li class="has_submenu shop"><a href="#">BRANDS</a>
                  <el-card class="opts">
                    <div class="opts" v-for="(shop,i) in Object.keys(brandCat)">
                      <div @click="goTo(`/brandAll`)">
                        <b>Brands A to Z</b>
                      </div>
                      {{shop.toUpperCase()}}
                      <div v-for="j in Object.keys(brandCat[shop])">
                        <b>{{j.toUpperCase()}}</b>
                        <div v-for="k in Object.keys(brandCat[shop][j])">
                          {{k.toUpperCase()}}
                        </div>
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
                <li><a href="#">KILT PICKS</a></li>
                <li><a href="#">GLOBAL BESTSELLERS</a></li>
                <li class="has_submenu shop"><a href="#">BEAUTY GUIDE</a>
                  <el-card class="opts">
                    <div class="opts" v-for="guide in beautyGuideArr">
                      {{guide.toUpperCase()}}
                    </div>
                  </el-card>
                </li>
                <li><a href="#">EDITOR’S BLOG</a></li>
                <li class="has_submenu"><a href="#">KULT TV</a></li>
              </ul>
            </div>
            <nav class="navbar navbar-inverse navbar-fixed-top visible-xs" id="sidebar-wrapper" role="navigation" >
              <ul class="nav sidebar-nav"  >
                <v-expansion-panel expand >
                  <v-expansion-panel-content >
                    <div slot="header" class="white ml_5"   >SHOP</div>
                    <v-card>
                      <v-card-text  class="white" >
                        <v-expansion-panel expand v-for="(shop,i) in Object.keys(shopOptions)">
                          <v-expansion-panel-content >
                            <div slot="header" class="white"  >{{shop.toUpperCase()}}</div>
                            <v-card>
                              <v-card-text  class="white" >
                                <v-expansion-panel expand  v-for="j in Object.keys(shopOptions[shop])">
                                  <v-expansion-panel-content >
                                    <div slot="header" class="white" >{{j.toUpperCase()}}</div>
                                    <v-card>
                                      <v-card-text  class="white" v-for="k in Object.keys(shopOptions[shop][j])">
                                        <div class="ml_20">{{k.toUpperCase()}}</div>
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
                    <v-card>
                      <v-card-text  class="white">
                        <v-expansion-panel v-for="(shop,i) in Object.keys(brandCat)">
                          <v-expansion-panel-content >
                            <div slot="header" class="white" >{{shop.toUpperCase()}}</div>
                            <v-card>
                              <v-card-text  class="white" >
                                <div  v-for="j in Object.keys(brandCat[shop])">
                                  <div >
                                    <div  class="white ml_20"  >{{j.toUpperCase()}}</div>
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
                  <v-expansion-panel-content >
                    <div slot="header"  class="white ml_5">{{name.toUpperCase()}}</div>
                    <v-card v-if="name==='beauty guide'" class="white ml_20" >
                      <v-card-text v-for="guide in beautyGuideArr">
                        {{guide.toUpperCase()}}
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </ul>
            </nav>

          </header>
          <!--div id="opts">{{shopOptions}}</div-->
          <!--{{brandCat}}-->
          <div v-if="isLoggedIn">
            Email: {{user.email}} <br>  <!-- take whatever is needed ! -->
            Name: {{user.displayName}}
            <button @click="logout">
              LOGOUT
            </button>
          </div>
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
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Terms of Cashback</a></li>
                        <li><a href="#">Blog</a></li>
                      </ul>
                    </div>
                    <div class="col-md-3 col-xs-4">
                      <h4>Account</h4>
                      <ul class="foot_menu">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Register</a></li>
                      </ul>
                    </div>
                    <div class="col-md-3 col-xs-4">
                      <h4>Support</h4>
                      <ul class="foot_menu">
                        <li><a href="#">Info@Kult.in</a></li>
                        <li><a href="#">How to’s</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5 col-xs-12">
                  <div class="foot_subscribe">
                    <h4><em>Gain expert advice for looking red-carpet ready  24/7.</em></h4>
                    <form>
                      <input type="text" placeholder="Enter your email to subscribe" class="form-control">
                      <button><img src="/static/images/tail-right.svg" alt="tail-right"></button>
                    </form>
                    <h6>Secure Payments</h6>
                    <img src="/static/images/group-18.svg" alt="payments">
                  </div>
                </div>
              </div>
              <hr>
              <div class="row copy_right">
                <div class="col-sm-3 col-xs-6">
                  <a href="index.html" class="foot_logo"><img src="/static/images/logo-white.svg" alt="logo"></a>
                </div>
                <div class="col-sm-3 text-right cust_center pull-right col-xs-6">
                  <ul class="foot_social list-unstyled list-inline">
                    <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
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
  //
  //
  export default {
    data(){
      return{
        isClosed:false,
        headerCatNames:[
          'kult picks',
          'global bestsellers',
          'beauty guide',
          `editor's blog`,
          'kult tv'
        ],
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
        'goTo'
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
        }
    },
    computed:{
      ...mapGetters([
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
        'authLoader'
      ])
    },
    methods:{
      ...mapMutations([
        'logout'
      ])
    },
    components:{
      VCard,
      VExpansionPanel,
      loader
    },
   beforeMount(){

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
</style>

