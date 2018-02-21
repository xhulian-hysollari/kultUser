<template>
  <div>

    <div class="home_hero">
      <div class="container">
        <div class="hero_content text-center">
          <h2>We Believe In Beauty Without Boarders</h2>
          <p>Which is why we scour the globe to bring you the best buys.</p>
        </div>
      </div>
    </div>
    <div class="intro_list">
      <div class="container">
        <ul>
          <li>
            <img src="/static/images/wallet-2.svg" alt="wallet">
            <strong>Shop beauty</strong>
            Assorted products to choose from
          </li>
          <li>
            <img src="/static/images/price-1.svg" alt="price">
            <strong>The best price</strong>
            Compare and get the best price
          </li>
          <li>
            <img src="/static/images/thumbs-up.svg" alt="thumbs-up">
            <strong>Trusted vendor</strong>
            Top rated sellers based on reviews
          </li>
          <li>
            <img src="/static/images/protect.svg" alt="protect">
            <strong>Customer protection</strong>
            Over   6,500 purchases is protected
          </li>
        </ul>
      </div>
    </div>
    <div class="container text-center">
      <div class="top_tags">
        <h3>Trending Searches</h3>
        <ul>
          <li @click="$router.push('/productCategory/BATH AND BODY/BODY MOISTURIZERS')"><a >Body Moisturizer</a></li>
          <li @click="$router.push('/productSubCategory/MEN/FRAGRANCE/PERFUMES')"><a >Men’s Perfume</a></li>
          <li @click="$router.push('/productSubCategory/MAKEUP/ACCESSORIES/MAKE UP REMOVER')"><a >Makeup Remover</a></li>
          <li @click="$router.push('/productSubCategory/MAKEUP/LIPS/LIPGLOSS')"><a >Glossy Lipstick</a></li>
          <li @click="$router.push('/productSubCategory/HAIR/HAIR TOOLS/HAIR DRYERS')"><a >Hair Dryers</a></li>
          <li @click="$router.push('/productSubCategory/MAKEUP/EYES/EYESHADOW')"><a >Eye Shadows</a></li>
          <li @click="$router.push('/productSubCategory/MAKEUP/LIPS/LIP TREATMENT')"><a >Lip Sunscreen</a></li>
          <li @click="$router.push('/productSubCategory/HAIR/SHAMPOO & CONDITIONER/DRY SHAMPOO')"><a >Dry Shampoo</a></li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="comm_product_list">
      <div class="container text-center">
        <div class="comm_title" @click="goTo('/globalBestseller')">
          <h3>Global Best Sellers</h3>
          <a >Browser all <img src="/static/images/right-arrow-1.svg" alt="arrow" ></a>
        </div>
        <div >
          <div >
            <el-row :gutter="15" >
              <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(pDet, pId) in homeGlobalProd"
              >
                <div>
                  <div class="grid-content pa-2" >
                    <a class="prod_image"  @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">
                      <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                    </a>
                    <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">
                      <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                      <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                    </div>
                    <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">
                      <div class="float" ><rating :num="Math.round(pDet.pBasicDetail.pRating)" ></rating></div>
                      <div class="half text-right" >
                      <span v-if="parseInt(pDet.priceStartsFrom) == 999999999" style="float: right" class="half text-right">
                        Out Of Stock
                      </span>
                        <div v-else-if="parseInt(pDet.priceStartsFrom) <= 10000 ">
                          From <img src="/static/images/rupee-2.svg" alt="currency" >
                          {{pDet.priceStartsFrom}}
                        </div>
                        <div v-else></div>
                      </div>
                    </div>
                    <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})" class="float">Compare price</span>
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                      <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                    </a>
                    <a  class="prod_compare"  v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})" class="float">Compare price</span>
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                    </a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="home_intro">
      <div class="text-right">
        <img class="main_img" src="/static/images/hero-woman@2x.jpg" alt="hero">
      </div>
      <div class="intro_cont">
        <div class="container">
          <div class="intro_texts">
            <img src="/static/images/cosmetics-tools@2x.jpg" alt="cosmetics-tools">
            <h2>A New Way For Beauty</h2>
            <p>
              Makeup is no different than clothes and accessories -
              it's embellishments for your face. And it also gives you
              creative freedom.
            </p>
            <a >COMPARE PRICES</a>
          </div>
        </div>
      </div>
    </div>
    <div class="home_cats">
      <div class="container-fluid text-center">
        <div class="comm_title" @click="$router.push('/brandAll')">
          <h3>Most Selling</h3>
          <a >Browser all <img src="/static/images/right-arrow-1.svg" alt="arrow"></a>
        </div>
        <ul class="maincats_list">
          <li @click="$router.push(`brandProduct/NEUTROGENA`)">
            <a >
              <img src="/static/images/items-5@2x.jpg" alt="item">
              <span class="cat_name"><span>NEUTROGENA CREAM</span></span>
            </a>
          </li>
          <li @click="$router.push(`brandProduct/PHILIPS`)">
            <a >
              <img src="/static/images/item-6@2x.jpg" alt="item">
              <span class="cat_name"><span>PHILIPS HAIR DRYER</span></span>
            </a>
          </li>
          <li @click="$router.push(`brandProduct/CERAVE`)">
            <a >
              <img src="/static/images/item-7@2x.jpg" alt="item">
              <span class="cat_name"><span>CERAVE CLEANSER</span></span>
            </a>
          </li>
          <li @click="$router.push(`brandProduct/SEPHORA COLLECTION`)">
            <a >
              <img src="/static/images/item-8@2x.jpg" alt="item">
              <span class="cat_name"><span>POWDER SET</span></span>
            </a>
          </li>
          <li @click="$router.push(`brandProduct/MAC`)">
            <a >
              <img src="/static/images/item-9@2x.jpg" alt="item">
              <span class="cat_name"><span>MAC BEAUTY</span></span>
            </a>
          </li>
          <li @click="$router.push(`brandProduct/DIOR`)">
            <a >
              <img src="/static/images/item-10@2x.jpg" alt="item">
              <span class="cat_name"><span>DIOR LIPSTICK</span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="news_subscribe">
      <div class="container text-center">
        <div class="subscribe_box">
          <div class="subscribe_cont">
            <img src="/static/images/gifts.svg" alt="gifts">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get Sale Alerts and Free Expert Insider’s Guide to Best Beauty Buys</p>
          </div>
          <div class="subscribe_form">
            <div class="row">
              <div class="col-xs-4 text-left">
                <label class="check_item">Latest products</label>
              </div>
              <div class="col-xs-4 text-center">
                <label class="check_item">Weekly news</label>
              </div>
              <div class="col-xs-4 text-right">
                <label class="check_item">Monthly digest</label>
              </div>
            </div>
            <div class="fields">
              <input type="text" placeholder="E-mail address"  v-model="$store.state.gen.newsLetterEmail" class="form-control">
              <button @click="newsletter_saveEmail"><img src="/static/images/send-now.svg" alt="send-now"></button>
            </div>
            <p class="sm">Every month our subscribers get awesome updates</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comm_product_list">
      <div class="container text-center">
        <div class="comm_title" @click="$router.push('/kultPick')">
          <h3>Just Arrived</h3>
          <a >Browser all <img src="/static/images/right-arrow-1.svg" alt="arrow"></a>
        </div>
        <div >
          <div >
            <el-row :gutter="15" >
              <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(pDet, pId) in homeJustArrived"
              >
                <div>
                  <div class="grid-content pa-2" >
                    <a class="prod_image"  @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">
                      <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                    </a>
                    <div class="prod_cont" @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">
                      <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                      <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                    </div>
                    <div class="prod_misc" @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">
                      <div class="float" ><rating :num="Math.round(pDet.pBasicDetail.pRating)" ></rating></div>
                      <div class="half text-right" >
                      <span v-if="parseInt(pDet.priceStartsFrom) == 999999999" style="float: right" class="half text-right">
                        Out Of Stock
                      </span>
                        <div v-else-if="parseInt(pDet.priceStartsFrom) <= 10000 ">
                          From <img src="/static/images/rupee-2.svg" alt="currency" >
                          {{pDet.priceStartsFrom}}
                        </div>
                        <div v-else></div>
                      </div>
                    </div>
                    <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})" class="float">Compare price</span>
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                      <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                    </a>
                    <a  class="prod_compare"  v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})" class="float">Compare price</span>
                      <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                    </a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="home_impcats">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xs-12 comm_imp" @click="$router.push('/howTo?selVidCat=MAKEUP')">
            <div class="image_box">
              <div class="cont_part">
                <h4>
                  WATCH VIDEO AND
                  GET INSPIRED.
                </h4>
                <p>
                  Explore Advice, Different Looks,
                  How-to’s
                </p>
              </div>
              <img src="/static/images/item-11@2x.jpg" alt="item">
            </div>
            <div class="title_part">
              <h5>Running Late Routine</h5>
              <a class="title_link">5 Minutes Makeup Look.</a>
              <a class="go_btn" ><img src="/static/images/player.svg" alt="player"></a>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 comm_imp" @click="$router.push('/bGuide/Blush')">
            <div class="image_box">
              <div class="cont_part">
                <h4>
                  BUYING GUIDES
                </h4>
                <p>
                  Buying guide is your know -
                  All personal beauty advisor.
                </p>
              </div>
              <img src="/static/images/item-12@2x.jpg" alt="item">
            </div>
            <div class="title_part">
              <h5>See Beauty Guides</h5>
              <a  class="title_link">Learn More</a>
              <a class="go_btn" ><img src="/static/images/player.svg" alt="player"></a>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 comm_imp"  @click="$router.push('/howTo?selVidCat=NAILS')">
            <div class="image_box">
              <div class="cont_part">
                <h4>
                  RED LIPS <br>
                  NAIL ART
                </h4>
              </div>
              <img src="/static/images/item-13@2x.jpg" alt="item">
            </div>
            <div class="title_part">
              <h5>Watch Video and Get Inspired</h5>
              <a  class="title_link">Shop Product</a>
              <a class="go_btn" ><img src="/static/images/player.svg" alt="player"></a>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 comm_imp" @click="$router.push('/howTo?selVidCat=MAKEUP')">
            <div class="image_box">
              <div class="cont_part">
                <h4>
                  TIPS TO CONTOUR
                  YOUR NOSE
                </h4>
              </div>
              <img src="/static/images/item-14@2x.jpg" alt="item">
            </div>
            <div class="title_part">
              <h5>Watch Video and Get Inspired</h5>
              <a  class="title_link">Shop Product</a>
              <a class="go_btn" ><img src="/static/images/player.svg" alt="player"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="customer_review">
      <div class="container text-center">
        <div class="review_box">
          <h3>Customer Reviews</h3>
          <ul class="list-unstyled list-inline">
            <li><img src="/static/images/rating-stars.svg" alt="rating"></li>
            <li><strong>Best Price Ever</strong></li>
          </ul>
          <p>
            I love the way the way they lay out the price comparison and very quick to make decision and order right away.
            I’m not a huge make-up wearer so this is great for me. I will definitely recommend Kult  to my friends.  Thank you!
          </p>
          <div class="tweet_box">
            <a class="twitter_link" ><img src="/static/images/logo-twitter.svg" alt="twitter"></a>
            <img src="/static/images/helen-p@2x.jpg" alt="helen">
            <p>
              <strong>Helen Parker</strong>
              Mumbai, India.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="insta_sec">
      <div class="container text-center">
        <h3>Shop Our Instagram</h3>
        <a class="insta_outlink"  target="_blank"><img src="/static/images/instagram.svg" alt="instagram"> @kult.in</a>
        <p style="visibility: hidden">dskfn</p>
        <div>
          <div class="col-lg-1 visible-lg"></div>
          <div class="col-lg-2 visible-lg"  v-for="i in slider">
            <div class="hovereffect">
              <img class="img-responsive" :src="i.img"  alt="">
              <div class="overlay" >
                <a class="info" target="_blank" :href="i.url">OPEN</a>
              </div>
            </div>
          </div>
          <div class="col-lg-1 visible-lg"></div>
        </div>

        <div>
          <div class="col-xs-1 visible-xs"></div>
          <div class="col-xs-2 visible-xs"  v-for="i in slider">
            <div class="hovereffect">
              <img target="_blank" @click="openInNewTab(i.url)" class="img-responsive" :src="i.img"  alt="">
            </div>
          </div>
          <div class="col-xs-1 visible-xs"></div>
        </div>

        <div class="client_logo">
          <img class="hidden-xs" src="/static/images/brands.svg" alt="brands">
          <img class="visible-xs" src="/static/images/brands-mobile.svg" alt="brands">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import rating from '@/components/rating'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return{
        slider:[
          {img: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/sh0.08/e35/23970197_148114855948390_3288466028287229952_n.jpg",
            url: 'https://www.instagram.com/p/BcCc95wlGew/'},
          {img: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/sh0.08/e35/24174861_1440082859374873_8749213935208497152_n.jpg",
            url: 'https://www.instagram.com/p/BcBuS-fFbp0/'},
          {img:  "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/sh0.08/e35/24126740_168923103843096_6886462610066112512_n.jpg",
            url: 'https://www.instagram.com/p/Bb9uN_cFIy0/'},
          {img:"https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/s320x320/23966995_195058901040355_3087356804582080512_n.jpg",
            url: 'https://www.instagram.com/p/Bb7BffqFf6M/'},
          {img: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/sh0.08/e35/23967206_154084275216421_5255013097927606272_n.jpg",
            url: 'https://www.instagram.com/p/Bb6TMQxlYua/'},
        ]
      }
    },
    methods: {
      ...mapMutations([
        'goTo',
        'newsletter_saveEmail',
        'addWishlist',
        'removeWishlist'
      ]),
      openInNewTab(url){
        window.open(
          url,
          '_blank' // <- This is what makes it open in a new window.
        );
      }
    },
    created(){

    },
    components:{
      rating
    },
    computed:{
      ...mapGetters([
        'isLoggedIn',
        'wishlistObj',
        'homeGlobalProd',
        'homeJustArrived'

      ])
    }
  }
