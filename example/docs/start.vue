<template>
  <section class="view">
    <h1>快速上手</h1>
    <hr>
    <h2>使用前准备</h2>
    <blockquote>
      <p>在使用之前，推荐学习 <code class="code_inline">Vue</code>
        和
        <code class="code_inline">ES2015</code> ，并正确配置
        <code class="code_inline">Node.js</code> v6.x 或以上版本</p>
    </blockquote>
    <p><code class="code_inline">why-UI</code>
      基于 <code class="code_inline">Vue.js</code> 2.x+ 版本开发，所以有必要了解以下基础知识：</p>
    <ul>
      <li>
        <a href="https://cn.vuejs.org/v2/guide/components.html">Vue 组件</a>
      </li>
      <li>
        <a href="https://cn.vuejs.org/v2/guide/single-file-components.html">单文件组件</a>
      </li>
    </ul>
    <h2>基于模板工程开发</h2>
    <blockquote>
      <p><code class="code_inline">Vue.js</code>
        提供一个官方命令行工具
        <code class="code_inline">vue-cli</code>，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
      </p>
    </blockquote>
    <pre><code v-pre="" class="language-bash">&gt; npm i -g vue-cli<br>
        &gt; mkdir my-project&amp;&amp;<span class="hljs-built_in">cd</span> my-project<br>
        &gt; vue init webpack<br>&gt; npm i &amp;&amp;npm i why-ui
</code></pre>
    <h2>标准开发</h2>
    <p>实际项目中，往往会使用 <code class="code_inline">webpack</code>，
      <code class="code_inline">rollup</code> 或者
      <code class="code_inline">gulp</code>
      的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用
      <code class="code_inline">&lt;script&gt;</code>
      标签全局引入的方式使用。</p>
    <h3>全局组件使用</h3>
    <p>可以在项目的入口文件中引入所有组件或所需组件</p>
    <pre><code v-pre="" class="language-js"><span class="hljs-keyword">import</span>
        WhyUI <span class="hljs-keyword">from</span> <span class="hljs-string">'why-ui'</span>
      <span class="hljs-comment">// 引入组件库</span>
       <br>
<span class="hljs-keyword">import</span>
    <span class="hljs-string">'why-ui/packages/theme-chalk/lib/index.css'</span>
    <span class="hljs-comment">// 引入样式库</span>
  <br>
<br>Vue.use(WhyUI)
</code></pre>
    <h3>单个组件按需使用</h3>
    <p>可以局部注册所需的组件，适用于与其他框架组合使用的场景</p>
    <pre><code v-pre="" class="language-js"><span class="hljs-keyword">import</span>
      { WButton }
      <span class="hljs-keyword">from</span>
      <span class="hljs-string">'why-ui'</span>
<br>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <br>
   　
<span class="hljs-attr">components</span>:{
      <br>
    　　　WButton
      <br>
  　　　}
<br>　}
</code></pre>
    <p>在模板中，用 <code class="code_inline">&lt;w-button&gt;&lt;/w-button&gt;</code>
      自定义标签的方式使用组件</p>
    <pre><code v-pre="" class="language-html">
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;
    </span>
      <br>
  <span class="hljs-tag">　&lt;<span class="hljs-name">div</span>&gt;
  </span>
       <br>
    <span class="hljs-tag">　　&lt;<span class="hljs-name">w-button</span>&gt;</span>
    这是一个按钮<span class="hljs-tag">&lt;/<span class="hljs-name">w-button</span>&gt;
    </span>
       <br>
  <span class="hljs-tag">　&lt;/<span class="hljs-name">div</span>&gt
  </span>
      <br>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>
  &gt;</span>
</code></pre>
    <h2>自定义主题</h2>
    <p>
      <code class="code_inline">why-UI</code> 各个组件的样式变量都存放在
      <code class="code_inline">why-ui/packages/theme-chalk/var.css</code> 文件中。用户可根据实际需要，自定义组件的样式</p>
  </section>
</template>

<script>
  export default {
    name: "start",

  }
</script>

<style scoped>

</style>
