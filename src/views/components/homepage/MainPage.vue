<template>
   <div class="jumbotron">
        <h1 class="display-4">회사 소개 제목</h1>
        <p class="lead">회사소개 회사소개 회사소개</p>
        <a class="btn btn-primary btn-lg" role="button" @click="changePageToEmlpoyment">채용 공고 바로 가기</a>
    </div>
</template>

<script>
export default {
    props:['homePage'],
    methods:{
        changePageToEmlpoyment(){
            this.homePage.main = false
            this.homePage.employment = true
            this.$emit('showEmploymeny',this.homePage);
        }
    }
}
</script>

<style>

</style>