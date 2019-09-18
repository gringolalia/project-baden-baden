<template lang="pug">
div
  h1.display-4
    i.material-icons(style="font-size: 80px") settings_input_antenna
  h1.mb-3 Unheimlich Home on the Strange
  v-btn.blue-grey.darken-1(large to="/emily")
    v-icon.mr-2 beach_access
    | Routing and Doubting
  h1.display-4
    i.material-icons(style="font-size: 80px") all_inclusive
</template>

<script>
  import Welcome from './Welcome.vue'
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
