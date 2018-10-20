<template>
  <section class="view">
    <h1>Table 表格</h1>
    <hr>

    <p>基础组件，主要用于展示大量结构化数据。</p>
    <h3>数据展示</h3>
      <div class="demo-block">
      <WTable :items="data">
        <WThead title="姓名"/>
        <WThead title="性别"/>
        <WThead title="年龄"/>
        <WThead title="手机"/>
        <WThead title="工号"/>
      </WTable>
      </div>


    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
 &lt;WTable :items=&quot;data"&quot;&gt;<br>
        &lt;WThead title=&quot;姓名&quot;/&gt;<br>
        &lt;WThead title=&quot;性别&quot;/&gt;<br>
        &lt;WThead title=&quot;年龄&quot;/&gt;<br>
        &lt;WThead title=&quot;手机&quot;/&gt;<br>
        &lt;WThead title=&quot;工号&quot;/&gt;<br>
      &lt;/WTable&gt;<br>
       <br>
      &lt;script&gt;<br>
    export default {<br>
      　data() {<br>
        　　return {<br>
           　　　data:[<br>
          　　　　　{&quot;name&quot;:&quot;李贵发&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;25&quot;,&quot;phone&quot;:&quot;18888888888&quot;,&quot;number&quot;:&quot;5100&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;公子词&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;76&quot;,&quot;phone&quot;:&quot;18762312348&quot;,&quot;number&quot;:&quot;5101&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;小明&quot;,&quot;sex&quot;:&quot;女&quot;,&quot;age&quot;:&quot;26&quot;,&quot;phone&quot;:&quot;12162357787&quot;,&quot;number&quot;:&quot;5102&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;小Q&quot;,&quot;sex&quot;:&quot;女&quot;,&quot;age&quot;:&quot;16&quot;,&quot;phone&quot;:&quot;11732434543&quot;,&quot;number&quot;:&quot;5103&quot;},<br>
         　　　　　{&quot;name&quot;:&quot;李佳星&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;20&quot;,&quot;phone&quot;:&quot;18762123344&quot;,&quot;number&quot;:&quot;5104&quot;}<br>
        　　　]<br>
       　 }<br>
      　}<br>
    }<br>
  &lt;/script&gt;<br>
       </code></pre></div>
    </DemoDlock>
    <h3>选项表格</h3>
<p>选择多行数据时使用 Checkbox。</p>
    <div class="demo-block">
      <WTable :items="data" :check-colum="true" :check-result.sync="checkResult">
        <WThead title="姓名"/>
        <WThead title="性别"/>
        <WThead title="年龄"/>
        <WThead title="手机"/>
        <WThead title="工号"/>
      </WTable>
      {{checkResult}}
    </div>

    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
 &lt;WTable :items=&quot;data :check-colum="true" :check-result.sync="checkResult"&quot;&gt;<br>
        &lt;WThead title=&quot;姓名&quot;/&gt;<br>
        &lt;WThead title=&quot;性别&quot;/&gt;<br>
        &lt;WThead title=&quot;年龄&quot;/&gt;<br>
        &lt;WThead title=&quot;手机&quot;/&gt;<br>
        &lt;WThead title=&quot;工号&quot;/&gt;<br>
      &lt;/WTable&gt;<br>
       <br>
      &lt;script&gt;<br>
    export default {<br>
      　data() {<br>
        　　return {<br>
           　　　data:[<br>
          　　　　　{&quot;name&quot;:&quot;李贵发&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;25&quot;,&quot;phone&quot;:&quot;18888888888&quot;,&quot;number&quot;:&quot;5100&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;公子词&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;76&quot;,&quot;phone&quot;:&quot;18762312348&quot;,&quot;number&quot;:&quot;5101&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;小明&quot;,&quot;sex&quot;:&quot;女&quot;,&quot;age&quot;:&quot;26&quot;,&quot;phone&quot;:&quot;12162357787&quot;,&quot;number&quot;:&quot;5102&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;小Q&quot;,&quot;sex&quot;:&quot;女&quot;,&quot;age&quot;:&quot;16&quot;,&quot;phone&quot;:&quot;11732434543&quot;,&quot;number&quot;:&quot;5103&quot;},<br>
         　　　　　{&quot;name&quot;:&quot;李佳星&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;20&quot;,&quot;phone&quot;:&quot;18762123344&quot;,&quot;number&quot;:&quot;5104&quot;}<br>
        　　　]<br>
       　 }<br>
      　}<br>
    }<br>
  &lt;/script&gt;<br>
       </code></pre></div>
    </DemoDlock>


    <h3>表格分页</h3>
    <div class="demo-block">
      <WTable :items="data2" :check-colum="true" :check-result.sync="checkResult">
        <WThead title="姓名"/>
        <WThead title="性别"/>
        <WThead title="年龄"/>
        <WThead title="手机"/>
        <WThead title="工号"/>
      </WTable>
      <WPage :total-count="totalCount"  :nowPage.sync="nowPage"></WPage>
    </div>
    <!--{{checkResult}}-->

    <DemoDlock>
      <div slot="highlight">
    <pre><code v-pre="" class="language-html">
 &lt;WTable :items=&quot;data2&quot; :check-colum=&quot;true&quot; :check-result.sync=&quot;checkResult&quot;&gt;<br>
        &lt;WThead title=&quot;姓名&quot;/&gt;<br>
        &lt;WThead title=&quot;性别&quot;/&gt;<br>
        &lt;WThead title=&quot;年龄&quot;/&gt;<br>
        &lt;WThead title=&quot;手机&quot;/&gt;<br>
        &lt;WThead title=&quot;工号&quot;/&gt;<br>
      &lt;/WTable&gt;<br>
      &lt;WPage :total-count=&quot;totalCount&quot;  :nowPage.sync=&quot;nowPage&quot;&gt;&lt;/WPage&gt;<br>
       <br>
      &lt;script&gt;<br>
    export default {<br>
      　data() {<br>
        　　return {<br>
           　　　data:[<br>
          　　　　　{&quot;name&quot;:&quot;李贵发&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;25&quot;,&quot;phone&quot;:&quot;18888888888&quot;,&quot;number&quot;:&quot;5100&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;公子词&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;76&quot;,&quot;phone&quot;:&quot;18762312348&quot;,&quot;number&quot;:&quot;5101&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;小明&quot;,&quot;sex&quot;:&quot;女&quot;,&quot;age&quot;:&quot;26&quot;,&quot;phone&quot;:&quot;12162357787&quot;,&quot;number&quot;:&quot;5102&quot;},<br>
          　　　　　{&quot;name&quot;:&quot;小Q&quot;,&quot;sex&quot;:&quot;女&quot;,&quot;age&quot;:&quot;16&quot;,&quot;phone&quot;:&quot;11732434543&quot;,&quot;number&quot;:&quot;5103&quot;},<br>
         　　　　　{&quot;name&quot;:&quot;李佳星&quot;,&quot;sex&quot;:&quot;男&quot;,&quot;age&quot;:&quot;20&quot;,&quot;phone&quot;:&quot;18762123344&quot;,&quot;number&quot;:&quot;5104&quot;}<br>
        　　　]<br>
       　 }<br>
      　}<br>
    }<br>
  &lt;/script&gt;<br>
     </code></pre></div>
    </DemoDlock>






  </section>
