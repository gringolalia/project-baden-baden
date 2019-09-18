<template lang="pug">
div
  h1.display-4
    i.material-icons(style="font-size: 80px") rowing
  h1 Emerson the Lesser Man
  v-btn.blue-grey.lighten-1.mt-4(large to="/")
    v-icon.mr-2 fa-podcast
    | The Transcendental Wazoo
  h1.display-4
    i.material-icons(style="font-size: 80px") pool

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
