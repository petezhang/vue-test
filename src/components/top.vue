<template>
  <div class="test-content">
  <div class="list  clear-both"  v-for="item in lists">
    <div class="logo">
      <img src="" :src='item.img' height="80" width="80">
    </div>
    <div class="content">
      <h4>{{item.title}}</h4>
      <p class="article">{{item.info}}</p>
      <p class="time">{{item.time}}</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      list: []
    }
  },
  computed: {
    lists: function () {
      return this.$store.state.lists.top.articleList
    }
  },
  methods: {
    showText: function (str) {
      this.$store.commit('addList', { str })
    }
  }
}
</script>
<style scoped>
  .list{
    padding: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .list:hover{
    background-color: #fafafa;
  }
  .logo{
    float: left;
    width: 80px;
    height: 80px;
  }
  .content{
    float: left;
    height: 80px;
    margin-left: 20px;
  }
  .content h4{
    line-height: 32px;
  }
  .article{
    font-size: 14px;
    color: #666;
    line-height: 28px;
  }
  .time{
    font-size: 12px;
    color: #aaa;
    position: absolute;
    right: 20px;
    top: 20px
  }
</style>
