<template>
  <section class="content">
    <!--搜索框-->
    <search v-on:onSearch="onSearch"></search>
    <!--数据列表-->
    <list :page-data="pageData" v-on:onChangePage="onChangePage"></list>
    <!--分页-->
    <pagination :page-data="pageData" v-on:onPageChange="onPageChange"></pagination>
  </section>

</template>
<script>
import list from './list.vue'
import search from './search.vue'
import pagination from './pagination.vue'
export default {
  name: 'test',
  data () {
    return {
      lists: [],
      pageData: {
        totalPages: 1,
        totalCounts: 1,
        pageIndex: 1,
        pageSize: 5,
        searchStr: ''
      }
    }
  },
  components: {
    list,
    search,
    pagination
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$data.lists = this.$store.state.lists.top
      this.setPageData()
    })
  },
  methods: {
    showText: function (str) {
      this.$store.commit('addList', { str })
    },
    toInformation: function (item) {
      this.$router.push({path: 'information', query: {'companyId': item.companyId}})
    },
    onPageChange: function (pageIdx) {
      this.pageData.pageIndex = pageIdx
    },
    onSearch: function (searchStr) {
      this.pageData.searchStr = searchStr
    },
    onChangePage: function (totalCounts) {
      this.pageData.totalPages = Math.ceil(totalCounts / this.pageData.pageSize)
      this.pageData.totalCounts = totalCounts
    },
    setPageData: function () {
      this.pageData.totalPages = Math.ceil(this.lists.length / this.pageData.pageSize)
      this.pageData.totalCounts = this.lists.length
    }
  }
}
</script>
<style scoped>

</style>
