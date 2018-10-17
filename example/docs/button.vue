<template>
  <section class="view">
    <h1>Button 按钮</h1>
    <hr>
    <h3>基础用法</h3>
    <p>使用<code class="code_inline">type</code>、<code class="code_inline">plain</code>和<code
      class="code_inline">round</code>属性来定义 Button 的样式。</p>

    <div class="demo-block">
      <w-button>默认按钮</w-button>
      <w-button type="w-primary">主要按钮</w-button>
      <w-button type="w-success">成功按钮</w-button>
      <w-button type="w-info">信息按钮</w-button>
      <w-button type="w-warning">警告按钮</w-button>
      <w-button type="w-danger">危险按钮</w-button>

      <div class="m-10">
        <w-button plain>朴素按钮</w-button>
        <w-button type="w-primary" plain>主要按钮</w-button>
        <w-button type="w-success" plain>成功按钮</w-button>
        <w-button type="w-info" plain>信息按钮</w-button>
        <w-button type="w-warning" plain>警告按钮</w-button>
        <w-button type="w-danger" plain>危险按钮</w-button>
      </div>

      <div class="m-10">
        <w-button round>圆角按钮</w-button>
        <w-button type="w-primary" round>主要按钮</w-button>
        <w-button type="w-success" round>成功按钮</w-button>
        <w-button type="w-info" round>信息按钮</w-button>
        <w-button type="w-warning" round>警告按钮</w-button>
        <w-button type="w-danger" round>危险按钮</w-button>
      </div>
    </div>


    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
&lt;w-button&gt;默认按钮&lt;/w-button&gt;<br>
      &lt;w-button type=&quot;w-primary&quot;&gt;主要按钮&lt;/w-button&gt;<br>
      &lt;w-button type=&quot;w-success&quot;&gt;成功按钮&lt;/w-button&gt;<br>
      &lt;w-button type=&quot;w-info&quot;&gt;信息按钮&lt;/w-button&gt;<br>
      &lt;w-button type=&quot;w-warning&quot;&gt;警告按钮&lt;/w-button&gt;<br>
      &lt;w-button type=&quot;w-danger&quot;&gt;危险按钮&lt;/w-button&gt;<br>
<br>
 <br>
 &lt;div class=&quot;m-10&quot;&gt;<br>
        &lt;w-button plain&gt;朴素按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-primary&quot; plain&gt;主要按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-success&quot; plain&gt;成功按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-info&quot; plain&gt;信息按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-warning&quot; plain&gt;警告按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-danger&quot; plain&gt;危险按钮&lt;/w-button&gt;<br>
      &lt;/div&gt;<br>
<br>
 <br>
 &lt;div class=&quot;m-10&quot;&gt;<br>
        &lt;w-button round&gt;圆角按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-primary&quot; round&gt;主要按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-success&quot; round&gt;成功按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-info&quot; round&gt;信息按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-warning&quot; round&gt;警告按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-danger&quot; round&gt;危险按钮&lt;/w-button&gt;<br>
      &lt;/div&gt;<br>
    </code></pre></div>
    </DemoDlock>

    <h3>禁用状态</h3>
    <p>按钮不可用状态。</p>
    <div class="demo-block">
      <div class="m-10">
        <w-button disabled>圆角按钮</w-button>
        <w-button type="w-primary" disabled>主要按钮</w-button>
        <w-button type="w-success" disabled>成功按钮</w-button>
        <w-button type="w-info" disabled>信息按钮</w-button>
        <w-button type="w-warning" disabled>警告按钮</w-button>
        <w-button type="w-danger" disabled>危险按钮</w-button>
      </div>
      <div class="m-10">
        <w-button plain disabled>朴素按钮</w-button>
        <w-button type="w-primary" plain disabled>主要按钮</w-button>
        <w-button type="w-success" plain disabled>成功按钮</w-button>
        <w-button type="w-info" plain disabled>信息按钮</w-button>
        <w-button type="w-warning" plain disabled>警告按钮</w-button>
        <w-button type="w-danger" plain disabled>危险按钮</w-button>
      </div>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;div class=&quot;m-10&quot;&gt;<br>
        &lt;w-button disabled&gt;圆角按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-primary&quot; disabled&gt;主要按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-success&quot; disabled&gt;成功按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-info&quot; disabled&gt;信息按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-warning&quot; disabled&gt;警告按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-danger&quot; disabled&gt;危险按钮&lt;/w-button&gt;<br>
      &lt;/div&gt;<br>
          <br>
