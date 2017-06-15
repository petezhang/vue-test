<template>
  <section class="content">
    <!--搜索框-->
    <search></search>
    <!--数据列表-->
    <list></list>
    <!--分页-->
    <div class="pagination">
    </div>
  </section>

</template>
<script>
import list from './list.vue'
import search from './search.vue'
export default {
  name: 'test',
  data () {
    return {
      list: []
    }
  },
  components: {
    list,
    search
  },
  computed: {
    lists: function () {
      return this.$store.state.lists.top
    }
  },
  methods: {
    showText: function (str) {
      this.$store.commit('addList', { str })
    },
    toInformation: function (item) {
      this.$router.push({path: 'information', query: {'companyId': item.companyId}})
    }
  }
}
</script>
<style scoped>

</style>
