<template>
  <div>
    <div id="right_tab6" class="right_tabs active" style="margin-top: 30px">
      <input type="text" placeholder="Enter Phone Number"  v-model="$store.state.auth.number" class="form-control">
    </div>
    <div id="right_tab7" class="right_tabs active" style="margin-top: 30px">
      <input type="text" placeholder="Enter Refral Code"  v-model="$store.state.auth.refCode" class="form-control">
    </div>
    <div id="right_tab4"class="right_tabs active text-center" >
      <el-button style="background-color:  #eca8b5;" class="text-center"
                 @click="afterLogin_userDetail({
                 phone:$store.state.auth.number,
                 refCode:$store.state.auth.refCode
                 })"
      >
        CONFIRM
      </el-button>
      <el-button style="background-color:  #eca8b5;" class="text-center" data-dismiss="modal">
        CANCEL
      </el-button>
    </div>

  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  //
  export default {
    computed:{
      ...mapGetters([

      ])
    },
    methods:{
      ...mapMutations([
        'afterLogin_userDetail'
      ])
    }
  }
</script>
