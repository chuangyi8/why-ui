<template>
  <section class="view">
    <h1>showMore 显示更多</h1>
    <hr>
    <h3>基础用法</h3>
    <p>文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。</p>
    <div class="demo-block">
      <WShowmore :len='10' text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。'>
      </WShowmore>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;WShowmore <br>　:len=&#x27;10&#x27;<br> 　text=&#x27;文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。&#x27;&gt;<br>
      &lt;/WShowmore&gt;
 </code></pre></div>
    </DemoDlock>
    <h3>高级用法</h3>
    <p>文本超出显示长度，折叠起来，展开后，可以通过<code class="code_inline">allow-fold</code>指定是否需要收起，也可通过<code class="code_inline">show-text</code>设置折叠时的文案，通过<code class="code_inline">hidden-text</code>设置收起的文案</p>
    <div class="demo-block">
      <WShowmore
        allow-fold
        show-text='show'
        hidden-text='hidden'
        :len='10'
        text='文本超出显示长度，折叠起来，展开后，可以通过 allowFold 指定是否需要收起'>
      </WShowmore>
    </div>
    <DemoDlock>
    <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;WShowmore<br>
        　allow-fold<br>
        　show-text=&#x27;show&#x27;<br>
        　hidden-text=&#x27;hidden&#x27;<br>
        　:len=&#x27;10&#x27;<br>
       　 text=&#x27;文本超出显示长度，折叠起来，展开后，可以通过 allowFold 指定是否需要收起&#x27;&gt;<br>
      &lt;/WShowmore&gt;<br>
 </code></pre></div>
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
        name: "show-more",
      data() {
        return {
          data: [
            {"parameter ": "len", "indicates": "显示文本的长度", "type": "Number", "optional": "—", "default":"-1(不进行折叠)"},
            {"parameter ": "text", "indicates": "类型", "type": "string", "optional": "—", "default": " —"},
            {"parameter ": "show-text", "indicates": "折叠时需要显示文案", "type": "Boolean", "optional": "—", "default":"显示更多"},
            {"parameter ": "hidden-text", "indicates": "隐藏时需要显示文案", "type": "string", "boolean": "—", "default":"隐藏"},
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
