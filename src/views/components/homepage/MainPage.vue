<template>
   <div class="jumbotron">
        <h1 class="display-4">{{companyData.company_introduce_title}}</h1>
        <p class="lead">{{companyData.company_introduce}}</p>
        <b-button class="btn btn-primary btn-lg" @click="$router.push($route.params.id + '/employment')">채용 공고 바로 가기</b-button>
    </div>
</template>

<script>
export default {
    props:['companyData'],
}
</script>

<style>
.jumbotron{
    width: 100%;
}

</style>