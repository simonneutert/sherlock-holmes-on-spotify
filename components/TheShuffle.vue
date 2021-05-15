<template>
  <b-container v-if="album">
    <div>
      <Album :album="album">
        <div class="share">
          <nuxt-link :to="{ name: 'episode-id', params: { id: album.uri } }">
            Share via deep link
          </nuxt-link>
        </div>
      </Album>
    </div>

    <b-button block @click="shuffle()">Shuffle</b-button>
  </b-container>
</template>

<script>
import Album from '@@/components/Album'

export default {
  components: {
    Album,
  },
  props: {
    items: { type: Array, required: true },
  },
  data() {
    return {
      album: undefined,
    }
  },
  mounted() {
    this.shuffle()
  },
  methods: {
    shuffle() {
      this.album = this.items[Math.floor(Math.random() * this.items.length)]
    },
  },
}
</script>

<style>
.share {
  text-align: center;
}
</style>
