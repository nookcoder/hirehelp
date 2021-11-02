<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="employment-homepage">
  <a class="navbar-brand" href="#">회사이름</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" v-bind:href="homepage.notice">공지사항</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">채용공고</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
    </ul>
  </div>
  </nav>
  <div class="jumbotron">
    <h1 class="display-4">회사 소개 제목</h1>
    <p class="lead">회사소개 회사소개 회사소개</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">채용 공고 바로 가기</a>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      homepage:{  
      notice:""
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
</style>