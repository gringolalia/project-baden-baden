<template lang="pug">
#root
  v-app(dark)#inspire
    v-navigation-drawer(v-model='drawer' fixed app dark)
      v-toolbar.blue-grey.lighten-2
        v-list.pa-0
          v-list-tile(avatar)
            v-list-tile-avatar
              v-icon(large) fastfood
            v-list-tile-content
              v-list-tile-title.dignity O Superusuário


      v-list(dense dark @onclick="drawer = false" style="max-height: 100vh; overflow: hidden;" active-class="yellow--text")

        v-list-tile(to='/emily' tag="li" active-class="yellow--text")
          v-list-tile-action
            v-icon all_inclusive

          v-list-tile-content
            v-list-tile-title In Principio

        v-list-tile(to='/emerson' active-class="yellow--text")
          v-list-tile-action
            v-icon waves

          v-list-tile-content
            v-list-tile-title In Media Res

        v-list-tile(to='/ginsberg' active-class="yellow--text")
          v-list-tile-action
            v-icon fa-street-view

          v-list-tile-content
            v-list-tile-title Geeks Bearing Grifts

        v-list-tile(to='/thoreau' active-class="yellow--text")
          v-list-tile-action
            v-icon my_location

          v-list-tile-content
            v-list-tile-title The Hoi Polloi of Troy

        v-list-tile(to='/lorca' active-class="yellow--text")
          v-list-tile-action
            v-icon flash_on

          v-list-tile-content
            v-list-tile-title The Fleet Flotilla of Crete

        v-list-tile(to='/whitman' active-class="yellow--text")
          v-list-tile-action
            v-icon flash_on

          v-list-tile-content
            v-list-tile-title The Punk Rock of Antioch

    v-toolbar(color='blue-grey darken-1', dark fixed app)
      v-toolbar-side-icon(@click.stop='drawer = !drawer')

      v-toolbar-title.fixed.dignity
        i.fa.fa-gears.fa-2x
        | &nbsp; Engenho Novo LLC

    v-content(style="min-height: 100vh; min-width: 100vw;")
      v-container(fluid fill-height grid-list-xl)
        v-layout(column wrap)
          v-flex(text-xs-center)
            router-view.mt-5

    v-footer.mx-4
      v-icon.mx-1 waves
      | &nbsp; Clonado na Samboja 2018 pelo Gran Bretônio
</template>
<script>
  import Welcome from '../screens/Home/components/Welcome.vue'
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
.primary {
  color: yellow;
}
</style>
