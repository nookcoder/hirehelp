<template>
  
  <div id="app">
    <PostingEnrollment/>
  </div>
</template>

<script>
import PostingEnrollment from './components/posting/PostingEnrollment.vue'
export default {
  components: { PostingEnrollment },
  name: 'App',
  head:{
    script:[
      {src:'https://code.jquery.com/jquery-3.5.1.min.js',async:true},
      {src:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',async:true},
      {src:'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js',async:true}
    ],
    link:[
      {rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'},
      {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css'}
    ]
  }
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
