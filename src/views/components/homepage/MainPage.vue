<template>
   <div class="jumbotron">
        <h1 class="display-4">회사 소개 제목</h1>
        <p class="lead">회사소개 회사소개 회사소개</p>
        <router-link class="btn btn-primary btn-lg" role="button" :to="'/home/'+$route.params.id+'/employment'">채용 공고 바로 가기</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.jumbotron{
    position: absolute;
    width: 100%;
    top:80px;
    z-index: -1;
}

</style>