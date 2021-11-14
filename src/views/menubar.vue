<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="$router.push('/')">HOME</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-dropdown text="홈페이지 관리">
            <b-dropdown-item @click="$router.push('notice')">공지사항 추가</b-dropdown-item>
            <b-dropdown-item>공지사항 수정/삭제</b-dropdown-item>
            <b-dropdown-item @click="$router.push('posting')">채용공고 추가</b-dropdown-item>
            <b-dropdown-item>채용공고 수정/삭제</b-dropdown-item>
        </b-nav-dropdown>

        <b-nav-item @click="$router.push('resume')">이력서 관리</b-nav-item>
        
        <b-nav-dropdown text="면접 관리">
            <b-dropdown-item>면접시간 배정</b-dropdown-item>
            <b-dropdown-item>면접평가서 등록 및 수정</b-dropdown-item>
        </b-nav-dropdown>

        <b-nav-item @click="moveUserHomePage">채용 홈페이지 접속</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon icon="person-fill"></b-icon>
          </template>
          <b-dropdown-item @click="$router.push('login')">Sign In</b-dropdown-item>
          <b-dropdown-item @click="$router.push('signup')">Sign Up</b-dropdown-item>
        </b-nav-item-dropdown> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name:"Menu",
    data(){
      return{
        user:this.$store.state.currentUser.id
      }
    },
    methods:{
      moveUserHomePage:function(){
        this.$router.push('home/'+this.user);
      }
    }
}
</script>

<style>

</style>