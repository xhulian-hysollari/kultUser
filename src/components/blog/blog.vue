<template>
  <div>

    TAGS =>
    <div
      v-for="(blogTagDet, blogTagName) in blogTags"
      @click="getBlogsOfThisTag({
        tagName: blogTagName
      })"
    >
      {{blogTagName}}
    </div>

    <br>
    BLOGS AT HOME =>
    {{blogsAtHome}}
    <br>

    <br>
    BLOGS =>
    {{blogs}}

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
      this.$store.commit('getBlogsAtHome')
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
        'blogs', // blogs & details (right side category wise(small))
        'blogLoader', //loader for blog
        //
        'blogTags', // blog tags
        'blogTagLoader', // blog tag loader,
        //
        'blogsAtHome',  //blog to show on home page(large left side blogs)
        'blogsAtHomeLoader' //loader for blogs at home (left side)
      ])
    }
  }
</script>
