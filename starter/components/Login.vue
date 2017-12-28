<template>
  <div>
    <g-signin-with-different-account-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-with-different-account-button>    
  </div>
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
      googleSignInParams: {
        client_id: `${process.env.google_app_client_id}.apps.googleusercontent.com`,
        scope: 'email profile openid'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc

      const account = {
        provider: 'google',
        id: googleUser.getBasicProfile().getId(),
        img: googleUser.getBasicProfile().getImageUrl(),
        name: googleUser.getBasicProfile().getName()
      }

      const accountKey = `google-${account.id}`

      if (profile.getId()) {
        window.accounts[accountKey] = account
      }

      if (localStorage) {
        localStorage.setItem('accounts', JSON.stringify(window.accounts))
      }
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>