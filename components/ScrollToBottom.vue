<template>
  <b-button class="float-right my-4" @click="scrollToBottom"
    >Zur letzten Folge</b-button
  >
</template>

<script>
export default {
  methods: {
    scrollToBottom() {
      const footer = document.getElementsByTagName('footer')[0]
      footer.scrollIntoView()
    },
  },
}
</script>

<style></style>
