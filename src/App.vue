<template>
  <div id="app">
    <nav class="nav-container">
    <div class="nav-content  clear-both">
      <img src="./assets/logo.png" width="42" height="42">
      <ul class="clear-both">
        <li><router-link to='/top'>Top</router-link></li>
        <li><router-link to='/new'>New</router-link></li>
        <li><router-link to='/show'>Show</router-link></li>
        <li><router-link to='/ask'>Ask</router-link></li>
        <li><router-link to='/jobs'>Jobs</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view class='view-container'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav-container{
  background-color: #f4f4f4;border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.nav-content{
  width: 1000px;
  margin: 0 auto;
}
.nav-content img{
  float: left;
}
.nav-content ul{
  float: left;
}
.nav-content ul >li{
    float: left;
    list-style: none;
    width: 80px;
    height: 42px;
    line-height: 100%;
    text-align: center;
  }
  .nav-content ul >li a{
    line-height: 42px;
    color: #333;
    font-size: 14px;
  }
  .clear-both:after{
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
  .view-container{
    margin: 0 100px;
  }
</style>
