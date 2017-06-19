<template>
  <div class="list-container">
    <div class="list-item" v-for="item in myLists" @click="toInformation(item)">
      <div class="list-header clear">
        <div class="list-header-left">
          <h4 class="job-name">{{item.positionName}}</h4>
          <p class="info"><span class="money">{{item.salary}}</span><span class="experience">{{item.workYear}}</span></p>
        </div>
        <div class="list-header-middle">
          <h4 class="company-name">{{item.companyShortName}}</h4>
          <p class="stage">{{item.financeStage}}</p>
        </div>
        <div class="list-header-right">
          <img src="" :src="'http://www.lgstatic.com/'+item.companyLogo" alt="logo" width="60" height="60">
        </div>
      </div>
      <div class="list-footer clear">
        <div class="list-footer-left"><span class="label" v-if="item.industryField" v-text="item.industryField"></span></div>
        <div class="list-footer-right">{{item.positionAdvantage}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'list',
  props: ['pageData'],
//  data () {
//    return {
//     pageData: this.pageData,
//      lists: this.$store.state.lists.top
//    }
//  },
  computed: {
    lists: function () {
      return this.$store.state.lists.top
    },
    myLists: function () {
      var _myListsArr = []
      if (this.pageData.searchStr) {
        for (var i = 0; i < this.lists.length; i++) {
          if (JSON.stringify(this.lists[i]).indexOf(this.pageData.searchStr) !== -1) {
            _myListsArr.push(this.lists[i])
          }
        }
      } else {
        _myListsArr = this.lists
      }
      console.log(_myListsArr.length)
      this.$emit('onChangePage',_myListsArr.length)
      return _myListsArr.slice((this.pageData.pageIndex - 1) * this.pageData.pageSize, this.pageData.pageIndex * this.pageData.pageSize)
    }
  },
  methods: {
    toInformation: function (item) {
      this.$router.push({name: 'New', query: {'companyId': item.companyId}})
    }
  }
}
</script>
<style scoped>
  .list-container{
    width:960px;
    margin: 0 auto;
    margin-bottom:30px;
  }
  .list-item{
    border:1px solid #eee;
    margin-top:18px;
    cursor: pointer;
  }
  .list-header{
    padding: 14px 15px 0;
    height: 68px;
  }
  .list-header h4{
    font-size:16px;
  }
  .list-header-left{
    float: left;
    width: 528px;
    margin-right: 20px;
  }
  .list-header-middle{
    float: left;
    width: 303px;
    margin-right: 15px;
  }
  .list-header-right{
    float: left;
    width: 62px;
  }
  .job-name,.company-name{
    color:#00b38a;
    font-weight:normal;
    height: 34px;
    line-height: 34px;
  }
  .money{
    margin-right:15px;
    color: #fa6041;
  }
  .info,.stage{
    color: #666;
    height: 24px;
    line-height: 24px;
  }
  .list-footer{
    width: 928px;
    height: 39px;
    padding: 0 15px;
    background-color: #fafafa;
  }
  .list-footer-left{
    float: left;
    width: 528px;
    height: 39px;
    margin-right: 20px;
    line-height: 39px;
    overflow: hidden;
  }
  .list-footer-right{
    float: left;
    width: 380px;
    height: 39px;
    line-height: 39px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .label{
    display: inline-block;
    border:1px solid #ccc;
    margin-right: 10px;
    height: 18px;
    line-height:18px;
    margin-top:10px;
    padding:1px 10px;
    -webkit-border-radius:;
    -moz-border-radius:;
    border-radius:4px;
  }
</style>
