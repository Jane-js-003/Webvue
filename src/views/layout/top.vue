<template>
    <div id="main-top">
        <div class="main-nav nav-back">
            <i class="iconfont">&#xe663;</i>
            <span>返回</span>
            <span style="margin: 0 15px;">|</span>
        </div>
        <div class="main-nav" v-for="(item, index) in levels" :key="index">
            <router-link :to="item.path">{{item.name}}</router-link>
            <i v-if="index < levels.length - 1" class="iconfont" style="margin-right: 10px;">&#xe614;</i>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      levels: []
    }
  },
  computed: {
    // return this.$store.state.layout.levels
  },
  created () {
    this.Getnev()
  },
  methods: {
    Getnev () {
      var self = this
      // console.log(levels)
      if (location.href.indexOf('/home') > -1) {
        self.levels = [
          {
            path: '/home',
            name: '首页'
          }
        ]
      } else if (location.href.indexOf('/control/users') > -1) {
        self.levels = [
          {
            path: '/home',
            name: '首页'
          },
          {
            path: '/control/users',
            name: '用户管理'
          }
        ]
      } else if (location.href.indexOf('/control/nodes') > -1) {
        self.levels = [
          {
            path: '/home',
            name: '首页'
          },
          {
            path: '/control/nodes',
            name: '节点管理'
          }
        ]
      }
    }
  },
  watch: {
    $route () {
      this.Getnev()
    }
  }
}
</script>

<style  lang="scss" scoped="scoped">
    .main-nav {
        line-height: 40px;
        font-size: 14px;
        float: left;
    }
    .main-nav a {
      color: #555666;
    }
    .main-nav i.iconfont {
        // line-height: 40px;
        // margin-right: 10px;
    }
    .nav-back {
        margin-left: 30px;
        cursor: pointer;
    }
    .nav-back:hover {
      color: #000;
    }
</style>
