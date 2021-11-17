<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="$router.push('/main')">HOME</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-dropdown text="홈페이지 관리">
            <b-dropdown-item @click="$router.push('notice')">공지사항 추가</b-dropdown-item>
            <b-dropdown-item @click="$router.push('renotice')">공지사항 수정/삭제</b-dropdown-item>
            <b-dropdown-item @click="$router.push('posting')">채용공고 추가</b-dropdown-item>
            <b-dropdown-item @click="$router.push('reposting')">채용공고 수정/삭제</b-dropdown-item>
        </b-nav-dropdown>

        <b-nav-item @click="$router.push('resume')">이력서 관리</b-nav-item>
        
        <b-nav-dropdown text="면접 서비스">
            <b-dropdown-item @click="onClickRedirect()">면접실 입장</b-dropdown-item>
        </b-nav-dropdown>
        <b-nav-item @click="moveUserHomePage">채용 홈페이지 접속</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <div v-if="this.$store.state.isLogin">
        <b-nav-item v-on:click="logoutStore()">{{this.user.name}} 로그아웃</b-nav-item>
        </div>
        <div v-else>
            <b-nav-item-dropdown right>
          <template #button-content>
            <b-icon icon="person-fill"></b-icon>
          </template>
          <b-dropdown-item @click="$router.push('login')">로그인</b-dropdown-item>
          <b-dropdown-item @click="$router.push('signup')">회원가입</b-dropdown-item>
        </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    name:"Menu",
    data(){
      return{
        user:this.$store.getters.getcurrentUser
      }
    },
    computed:{
      ...mapState(["isLogin"])
    },
    methods:{
      onClickRedirect: function(){
          window.open(" https://interview.loca.lt")
      },
      moveUserHomePage:function(){
        this.$router.push('home/'+this.user);
      },
      ...mapActions(["logoutStore"]),
    }
}
</script>

<style>

</style>