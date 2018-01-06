const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/retina.js/2.1.3/retina.js' },
      { src: 'https://apis.google.com/js/api:client.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    '~/plugins/vue-google-signin-button',
    '~/plugins/vue-facebook-signin-button',
    '~/plugins/maps.js'
  ],
  env: {
    google_app_client_id: process.env.GOOGLE_APP_CLIENT_ID || '',
    google_map_api_key: process.env.GOOGLE_MAP_API_KEI || '',
    facebook_app_id: process.env.FACEBOOK_APP_ID || ''
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.splice(0, 0, {
          test: /\.js$/,
          include: [path.resolve(__dirname, './node_modules/vue2-google-maps')],
          loader: 'babel-loader'
        })
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
