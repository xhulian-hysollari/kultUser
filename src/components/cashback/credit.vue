<template>
  <div>

    <div class="banner_strip"></div>
    <div class="comm_account">
      <div class="container">
        <div class="accont_box">
          <div class="acount_top text-center">
            <a href="#" class="edit_account">
              <img src="/static/images/icon-135-pen-angled.svg" alt="icon">
              Edit Account
            </a>
            <div class="account_pic">
              <div class="acount_name">DG</div>
              <div class="full_name">Deepti Gupta</div>
              <a href="#" target="_blank" class="social_link">@karish2308</a>
            </div>
            <div class="acc_menu">
              <ul>
                <li class="active"><a href="#">CREDIT</a></li>
                <li><a href="#">WISHLIST</a></li>
                <li ><a href="#" >MY ORDER</a></li>
                <li><a href="#">WITHDRAWAL</a></li>
                <li ><a href="#">AMAZON CASHBACK REQUEST</a></li>
              </ul>
            </div>
          </div>

          <div class="acount_btm">
            <loader v-if="myOrderLoader"></loader>
            <div v-else class="text-center">
              <img src="/static/images/coins.svg" alt="credit" class="acount_icon">
              <h4>You have &#x20b9; {{myOrders.walletAmount}} Credits</h4>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import  {mapMutations} from 'vuex'
  //
  import loader from '@/components/gen/loader'
  import btnLoader from '@/components/gen/btnLoader'
  //
  export default {
    //
    components:{
      loader,
      btnLoader
    },
    computed:{
      ...mapGetters([
        'myOrders', 'myOrderLoader'
      ])
    },
    methods:{
      ...mapMutations([

      ])
    },
    created(){
      window.thisOfVueComp = this
      this.$store.commit('getMyOrders')
    }
  }
</script>

<style scoped>
  input[type="file"] {
    display: none;
  }
</style>
