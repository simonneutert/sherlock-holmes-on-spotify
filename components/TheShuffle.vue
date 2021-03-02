<template>
  <b-container v-show="album">
    <div v-if="album">
      <Album :album="album" />
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

<style></style>
