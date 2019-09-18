<template lang="pug">
v-layout(column wrap)
  v-flex(d-inline)
    h1 Federico Fellini Garcia Marquez Lorca
    h2 An Españolo What a Solo
    v-btn.blue-grey.lighten-1.mt-4(large to="/")
      v-icon.mr-2 directions_bike
      | A Barcelona Maratona
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
