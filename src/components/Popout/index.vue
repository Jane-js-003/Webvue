<template>
  <div class="popout-div" v-if="exchangeShow">
    <div class="popout-mask"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Popout',
  props: {
    exchangeShow: false
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style></style>
