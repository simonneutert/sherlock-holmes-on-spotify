<template>
  <b-media tag="li" class="my-4 album" vertical-align="top">
    <template #aside>
      <b-img
        :src="album.images[1].url"
        width="64"
        height="64"
        alt="album.name"
      ></b-img>
    </template>
    <h6 class="mt-0 mb-1">{{ album.name }}</h6>
    <p class="show">
      <a :href="album.spotifyUrl">auf Spotify Website anzeigen</a>
    </p>
    <p class="play text-center">
      <a :href="album.uri">Jetzt auf Spotify abspielen</a>
    </p>
  </b-media>
</template>

<script>
export default {
  name: 'Album',
  props: {
    album: { type: Object, required: true },
  },
}
</script>

<style>
.album {
  border: 1px solid green;
  padding: 1em;
  min-height: 68px;
}
</style>
