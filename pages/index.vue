<template>
  <div>
    <Hello />
    <TheShuffle :items="albums" />
  </div>
</template>

<script>
import playlistOriginale from '@@/static/sh_originale.json'
import playlistNeue from '@@/static/sh_neue.json'
import playlistReloaded from '@@/static/sh_reloaded.json'

import { Hello } from '@@/components/Hello'
import { TheShuffle } from '@@/components/TheShuffle'

export default {
  components: [Hello, TheShuffle],
  data() {
    return {
      playlistOriginale,
      playlistNeue,
      playlistReloaded,
      albums: [],
    }
  },
  mounted() {
    this.albums = this.playlistOriginale.items
      .concat(this.playlistNeue.items)
      .concat(this.playlistReloaded.items)
      .flat()
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
