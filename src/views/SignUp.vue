<template>
  <div id="sign-up-page">
    <h2>회원가입</h2>
    <b-form @submit="onSumit" @reset="onReset">
      <!-- 아이디 -->
      <label class="user-input" for="input-live">아이디 :</label>
      <b-form-input
        id="input-id"
        v-model="user.id"
        placeholder="아이디를 입력해주세요"
      ></b-form-input>
      <b-form-invalid-feedback :state="idState">
        8~15자 영문 대 소문자, 숫자를 사용하세요. 
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="idState">
        좋은 아이디네요!
      </b-form-valid-feedback>

      <!-- 비밀번호 -->
      <label class="user-input" for="input-live">비밀번호 :</label>
      <b-form-input
        id="input-password"
        v-model="user.password"
        :state="passwordState"
        required
        placeholder="비밀번호를 입력해주세요"
      ></b-form-input>
      <b-form-invalid-feedback :state="passwordState">
        8~20자 영문 대 소문자, 숫자를 사용하세요.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="passwordState">
        비밀번호를 기억해주세요.
      </b-form-valid-feedback>

      <!-- 회사 이름 -->
      <label class="user-input" for="input-live">회사명 :</label>
      <div class="overlap-check">  
        <b-form-input
          id="input-password"
          v-model="user.name"
          :state="passwordState"
          required
          placeholder="회사명을 입력해주세요"
        ></b-form-input>
        <b-button variant="outline-primary">중복확인</b-button>
      </div>

    <!-- 이메일 -->
    <label class="user-input" for="input-live">회사 이메일 :</label>
    <div class="overlap-check">
      <b-form-input
        type="email"
        id="input-password"
        v-model="user.email"
        :state="passwordState"
        placeholder="회사 이메일을 입력해주세요"
        required
      ></b-form-input>
      <b-button variant="outline-primary">중복확인</b-button>
    </div>
    <b-button variant="outline-primary" type="submit">확인</b-button>
    <b-button variant="outline-primary" type="reset">뒤로가기</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name:"Login",
  methods:{
    onSumit(event){
      event.preventDefault()
      alert(JSON.stringify(this.user))
    },
    onReset(event){
      event.preventDefault()
      this.user.id=''
      this.user.password=''
      this.user.name=''
      this.user.email=''
      this.show = false
      this.$nextTick(()=>{
        this.show = true
      })
    }
  },
  data(){
    return{
      user:{
        id:'',
        password:'',
        name:'',
        email:'',
      },
      show:true
    }
  },
  computed:{
    idState(){
      return this.user.id.length > 7 && this.user.id.length < 16
    },

    passwordState(){
      return this.user.password.length > 7 && this.user.id.length < 20
    },

    // nameState(){

    // },

    // emailState(){

    // },
  }
}
</script>

<style>
#sign-up-page{
  padding:20px
}
.user-input{
  display: block;
  width:100%;
  text-align: left;
  margin: 10px 0px;
}
.overlap-check{
  display: flex;
  align-content: center;
}
</style>