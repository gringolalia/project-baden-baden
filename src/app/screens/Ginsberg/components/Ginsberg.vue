<template lang="pug">
v-layout(column="", wrap="")
  v-flex(d-inline="")
    h1 Ginsberg Not Gainsbourg
    h2 A Hairy Poet of the Barbaric Yawp
    v-btn.blue-grey.lighten-1.mt-4(large to="/")
      v-icon.mr-2 directions_bike
      | Brooklyn Bridged
    p.mt-5
      img(src="static/ginsbergo.jpg" width="150px")
</template>

<script>
  import Welcome from '../../Home/components/Welcome.vue'
  export default {
    data: () => ({
      drawer: null
    }),
    name: 'HomeScreen',
    components: {
      Welcome
    }
  }
</script>

<style lang="scss">
</style>