</script>
<style scoped>
  .prod_compare {
    padding-bottom: 24px;
    /* padding-right: 15px; */
  }
  .insta_sec {
    padding: 40px 0;
    max-height: 700px !important;
  }

  .hovereffect {
    width:100%;
    height:100%;
    float:left;
    overflow:hidden;
    position:relative;
    text-align:center;
    cursor:default;
  }

  .hovereffect .overlay {
    width:100%;
    height:100%;
    position:absolute;
    overflow:hidden;
    top:0;
    left:0;
    opacity:0;
    background-color:rgba(0,0,0,0.5);
    -webkit-transition:all .4s ease-in-out;
    transition:all .4s ease-in-out
  }

  .hovereffect img {
    display:block;
    position:relative;
    -webkit-transition:all .4s linear;
    transition:all .4s linear;
  }

  .hovereffect h2 {
    text-transform:uppercase;
    color:#fff;
    text-align:center;
    position:relative;
    font-size:17px;
    background:rgba(0,0,0,0.6);
    -webkit-transform:translatey(-100px);
    -ms-transform:translatey(-100px);
    transform:translatey(-100px);
    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
    padding:10px;
  }

  .hovereffect a.info {
    text-decoration:none;
    display:inline-block;
    text-transform:uppercase;
    color:#fff;
    border:1px solid #fff;
    background-color:transparent;
    opacity:0;
    filter:alpha(opacity=0);
    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
    margin:50px 0 0;
    padding:7px 14px;
  }

  .hovereffect a.info:hover {
    box-shadow:0 0 5px #fff;
  }

  .hovereffect:hover img {
    -ms-transform:scale(1.2);
    -webkit-transform:scale(1.2);
    transform:scale(1.2);
  }

  .hovereffect:hover .overlay {
    opacity:1;
    filter:alpha(opacity=100);
  }

  .hovereffect:hover h2,.hovereffect:hover a.info {
    opacity:1;
    filter:alpha(opacity=100);
    -ms-transform:translatey(0);
    -webkit-transform:translatey(0);
    transform:translatey(0);
  }

  .hovereffect:hover a.info {
    -webkit-transition-delay:.2s;
    transition-delay:.2s;
  }
  .float{
    float: left;
  }
</style>
