<template>
  <div>



    <div class="banner_strip"></div>
    <main>
      <div class="container">
        <div class="brands_title">
          <h2>Brand List</h2>
        </div>
      </div>
      <div class="container brands">
        <div class="row brands_row">
          <div class="col-sm-3 col-xs-12 brands_column" v-for="i in alphabet">
            <h1>{{i}}</h1>
            <div class="brands_list">
              <ul>
                <li v-for="(brandDet ,brand) in allBrands"  v-if="brand[0] === i">
                  <a href="#">{{brand}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>




    <div v-for="(brandDet ,brand) in allBrands">
      <span @click="goTo('/brandProduct/' + brand)">{{brand}}</span>
    </div>
    {{allBrands}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //
  export default {
    data(){
      return{
        alphabet:[
          'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
        ]
      }
    },
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('getAllBrands', {
        // no para
      })
    },
    computed:{
      ...mapGetters([
        'allBrands', // all brands //to show properly on dom
        'allBrandLoader' //loader var for all brands //true => if allBrands is yet not loaded | false => when all brand is loaded
      ])
    },
    methods:{
      ...mapMutations([
        'goTo'
      ])
    }
  }
</script>
