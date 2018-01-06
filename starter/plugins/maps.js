import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.google_map_api_key,
    v: '3.30',
    libraries: 'places'
  }
})
