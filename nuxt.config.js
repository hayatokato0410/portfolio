require('dotenv').config()
const { API_KEY, baseUrl } = process.env;

export default {
  target: 'static',
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/style.css',
    '~/assets/css/reset.css',
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  styleResources: {
    scss: [
      '~assets/css/variable.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Inter:500,600,700']
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['gsap']
  },
  env: {
    API_KEY,
    baseUrl
  }
}
