<template>
  <section class="view">
    <h1>Layout 布局</h1>
    <hr>
    <h3>概述</h3>
    <p>栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备屏幕越来越大，传统的 12栅格 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 24栅格 系统。也就是将页面区域 24 等分。</p>
    <h3>基础布局</h3>
    <div class="demo-block">

      <w-row>
        <w-col :span="24"><div class="w-grid-content w-bg-purple-dark"></div></w-col>
      </w-row>

      <w-row class="m-10">
        <w-col :span="8"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="8"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="8"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row class="m-10">
        <w-col :span="3"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="3"><div class="w-grid-content w-bg-purple-light"></div></w-col>
      </w-row>
      </div>

    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">

 &lt;w-row&gt;<br>
        &lt;w-col :span=&quot;24&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-dark&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
<br>
      &lt;w-row class=&quot;m-10&quot;&gt;<br>
        &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
          <br>
      &lt;w-row class=&quot;m-10&quot;&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;3&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br></code></pre>
      </div>
    </DemoDlock>




    <h3>分栏间隔</h3>
    <p>分栏之间存在间隔
      Row 组件 提供 <code class="code_inline">gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
    <div class="demo-block">
    <w-row :gutter="20">
      <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
    </w-row>
    </div>

    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;w-row :gutter=&quot;20&quot;&gt;<br>
      &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
    &lt;/div&gt;<br>

    </code></pre>
      </div>
    </DemoDlock>




    <h3>混合布局</h3>
    <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
    <div class="demo-block">
    <w-row :gutter="20">
      <w-col :span="16"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="8"><div class="w-grid-content w-bg-purple"></div></w-col>
    </w-row>
    <w-row :gutter="20" class="m-10">
      <w-col :span="8"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="8"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="4"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="4"><div class="w-grid-content w-bg-purple"></div></w-col>
    </w-row>
    <w-row :gutter="20" class="m-10">
      <w-col :span="4"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="16"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :span="4"><div class="w-grid-content w-bg-purple"></div></w-col>
    </w-row>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
&lt;w-row :gutter=&quot;20&quot;&gt;<br>
      &lt;w-col :span=&quot;16&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
    &lt;w-row :gutter=&quot;20&quot; class=&quot;m-10&quot;&gt;<br>
      &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
    &lt;w-row :gutter=&quot;20&quot; class=&quot;m-10&quot;&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;16&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
           </code></pre>
      </div>
    </DemoDlock>






    <h3>分栏偏移</h3>
    <p>支持偏移指定的栏数。通过制定 col 组件的 <code class="code_inline">offset</code> 属性可以指定分栏偏移的栏数。</p>
    <div class="demo-block">
      <w-row :gutter="20">
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6" :offset="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row :gutter="20" class="m-10">
        <w-col :span="6" :offset="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6" :offset="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row :gutter="20" class="m-10">
        <w-col :span="12" :offset="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
&lt;w-row :gutter=&quot;20&quot;&gt;<br>
      &lt;w-col :span=&quot;16&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
    &lt;w-row :gutter=&quot;20&quot; class=&quot;m-10&quot;&gt;<br>
      &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;8&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
    &lt;w-row :gutter=&quot;20&quot; class=&quot;m-10&quot;&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;16&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :span=&quot;4&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
     </code></pre>
      </div>
    </DemoDlock>

    <h3>Flex 布局</h3>
    <p>通过 flex 布局来对分栏进行灵活的对齐。
      将 <code class="code_inline">type</code> 属性赋值为 'flex'，可以启用 flex 布局，并可通过 <code class="code_inline">justify</code> 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p>
    <div class="demo-block">
      <w-row type="flex" class="row-bg">
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row type="flex" class="row-bg m-10" justify="center">
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row type="flex" class="row-bg m-10" justify="end">
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row type="flex" class="row-bg m-10" justify="space-between">
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
      <w-row type="flex" class="row-bg m-10" justify="space-around">
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple-light"></div></w-col>
        <w-col :span="6"><div class="w-grid-content w-bg-purple"></div></w-col>
      </w-row>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
 &lt;w-row type=&quot;flex&quot; class=&quot;row-bg&quot;&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
      &lt;w-row type=&quot;flex&quot; class=&quot;row-bg m-10&quot; justify=&quot;center&quot;&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
      &lt;w-row type=&quot;flex&quot; class=&quot;row-bg m-10&quot; justify=&quot;end&quot;&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
      &lt;w-row type=&quot;flex&quot; class=&quot;row-bg m-10&quot; justify=&quot;space-between&quot;&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
      &lt;w-row type=&quot;flex&quot; class=&quot;row-bg m-10&quot; justify=&quot;space-around&quot;&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
        &lt;w-col :span=&quot;6&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;/w-row&gt;<br>
     </code></pre>
      </div>
    </DemoDlock>
    <div class="demo-block">
    <h3>响应式布局</h3>
    <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code class="code_inline">xs</code>、<code class="code_inline">sm</code>、<code class="code_inline">md</code>、<code class="code_inline">lg</code> 和 <code class="code_inline">xl</code>。</p>
    <w-row :gutter="10">
      <w-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="w-grid-content w-bg-purple-light"></div></w-col>
      <w-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="w-grid-content w-bg-purple"></div></w-col>
      <w-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="w-grid-content w-bg-purple-light"></div></w-col>
    </w-row>
    </div>
    <DemoDlock>
      <div slot="highlight">
        <pre><code v-pre="" class="language-html">
