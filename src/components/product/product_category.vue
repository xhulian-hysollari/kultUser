<template>
  <div>

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
                <img class="filter_icon" src="/static/img/images/filter.svg" alt="filter">
                FILTER
                <a href="#" class="visible-xs mob_filter"></a>
              </p>
            </div>
            <div class="col-xs-7 text-right">
              <p>
                SORTED BY:
                <span class="sort_by">
                                POPULARITY <img src="/static/img/images/sortby.svg" alt="arrow">
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
                      <img src="/static/img/images/item-1@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">MAXFACOR</a></h4>
                      <p>Miracle Touch Foundation</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="/static/img/images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="/static/img/images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="/static/img/images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat2">
                    <a class="prod_image" href="#">
                      <img src="/static/img/images/item-2@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">CLINIQUE</a></h4>
                      <p>Even Better Glow</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="/static/img/images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="/static/img/images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="/static/img/images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat3">
                    <a class="prod_image" href="#">
                      <img src="/static/img/images/item-3@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">ELF</a></h4>
                      <p>Glossy Lipstick</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="/static/img/images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="/static/img/images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="/static/img/images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat1">
                    <a class="prod_image" href="#">
                      <img src="/static/img/images/item-4@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">NYX</a></h4>
                      <p>Eyeshadow Palette</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="/static/img/images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="/static/img/images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="/static/img/images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat2">
                    <a class="prod_image" href="#">
                      <img src="/static/img/images/item-2@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">CLINIQUE</a></h4>
                      <p>Even Better Glow</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="/static/img/images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="/static/img/images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="/static/img/images/wishlist-add.svg" alt="wishlist-add"></a>
                    <a href="#" class="go_store">Go to store</a>
                  </div>
                  <div class="prod_repeat prod_repeat3">
                    <a class="prod_image" href="#">
                      <img src="/static/img/images/item-3@2x.jpg" alt="product">
                    </a>
                    <div class="prod_cont">
                      <h4><a href="#">ELF</a></h4>
                      <p>Glossy Lipstick</p>
                    </div>
                    <div class="prod_misc">
                      <div class="half"><img src="/static/img/images/rate-4.svg" alt="rating"></div>
                      <div class="half text-right">From <img src="/static/img/images/rupee-2.svg" alt="currency"> 2,036</div>
                    </div>
                    <a href="#" class="prod_compare">Compare price <img src="/static/img/images/wishlist-add.svg" alt="wishlist-add"></a>
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
</template>

<script>
  export default {
    created(){
      this.$store.commit('getCategoryProducts', {
        //
        shopOption: this.$route.params.shopOption,
        category: this.$route.params.category
        //
      })
    }
  }
</script>
