<template>
  <div class="search-container">
    <input class="search-text" type="text" v-model="searchStr">
    <button class="search-btn" @click="search()">Search</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        searchStr: ''
      }
    },
    methods: {
      search: function () {
        console.log(this.searchStr)
      }
    }
  }
</script>
<style scope>
  .search-container{
    width:960px;
    margin:0 auto;
    padding-top:15px;
  }
  .search-container input{
    height:40px;
    width: 600px;
    border:1px solid #00b38a;
    outline: none;
    font-size: 16px;
    color: #666;
    padding:0 10px;
  }
  .search-container button{
    height: 40px;
    width:120px;
    background-color: #00b38a;
    color: #fff;
    font-size: 16px;
    border:1px solid #00b38a;
    outline: none;
    cursor: pointer;
  }
</style>
