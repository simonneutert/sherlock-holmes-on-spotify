<template>
  <div>
    <Hello />
    <div class="container">
      <div class="row py-4">
        <div class="col-sm-2">
          <b-img-lazy :src="album.images[1].url" :alt="album.name" fluid />
        </div>
        <div class="col-sm-10">
          <h4>{{ album.name }}</h4>
          <p>
            Episode {{ album.case }}
            <a :href="album.spotifyUrl">(auf Spotify Website)</a>
          </p>
          <div class="play">
            <p>
              <a :href="album.uri">Jetzt auf Spotify abspielen</a>
            </p>
          </div>
        </div>
      </div>
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
  data() {
    return {
      playlistOriginale,
      playlistNeue,
      playlistReloaded,
      album: playlistOriginale.items[1],
    }
  },
  created() {
    const spotifyUri = this.$route.params.id
    const originale = this.findByUri(playlistOriginale, spotifyUri)
    const reloaded = this.findByUri(playlistReloaded, spotifyUri)
    const neue = this.findByUri(playlistNeue, spotifyUri)
    if (originale) {
      this.album = originale
    } else if (reloaded) {
      this.album = reloaded
    } else {
      this.album = neue
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
