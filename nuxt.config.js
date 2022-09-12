const BACKEND = process.env.BACKEND || 'http://127.0.0.1:8000'
const PORT = process.env.PORT || 3009


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front-examen',
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
    ],
  },
  server: {
    port: PORT,
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '~/assets/style/main.less',
      lang: 'less'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ant',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: { proxy: true },
  proxy: {
    '/api/': {
      target: BACKEND,
      pathRewrite: { '^/api/': '' },
      changeOrigin: true
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
    },
    loaders: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
