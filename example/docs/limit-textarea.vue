<template>
  <section class="view">
    <h1>Limit 限制输入域</h1>
    <hr>
    <h3>基础用法</h3>
    <p>Limit 可以控制用户输入的字符数，<code class="code_inline">placeholder</code> 指定初始输入的提示文案</p>
    <div class="demo-block">
      <WLimit :maxLen="10" placeholder="最多输入10个字符"></WLimit>
    </div>




    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
&lt;WLimit :maxLen=&quot;10&quot; placeholder=&quot;最多输入10个字符&quot;&gt;&lt;/WLimit&gt;
           </code></pre></div>
    </DemoDlock>
    <h3>裁剪超出字符</h3>
    <p>如果超过了限制的字符数，超过部分进行裁剪</p>
    <div class="demo-block">
      <WLimit :max-len="10" placeholder="最多输入10个字符" isCut></WLimit>
    </div>

    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
&lt;WLimit :max-len=&quot;10&quot; placeholder=&quot;最多输入10个字符&quot; isCut&gt;&lt;/WLimit&gt;
           </code></pre></div>
    </DemoDlock>

    <h3>列高</h3>
    <p>通过 <code class="code_inline">rows</code> 属性指定<code class="code_inline">limit</code>的高度</p>
    <div class="demo-block">
      <WLimit :max-len="10" :rows="3" placeholder="最多输入10个字符" is-cut></WLimit>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
  &lt;WLimit :max-len=&quot;10&quot; :rows=&quot;3&quot; placeholder=&quot;最多输入10个字符&quot; is-cut&gt;&lt;/WLimit&gt;
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
<br>
    <h3>Limit 事件</h3>
    <WTable :items="LimitData" >
      <WThead title="事件名称	"/>
      <WThead title="说明"/>
      <WThead title="返回值"/>
    </WTable>


  </section>
</template>

<script>
  import DemoDlock from '../components/demo-block.vue'
    export default {
        name: "limit-textarea",
      data() {
        return {
          data: [
            {"parameter ": "rows", "indicates": "列高", "type": "Number", "optional": "—", "default":"4"},
            {"parameter ": "max-len", "indicates": "最大长度限制", "type": "Number", "optional": "—", "default": " 20"},
            {"parameter ": " is-cut", "indicates": "超出字符是否裁剪", "type": "Boolean", "optional": "—", "default":"false"},
            {"parameter ": "placeholder", "indicates": "输入时需要显示的提示文案", "type": "string", "boolean": "—", "default":"请输入内容"},
          ],
          LimitData: [
            {"parameter ": "overText", "indicates": "超出限制长度触发", "optional": "content"},
            {"parameter ": "change", "indicates": "在 Input 值改变时触发", "optional": "value"},
          ]
        }
      },
      components: {
        DemoDlock,
      }
    }
</script>

<style scoped>

</style>
