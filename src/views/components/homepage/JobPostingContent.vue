<template>
  <div>
    <header class="apply-detail-header">
      <div id="posting-panel">
        <div class="apply-detail-column">
          <button type="button" class="btn border btn-lg" @click="$router.go(-1)"><b-icon icon="backspace"></b-icon></button>
        </div>
        <div>
          <div id="posting-panel-career"><strong>{{this.jobInformation.career}}</strong><span>{{this.jobInformation.kind}}</span></div>
          <p id="posting-panel-title" class="font-weight-bold">{{ this.jobInformation.title }}</p>
          <div>
            <strong>남은 날짜</strong>
            <span>{{this.jobInformation.date}}~{{this.jobInformation.end_date}}</span>
          </div>
        </div>
      </div>
      <div class="apply-detail-column">
        <router-link type="button" class="btn btn-info btn-lg" :to='window.location.pathname +"/apply"' :path="path">지원하기</router-link>
      </div>
    </header>
    <main class="apply-detail-main">
      <section class="apply-detail-main-column mb-5 apply-detail-main-area ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>모집분야</span>
        <article class="apply-detail-main-text">
          <span>{{this.jobInformation.division_information}}</span>
        </article>
      </section>
      <section class="apply-detail-main-column mb-5 apply-detail-main-business_information ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>업무내용</span>
        <article class="apply-detail-main-text">
          <span>{{this.jobInformation.work_infomation}}</span>
        </article>
      </section>
      
      <section class="apply-detail-main-column mb-5 apply-detail-main-eligibility ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>자격요건</span>
        <article class="apply-detail-main-text">
          <div>{{this.jobInformation.qualification_information}}</div>
        </article>
      </section>
      
      <section class="apply-detail-main-column mb-5 apply-detail-main-submit ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>제출서류</span>
        <article class="apply-detail-main-text">
          <div>ㆍ제출서류 : {{this.jobInformation.submit_information}}</div>
          <br>
          <div>ㆍ학력 : 학력입니다</div>
          <br>
          <div>ㆍ경력 기간 : 경력기간입니다.</div>
          <br>
          <div>ㆍ필수조건
            <ul class="apply-detail-main-text-list">
              <li>-필수조건1</li>
              <li>-필수조건2</li>
            </ul>
          </div>
          <br>
          <div>ㆍ우대사항
            <ul class="apply-detail-main-text-list">
              <li>-우대사항1</li>
              <li>-우대사항2</li>
            </ul>
          </div>
        </article>
      </section>
      
      <section class="apply-detail-main-column mb-5 apply-detail-main-stage ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>전형단계</span>
        <article class="apply-detail-main-text">
          <span>여기는 이미지로 불러올까</span>
        </article>
      </section>
      
      <section class="apply-detail-main-column mb-5 apply-detail-main-help ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>도움말</span>
        <article class="apply-detail-main-text">
          <span>{{ this.jobInformation.help_information }}</span>
        </article>
      </section>
    
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobInformation:{
        title:'1',
        kind:'1',
        career:'1',
        date:'1',
      },
      path:{
        recrumentId:'',
        companyId:'',
      }
    }
},
created(){
  this.path.companyId = this.$route.params.id
  this.path.recrumentId = this.$route.params.recrumentId
},
methods:{
    getjobInformation(){
    this.$http.get(this.$store.state.host + '/api/recruitment/title/' + this.$route.params.recrumentId) //this.$http.get('http://localhost:3000/api/recruitment/title/' + document.location.pathname.split("/").reverse()[0])
    .then((Response)=>{
      console.log(Response.data)
      this.jobInformation = Response.data
    })
    .catch((Error)=>{
    console.log(Error);
    })
    }
  },mounted() { // 페이지 시작하면은 자동 함수 실행
		this.getjobInformation();
    this.$nextTick(()=>{
      this.currentTitle = this.$route.params.recrumentId;
    })
	}
}

</script>

<style>
.apply-detail-header{
  display: flex;
  justify-content: space-around;
  height: max-content;
  margin-top: 0px;
  padding: 20px;
  background: whitesmoke;
  border-bottom: 2px solid gray;
  position: fixed; 
  width: 100%;
  left: 0; 
  top: 80px;
}

#posting-panel{
  display: flex;
  align-content: center;
  text-align: left; 
}
#posting-panel-career strong{
  padding-right: 5px;
  margin-right: 5px;
  border-right: 1px solid black;
}
#posting-panel-title{
  margin-top:10px;
  font-size: 20px;
}
.apply-detail-column{
  height:90px;
  padding: 30px 0px;
  margin-right: 15px;
}

.apply-detail-main{
  position: absolute;
  top:230px;
  width: 100%;
  text-align: left;
  padding: 0px 300px;
  overflow: auto;
  z-index: -1;
}

.bookmark{
  margin-right: 5px;
}
.apply-detail-main-text{
  font-size:small;
  padding: 15px 0px 0px 24px;
}
.apply-detail-main-text-list{
  padding-left: 20px;
}
</style>