&lt;div class=&quot;m-10&quot;&gt;<br>
        &lt;w-button plain disabled&gt;朴素按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-primary&quot; plain disabled&gt;主要按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-success&quot; plain disabled&gt;成功按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-info&quot; plain disabled&gt;信息按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-warning&quot; plain disabled&gt;警告按钮&lt;/w-button&gt;<br>
        &lt;w-button type=&quot;w-danger&quot; plain disabled&gt;危险按钮&lt;/w-button&gt;<br>
      &lt;/div&gt;<br>
           </code></pre></div>
    </DemoDlock>
    <h3>不同尺寸</h3>
    <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
      额外的尺寸：<code class="code_inline">lg</code>、<code class="code_inline">sm</code>、<code class="code_inline">mini</code>，通过设置<code class="code_inline">size</code>属性来配置它们。</p>
    <div class="demo-block">
      <div class="m-10">
      <w-button size="lg">大号按钮</w-button>
      <w-button>默认按钮</w-button>
      <w-button size="sm">中号按钮</w-button>
      <w-button size="xs">小号按钮</w-button>
      </div>

      <div class="m-10">
        <w-button size="lg" plain>大号按钮</w-button>
        <w-button plain>默认按钮</w-button>
        <w-button size="sm" plain>中号按钮</w-button>
        <w-button size="xs" plain>小号按钮</w-button>
      </div>

    </div>

    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;div class=&quot;m-10&quot;&gt;<br>
      &lt;w-button size=&quot;lg&quot;&gt;大号按钮&lt;/w-button&gt;<br>
      &lt;w-button&gt;默认按钮&lt;/w-button&gt;<br>
      &lt;w-button size=&quot;sm&quot;&gt;中号按钮&lt;/w-button&gt;<br>
      &lt;w-button size=&quot;xs&quot;&gt;小号按钮&lt;/w-button&gt;<br>
      &lt;/div&gt;<br>
          <br>
 &lt;div class=&quot;m-10&quot;&gt;<br>
      &lt;w-button size=&quot;lg&quot;&gt;大号按钮&lt;/w-button&gt;<br>
      &lt;w-button&gt;默认按钮&lt;/w-button&gt;<br>
      &lt;w-button size=&quot;sm&quot;&gt;中号按钮&lt;/w-button&gt;<br>
      &lt;w-button size=&quot;xs&quot;&gt;小号按钮&lt;/w-button&gt;<br>
      &lt;/div&gt;<br></code></pre></div>
    </DemoDlock>

    <h3>属性</h3>
    <WTable :items="data" >
      <WThead title="参数"/>
      <WThead title="说明"/>
      <WThead title="类型"/>
      <WThead title="可选值"/>
      <WThead title="默认值"/>
    </WTable>

  </section>
</template>

<script>
  import DemoDlock from '../components/demo-block.vue'

  export default {
    name: "button",
    data() {
      return {
        data: [
          {"parameter ": "size", "indicates": "尺寸", "type": "string", "optional": "default,medium,small", "default":"—"},
          {"parameter ": "type", "indicates": "类型", "type": "string", "optional": "primary,success,warning,danger,info", "default": "—"},
          {"parameter ": "plain", "indicates": "是否朴素按钮", "type": "Boolean", "optional": "—", "default":"false"},
          {"parameter ": "disabled", "indicates": "是否禁用状态", "type": "string", "boolean": "—", "default":"false"},
        ],
      }
    },
    components: {
      DemoDlock,
    }
  }
</script>

<style scoped>

</style>