</template>

<script>
  import DemoDlock from '../components/demo-block.vue'
  export default {
    data(){
      return {
        data:[
          {"name":"李贵发","sex":"男","age":"25","phone":"18888888888","number":"5100"},
          {"name":"公子词","sex":"男","age":"76","phone":"18762312348","number":"5101"},
          {"name":"小明","sex":"女","age":"26","phone":"12162357787","number":"5102"},
          {"name":"小Q","sex":"女","age":"16","phone":"11732434543","number":"5103"},
          {"name":"李佳星","sex":"男","age":"20","phone":"18762123344","number":"5104"}
        ],
        data2:[
          {"name":"李贵发","sex":"男","age":"25","phone":"18888888888","number":"5100"},
          {"name":"公子词","sex":"男","age":"76","phone":"18762312348","number":"5101"},
          {"name":"小明","sex":"女","age":"26","phone":"12162357787","number":"5102"},
          {"name":"小Q","sex":"女","age":"16","phone":"11732434543","number":"5103"},
          {"name":"李佳星","sex":"男","age":"20","phone":"18762123344","number":"5104"}
        ],
        checkResult:[],
        nowPage: 1,
        totalCount: 20,
        list: 1,
      }
    },
    watch: {
      'nowPage': function (now, old) {
        if (now === 1) {

          this.data2 = [
            {"name":"李贵发","sex":"男","age":"25","phone":"18888888888","number":"5100"},
            {"name":"公子词","sex":"男","age":"76","phone":"18762312348","number":"5101"},
            {"name":"小明","sex":"女","age":"26","phone":"12162357787","number":"5102"},
            {"name":"小Q","sex":"女","age":"16","phone":"11732434543","number":"5103"},
            {"name":"李佳星","sex":"男","age":"20","phone":"18762123344","number":"5104"}
          ];
        }
        if (now === 2) {
          this.data2 = [
            {"name":"乔布斯","sex":"女","age":"25","phone":"18888888888","number":"5100"},
            {"name":"比尔茨","sex":"男","age":"76","phone":"18762312348","number":"5101"},
            {"name":"小李","sex":"男","age":"26","phone":"12162357787","number":"5102"},
            {"name":"小A","sex":"女","age":"16","phone":"11732434543","number":"5103"},
            {"name":"佳星","sex":"女","age":"20","phone":"18762123344","number":"5104"}
          ];
        }
        if (now === 3) {
          this.data2 = [
            {"name":"李彦宏","sex":"男","age":"56","phone":"18888888888","number":"5100"},
            {"name":"马化腾","sex":"男","age":"45","phone":"18762312348","number":"5101"},
            {"name":"雷军","sex":"女","age":"23","phone":"12162357787","number":"5102"},
            {"name":"小S","sex":"女","age":"66","phone":"11732434543","number":"5103"},
            {"name":"李热腾","sex":"男","age":"10","phone":"18762123344","number":"5104"}
          ];
        }
        if (now === 4) {
          this.data2 = [
            {"name":"李发4","sex":"女","age":"25","phone":"18888888888","number":"5100"},
            {"name":"公词","sex":"女","age":"36","phone":"18762312348","number":"5101"},
            {"name":"小风明","sex":"男","age":"29","phone":"12162357787","number":"5102"},
            {"name":"小饭后","sex":"男","age":"12","phone":"11732434543","number":"5103"},
            {"name":"李星4","sex":"女","age":"40","phone":"18762123344","number":"5104"}
          ];
        }
      }
    },
    components: {
      DemoDlock,
    },
    methods:{
      checkData(){

      },
    }

  }
</script>

<style>

</style>

