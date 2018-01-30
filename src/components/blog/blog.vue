<template>
  <div>

    <div
      v-for="(blogTagDet, blogTagName) in blogTags"
      @click="getBlogsOfThisTag({
        tagName: blogTagName
      })"
    >
      {{blogTagName}}
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //
  export default {
    //
    created(){
      window.thisOfVueComp = this
      //
      this.$store.commit('getBlogs')
      this.$store.commit('getBlogTags')
    },
    //
    methods:{
      ...mapMutations([
        'getBlogsOfThisTag'
      ])
    },
    //
    computed:{
      ...mapGetters([
        'blogs', // blogs & details
        'blogLoader', //loader for blog
        //
        'blogTags', // blog tags
        'blogTagLoader' // blog tag loader
      ])
    }
  }
</script>
