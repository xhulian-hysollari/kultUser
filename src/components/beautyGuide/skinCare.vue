<template>
  <div>
    <div class="banner_strip"></div>

    <div class="main_catarea">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="side_filterbox buy_guide">
              <div class="buy_title hidden-xs">BUYING GUIDES</div>
              <div class="buy_title visible-xs"><a ><i class="fa fa-close"></i></a></div>
              <div  v-for="i in beautyGuideArr">
                <div class="filter_box active" v-if="$route.path.indexOf(i) !== -1">
                  <div class="filter_title ">
                    <a >{{i}}</a>
                  </div>
                </div>
                <div  v-else  @click=" $router.push('/bGuide/'+ i)">
                  <div class="filter_title ">
                    <a >{{i}}</a>
                  </div>
                </div>
              </div>
            </div>
            <el-tabs  v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="20" name="first">
                <div class="min_height">
                  <loader v-if="loader"></loader>
                  <div class="cat_prodarea buy_guide" v-if="!loader">
                    <div class="comm_title text-center">
                      <h3> Treat </h3>
                    </div>
                    <el-row :gutter="15" >
                      <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_20_treat"
                      >
                        <div>
                          <div class="grid-content pa-2" >
                            <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                              <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                            </a>
                            <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                              <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                              <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                            </div>
                            <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                            <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                              <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                              <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                            </a>
                            <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                              <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                            </a>
                          </div>
                        </div>
                      </el-col>



                      <!-- {{$route.query}}
                      {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                      <!-- load more -->
                      <!-- no filter sel -->

                      <!-- show load more -->

                      <!-- load more ends -->


                    </el-row>
                    <div class="divider"></div>
                  </div>
                  <div class="cat_prodarea buy_guide" v-if="!loader">
                    <div class="comm_title text-center">
                      <h3> Moisturize</h3>
                    </div>
                    <el-row :gutter="15" >
                      <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_20_moisturize"

                      >
                        <div>
                          <div class="grid-content pa-2" >
                            <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                              <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                            </a>
                            <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                              <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                              <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                            </div>
                            <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                            <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                              <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                              <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                            </a>
                            <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                              <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                            </a>
                          </div>
                        </div>
                      </el-col>



                      <!-- {{$route.query}}
                      {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                      <!-- load more -->
                      <!-- no filter sel -->

                      <!-- show load more -->

                      <!-- load more ends -->


                    </el-row>
                    <div class="divider"></div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="30" name="second">
                <div class="cat_prodarea buy_guide" >
                  <div class="comm_title text-center">
                    <h3> Treat </h3>
                  </div>
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_30_treat"
                    >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>



                    <!-- {{$route.query}}
                    {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                    <!-- load more -->
                    <!-- no filter sel -->

                    <!-- show load more -->

                    <!-- load more ends -->


                  </el-row>
                  <div class="divider"></div>
                </div>
                <div class="cat_prodarea buy_guide">
                  <div class="comm_title text-center">
                    <h3> Moisturize</h3>
                  </div>
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_30_moisturize"
                    >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>



                    <!-- {{$route.query}}
                    {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                    <!-- load more -->
                    <!-- no filter sel -->

                    <!-- show load more -->

                    <!-- load more ends -->


                  </el-row>
                  <div class="divider"></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="40" name="third">
                <div class="cat_prodarea buy_guide">
                  <div class="comm_title text-center">
                    <h3> Treat </h3>
                  </div>
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_40_treat"
                    >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>



                    <!-- {{$route.query}}
                    {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                    <!-- load more -->
                    <!-- no filter sel -->

                    <!-- show load more -->

                    <!-- load more ends -->


                  </el-row>
                  <div class="divider"></div>
                </div>
                <div class="cat_prodarea buy_guide">
                  <div class="comm_title text-center">
                    <h3> Moisturize</h3>
                  </div>
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_40_moisturize"
                    >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>



                    <!-- {{$route.query}}
                    {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                    <!-- load more -->
                    <!-- no filter sel -->

                    <!-- show load more -->

                    <!-- load more ends -->


                  </el-row>
                  <div class="divider"></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="50" name="fourth">
                <div class="cat_prodarea buy_guide">
                  <div class="comm_title text-center">
                    <h3> Treat </h3>
                  </div>
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_50_treat"
                    >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>



                    <!-- {{$route.query}}
                    {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                    <!-- load more -->
                    <!-- no filter sel -->

                    <!-- show load more -->

                    <!-- load more ends -->


                  </el-row>
                  <div class="divider"></div>
                </div>
                <div class="cat_prodarea buy_guide">
                  <div class="comm_title text-center">
                    <h3> Moisturize</h3>
                  </div>
                  <el-row :gutter="15" >
                    <el-col :xs="12" :sm="12" :md="8" :lg="8"  v-if="parseInt(pDet.priceStartsFrom) != 999999999"  v-for="(pDet, pId) in prod_50_moisturize"
                    >
                      <div>
                        <div class="grid-content pa-2" >
                          <a class="prod_image"   @click="$router.push({path:`/particularProduct/${pId}`})">
                            <img :src="pDet.pBasicDetail.pPicUrl"  style="height:286px " alt="product">
                          </a>
                          <div class="prod_cont"  @click="$router.push({path:`/particularProduct/${pId}`})">
                            <h4><a >{{pDet.pBasicDetail.pBrand}}</a></h4>
                            <span v-for="(i,k) in pDet.pBasicDetail.pName" v-if="k < 20">{{i}}</span><span v-if="pDet.pBasicDetail.pName.length > 20">...</span>
                          </div>
                          <div class="prod_misc"  @click="$router.push({path:`/particularProduct/${pId}`})">
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
                          <a  class="prod_compare" v-if="isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" v-if="Object.keys(wishlistObj).indexOf(pId) === -1" @click="addWishlist({pId,pDet}); wishlistObj[pId] = pDet; $forceUpdate()">
                            <img src="/static/images/wishlist-hover.svg" alt="wishlist-hover" v-if="Object.keys(wishlistObj).indexOf(pId) !== -1" @click="removeWishlist({pId,pDet}); delete wishlistObj[pId]; $forceUpdate()">
                          </a>
                          <a  class="prod_compare" v-if="!isLoggedIn"><span @click="$router.push({path:`/particularProduct/${pId}`})">Compare price</span>
                            <img src="/static/images/wishlist-add.svg" alt="wishlist-add" @click="$store.state.auth.showLoginPopup = true">
                          </a>
                        </div>
                      </div>
                    </el-col>



                    <!-- {{$route.query}}
                    {{Object.keys(JSON.parse($route.query.selFilters)).length}} -->
                    <!-- load more -->
                    <!-- no filter sel -->

                    <!-- show load more -->

                    <!-- load more ends -->


                  </el-row>
                  <div class="divider"></div>
                </div>
              </el-tab-pane>
            </el-tabs>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import rating from '@/components/rating'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import loader from '@/components/gen/searchLoader'
  export default {
    data(){
      return{
        loader:false,
        activeName: 'first',
        prod_20_treat:{},
        prod_20_moisturize:{},
        prod_30_treat:{},
        prod_30_moisturize:{},
        prod_40_treat:{},
        prod_40_moisturize:{},
        prod_50_treat:{},
        prod_50_moisturize:{},
        beautyGuideArr:[
          'Blush',
          'Contouring',
          'Highlighting',
          'Mascaras',
          'Neutral Lips',
          'Acne',
          'Skincare',
          'Sunscreens',
          'Antiaging'
        ]
      }
    },
    components:{
      rating,
      loader
    },
    computed:{
      ...mapGetters([
        'isLoggedIn',
        'wishlistObj'
      ])
    },
    methods:{
      ...mapMutations([
        'addWishlist',
        'removeWishlist'
      ]),
      handleClick(tab, event) {
        console.log(tab, event);
      }

    },
    created(){
      let vm = this
      vm.loader= true
      this.$store.dispatch('getProdFromArr',["972","987","988"]).then(function (response) {
        vm.prod_20_treat=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["2239","1139","1149"]).then(function (response) {
        vm.prod_20_moisturize=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["971","976","977"]).then(function (response) {
       vm.prod_30_treat=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["1141","1142","1138"]).then(function (response) {
       vm.prod_30_moisturize=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["894","979","978"]).then(function (response) {
       vm.prod_40_treat=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["1146","1147","1155"]).then(function (response) {
        vm.prod_40_moisturize=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["983","986","984"]).then(function (response) {
       vm.prod_50_treat=response
        console.log(response)
      })
      this.$store.dispatch('getProdFromArr',["1148","1161","1170"]).then(function (response) {
        vm.prod_50_moisturize=response
        console.log(response)
      }).then(function () {
        setTimeout(()=>{
          vm.loader=false
        },500)
      })
    }
  }
</script>
<style scoped>
  .el-tabs__content {
    overflow: visible !important;
    position: relative;
  }
  .el-tabs__nav {
    left: 38% !important;
    position: relative;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    float: left;
    z-index: 2;
  }
   .min_height{
     min-height: 400px;
   }
</style>
