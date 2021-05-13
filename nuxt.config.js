import playlistOriginale from './static/sh_originale.json'
import playlistNeue from './static/sh_neue.json'
import playlistReloaded from './static/sh_reloaded.json'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    routes() {
      const allUris = []

      playlistOriginale.items.forEach((playlist) => {
        playlist.forEach((album) => allUris.push(album.uri))
      })

      playlistNeue.items.forEach((playlist) => {
        playlist.forEach((album) => allUris.push(album.uri))
      })

      playlistReloaded.items.forEach((playlist) => {
        playlist.forEach((album) => allUris.push(album.uri))
      })

      return allUris.map((uid) => {
        return '/episode/' + uid
      })
    },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sherlock Holmes on Spotify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Alle Alben der Hörspiele von Sherlock Holmes auf Spotify, sortiert und leicht zu durchstöbern.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@@/assets/css/bootstrap.min.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
