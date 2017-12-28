<template>
  <div class="user_list">
    <user v-for="user in users"
      v-bind:key="user.key"
      v-bind:img="user.img"
      v-bind:name="user.name">
    </user>
  </div>
</template>

<script>
import User from '~/components/User.vue'

export default {
  components: {
    User
  },
  data () {
    const users = []
    if (typeof window !== 'undefined' && typeof window.accounts !== 'undefined') {
      Object.keys(window.accounts).forEach((key) => {
        const account = window.accounts[key]
        users.push(account)
      })
    }
    return {
      users: users
    }
  },
  methods: {
  }
}
</script>

<style>
.user_list {
  margin: 10px;
}
</style>