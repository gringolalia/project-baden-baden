<template lang="pug">
  .app
    v-container(fill-height='' grid-list-xl='')
      v-layout(column='' wrap='')
        v-flex(text-xs-center)
          //- router-view

          h1.dignity.my-5
            v-icon(large) waves
            | &nbsp; Bom Dia, Meia-Noite

          v-btn.blue-grey.darken-1(large to='/emily') The Bretônio Blues
          p.text-xs-center
            v-icon.mt-4(large) my_location
</template>


<script>
  export default {}
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
