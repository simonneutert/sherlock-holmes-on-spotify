<template>
  <b-button @click="scrollToBottom" class="float-right my-4"
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
