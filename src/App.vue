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

import SidebarMenu from './components/sidebar/SidebarMenu.vue'
export default {
  components: { SidebarMenu },
  name: 'App'
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