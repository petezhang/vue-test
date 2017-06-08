<template>
  <ul>
    <list :my-data='a'></list>
  </ul>
</template>
<script>
export default {
  data () {
    return {a: [{1: 1}, {1: 1}]}
  }
}
</script>
<style scope></style>
