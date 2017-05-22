<template>
  <div id="app">
    <nav class="nav-container clear-both">
      <img src="./assets/logo.png" width="42" height="42">
      <ul class="clear-both">
        <li><router-link to='/demo1'>demo1</router-link></li>
        <li><router-link to='/demo2'>demo2</router-link></li>
        <li><router-link to='/demo3'>demo3</router-link></li>
        <li><router-link to='/demo4'>demo4</router-link></li>
      </ul>
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
.nav-container img{
  float: left;
}
.nav-container ul{
  float: right;
}
.nav-container ul >li{
    float: left;
    list-style: none;
    width: 120px;
    height: 42px;
    line-height: 100%;
    text-align: center;
  }
  .nav-container ul >li a{
    line-height: 42px;
    color: #333;
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
