<template>
  <b-container id="episodes">
    <ScrollToBottom />
    <TheSearchForm :searchable-items="playlist.items" />
  </b-container>
</template>

<script>
import playlist from '@@/static/sh_originale.json'
import ScrollToBottom from '@@/components/ScrollToBottom'
import TheSearchForm from '@@/components/TheSearchForm'

export default {
  components: {
    ScrollToBottom,
    TheSearchForm,
  },
  data() {
    return {
      playlist,
    }
  },
}
</script>

<style>
#episodes {
  min-height: 70vh;
}
</style>
