<template>
  <div>

    resend verification link=>
    <button
      @click="sendVerLink"
    >
      resend verfication link
    </button>

  </div>
</template>

<script>
  //
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //
  export default {
    //
    methods:{
      ...mapMutations([
        'sendVerLink'
      ])
    },
    //
    computed:{
      ...mapGetters([
        'user'
      ])
    }
  }
</script>
