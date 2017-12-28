<template>
  <div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: `${process.env.google_app_client_id}.apps.googleusercontent.com`,
        scope: 'email profile openid'
      }
    }
  },
  methods: {
  }
}
</script>

<style>
</style>