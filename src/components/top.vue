<template>
  <section class="content">
    <!--搜索框-->
    <search></search>
    <!--数据列表-->
    <list></list>
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
      list: []
    }
  },
  components: {
    list,
    search,
    pagination
  },
  computed: {
    lists: function () {
      return this.$store.state.lists.top
    },
    pageData: {
      get: function () {
        var pageSize = 5
        var totalPages = Math.ceil(this.lists.length / pageSize)
        var totalCounts = this.lists.length
        return {
          totalPages: totalPages,
          totalCounts: totalCounts,
          pageIndex: 1,
          pageSize: pageSize
        }
      },
      set: function (pageIdx) {
        this.pageIndex = pageIdx
        console.log(this.pageIndex + '--------------' + pageIdx)
      }
    }
  },
  methods: {
    showText: function (str) {
      this.$store.commit('addList', { str })
    },
    toInformation: function (item) {
      this.$router.push({path: 'information', query: {'companyId': item.companyId}})
    },
    onPageChange: function (pageIdx) {
      this.pageData = pageIdx
    }
  }
}
</script>
<style scoped>

</style>
