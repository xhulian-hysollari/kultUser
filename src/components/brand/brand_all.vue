<template>
  <div>

    All Brand Name

  </div>
</template>

<script>
  export default {
    created(){
      this.$store.commit('getAllBrands', {
        // no para
      })
    }
  }
</script>
