<template>
  <div id="app">
    <PostingEnrollment/>
  </div>
</template>

<script>
import PostingEnrollment from './components/PostingEnrollment.vue'
export default {
  components: { PostingEnrollment },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
