<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="employment-homepage">
  <router-link class="navbar-brand mb-0 h1" :to="'/home/'+currentId">{{companyData.company_name}}</router-link>
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
  <router-view :company-data="companyData"></router-view>
</div>

</template>

<script>
export default {
  name:"EmploymentHomePage",
  created(){
    this.currentId = this.$route.params.id;
    this.$http.get(this.$store.state.host+"/api/company/"+ this.currentId+"/name")
    .then((res)=>{
      this.companyData = res.data;
      console.log(this.companyData);
    })    
  },
  methods:{
  
  },
  data(){
    return{
      companyData:{},
      currentId:"",
    }
  }
  // 서버에서 데이터 받아오는 코드
}
</script>

<style>
#employment-homepage{
  margin:0px;
  position: fixed; left: 0; right: 0; top: 0;
}
.jumbotron{
  height: 100vh;
}
.pointer{
  cursor: pointer;
}

</style>