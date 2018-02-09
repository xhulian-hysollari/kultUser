<template>
  <div>
    <div>

        <div class="top_sortarea">
          <div class="container">
            <div class="row">
              <div class="col-xs-5" >
                <p>
                  <img class="filter_icon" src="/static/images/filter.svg" alt="filter" @click="filters($event)" >
                  FILTER
                  <a href="#" class="visible-xs mob_filter" @click="filters($event)"></a>
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
                  <div class="filter_title">
                    <span class="hide_toggler">{{toggler}}</span>
                    <a>ACTIVE FILTER <span>{{cnt}}</span></a>
                  </div>
                  <div v-for="(filteNameContent, filterName) in filter">
                    <div v-show="filterBoxes[filterName]===false">
                      <div class="filter_box" >
                        <div class="filter_title">
                          <a href="#" @click="closeFilter(filterName)">{{filterName}}</a>
                        </div>
                      </div>
                    </div>
                    <div v-show="filterBoxes[filterName]===true || filterBoxes[filterName]===undefined">
                      <div class="filter_box active" >
                        <div class="filter_title">
                          <a href="#" @click="closeFilter(filterName)">{{filterName}}</a>
                        </div>
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
                    <el-col :xs="12" :sm="12" :md="8" :lg="8" v-for="(pDet, pId) in products" >
                      <div @click="goTo('/particularProduct/' + pId)">
                        <div class="grid-content pa-2" >
                          <a class="prod_image" href="#">
                            <img :src="pDet.pBasicDetail.pPicUrl" alt="product">
                          </a>
                          <div class="prod_cont">
                            <h4><a href="#">{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <p>{{pDet.pBasicDetail.pName}}</p>
                          </div>
                          <div class="prod_misc">
                            <div class="float"><rating :num="Math.round(pDet.pBasicDetail.pRating)" ></rating></div>
                            <div class="half text-right">From <img src="/static/images/rupee-2.svg" alt="currency"> 2,036</div>
                          </div>
                          <a href="#" class="prod_compare">Compare price <img src="/static/images/wishlist-add.svg" alt="wishlist-add"></a>
                          <a href="#" class="go_store">Go to store</a>
                        </div>
                      </div>
                    </el-col>
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
    <!--div v-for="(pDet, pId) in products" @click="goTo('/particularProduct/' + pId)">
      {{pId}}
      {{pDet}}
    </div-->
    <!--infinite-loading @infinite="loadMoreProducts({
      routePath: routeDet.routePath
    })">
      <span slot="no-more"></span>
      <span slot="no-results"></span>
    </infinite-loading-->


    <!-- load more button --> <!-- only for product, hide for filter products -->
    <button @click="loadMoreProducts({
      routePath: routeDet.routePath
    })">
      Load More Button => Products of Category i.e Face.....
    </button>
    <!--load more button ends -->
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  import rating from '@/components/rating'
  //
  import productNfilter from '../../mixins/productNfilter'
  import VIcon from "vuetify/es5/components/VIcon/VIcon";
  //
  export default{
    //
    data(){
      return{
        cnt:0,
        filterBoxes:[],
        toggler:false
      }
    },
    components: {
      VIcon,
      rating,
      infiniteLoading:InfiniteLoading
    },
    mixins:[productNfilter],
    props: ['routeDet'],
    //
    methods:{
      ...mapMutations([
        'loadMoreProducts','goTo'
      ]),
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
        'productsLoader' // till products are loaded this is true
      ])
    },
    //
   updated(){
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
      window.thisOfVueComp = this
      //
      this.productsOrFilterProducts_initCompCreatedFunc({
        //
        thisOfVueComp: this, //
        routePath: this.routeDet.routePath, // (1) these should be props
        routeQuery: this.routeDet.routeQuery // (2)
        //
      })
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
</style>
