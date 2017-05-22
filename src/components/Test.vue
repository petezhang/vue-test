<template>
  <div class="test-container">
    <ul>
      <li v-for="item in lists" v-on:click=showText(item)>{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      lists: this.$store.state.lists
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
  .test-container{
    background-color: #ff0;
  }
</style>
