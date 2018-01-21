<template>
  <div>

    <div class="wrapper">
      <header>
        <div class="top_strip">
          <div class="container text-center">
            <p>
              <img src="../images/price.svg" alt="price">
              Get 5% Cashback on all your purchases.
              <img src="../images/arrow.svg" alt="price">
              <a href="#">Learn more</a>
            </p>
          </div>
        </div>
        <div class="container top_misc hidden-xs">
          <div class="row">
            <div class="col-xs-6">
              <p><img src="../images/pin-locate.svg" alt="pin-locate"><span>Mumbai, India</span></p>
            </div>
            <div class="col-xs-6 text-right">
              <p>
                <a href="#">
                  <img src="../images/user-profile.svg" alt="user-profile">
                  <span>Login/Register</span>
                  <img src="../images/down.svg" alt="down">
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
              <a href="index.html" class="logo visible-xs"><img src="../images/logo.svg" alt="logo"></a>
              <ul class="top_quick_links">
                <li>
                  <a href="#">
                    <img src="../images/wishlist.svg" alt="wishlist">
                    <span class="hidden-xs">Wishlist (0)</span>
                  </a>
                </li>
                <li class="sec">
                  <a href="#">
                    <span class="rupee"><img src="../images/rupee.svg" alt="rupee"></span>
                    <img src="../images/wallet.svg" alt="wallet">
                    <span class="hidden-xs">Kult Wallet</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-xs-12 pull-left">
              <div class="search_form">
                <a href="index.html" class="logo hidden-xs"><img src="../images/logo.svg" alt="logo"></a>
                <form>
                  <input type="text" placeholder="What are you looking for?" class="form-control">
                  <button><img src="../images/search.svg" alt="search"></button>
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

      <div class="banner_strip"></div>
      <div class="breads">
        <div class="container">
          <ul class="list-unstyled list-inline">
            <li><a href="#">Shop</a></li>
            <li><span>></span></li>
            <li>makeup</li>
          </ul>
          <h3>Bestsellers <span>(1,689)</span></h3>
        </div>
      </div>
      <div class="top_sortarea">
        <div class="container">
          <div class="row">
            <div class="col-xs-5">
              <p>
                <img class="filter_icon" src="../images/filter.svg" alt="filter">
                FILTER
                <a href="#" class="visible-xs mob_filter"></a>
              </p>
            </div>
            <div class="col-xs-7 text-right">
              <p>
                SORTED BY:
                <span class="sort_by">
                                POPULARITY <img src="../images/sortby.svg" alt="arrow">
                            </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main_catarea">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="side_filterbox">
                <div class="filter_title">
                  <a>ACTIVE FILTER <span>2</span></a>
                </div>
                <div class="filter_box active">
                  <div class="filter_title">
                    <a href="#">Price</a>
                  </div>
                  <div class="filter_cont">
                    <div class="price_box">
                      <label for="amount"></label>
                      <div class="price_iputs">
                        <input type="text" id="amount1" readonly>
                        <input type="text" id="amount2" readonly>
                      </div>
                      <div id="slider_range"></div>
                    </div>
                  </div>
                </div>
                <div class="filter_box active">
                  <div class="filter_title">
                    <a href="#">AGE RANGE</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio1" id="radio1" value="option1">
                        <label for="radio1">
                          20s
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio1" id="radio2" value="option2">
                        <label for="radio2">
                          30s
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio1" id="radio3" value="option2">
                        <label for="radio3">
                          40s
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio1" id="radio4" value="option2">
                        <label for="radio4">
                          50s +
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio1" id="radio5" value="option2">
                        <label for="radio5">
                          Teens
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">BRANDS</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">FORMULATION</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">CONCERN</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">FINISH</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">SPF</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">BENEFITS</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">COLOR FAMILY</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">COVERAGE</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">RESULTS</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">TYPE</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">SKIN TYPE</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box">
                  <div class="filter_title">
                    <a href="#">VOLUME</a>
                  </div>
                  <div class="filter_cont">
                    <div class="comm_radio">
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio11" value="option1">
                        <label for="radio11">
                          ELF
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio21" value="option2">
                        <label for="radio21">
                          NYX
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio31" value="option2">
                        <label for="radio31">
                          MAXFACTOR
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio41" value="option2">
                        <label for="radio41">
                          FENTY BEAUTY
                        </label>
                      </div>
                      <div class="radio radio-primary">
                        <input type="radio" name="radio11" id="radio51" value="option2">
                        <label for="radio51">
                          L’OREAL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cat_prodarea">
                <div class="prod_repeater">
                  <div class="prod_repeat prod_repeat1">
                    <a class="prod_image" href="#">
                      <img src="../images/item-1@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">MAXFACOR</a></h4>
                      <p>Miracle Touch Foundation</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="../images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="../images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="../images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat2">
                    <a class="prod_image" href="#">
                      <img src="../images/item-2@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">CLINIQUE</a></h4>
                      <p>Even Better Glow</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="../images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="../images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="../images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat3">
                    <a class="prod_image" href="#">
                      <img src="../images/item-3@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">ELF</a></h4>
                      <p>Glossy Lipstick</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="../images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="../images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="../images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat1">
                    <a class="prod_image" href="#">
                      <img src="../images/item-4@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">NYX</a></h4>
                      <p>Eyeshadow Palette</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="../images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="../images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="../images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat2">
                    <a class="prod_image" href="#">
                      <img src="../images/item-2@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">CLINIQUE</a></h4>
                      <p>Even Better Glow</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="../images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="../images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="../images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat3">
                    <a class="prod_image" href="#">
                      <img src="../images/item-3@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">ELF</a></h4>
                      <p>Glossy Lipstick</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="../images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="../images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="../images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
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
                  <button><img src="../images/tail-right.svg" alt="tail-right"></button>
                </form>
                <h6>Secure Payments</h6>
                <img src="../images/group-18.svg" alt="payments">
              </div>
            </div>
          </div>
          <hr>
          <div class="row copy_right">
            <div class="col-sm-3 col-xs-6">
              <a href="index.html" class="foot_logo"><img src="../images/logo-white.svg" alt="logo"></a>
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
  export default {

  }
</script>
