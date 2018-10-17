<template>
  <section class="view">
  <h1>Icon 图标</h1>
    <hr>
    <p>语义化的矢量图形，<code class="code_inline">WHY-UI</code> 使用开源的 Iconfont 作为图标库，并制作成了 <code class="code_inline">icon font</code>。</p>
    <h3>如何使用</h3>
    <p>使用 <code class="code_inline">class="icon"</code> 来声明图标，具体图标的名称请 <code class="code_inline">copy</code> 相应的标签</p>
    <div class="demo-block">
      <i class="w-icon-coordinates_fill fs-24"></i>
      <i class="w-icon-empty fs-24"></i>
      <i class="w-icon-computer_fill fs-24"></i>
      <i class="w-icon-accessory fs-24"></i>
    </div>
    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
 &lt;i class=&quot;w-icon-coordinates_fill fs-24&quot;&gt;&lt;/i&gt;<br>
      &lt;i class=&quot;w-icon-empty fs-24&quot;&gt;&lt;/i&gt;<br>
      &lt;i class=&quot;w-icon-computer_fill fs-24&quot;&gt;&lt;/i&gt;<br>
      &lt;i class=&quot;w-icon-accessory fs-24&quot;&gt;&lt;/i&gt;<br>
       </code></pre></div>
    </DemoDlock>



    <div>
      <ul class="icon-list">
        <li v-for="name in icons" :key="name">
    <span>
      <i :class="'w-' + name"></i>
      {{'w-' + name}}
    </span>
        </li>
      </ul>
    </div>
    </section>
</template>

<script>
  import DemoDlock from '../components/demo-block.vue'
  var iconList = require('../icon.json');
    export default {
        name: "icon",
      data() {
        return {
          icons: iconList
        };
      },
      components:{
        DemoDlock
      }
    }
</script>

<style scoped lang="less">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }

  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
  span {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    color: #99a9bf;
  }
  i {
    display: block;
    font-size: 32px;
    margin-bottom: 15px;
    color: #3f536e;
  }
  &:hover {
     color: rgb(92, 182, 255);
   }
  }
</style>
