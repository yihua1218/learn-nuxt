<template>
  <fb-signin-button
    v-show="visibility"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
/* eslint-env browser */

export default {
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      },
      visibility: false
    }
  },
  methods: {
    loadFbSdk () {
      if (typeof window !== 'undefined' && typeof window.FB === 'undefined') {
        window.fbAsyncInit = () => {
          console.log('fbAsyncInit:')
          window.FB.init({
            appId: process.env.facebook_app_id,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.11'
          })
          this.visibility = true
        }

        (function (d, s, id) {
          var js
          var fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) { return }
          js = d.createElement(s); js.id = id
          js.src = 'https://connect.facebook.net/en_US/sdk.js'
          fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
      } else {
        this.visibility = true
      }
    },
    onSignInSuccess (fbUser) {
      console.log(fbUser)
      if (typeof window !== 'undefined' && typeof window.FB !== 'undefined') {
        window.FB.api('/me', me => {
          console.log('facebook: me:', me)
          const account = {
            provider: 'facebook',
            id: me.id,
            name: me.name,
            token: fbUser.accessToken
          }

          window.FB.api('/me/picture', picture => {
            console.log('facebook: picture:', picture)
            account.img = picture.data.url
            console.log('facebook: account:', account)
            this.$emit('addAccount', account)
          })
        })
      }
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  },
  mounted: function () {
    this.loadFbSdk()
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  margin: 4px;
}
</style>