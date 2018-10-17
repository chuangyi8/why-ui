<template>
  <div class="row dataTables_wrapper">
    <div class="pageTitle">
      <div class="dataTables_info" id="sample_1_info" role="status" aria-live="polite">
        当前 {{nowPage}} / {{totalPage}} 页 共 {{totalCount}} 条
      </div>
    </div>
    <div class="pageBox">
      <div class="dataTables_paginate paging_bootstrap_full_number" id="sample_1_paginate">
        <ul class="pagination" style="visibility: visible;">
          <li class="prev" :class="{'disabled':nowPage === 1}">
            <a href="javascript:;" title="First" @click="_first"><i class="w-icon-prev-arrow fs-14"></i></a>
          </li>
          <li class="prev" :class="{'disabled':nowPage === 1}">
            <a href="javascript:;" title="Prev" @click="_pre"><i class="w-icon-zuozhankaixianxing fs-14"></i></a>
          </li>
          <li class="next" :class="{'disabled':nowPage === totalPage || totalCount === 0}">
            <a href="javascript:;" title="Next" @click="_next"><i class="w-icon-youzhankaixianxing fs-14"></i></a>
          </li>
          <li class="next" :class="{'disabled':nowPage === totalPage || totalCount === 0}">
            <a href="javascript:;" title="Last" @click="_last"><i class="w-icon-next-arrow fs-14"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WPage",
      props: {
        totalCount: {
          type: Number,
          default: 0
        },
        limit: {
          type: Number,
          default: 5
        },
        nowPage: {
          type: Number,
          default: 1
        }
      },
      data() {
        return {
          total: 0,
          homePage: 1,
          skipPage: 1,
          totalPage: 0
        };
      },


      watch: {
        'totalCount': function (val, oldVal) {
          this.totalPage = Math.ceil(val / this.limit);
        }
      },
      created() {
        this.totalPage = Math.ceil(this.totalCount / this.limit);
      },
      methods: {
        _next() {
          if ((this.totalPage === 0 && this.nowPage < 0) || (this.totalPage > 0 && this.nowPage < this.totalPage)) {
            this.nowPage = this.nowPage + 1;
            this.skipPage = this.nowPage;
          }
        },
        _pre() {
          if ((this.totalPage === 0 && this.nowPage > 0) ||
            (this.totalPage > 0 && this.nowPage > 1)) {
            this.nowPage = this.nowPage - 1;
            this.skipPage = this.nowPage;
          }
        },
        _skip() {
          if (this.skipPage <= this.totalPage) {
            this.nowPage = parseInt(this.skipPage);
          }
        },
        _first() {
          if (this.nowPage !== 1) {
            this.nowPage = 1;
          }
        },
        _last() {
          if (this.nowPage !== this.totalPage) {
            this.nowPage = this.totalPage;
          }
        }
      }
    }
</script>

<style scoped>
.pageTitle{
  width: 41.66667%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
  .pageBox{
    width: 53.777%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;

  }
</style>
