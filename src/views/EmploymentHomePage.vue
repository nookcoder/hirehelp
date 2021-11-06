<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="employment-homepage">
  <router-link class="navbar-brand mb-0 h1" :to="'/home/'+currentId">회사이름</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link pointer" :to="'/home/'+currentId+'/notice'">공지사항</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link pointer"  :to="'/home/'+currentId+'/employment'">채용공고</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link pointer" :to="'/home/'+currentId+'/faq'">FAQ</router-link>
      </li>
    </ul>
  </div>
  </nav>
  <router-view></router-view>
</div>

</template>

<script>
import MainPage from './components/homepage/MainPage.vue'
import Employment from './components/homepage/Employment.vue'
import FAQ from './components/homepage/FAQ.vue'
import Notice from './components/homepage/Notice.vue'

export default {
  components: { MainPage,Employment,FAQ,Notice },
  name:"EmploymentHomePage",
  methods:{
  
  },
  data(){
    return{
      currentId:this.$store.getters.getRouteId,
    }
  },
  // 서버에서 데이터 받아오는 코드
}
</script>

<style>
#employment-homepage{
  margin:0px;
  position: fixed; left: 0; right: 0; top: 0;
}
.employment-page{
  position: absolute;
  top:90px;
  z-index: -1;
}
.side-menu{
  display: none;
}
.jumbotron{
  height: 100vh;
}
.pointer{
  cursor: pointer;
}

</style>