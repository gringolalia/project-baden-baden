<template lang="pug">
div
  h1.my-4 Emily the Dickens Daughter
  v-btn.blue-grey.darken-1(large to="/")
    v-icon.mr-2 wb_sunny
    | Night & Day

  blockquote.mt-4(style="font-size: 17px")

    | Good Morning &mdash; Midnight &mdash; <br />
    | I am coming Home &mdash; <br />
    | Day &mdash; got tired of Me &mdash; <br />
    | How could I &mdash; of Him?<br /><br />

    | Sunshine was a sweet place &mdash;<br />
    | I liked to stay &mdash;<br />
    | But Morn &mdash; didn't want me &mdash; now &mdash;<br />
    | So &mdash; Goodnight &mdash; Day!<br />

  v-icon.mt-4(large) my_location
</template>

<script>
  import Emily from '../../Emily/components/Emily.vue'
  export default {
    data: () => ({
      drawer: null
    }),
    name: 'Emily',
    components: {
      Emily
    }
  }
</script>

<style lang="scss">
</style>
