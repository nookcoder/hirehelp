<template>
  <v-container file-height style="max-width:450px">
    <v-layout align-center row wrap>
        <v-card>
          <div id="login-page">
    <h2>로그인</h2>
    <b-form>
      <b-form-group
        class="user-input"
        label="아이디 :"
        label-for="login-id"
      >
      <b-form-input
          id="login-id"
          v-model="loginForm.id"
          type="text"
          placeholder="아이디를 입력해주세요"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          class="user-input"
          label="비밀번호 :"
          label-for="login-password"
      >
      <b-form-input
        id="login-password"
        v-model="loginForm.password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        required
      ></b-form-input>
      </b-form-group>
      <b-button variant="outline-primary" v-on:click.prevent="loginStore(loginForm)">로그인</b-button>
      <b-button variant="outline-primary" v-on:click="signUp">회원가입</b-button>
    </b-form>
  </div>
    </v-card>
  </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    name:"Login",
    data(){
      return{
        loginForm:{
          id:'',
          password:''
        }
      }
    },
    computed:{
      ...mapState(["isLogin", "isLoginError"])
    },
    methods:{
      ...mapActions(["loginStore"]),
      signUp(){
        this.$router.push('/signup');
      },
    }
}
</script>

<style>
#login-page{
  padding:20px
}
.user-input{
  display: block;
  width:100%;
  text-align: left;
  margin: 10px 0px;
}
</style>