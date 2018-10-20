<template>
  <div class="sui-table">
    <table class="sui-table-title">
      <thead ref="title">
      <tr>
        <th class="strong" style="width: 66px;" v-if="checkColum">
          <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
            <input type="checkbox" class="group-checkable" :checked="allCheck" @click="checkAll($event)"/>
            <span></span>
          </label>
        </th>
        <slot></slot>
      </tr>
      </thead>
    </table>
    <table class="sui-table-body table-hover">
      <tbody ref="body">
      <tr v-for="td in entities" :key="td.key" >
        <td v-if="checkColum">
          <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
            <input type="checkbox" class="group-checkable" :value="td.data.title" :checked="td.checked" @click="checkOne(td)"/>
            <span></span>
          </label>
        </td>
        <td v-for="title in td.data"  v-if="title!=false &&title!=true" :key="title">{{title}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import Vue from 'vue';

  export default {
    name: "WTable",
    props:{
      items:{
        type:Array,
      },
      checkColum:{
        type:Boolean,
        default:false
      },
      checkResult: {
        type: Array,
        default () {
          return [];
        }
      },
    },
    data(){
      return {
        entities:this.items.map((item,i) => {
          return {key:i,data:item}
        }),
        allCheck:false
      }
    },
    watch: {

      items: function (val, old) {
        for (var td of val) {
          if (typeof td.checked === 'undefined') {
            Vue.set(td, 'checked', false);
          }
        }
        this.entities=this.items.map((item,i) => {
          return {key:i,data:item}
        }),
        this.allCheck = false;


      },

    },
    created () {
      console.log(JSON.stringify(this.items))
      for (var td of this.items) {
        if (typeof td.checked === 'undefined') {
         // Vue.set(td, 'checked', false);
          Vue.set(td, 'checked', true);
        }
      }
    },
    computed: {
      // item: function () {
      //   return this.item.data.filter(function (number) {
      //     return number.id < 5
      //   })
      // },
    },
    mounted(){
      console.log("mounted");
      let heads = [].filter.call(this.$refs.title.getElementsByTagName("th"), (item)=>{
      	return item.nodeType == 1;
      });

      let trs = [].filter.call(this.$refs.body.getElementsByTagName("tr"), (item)=>{
      	return item.nodeType == 1;
      });
      trs.forEach(tr => {
      	let tds = [].filter.call(tr.getElementsByTagName("td"), (item)=>{
      		return item.nodeType == 1;
      	});
      	for(let i in tds){
      		tds[i].style.width = heads[i].clientWidth+1+"px";
      	}
      });
    },
    methods:{
      checkOne(data){
        data.checked = !data.checked;
        if (data.checked) {
          this.checkResult.push(data);
        } else {
          this.checkResult.splice(this.checkResult.indexOf(data), 1);

        }
      },
      checkAll (e) {
   this.allCheck = !this.allCheck;
        for (var td of this.entities) {
          td.checked = this.allCheck;
          if (this.allCheck) {
           this.checkResult.push(td);
          } else {
            this.checkResult.splice(this.checkResult.indexOf(td), 1);
          };
    }
      },

    }
  }
</script>

<style>

</style>
