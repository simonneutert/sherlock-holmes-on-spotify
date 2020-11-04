<template>
  <b-container>
    <ScrollToBottom />
    <b-row class="mt-4 pt-4 px-4">
      <ul class="list-unstyled">
        <Album
          :album="album"
          v-for="album in playlist.items"
          :key="album.uri"
        />
      </ul>
    </b-row>
  </b-container>
</template>

<script>
import playlist from '@@/static/sh_neue.json'
import { ScrollToBottom } from '@@/components/ScrollToBottom'
import { Album } from '@@/components/Album'

export default {
  components: {
    Album,
    ScrollToBottom,
  },
  data() {
    return {
      playlist,
    }
  },
}
</script>

<style></style>
