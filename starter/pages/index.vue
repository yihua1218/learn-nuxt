<template>
  <section class="container">
    <div class="main">
      <h1 class="title">
        Hoebus
      </h1>
      <h2 class="subtitle">
        Laboratory
      </h2>
      <mainmap />
      <login v-on:addAccount="addAccount"/>
      <AssociateAccounts :accounts="accounts"
        v-on:removeAccount="removeAccount"
      />
    </div>
  </section>
</template>

<script>
/* eslint-env browser */
import Logo from '~/components/Logo.vue'
import Mainmap from '~/components/MainMap.vue'
import Login from '~/components/Login.vue'
import AssociateAccounts from '~/components/Associate_Accounts.vue'

export default {
  components: {
    Logo,
    Mainmap,
    Login,
    AssociateAccounts
  },
  computed: {
    accounts () {
      this.$store.commit('accounts/sync')
      return this.$store.state.accounts.list
    }
  },
  methods: {
    addAccount: function (event) {
      this.$store.commit('accounts/add', event)
    },
    removeAccount: function (event) {
      this.$store.commit('accounts/remove', event)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main {
  width: 100%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
