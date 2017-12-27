import Vue from 'vue'

function err (msg) {
  typeof console !== 'undefined' && console.error(`[g-signin-button] ${msg}`)
}

const GSignInButton = {}
GSignInButton.install = function install (Vue) {
  Vue.component('g-signin-button', {
    name: 'g-signin-button',
    render (createElement) {
      return createElement('div', {
        attrs: {
          class: 'g-signin-button'
        },
        ref: 'signinBtn'
      }, this.$slots.default)
    },
    props: {
      params: {
        type: Object,
        required: true,
        default () {
          return {}
        }
      }
    },
    mounted () {
      if (!window.gapi) {
        err('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')
        return
      }

      if (!this.params.client_id) {
        err('params.client_id must be specified.')
        return
      }

      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init(this.params)
        auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
          this.$emit('success', googleUser)
        }, error => {
          this.$emit('error', error)
          this.$emit('failure', error) // an alias
        })
      })
    }
  })
  Vue.component('g-signin-with-different-account-button', {
    name: 'g-signin-with-different-account-button',
    render (createElement) {
      return createElement('div', {
        attrs: {
          class: 'g-signin-button'
        },
        ref: 'signinBtn'
      }, this.$slots.default)
    },
    props: {
      params: {
        type: Object,
        required: true,
        default () {
          return {}
        }
      }
    },
    mounted () {
      if (!window.gapi) {
        err('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')
        return
      }

      if (!this.params.client_id) {
        err('params.client_id must be specified.')
        return
      }

      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init(this.params)
        auth2.attachClickHandler(this.$refs.signinBtn, { prompt: 'select_account' }, googleUser => {
          this.$emit('success', googleUser)
        }, error => {
          this.$emit('error', error)
          this.$emit('failure', error) // an alias
        })
      })
    }
  })
}

Vue.use(GSignInButton)
