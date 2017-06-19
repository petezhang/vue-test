<template>
  <div class="pagination">
    <span class="prove" @click="onPageChange('prove')">上一页</span>
    <span class="page" v-for="pageIdx in pages.totalPages" :class="{active:pageIdx==pages.pageIndex}" @click="onPageChange(pageIdx)">{{pageIdx}}</span>
     <span class="next" @click="onPageChange('next')">下一页</span>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  props: ['pageData'],
  computed: {
    pages: function () {
      return this.pageData
    }
  },
  methods: {
    onPageChange: function (pageIndex) {
      var pageIdx

      if (typeof pageIndex === 'number') {
        pageIdx = pageIndex
      } else if (pageIndex === 'prove' && this.pages.pageIndex > 1) {
        pageIdx = this.pages.pageIndex - 1
      } else if (pageIndex === 'next' && this.pages.pageIndex < this.pages.totalPages) {
        pageIdx = this.pages.pageIndex + 1
      } else {
        return
      }
      this.$emit('onPageChange', pageIdx)
    }
  }
}
</script>
<style scope>
  .pagination{
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
  }
  .pagination span{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height:28px;
    text-align: center;
    border:1px solid #ccc;
    cursor: pointer;
    margin: 0 5px;
  }
  .pagination span:hover,.pagination span.active{
    background-color: #00b38a;
    border-color: #00b38a;
    color:#fff;
  }
  .prove,.next{
    width: 60px !important;
  }
</style>
