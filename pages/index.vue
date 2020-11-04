<template>
  <div>
    <Hello />
  </div>
</template>

<script>
import { Hello } from '@@/components/Hello'
import AlbumNavigation from '~/components/AlbumNavigation.vue'
export default {
  components: [Hello, AlbumNavigation],
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
