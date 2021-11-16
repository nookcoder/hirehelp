<template>
   <div class="jumbotron">
        <h1 class="display-4">{{companyData.company_name}}</h1>
        <p class="lead">회사소개 회사소개 회사소개</p>
        <router-link class="btn btn-primary btn-lg" role="button" :to="'/home/' + this.$store.state.currentUser.id+'/employment'">채용 공고 바로 가기</router-link>
    </div>
</template>

<script>
export default {
    props:['companyData'],
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