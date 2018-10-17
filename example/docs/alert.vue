<template>
  <section class="view">
    <h1>Alert 警告</h1>
    <hr>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <div class="demo-block">
      <WAlert type="success">成功提示的文案</WAlert>
      <WAlert type="info">消息提示的文案</WAlert>
      <WAlert type="warning" title="警告提示的文案"></WAlert>
      <WAlert type="error" title="错误提示的文案"></WAlert>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
&lt;WAlert type=&quot;success&quot;&gt;成功提示的文案&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;info&quot;&gt;消息提示的文案&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;warning&quot; title=&quot;警告提示的文案&quot;&gt;&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;error&quot; title=&quot;错误提示的文案&quot;&gt;&lt;/WAlert&gt;<br>
         </code></pre></div>
    </DemoDlock>

    <h3>带有 icon</h3>
    <p>表示某种状态时提升可读性。</p>
    <div class="demo-block">
      <WAlert type="success" show-icon>成功提示的文案(暂无对应图标)</WAlert>
      <WAlert type="info" show-icon>消息提示的文案(暂无对应图标)</WAlert>
      <WAlert type="warning" show-icon>警告提示的文案(暂无对应图标)</WAlert>
      <WAlert type="error" show-icon>错误提示的文案(暂无对应图标)</WAlert>
    </div>

    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;WAlert type=&quot;success&quot; show-icon&gt;成功提示的文案(暂无对应图标)&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;info&quot; show-icon&gt;消息提示的文案(暂无对应图标)&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;warning&quot; show-icon&gt;警告提示的文案(暂无对应图标)&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;error&quot; show-icon&gt;错误提示的文案(暂无对应图标)&lt;/WAlert&gt;<br>

         </code></pre></div>
    </DemoDlock>

    <h3>文字居中</h3>
    <p>使用 <code class="code_inline">center</code> 属性让文字水平居中。</p>
    <div class="demo-block">
      <WAlert type="success" center show-icon>成功提示的文案</WAlert>
      <WAlert type="info" center show-icon>消息提示的文案</WAlert>
      <WAlert type="warning" center show-icon>警告提示的文案</WAlert>
      <WAlert type="error" center show-icon>错误提示的文案</WAlert>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;WAlert type=&quot;success&quot; center show-icon&gt;成功提示的文案&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;info&quot; center show-icon&gt;消息提示的文案&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;warning&quot; center show-icon&gt;警告提示的文案&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;error&quot; center show-icon&gt;错误提示的文案&lt;/WAlert&gt;<br>

         </code></pre></div>
    </DemoDlock>

    <h3>自定义关闭按钮</h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <div class="demo-block">
      <WAlert type="success" :closable="false">不可关闭的 alert</WAlert>
      <WAlert type="info" close-text="知道了">自定义关闭的 alert</WAlert>
      <WAlert type="warning" @close="hello">设置了回调的 alert</WAlert>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;WAlert type=&quot;success&quot; :closable=&quot;false&quot;&gt;不可关闭的 alert&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;info&quot; close-text=&quot;知道了&quot;&gt;自定义关闭的 alert&lt;/WAlert&gt;<br>
      &lt;WAlert type=&quot;warning&quot; @close=&quot;hello&quot;&gt;设置了回调的 alert&lt;/WAlert&gt;<br>
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

    <h3>事件</h3>
    <WTable :items="dataAlert" >
      <WThead title="事件名称"/>
      <WThead title="说明"/>
      <WThead title="返回值"/>
    </WTable>
  </section>
</template>

<script>
  import DemoDlock from '../components/demo-block.vue'
    export default {
        name: "alert",
      data() {
        return {
          data: [
            {"parameter ": " title", "indicates": "标题，必选参数。也可通过默认 slot 传入", "type": "string", "optional": "—", "default":"　—"},
            {"parameter ": "type", "indicates": "主题", "type": "string", "optional": "success/warning/info/error", "default": "info"},
            {"parameter ": "description", "indicates": "辅助性文字", "type": "string", "optional": "—", "default":"　—"},
            {"parameter ": "closable", "indicates": "是否可关闭", "type": "boolean", "boolean": "—", "default":"true"},
            {"parameter ": "center", "indicates": "文字是否居中", "type": "boolean", "boolean": "—", "default":"true"},
            {"parameter ": "close-text", "indicates": "关闭按钮自定义文本", "type": "string", "boolean": "—", "default":"　—"},
            {"parameter ": "show-icon", "indicates": "是否显示图标", "type": "boolean", "boolean": "—", "default":"false"},
          ],
          dataAlert:[
            {"event":"close","indicates":"关闭alert时触发的事件","return":"—"}
          ]
        }
      },
      methods: {
        hello() {
          alert('Hello World!');
        }
      },
      components: {
        DemoDlock,
      }
    }
</script>

<style scoped>
  .w-alert:not(:first-child){
    margin-top: 10px;
  }
</style>
