<template lang="pug">
div
  h1.display-4
    i.material-icons(style="font-size: 80px") settings_backup_restore
  h1.mb-3 Throw the Row, Thoreau
  v-btn.blue-grey.darken-1(large to="/emily")
    v-icon.mr-2 beach_access
    | Cosmic Yankeeism
  h1.display-4
    i.material-icons(style="font-size: 80px") settings_power

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
