<template>
  <div>
    <b-form @submit="onSumit">
      <b-form-group
        class="input-group-1"
        label="아이디 :"
        label-for="login-id"
        description="We'll never share your id with anyone else."
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
          class="input-group-1"
          label="비밀번호 :"
          label-for="login-password"
          description="We'll never share your password with anyone else."
      >
      <b-form-input
        id="login-password"
        v-model="loginForm.password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        required
      ></b-form-input>
      </b-form-group>
      <b-button variant="outline-primary" type="submit">확인</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
      return{
        id:'',
        password:'',
        loginForm:{
          id:'',
          password:''
        }
      }
    },
    methods:{
      onSumit(event){
        event.preventDefault()
        alert(JSON.stringify(this.loginForm));
      }
    }
}
</script>

<style>

</style>