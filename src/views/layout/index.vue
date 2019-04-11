<template>
    <div class="clearfloat" style="width: 100%;height: 100%;">
        <sideNav></sideNav>
        <mainInner></mainInner>
    </div>
</template>

<script>
import mainInner from './main.vue'
import sideNav from './side.vue'
export default {
  components: {mainInner, sideNav}
}
</script>

<style></style>
