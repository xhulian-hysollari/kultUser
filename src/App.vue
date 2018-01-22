<template>
  <div >

    <loader v-if="dbRefLoader"></loader>
    <div v-else class="wrapper">

      <header>
        <div class="top_strip">
          <div class="container text-center">
            <p>
              <img src="/static/img/images/price.svg" alt="price">
              Get 5% Cashback on all your purchases.
              <img src="/static/img/images/arrow.svg" alt="price">
              <a href="#">Learn more</a>
            </p>
          </div>
        </div>
        <div class="container top_misc hidden-xs">
          <div class="row">
            <div class="col-xs-6">
              <p><img src="/static/img/images/pin-locate.svg" alt="pin-locate"><span>Mumbai, India</span></p>
            </div>
            <div class="col-xs-6 text-right">
              <p>
                <a href="#">
                  <img src="/static/img/images/user-profile.svg" alt="user-profile">
                  <span>Login/Register</span>
                  <img src="/static/img/images/down.svg" alt="down">
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="container top_main_area">
          <div class="row">
            <div class="col-sm-6 col-xs-12 pull-right text-right">
              <button type="button" class="hamburger is-closed visible-xs" data-toggle="offcanvas">
                <span class="hamb-top"></span>
                <span class="hamb-middle"></span>
                <span class="hamb-bottom"></span>
              </button>
              <a href="index.html" class="logo visible-xs"><img src="/static/img/images/logo.svg" alt="logo"></a>
              <ul class="top_quick_links">
                <li>
                  <a href="#">
                    <img src="/static/img/images/wishlist.svg" alt="wishlist">
                    <span class="hidden-xs">Wishlist (0)</span>
                  </a>
                </li>
                <li class="sec">
                  <a href="#">
                    <span class="rupee"><img src="/static/img/images/rupee.svg" alt="rupee"></span>
                    <img src="/static/img/images/wallet.svg" alt="wallet">
                    <span class="hidden-xs">Kult Wallet</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-xs-12 pull-left">
              <div class="search_form">
                <a href="index.html" class="logo hidden-xs"><img src="/static/img/images/logo.svg" alt="logo"></a>
                <form>
                  <input type="text" placeholder="What are you looking for?" class="form-control">
                  <button><img src="/static/img/images/search.svg" alt="search"></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container hidden-xs">
          <ul class="main_menu">
            <li class="has_submenu"><a href="#">SHOP</a></li>
            <li class="has_submenu"><a href="#">BRANDS</a></li>
            <li><a href="#">KILT PICKS</a></li>
            <li><a href="#">GLOBAL BESTSELLERS</a></li>
            <li class="has_submenu"><a href="#">BEAUTY GUIDE</a></li>
            <li><a href="#">EDITOR’S BLOG</a></li>
            <li class="has_submenu"><a href="#">KULT TV</a></li>
          </ul>
        </div>

        <nav class="navbar navbar-inverse navbar-fixed-top visible-xs" id="sidebar-wrapper" role="navigation">
          <ul class="nav sidebar-nav">
            <li class="dropdown"><a href="#">SHOP</a></li>
            <li class="dropdown"><a href="#">BRANDS</a></li>
            <li><a href="#">KILT PICKS</a></li>
            <li><a href="#">GLOBAL BESTSELLERS</a></li>
            <li class="dropdown"><a href="#">BEAUTY GUIDE</a></li>
            <li><a href="#">EDITOR’S BLOG</a></li>
            <li class="dropdown"><a href="#">KULT TV</a></li>
          </ul>
        </nav>

      </header>

      <div style="min-height: 100px;">
        <router-view></router-view>
      </div>


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
                  <button><img src="/static/img/images/tail-right.svg" alt="tail-right"></button>
                </form>
                <h6>Secure Payments</h6>
                <img src="/static/img/images/group-18.svg" alt="payments">
              </div>
            </div>
          </div>
          <hr>
          <div class="row copy_right">
            <div class="col-sm-3 col-xs-6">
              <a href="index.html" class="foot_logo"><img src="/static/img/images/logo-white.svg" alt="logo"></a>
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
</template>

<script>
  import {mapGetters} from 'vuex'
  import loader from '@/components/gen/loader'
  //
  export default {
    computed:{
      ...mapGetters([
        'dbRefLoader'
      ])
    },
    components:{
      loader
    }
  }
</script>
