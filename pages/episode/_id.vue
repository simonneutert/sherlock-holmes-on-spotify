<template>
  <div>
    <Hello />
    <div v-if="album" class="container">
      <Album :album="album" />
    </div>
  </div>
</template>

<script>
import playlistOriginale from '@@/static/sh_originale.json'
import playlistNeue from '@@/static/sh_neue.json'
import playlistReloaded from '@@/static/sh_reloaded.json'

import Hello from '@@/components/Hello'

export default {
  components: {
    Hello,
  },
  asyncData(context) {
    const spotifyUri = context.$route.params.id
    const originale = context.findByUri(playlistOriginale, spotifyUri)
    const reloaded = context.findByUri(playlistReloaded, spotifyUri)
    const neue = context.findByUri(playlistNeue, spotifyUri)
    let album
    if (originale) {
      album = originale
    } else if (reloaded) {
      album = reloaded
    } else {
      album = neue
    }
    return { album }
  },
  data() {
    return {
      playlistOriginale,
      playlistNeue,
      playlistReloaded,
      album: undefined,
    }
  },
  methods: {
    findByUri(playlist, uri) {
      return playlist.items.filter((album) => album.uri === uri)[0]
    },
  },
}
</script>

<style>
a {
  color: #1db954;
  font-weight: bolder;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
