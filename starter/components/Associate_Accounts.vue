<template>
  <div class="user_list">
    <user v-for="account in accounts"
      v-on:remove="removeAccount"
      v-bind:key="account.key"
      v-bind:img="account.img"
      v-bind:name="account.name"
      v-bind:provider="account.provider"
      v-bind:id="account.id">
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
  ],
  methods: {
    removeAccount: function (event) {
      this.$emit('removeAccount', event)
    }
  }
}
</script>

<style>
.user_list {
  margin: 10px;
}
</style>