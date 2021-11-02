<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="employment-homepage">
  <a class="navbar-brand pointer"  @click="showMainPage">회사이름</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link pointer"  @click="showNoticePage">공지사항</a>
      </li>
      <li class="nav-item">
        <a class="nav-link pointer"  @click="showEmploymentPage">채용공고</a>
      </li>
      <li class="nav-item">
        <a class="nav-link pointer" @click="showFAQPage">FAQ</a>
      </li>
    </ul>
  </div>
  </nav>
  <MainPage :home-page="homepage" v-if="homepage.main" @changePageToEmlpoyment="updatePage"/>
  <Employment v-if="homepage.employment"/>
  <FAQ v-if="homepage.faq"/>
  <Notice v-if="homepage.notice"/>
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
    updatePage(variable){
      this.homepage.notice = variable.notice
      this.homepage.faq = variable.faq
      this.homepage.main = variable.main
      this.homepage.employment = variable.employment
    },
    showMainPage(){
        this.homepage.notice = false
        this.homepage.faq = false
        this.homepage.main = true
        this.homepage.employment = false  
    },
    showNoticePage(){
        this.homepage.notice = true
        this.homepage.faq = false
        this.homepage.main = false
        this.homepage.employment = false        
    },
    showEmploymentPage(){
        this.homepage.notice = false
        this.homepage.faq = false
        this.homepage.main = false
        this.homepage.employment = true        
    },
    showFAQPage(){
        this.homepage.notice = false
        this.homepage.faq = true
        this.homepage.main = false
        this.homepage.employment = false        
    },
  },
  data(){
    return{
      homepage:{  
        notice:false,
        faq : false,
        main: true,
        employment:false
      }
    }
  },
  // 서버에서 데이터 받아오는 코드
}
</script>

<style>
.jumbotron{
  height: 100vh;
}
.pointer{
  cursor: pointer;
}
</style>