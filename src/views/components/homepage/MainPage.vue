<template>
   <div class="jumbotron">
        <h1 class="display-4">{{this.$store.state.currentUser.introduceTitle}}</h1>
        <p class="lead">{{this.$store.state.currentUser.introduce}}</p>
        <router-link class="btn btn-primary btn-lg" role="button" :to="'/home/' + this.$store.state.currentUser.id+'/employment'">채용 공고 바로 가기</router-link>
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