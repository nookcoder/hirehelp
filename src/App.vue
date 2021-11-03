<template>
  <div id="app">
    <div class="side-menu">
      <sidebar-menu></sidebar-menu>
    </div>
    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<script>

import SidebarMenu from './common/components/SidebarMenu.vue'
export default {
  components: { SidebarMenu },
  name: 'App',
  head:{
   script:[
     {src:'https://code.jquery.com/jquery-3.5.1.min.js',async:true},
     {src:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',async:true},
     {src:'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js',async:true}
   ],
   link:[
    {href:"https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css", rel:"stylesheet"},
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
  color: #000000;
  display:flex;
}

.side-menu{
  width: 30px;
}
.main-page{
  width:100%;
}
</style>