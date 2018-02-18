<template>
  <div>

    <loader v-if="productsLoader"></loader>
    <div v-if="!productsLoader">

        <div class="top_sortarea">
          <div class="container min_hight_prod">
            <div class="row">
              <div class="col-xs-5" >
                <p>
                  <img class="filter_icon" src="/static/images/filter.svg" alt="filter" @click="filters($event)" >
                  FILTER
                  <a  class="visible-xs mob_filter" @click="filters($event)"></a>
                </p>
              </div>
              <div class="col-xs-7 text-right">

              </div>
            </div>
          </div>
        </div>

        <div class="main_catarea">
          <div class="container">
            <div class="row">
              <div >

                <div class="side_filterbox">
                  <div class="tv_left"  v-if="$route.path.indexOf('global') != -1 || $route.path.indexOf('/kultPick') != -1">
               <div class="howto">Shop</div>
               <ul v-for="(shopOptionDet, shopOption) in shopOptions" >
                 <li  class="active" v-if="$route.params.shopOption===shopOption" >
                   <a>
                     <span >{{shopOption}}</span>
                   </a>
                 </li>
                 <li v-else>
                   <a   @click="goTo('/globalBestSeller/shopOption/' + shopOption);
                   $route.params.shopOption=shopOption"
                        v-if="$route.path.indexOf('global') != -1"
                   >
                     <span >{{shopOption}}</span>
                   </a>
                   <a   @click="goTo('/kultPick/shopOption/' + shopOption);
                   $route.params.shopOption=shopOption"
                        v-if="$route.path.indexOf('/kultPick') != -1"
                   >
                     <span >{{shopOption}}</span>
                   </a>
                 </li>
               </ul>
             </div>
                  <div class="filter_title">
                    <span class="hide_toggler">{{toggler}}</span>
                    <a>ACTIVE FILTER <span>{{cnt}}</span></a>
                  </div>
                  <div v-for="(filteNameContent, filterName) in filter">
                    <div v-show="filterBoxes[filterName]===false">
                      <div class="filter_box" >
                        <div class="filter_title">
                          <a  @click="closeFilter(filterName)">{{filterName}}</a>
                        </div>
                      </div>
                    </div>
                    <div v-show="filterBoxes[filterName]===true || filterBoxes[filterName]===undefined">
                      <div class="filter_box active" >
                        <div class="filter_title">
                          <a  @click="closeFilter(filterName)">{{filterName}}</a>
                        </div>



                        <!--div v-for="(filteNameContent, filterName) in filter">
                          {{filterName}}
                          <div v-for="(fitlerParaContent, filterPara) in filteNameContent">
                            <div @click="sel_disSel_thisFilter({
          sel_filterDetail : {
            filterName : filterName,
            filterPara: filterPara,
          },
          //
          routePath: routeDet.routePath , //add filter later
          //
          compRoutePath: routeDet.compRoutePath
          })"
                            >
                              {{filterPara}}

                              <span v-if=" Object.keys(selectedFilters).indexOf(filterName) != -1 ">
            <span v-if=" Object.keys(selectedFilters[filterName]).indexOf(filterPara) != -1 ">
              tick !
            </span>
          </span>

                            </div>
                          </div>
                        </div-->
                        <!--div class="filter_cont">
                          <div class="comm_radio">
                            <div class="radio radio-primary" v-for="para in priceArr" @click="sel_disSel_thisFilter({
                            sel_filterDetail : {
                              filterName : 'priceRange',
                              filterPara: priceArr[para],
                            },

                              routePath: routeDet.routePath , //add filter later
                              //
                              compRoutePath: routeDet.compRoutePath
                              })">
                             <span v-if=" Object.keys(selectedFilters).indexOf('priceRange') != -1 ">
                              <span v-if=" Object.keys(selectedFilters[priceArr[para]]).indexOf(priceArr[para]) != -1 ">
                                <div class="selected_filter" >
                                  <span><i class="material-icons ">radio_button_checked</i></span>
                                  <span class="radio_btn">{{priceArr[para]}}</span>
                                </div>
                              </span>
                               <div v-else class="unselected_filter">
                                 <span><i class="material-icons" >radio_button_unchecked</i></span>
                                 <span class="radio_btn" >{{priceArr[para]}}</span>
                               </div>
                            </span>
                              <div v-else class="unselected_filter">
                                <span><i class="material-icons" >radio_button_unchecked</i></span>
                                <span class="radio_btn" >{{fpriceArr[para]}}</span>
                              </div>
                            </div>
                          </div>
                        </div-->

                        <div class="filter_cont">
                          <div class="comm_radio">
                            <div class="radio radio-primary" v-for="(fitlerParaContent, filterPara) in filteNameContent" @click="sel_disSel_thisFilter({
                            sel_filterDetail : {
                              filterName : filterName,
                              filterPara: filterPara,
                            },

                              routePath: routeDet.routePath , //add filter later
                              //
                              compRoutePath: routeDet.compRoutePath
                              })">
                             <span v-if=" Object.keys(selectedFilters).indexOf(filterName) != -1 ">
                              <span v-if=" Object.keys(selectedFilters[filterName]).indexOf(filterPara) != -1 ">
                                <div class="selected_filter" >
                                  <span><i class="material-icons ">radio_button_checked</i></span>
                                  <span class="radio_btn">{{filterPara}}</span>
                                </div>
                              </span>
                               <div v-else class="unselected_filter">
                                 <span><i class="material-icons" >radio_button_unchecked</i></span>
                                 <span class="radio_btn" >{{filterPara}}</span>
                               </div>
                            </span>
                              <div v-else class="unselected_filter">
                                <span><i class="material-icons" >radio_button_unchecked</i></span>
                                <span class="radio_btn" >{{filterPara}}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cat_prodarea">
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8" v-for="(pDet, pId) in products"
                           >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image" >
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`,query:{prodDet:JSON.stringify(pDet)}})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>
                    {{productsLoader}}
                    <button class="login_btn load_more_btn"
                    v-if="loadMoreLoader">
                      <i class='fa fa-spinner fa-spin ' ></i>
                    </button>
                    <button class="login_btn load_more_btn" @click="loadMoreProducts({
                      routePath: routeDet.routePath
                    })" v-if="Object.keys(products).length !== totalProds && !loadMoreLoader && Object.keys(products).length !== 0">
                      Load {{totalProds - Object.keys(products).length}} More Products
                    </button>
                  </el-row>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
    </div>


  <!-- PRODUCTS=>
    <!-- if a product doesnot have priceStartsFrom or have value such as NaN or 999999999, the product is out of stock -->
   <!-- <div v-for="(pDet, pId) in products" @click="goTo('/particularProduct/' + pId)">
      {{pId}}
      {{pDet}}
    </div> -->
    <!--infinite-loading @infinite="loadMoreProducts({
      routePath: routeDet.routePath
    })">
      <span slot="no-more"></span>
      <span slot="no-results"></span>
    </infinite-loading-->


    <!-- load more button --> <!-- only for product, hide for filter products -->
    <!--load more button ends -->
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  import rating from '@/components/rating'
  import loader from '@/components/gen/loader'
  //
  import productNfilter from '../../mixins/productNfilter'
  import VIcon from "vuetify/es5/components/VIcon/VIcon";
  //
  export default{
    //
    data(){
      return{
        cnt:0,
        sel:'',
        filterBoxes:[],
        toggler:false,
        priceArr:[
          '0 - 499',
          '500 - 999',
          '1000 - 1499',
          '1500 - 1999',
          '2000 - 2999',
          '3000 - 3999',
          '4000 - 4999',
          '5000 - 10000'
        ]
      }
    },
    components: {
      VIcon,
      rating,
      infiniteLoading:InfiniteLoading,
      loader
    },
    mixins:[productNfilter],
    props: ['routeDet'],
    //
    methods:{
      ...mapMutations([
        'loadMoreProducts','goTo',
        'addWishlist',
        'removeWishlist'
      ]),
      timeout(){
        setTimeout(()=>{ this.$forceUpdate() },1500)
      },
      closeFilter(name){
        if(this.filterBoxes[name] !== false){
          this.filterBoxes[name]=false
          //alert(this.filterBoxes[name])
        }else{
          this.filterBoxes[name]=true
         // alert(this.filterBoxes[name])
        }
        setTimeout(()=>{
          this.toggler = !this.toggler
        },50)
      },
      filters(event){
        let vm = this
        console.log(event)
         // event.preventDefault();
          $(vm).parents('.filter_box').toggleClass('active');
          event.preventDefault();
          $('.side_filterbox').toggleClass('active');
          $('.cat_prodarea').toggleClass('active');
      }
    },
    //
    computed:{
      ...mapGetters([
        'filter', // all filters // to show all filters properly on DOM
        'filterLoader', // till filter is not loaded this is true.
        'products', // all products gets loaded in this, show in DOM
        'productsLoader', // till products are loaded this is true
        'wishlistObj',
        'isLoggedIn',
        'totalProds',
        'shopOptions',
        'loadMoreLoader'

      ])
    },
    watch:{
      $route:function () {
        let vm = this
        this.$store.commit('getLoadMoreCnt',vm.routeDet.routePath)
      }
    },
    //
   updated(){
      let vm = this
     this.$store.commit('getLoadMoreCnt',vm.routeDet.routePath)
      //console.log(this.$store.state.product.products)
      if(this.$router.currentRoute.fullPath.indexOf('selFilters') !== -1){
        if(this.$router.currentRoute.fullPath.indexOf('selFilters=%7B%7D') === -1)
          this.cnt = this.$router.currentRoute.fullPath.split(',').length
        else
          this.cnt = 0
      }else{
        this.cnt = 0
      }
    // this.filterBoxes=[]
     //filter=Object.keys(this.$store.state.filter.filter)
   },
    created(){
     let vm = this
     console.log('------------------------------------')
     console.log(this.routeDet)
      window.thisOfVueComp = this
      //
      //
      this.productsOrFilterProducts_initCompCreatedFunc({
        //
        thisOfVueComp: this, //
        routePath: this.routeDet.routePath, // (1) these should be props
        routeQuery: this.routeDet.routeQuery // (2)
        //
      })

      this.$store.commit('getLoadMoreCnt',vm.routeDet.routePath)
      alert(vm.routeDet.routePath)
      //setTimeout(()=>{this.$forceUpdate()},3000)
    }
  }
</script>
<style>
  .hide_toggler{
    visibility: hidden;
  }
  .float{
    float: left;
  }
  material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    float: left;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
  .radio_btn{
    margin-left: 5px;
    text-align: left;
    margin-top: 4px
  }
  .selected_filter{
    color: #eca8b5;
    display: flex
  }
  .unselected_filter{
   color: #959595;
    display: flex
  }
  .load_more_btn{
    margin-top: 40px !important;
    display: initial !important;
  }
  .min_height_prod{
    min-height: 900px;
  }
  .tv_left ul {
    padding: 0;
    margin: 0px 0 !important;
    list-style: none;
  }

  padding_class{
    padding-left: 15px !important;
    padding-right: 5px !important;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px !important;
  }
</style>
