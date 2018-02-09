<template>
  <div>






    <div class="banner_strip"></div>
    <div class="go_back">
      <div class="container">
        <a href="#" class="go_link"><i class="fa fa-angle-left"></i> Go Back</a>
      </div>
    </div>
    <div class="prod_single">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-xs-12">
            <div class="prod_left">
              <div class="prod_leftmisc">
                <a class="prod_cat" href="#">Make Up</a>
                <h2>FENTY BEAUTY</h2>
                <h3>Fenty Beauty Lip Color</h3>
                <div class="prod_wishadd">
                  <img src="/static/images/rate-2.svg" alt="rate" class="prod_rate">
                  <a href="#"><img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                </div>
              </div>
              <ul class="prod_type_list">
                  <span v-for="i in prodArr" v-if="i.det.swatchImgUrl !== ''"><img :src="i.det.swatchImgUrl"></span>
                  <span v-for="i in prodArr" v-if="i.det.swatchImgUrl === ''">
                    <li  v-if="selected.key!==i.key" @click="selected = i">
                      <a href="#"> {{i.key}}</a>
                    </li>
                    <li  v-if="selected.key===i.key" class="active"><a href="#"> {{i.key}}</a></li>
                  </span>
                </ul>
              <div class="prod_storelinks">
                <div class="store_nos">
                  <!--img src="/static/images/price-2.svg" alt="price">
                  <span>3 - Stores</span>
                  <img src="/static/images/infos.svg" alt="info"-->
                </div>
                <!--div class="prod_pricerange">
                  From <strong>2,036</strong> to <strong>7,999</strong> Rupee
                </div-->
                  <li class="prod_shoplinks list-unstyled">
                    <a v-for="i in selected.det.affliateDomains" :href="i.link" target="_blank">
                     <span style="float: left">{{Object.keys(selected.det.affliateDomains)[0]}}</span>
                      <span  style="float: right" >
                          <strong>BUY NOW</strong>
                      </span>
                    </a>
                  </li>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-xs-12">
            <div class="prod_gallery">
              <div class="gall_main">
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
              <p>
                Inspired by fresh cut blooms in a flower market <br>
                Key Notes: French tulips, waterlily, freesia blossom, sparkling mandarin, sandalwood
              </p>
              <h3>Product Details</h3>
            </div>
            <ul class="prod_social">
              <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
              <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="prod_rel_cats text-center">
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
        </div>
      </div>
    </div>


    <!-- sometimes there isn't price for a domain, in this case hide the links too -->
    {{pTypes}}

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  //
  export default{
    data(){
     return{
       prodArr:[],
       selected:{}
     }
    },
    methods:{
      getProd(){
        this.prodArr=[]
        for(let i in this.$store.state.particularProduct.pTypes){
          let temp = {
            key:i,
            det:this.$store.state.particularProduct.pTypes[i]
          }
          this.prodArr.push(temp)
        }
        console.log(this.prodArr)
      }
    },
    computed:{
      ...mapGetters([
        'pTypes'
      ])
    },
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('getTypeNLinkOfThisProduct', {
        pId: this.$route.params.pId
      })
    },
    beforeMount(){
     this.getProd()
      this.selected=this.prodArr[0]
      console.log(this.selected)
      //force update here
    }
  }
</script>
