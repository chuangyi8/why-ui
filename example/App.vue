<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
    <mainHeader></mainHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
      <router-view class="page" v-else></router-view>
      <mainFooter v-if="!isIndex"></mainFooter>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import mainFooter from './components/footer.vue'
  import sideNav from './components/side-nav.vue'
  import mainSkeleton from './main.skeleton.vue'
export default {
  name: 'App',
  data () {
    return {
      init: false,
      isIndex: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.init = true
    }, 250)
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  },
  components: {
    mainHeader,
    sideNav,
    mainFooter,
    mainSkeleton
  }

}
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
.nav {
  float: left;
  width: 210px;
}
.view {
  float: left;
  width: calc(~'100% - 215px');
  padding: 32px 48px 48px;
  box-sizing: border-box;
}
}

.container:after {
  content: "";
  clear: both;
  display: block;
}

</style>
