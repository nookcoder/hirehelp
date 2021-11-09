<template>
  <v-container file-height style="max-width:450px">
    <v-layout align-center row wrap>
        <v-card>
  <div id="sign-up-page">
    <h2>회원가입</h2>
    <b-form id="sign-up-form" @submit="onSumit" @reset="onReset">
      <!-- 아이디 -->
      <label class="user-input" for="input-live">아이디 :</label>
    <div class="overlap-check">
      <b-form-input
        id="input-id"
        v-model="user.id"
        placeholder="아이디를 입력해주세요"
      ></b-form-input>
        <b-button 
        id="button-id-check"
        variant="outline-primary"
        :disabled="user.id.length < 1"
        v-on:click="checkID">중복확인</b-button>
    </div>

      <!-- 비밀번호 -->
      <label class="user-input" for="input-live">비밀번호 :</label>
      <b-form-input
        id="input-password"
        type="password"
        v-model="user.password"
        :state="passwordState"
        required
        placeholder="비밀번호를 입력해주세요"
      ></b-form-input>
      <b-form-invalid-feedback :state="passwordState">
        8~20자 영문 대소문자, 숫자를 사용하세요.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="passwordState">
        비밀번호를 기억해주세요.
      </b-form-valid-feedback>

      <!-- 회사 이름 -->
      <label class="user-input" for="input-live">회사명 :</label>
        <b-form-input
          id="input-password"
          v-model="user.name"
          required
          placeholder="회사명을 입력해주세요"
        ></b-form-input>

    <!-- 이메일 -->
    <label class="user-input" for="input-live">회사 이메일 :</label>
    <div class="overlap-check">
      <b-form-input
        type="email"
        id="input-password"
        v-model="user.email"
        placeholder="회사 이메일을 입력해주세요"
        required
      ></b-form-input>
      <b-button variant="outline-primary" v-on:click="checkEmail">확인</b-button>
     </div>
    <b-button variant="outline-primary" type="submit">확인</b-button>
    <b-button variant="outline-primary" type="reset">초기화</b-button>
    </b-form>
  </div>
        </v-card>
  </v-layout>
  </v-container>
</template>

<script>

export default {
  name:"SignUp",
  methods:{
    checkID(event){
      event.preventDefault();
      this.$http.post('/company/signup/check', { user_id: this.user.id})
      .then(res => {
        if(res.data){
          alert("사용할 수 없는 아이디입니다.");
        }
        else{
          alert("사용가능한 아이디입니다.");
        }
      });
    },
    checkEmail(event){
      this.classObject.variant="success" // 버튼 클릭된 상태로 바꾸기
    },
    onSumit(event){
      event.preventDefault()
      if(this.user.password.length <= 7 || this.user.password.length >= 20){
        alert("비밀번호는 8~20자로 입력해주세요.")
      } // 아이디 중복확인
      else{
        this.$http.post('/company/signup', { user: this.user })
    .then((res) => {
      if (res.data.success) {
        alert("No");
      } else {
        alert("회원가입 되셨습니다. 반갑습니다.");
        this.$router.push('/login');
      }
    })
      }
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
      disabled: 0,
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
    passwordState(){
      return this.user.password.length > 7 && this.user.password.length < 20
    },
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