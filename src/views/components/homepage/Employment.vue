<template>
  <div class="employment-page">
    <div class="page-side-title">
        <h2>
            공고 검색
        </h2>
        <form class="form-inline my-2 my-lg-0 page-search">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    <div class="page-content">
        <hr>
        <ul>
          <li v-for="jobPosting in jobPostings" :key="jobPosting">
            <router-link href="javascript:void(0)" class="posting-panel" :to="openJobPosting(jobPosting.title)">
              <div class="posting-panel-career"><strong>{{jobPosting.career}}</strong><span>{{jobPosting.kind}}</span></div>
              <p class="posting-panel-title">{{jobPosting.title}}</p>
              <div>
                <strong>남은 날짜</strong>
                <span>기간</span>
              </div>
            </router-link>
          </li>
        </ul>
    </div> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobPostings:[{
        index:'1',
        title:'제목 1',
        kind:'수시',
        career:'경력',
        date:'2021.11.04~ 2021.11.30',
      },{
        index:'2',
        title:'제목 2',
        kind:'공채',
        career:'신입',
        date:'2021.11.04~ 2021.11.30',
      }],
      employment:{
        index:'1',
        title:'1',
        kind:'1',
        career:'1',
        date:'1',
      } 
    }
  },
  methods:{
    openJobPosting: function(title){
      return "/home/"+this.$route.params.id+"/"+title;
    }
  }
}
</script>

<style>
@import '../../../assets/styles/employment-homepage.css';
.posting-panel{
  text-align: left;
  display: block;
  padding-bottom:10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}
.posting-panel-career strong{
  padding-right: 5px;
  margin-right: 5px;
  border-right: 1px solid black;
}
.posting-panel-title{
  margin-top:10px;
  font-size: 20px;
}
</style>