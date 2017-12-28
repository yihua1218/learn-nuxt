<template>
  <section class="container">
    <div>
      <h1 class="title">
        Hoebus
      </h1>
      <h2 class="subtitle">
        Laboratory
      </h2>
      <login/>
      <AssociateAccounts/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Login from '~/components/Login.vue'
import AssociateAccounts from '~/components/Associate_Accounts.vue'

export default {
  components: {
    Logo,
    Login,
    AssociateAccounts
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
