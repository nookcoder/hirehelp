<template>
  <div>
    <header class="apply-detail-header">
      <div id="posting-panel">
        <div class="apply-detail-column">
          <button type="button" class="btn border btn-lg" @click="$router.go(-1)"><b-icon icon="backspace"></b-icon></button>
        </div>
        <div>
          <div id="posting-panel-career"><strong>경력</strong><span>수시</span></div>
          <p id="posting-panel-title" class="font-weight-bold">채용공고 제목</p>
          <div>
            <strong>남은 날짜</strong>
            <span>기간</span>
          </div>
        </div>
      </div>
      <div class="apply-detail-column">
        <router-link type="button" class="btn btn-info btn-lg" :to='"/home/"+$route.params.id+"/apply"' @click.native="setStoreTitle">지원하기</router-link>
      </div>
    </header>
    <main class="apply-detail-main">
      <section class="apply-detail-main-column mb-5 apply-detail-main-area ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>모집분야</span>
        <article class="apply-detail-main-text">
          <span>모집분야입니다</span>
        </article>
      </section>

      <section class="apply-detail-main-column mb-5 apply-detail-main-business_information ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>업무내용</span>
        <article class="apply-detail-main-text">
          <span>모집분야입니다</span>
        </article>
      </section>
      
      <section class="apply-detail-main-column mb-5 apply-detail-main-eligibility ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>자격요건</span>
        <article class="apply-detail-main-text">
          <div>1.업무내용<br>업무내용입니다</div>
          <br>
          <div>2.주요 업무내용<br>주요 업무내용입니다</div>
        </article>
      </section>
      
      <section class="apply-detail-main-column mb-5 apply-detail-main-submit ">
        <span class="font-weight-bold h3"><b-icon class="bookmark" icon="bookmark-fill"/>제출서류</span>
        <article class="apply-detail-main-text">
          <div>ㆍ학력 : 학력입니다</div>
          <br>
          <div>ㆍ경력 기간 : 경력기간입니다.</div>
          <br>
          <div>ㆍ필수조건
            <ul class="apply-detail-main-text-list">
              <li>-필수조건1</li>
              <li>-필수조건2</li>
              <li>-필수조건3</li>
              <li>-필수조건4</li>
            </ul>
          </div>
          <br>
          <div>ㆍ우대사항
            <ul class="apply-detail-main-text-list">
              <li>-우대사항1</li>
              <li>-우대사항2</li>
              <li>-우대사항3</li>
              <li>-우대사항4</li>
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
          <span>도움말입니다</span>
        </article>
      </section>
    
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentTitle:'',
    }
  },
  methods:{
    setStoreTitle : function(){
      this.$store.commit('setCurrentTitle',this.currentTitle);
      console.log(this.$store.getters.getCurrentTitle);
    }
  },

  mounted(){
    this.$nextTick(()=>{
      this.currentTitle = this.$route.params.title;
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