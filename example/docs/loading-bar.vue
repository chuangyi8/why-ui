<template>
  <section class="view">
    <h1>LoadingBar 加载进度条</h1>
    <hr>
    <p>全局创建了一个用于显示页面加载、异步请求的加载进度条。
      因为可复用性的关系，<code class="code_inline">LoadingBar</code> 只会全局创建一个实例，而且在 <code
        class="code_inline">Vue.prototype</code> 中添加了全局对象 <code class="code_inline">$Loading</code>，可以直接通过 <code
        class="code_inline">this.$Loading</code> 操作实例</p>
    <h3>基础用法</h3>
    <p>通过调用 $Loading 提供的三种方法来控制全局的加载进度条 <code class="code_inline">start()</code>、<code class="code_inline">end()</code>、<code
      class="code_inline">error()</code></p>
    <div class="demo-block">
      <WButton @click="start">开始</WButton>
      <WButton @click="end">结束</WButton>
      <WButton @click="error">错误</WButton>
    </div>
    <h3>常规配置</h3>
    <p>提供 LoadingBar 的全局配置，使用方法如下：</p>
    <div class="demo-block">
      <WButton @click="setSpeed">设置speed速度</WButton>
      <WButton @click="setSpinner">设置spinner动画效果</WButton>
      <WButton @click="setPercentNum">设置percentNum每次加载的比例</WButton>
      <WButton @click="setShowSpinner">设置是否显示spinner</WButton>
    </div>

  </section>
</template>

<script>
  export default {
    name: "loading-bar",
    methods: {
      start() {
        console.log("3333333");
        this.$loading.start()
      },
      end() {
        this.$loading.end()
      },
      error() {
     //   this.$loading.error()
      },
      setSpeed () {
        this.$loading.config({
          speed: 10
        })
      //  this.$loading.start()
      },
      setSpinner () {
        this.$loading.config({
          easing: 'ease'
        })
     //   this.$loading.start()
      },
      setPercentNum () {
        this.$loading.config({
          percentNum: 0.1
        })
      //  this.$loading.start()
      },
      setShowSpinner () {
        this.$loading.config({
          showSpinner: false
        })
        //this.$loading.start()
      }
    }
  }
</script>

<style scoped>

</style>
