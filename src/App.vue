<template>
  <div id="app">
        <Menu></Menu>
        <router-view/>
  </div>
  
</template>

<script>

import Menu from './views/menubar.vue'
export default {
  components: { Menu },
  name: 'App',
  head:{
   script:[
     {src:'https://code.jquery.com/jquery-3.5.1.min.js',async:true},
     {src:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',async:true},
     {src:'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js',async:true},
     {src:'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js',integrity:'sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx',crossorigin:'anonymous',async:true},
     {src:'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',integrity:'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN',crossorigin:'anonymous',async:true},
     {src:'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js',integrity:'sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s',crossorigin:'anonymous',async:true},
   ],
   link:[
    {href:"https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css", rel:"stylesheet"},
    {rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'},
    {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css'},
    {rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'},
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
  color: #000000;
  
}

</style>