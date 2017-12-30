<template>
  <div class="headshot">
    <i class="fa fa-times remove-icon"
      :provider="provider"
      :id="id"
      :name="name"
      aria-hidden="true"
      v-on:click="remove">
    </i>
    <i v-bind:class="classProviderIcon"
      v-bind:style="styleProviderIcon"
      aria-hidden="true"
      v-on:click="select">
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
    return {
      classProviderIcon: {
        fa: true,
        'fa-google': true,
        'provider-icon': true
      },
      styleProviderIcon: {
        color: '#DB4437'
      },
      class: {
        provider_icon: {
          google: {
            fa: true,
            'fa-google': true,
            'provider-icon': true
          },
          facebook: {
            fa: true,
            'fa-facebook': true,
            'provider-icon': true
          }
        }
      },
      style: {
        provider_icon: {
          google: {
            color: '#DB4437'
          },
          facebook: {
            color: '#3B5998'
          }
        }
      }
    }
  },
  methods: {
    remove: function (event) {
      this.$emit('remove', event.target.attributes)
    },
    select: function (event) {
      this.$emit('select', event.target.attributes)
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

.provider-icon {
  opacity: 1;
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin: 2px;
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