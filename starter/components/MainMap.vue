<template>
  <div>
    <gmap-map :center="center" :zoom="12">
      <gmap-marker :position="{lat:25.1, lng:121.1}">
      </gmap-marker>
      <gmap-info-window :position="{lat:25.2, lng:121.2}">
        Hello world!
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
/* eslint-env browser */

export default {
  data () {
    return {
      center: { lat: 25, lng: 121 }
    }
  },
  methods: {
    updateCenter: function (event) {
      if (typeof navigator !== 'undefined' && typeof navigator.geolocation !== 'undefined') {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center.lat = position.coords.latitude * 1.0
          this.center.lng = position.coords.longitude * 1.0
        })
      }
    }
  },
  mounted: function () {
    this.updateCenter()
  }
}
</script>

<style>
.vue-map-container {
  height: 250px;
  margin: 10px;
}
</style>