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
        <button type="button" class="btn btn-info btn-lg">지원하기</button>
      </div>
    </header>
    <main class="apply-detail-main">
      <section class="apply-detail-main-column apply-detail-main-area mb-2 h3">
        <b-icon icon="bookmark-fill"></b-icon>
        모집분야
      </section>
      <section class="apply-detail-main-column apply-detail-main-business_information mb-2 h3">
        <b-icon icon="bookmark-fill"></b-icon>
        업무내용
      </section>
      <section class="apply-detail-main-column apply-detail-main-eligibility mb-2 h3">
        <b-icon icon="bookmark-fill"></b-icon>
        지원자격
      </section>
      <section class="apply-detail-main-column apply-detail-main-submit mb-2 h3">
        <b-icon icon="bookmark-fill"></b-icon>
        제출서류
      </section>
      <section class="apply-detail-main-column apply-detail-main-stage mb-2 h3">
        <b-icon icon="bookmark-fill"></b-icon>
        전형단계
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
      <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
        <b-icon icon="bookmark-fill" size="lg"></b-icon>
        도움말
      </section>
        <section class="apply-detail-main-column apply-detail-main-help mb-2 h3">
          <b-icon icon="bookmark-fill" size="lg"></b-icon>
          도움말
        </section>
    </main>
  </div>
</template>

<script>
export default {
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
</style>