&lt;w-row :gutter=&quot;10&quot;&gt;<br>
      &lt;w-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :xs=&quot;4&quot; :sm=&quot;6&quot; :md=&quot;8&quot; :lg=&quot;9&quot; :xl=&quot;11&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
      &lt;w-col :xs=&quot;8&quot; :sm=&quot;6&quot; :md=&quot;4&quot; :lg=&quot;3&quot; :xl=&quot;1&quot;&gt;&lt;div class=&quot;w-grid-content w-bg-purple-light&quot;&gt;&lt;/div&gt;&lt;/w-col&gt;<br>
    &lt;/w-row&gt;<br>
  </code></pre>
      </div>
    </DemoDlock>
    <h3>Row 属性</h3>
      <WTable :items="data" >
        <WThead title="参数"/>
        <WThead title="说明"/>
        <WThead title="类型"/>
        <WThead title="可选值"/>
        <WThead title="默认值"/>
      </WTable>
    <h3>Col 属性</h3>
    <WTable :items="dataCol" >
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
        name: "layout",
      data() {
        return {
          data: [
            {"parameter ": "gutter", "indicates": "栅格间隔", "type": "number", "optional": "—", "default":"０"},
            {"parameter ": "type", "indicates": "布局模式，可选 flex，现代浏览器下有效", "type": "string", "optional": "—　", "default": "—"},
            {"parameter ": "justify", "indicates": "flex 布局下的水平排列方式", "type": "string", "optional": "start/end/center/space-around/space-between", "default":"start"},
            {"parameter ": "align", "indicates": "flex 布局下的垂直排列方式", "type": "string", "optional": "top/middle/bottom", "default":"top"},
            {"parameter ": "tag", "indicates": "自定义元素标签", "type": "string", "optional": "*", "default":"div"},
          ],
          dataCol:[
            {"parameter ": "span", "indicates": "栅格占据的列数", "type": "number", "optional": "—　", "default":"—"},
            {"parameter ": "offset", "indicates": "栅格左侧的间隔格数", "type": "number", "optional": "—", "default":"０"},
            {"parameter ": "push", "indicates": "栅格向左移动格数", "type": "number", "optional": "—", "default":"０"},
            {"parameter ": "pull", "indicates": "栅格向左移动格数", "type": "number", "optional": "—", "default":"０"},
            {"parameter ": "xs", "indicates": "<768px 响应式栅格数或者栅格属性对象", "type": "number/object(例如： {span: 4, offset: 4})", "optional": "—　", "default":"—"},
            {"parameter ": "sm", "indicates": "≥768px 响应式栅格数或者栅格属性对象", "type": "number/object (例如： {span: 4, offset: 4})", "optional": "—　", "default":"—"},
            {"parameter ": "md", "indicates": "≥992 响应式栅格数或者栅格属性对象", "type": "number/object (例如： {span: 4, offset: 4})", "optional": "—　", "default":"—"},
            {"parameter ": "lg", "indicates": "≥1200 响应式栅格数或者栅格属性对象", "type": "number/object (例如： {span: 4, offset: 4})", "optional": "—　", "default":"—"},
            {"parameter ": "tag", "indicates": "自定义元素标签", "type": "string", "optional": "*", "default":"div"},
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
