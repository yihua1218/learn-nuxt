<template>
  <div class="headshot">
    <i class="fa fa-times remove-icon"
      :provider="provider"
      :id="id"
      :name="name"
      aria-hidden="true"
      v-on:click="remove">
    </i>
    <b-img class="user"
      :src="img"
      :alt="name">
    </b-img>
  </div>
</template>

<script>
export default {
  props: [
    'img',
    'name',
    'provider',
    'id'
  ],
  data () {
    return {}
  },
  methods: {
    remove: function (event) {
      this.$emit('remove', event.target.attributes)
    }
  }
}
</script>

<style>
.user {
  width: 40px;
  height: 40px;
}

.headshot {
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  margin: 10px;
}

.remove-icon {
  opacity: 0;
  position: absolute;
  right: 0px;
  bottom: 0px;
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
  transition:all 1s ease-in-out;
}

.remove-icon:hover {
  opacity: 1;
  visibility: hidden;
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
  transition:all 1s ease-in-out;
}

</style>