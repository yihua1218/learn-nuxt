<template>
  <div class="user_list">
    <user v-for="account in accounts"
      v-bind:key="account.key"
      v-bind:img="account.img"
      v-bind:name="account.name">
    </user>
  </div>
</template>

<script>
import User from '~/components/User.vue'

export default {
  components: {
    User
  },
  props: [
    'accounts'
  ]
}
</script>

<style>
.user_list {
  margin: 10px;
}
</style>