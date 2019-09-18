<template lang="pug">
div
  h1.mb-3 The Original Barbaric Yawper
  v-btn.blue-grey.darken-1(large to="/")
    v-icon.mr-2 beach_access
    | Editor of the Brooklyn Eagle
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
