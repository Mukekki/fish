export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
//   ssr: false,
//   target: 'static',

  head: {
    title: 'Fortune Pike',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/root.less'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/i18n.js' },
    // { src: '~/plugins/validator.js' },
    { src: '~/plugins/v-click-outside.js', mode: 'client' },
    // { src: '~/plugins/functions.js' },
    // { src: '~/plugins/modal.js' },
    // { src: '~/plugins/links.js' },
    // { src: '~/plugins/request.js' },
    { src: '~/plugins/moment.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  router: {
        base: '/fish/'
        // base: '/'
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    dir: 'docs'
  }
}
