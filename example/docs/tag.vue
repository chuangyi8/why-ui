<template>
  <section class="view">
    <h1>Tag 标签</h1>
    <hr>
    <h3>基础用法</h3>
    <p>由<code class="code_inline">type</code>属性来选择tag的类型，也可以通过<code class="code_inline">color</code>属性来自定义背景色。</p>
    <div class="demo-block">
    <w-tag>标签一</w-tag>
    <w-tag color="success">标签二</w-tag>
    <w-tag color="info">标签三</w-tag>
    <w-tag color="warning">标签四</w-tag>
    <w-tag color="danger">标签五</w-tag>
    </div>

    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
  &lt;w-tag&gt;标签一&lt;/w-tag&gt;<br>
    &lt;w-tag color=&quot;success&quot;&gt;标签二&lt;/w-tag&gt;<br>
    &lt;w-tag color=&quot;info&quot;&gt;标签三&lt;/w-tag&gt;<br>
    &lt;w-tag color=&quot;warning&quot;&gt;标签四&lt;/w-tag&gt;<br>
    &lt;w-tag color=&quot;danger&quot;&gt;标签五&lt;/w-tag&gt;<br>
          </code></pre></div>
    </DemoDlock>

    <h3>可移除标签</h3>
    <p>设置<code class="code_inline">closable</code>属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。</p>
    <div class="demo-block">
      <w-tag
    v-for="tag in dynamicTags"
    :key="tag.name"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)" :color="tag.color">
    {{tag.name}}
  </w-tag>
    </div>

    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
 &lt;w-tag<br>
    v-for=&quot;tag in dynamicTags&quot;<br>
    :key=&quot;tag.name&quot;<br>
    closable<br>
    :disable-transitions=&quot;false&quot;<br>
    @close=&quot;handleClose(tag)&quot; :color=&quot;tag.color&quot;&gt;<br>
    {{tag.name}}<br>
  &lt;/w-tag&gt;<br>
      <br>
&lt;script&gt;<br>
  export default{<br>
     　data() {<br>
      　　return {<br>
      　　　dynamicTags: [{<br>
         　　　　　name: &#x27;标签一&#x27;,<br>
          　　　　　color: &#x27;primary&#x27;<br>
       　　　　　　 }, {<br>
          　　　　　name: &#x27;标签二&#x27;,<br>
          　　　　　color: &#x27;success&#x27;<br>
        　　　　　　}, {<br>
         　　　　　name: &#x27;标签三&#x27;,<br>
         　　　　　color: &#x27;info&#x27;<br>
        　　　　　　}, {<br>
          　　　　　name: &#x27;标签四&#x27;,<br>
          　　　　　color: &#x27;danger&#x27;<br>
       　　 }]<br>
      　　};<br>
   　},<br>
    　methods: {<br>
      　　handleClose(tag) {<br>
        　　　this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);<br>
    　　  }<br>
   　}<br>
  }<br>
&lt;/script&gt;<br>
       </code></pre></div>
    </DemoDlock>


    <!--<w-tag  closable :disable-transitions="false"  @close="handleClose({-->
          <!--name: '标签一',-->
          <!--color: 'primary'-->
        <!--})" color="primary">标签一</w-tag>-->

    <h3>属性</h3>
    <WTable :items="data" >
      <WThead title="参数"/>
      <WThead title="说明"/>
      <WThead title="类型"/>
      <WThead title="可选值"/>
      <WThead title="默认值"/>
    </WTable>
    <h3>Tag 事件</h3>
    <WTable :items="dataTag" >
      <WThead title="事件名称"/>
      <WThead title="说明"/>
      <WThead title="返回值"/>
    </WTable>



</section>
</template>

<script>
  import DemoDlock from '../components/demo-block.vue'
  export default{
    data() {
      return {
        dynamicTags: [{
          name: '标签一',
          color: 'primary'
        }, {
          name: '标签二',
          color: 'success'
        }, {
          name: '标签三',
          color: 'info'
        }, {
          name: '标签四',
          color: 'danger'
        }],
        data: [
          {"parameter ": "name", "indicates": "用于触发关闭事件时的回调", "type": "Boolean", "optional": "—", "default":"false"},
          {"parameter ": "color", "indicates": "类型", "type": "String", "optional": "primary, success, error, warning, info", "default":"primary"},
          {"parameter ": " closable", "indicates": "是否可关闭", "type": "Boolean", "optional": "—", "default":"false"},
        ],
        dataTag:[
          {"event":"close","indicates":"点击关闭按钮时触发","return":"event"}
        ]
      };
    },
    methods: {
      handleClose(tag) {
        console.log("2222222")
        console.log(JSON.stringify(tag));
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    },
    components:{
      DemoDlock,
    }
  }
</script>
