<template>
  <div class="pg-index">
    <div class="index-container">
      <img src="../assets/img/logo.png">
      <p>轻量级、模块化、酷炫特效的前端 UI 组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <!--<router-link  @click.native='jump'  :to="{name: 'guide'}">开始使用</router-link>-->
        <a class="btn-start" @click='jump'>开始使用</a>
        <a target="_blank" class="btn-github" href="https://github.com/chuangyi8/why-ui">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        height: document.documentElement.clientHeight
      }
    },
    methods: {
      jump() {
        let self = this;
        setTimeout(() => {
          self.post_href()
        }, 300)
      },
      post_href() {
        this.$router.push({
          path: '/guide',//要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
        })
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .pg-index {
    .index-container {
      width: 960px;
      margin: 0 auto;
      text-align: center;
      padding: 100px 0;
      p {
        margin-top: 16px;
        color: #8994C6;
        font-size: 32px;
      }
    }
    .separate-panel {
      position: relative;
      .about {
        position: absolute;
        width: 100%;
        height: 200px;
        top: 20px;
        z-index: 9;
        background: #fff;
        text-align: center;
        .btn-start {
          text-decoration: none;
          font: 20px/0.9em 'Droid Sans', sans-serif;
          font-weight: bold;
          text-shadow: rgba(255, 255, 255, .5) 0 1px 0;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: .5em .6em .4em .6em;
          margin: 0.6em;
          display: inline-block;
          position: relative;
          border-radius: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          -webkit-transition: background .2s ease-in-out;
          transition: background .2s ease-in-out;
          color: hsl(0, 0%, 40%) !important;
          color: hsl(208, 50%, 40%) !important;
          background-color: hsl(208, 100%, 75%);
          -webkit-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em .3em, /* inner shadow */ hsl(208, 50%, 55%) 0 .1em 3px, hsl(208, 50%, 40%) 0 .3em 1px, /* color border */ rgba(0, 0, 0, 0.2) 0 .5em 5px;
          box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em .3em, /* inner shadow */ hsl(208, 50%, 55%) 0 .1em 3px, hsl(208, 50%, 40%) 0 .3em 1px, /* color border */ rgba(0, 0, 0, 0.2) 0 .5em 5px;
        }
        a:active {
          -webkit-box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em .3em, /* inner shadow */ rgba(0, 0, 0, 0.4) 0 .1em 1px, /* border */ rgba(0, 0, 0, 0.2) 0 .2em 6px;
          -moz-box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em .3em, /* inner shadow */ rgba(0, 0, 0, 0.4) 0 .1em 1px, /* border */ rgba(0, 0, 0, 0.2) 0 .2em 6px;
          box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em .3em, /* inner shadow */ rgba(0, 0, 0, 0.4) 0 .1em 1px, /* border */ rgba(0, 0, 0, 0.2) 0 .2em 6px;
          -webkit-transform: translateY(.2em);
          -moz-transform: translateY(.2em);
          transform: translateY(.2em);
        }
      }
    }
    .separate-panel:after {
      content: '';
      display: none;
      position: absolute;
      left: 7.5%;
      top: -80px;
      width: 85%;
      height: 250px;
      background: #fff;
      box-shadow: 0 -4px 30px 0 #DFE1E6;
      transform: skewY(-4deg);
    }
  }

  .separate-panel .btn-github {
    text-decoration: none;
    font: 20px/0.9em 'Droid Sans', sans-serif;
    font-weight: bold;
    text-shadow: rgba(255, 255, 255, .5) 0 1px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: .5em .6em .4em .6em;
    margin: 0.6em;
    display: inline-block;
    position: relative;
    border-radius: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    -webkit-transition: background .2s ease-in-out;
    transition: background .2s ease-in-out;
    color: hsl(0, 0%, 40%) !important;
    background-color: hsl(0, 0%, 95%);
    -webkit-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em .3em, /* inner shadow */ hsl(0, 0%, 75%) 0 .1em 3px, hsl(0, 0%, 60%) 0 .3em 1px, /* color border */ rgba(0, 0, 0, 0.2) 0 .5em 5px;
    box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em .3em, /* inner shadow */ hsl(0, 0%, 75%) 0 .1em 3px, hsl(0, 0%, 60%) 0 .3em 1px, /* color border */ rgba(0, 0, 0, 0.2) 0 .5em 5px;
  }


</style>
