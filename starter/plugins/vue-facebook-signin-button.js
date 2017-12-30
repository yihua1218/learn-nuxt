import Vue from 'vue'

const FBSignInButton = {}
FBSignInButton.install = (Vue) => {
  Vue.component('fb-signin-button', {
    name: 'fb-signin-button',
    render (createElement) {
      return createElement('div', {
        attrs: {
          class: 'fb-signin-button'
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
      this.$refs.signinBtn.addEventListener('click', e => {
        if (typeof window !== 'undefined' && typeof window.FB !== 'undefined') {
          window.FB.login(response => {
            this.$emit(response.authResponse ? 'success' : 'error', response)
          }, this.params)
        }
      })
    }
  })
}

Vue.use(FBSignInButton)
