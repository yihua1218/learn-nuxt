<template>
  <b-img class="user"
    :src="img"
    :alt="name">
  </b-img>
</template>

<script>
export default {
  props: [
    'img',
    'name'
  ],
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
.user {
  width: 40px;
  height: 40px;
  margin: 10px;
}
</style>