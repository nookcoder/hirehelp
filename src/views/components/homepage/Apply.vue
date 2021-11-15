<template>
    <div class="apply-main">
        <form>
            <div class="personal-information">
                <div class="apply-column-title">인적사항</div>
                <div class="apply-column-input">
                    <b-form-input 
                        class="apply-column-personal-input"
                        placeholder="성명"
                        required
                        v-model="applyData.name"
                        ></b-form-input>
                    
                    <b-form-datepicker
                        class="apply-column-personal-input" 
                        placeholder="생년월일" 
                        v-model="applyData.birth"
                        required
                        ></b-form-datepicker>
                    
                    <b-form-input 
                        class="apply-column-personal-input" 
                        list="gender" 
                        placeholder="성별"
                        required
                        v-model="applyData.gender"
                         ></b-form-input>
                    <datalist id="gender">
                        <option v-for="gender in gender" :key=gender>{{gender}}</option>
                    </datalist>
                </div>

                <div class="apply-column-input">
                    <b-form-input 
                        class="apply-column-personal-input" 
                        placeholder="이메일 ID"
                        required
                        v-model="applyData.email"
                        ></b-form-input>
                    <div id="dot">@</div>
                    <b-form-input 
                        class="apply-column-personal-input" 
                        placeholder="이메일 주소"
                        required
                        v-model="applyData.emailAddress"
                        ></b-form-input>
                </div>
                <div class="apply-column-input">
                    <b-form-input 
                        class="apply-column-personal-input" 
                        placeholder="휴대폰 번호(- 제외)"
                        v-model="applyData.phoneNumber"
                        required
                        ></b-form-input>
                    <b-form-input 
                        class="apply-column-personal-input" 
                        placeholder="전화번호(- 제외)"
                        v-model="applyData.phoneNumber2"
                        ></b-form-input>
                </div>
            </div>
            <div class="motivate">
                <div class="apply-column-title">지원동기</div>
                <b-form-textarea
                    class="apply-column-personal-input"
                    placeholder="내용을 입력해주시기 바랍니다."
                    rows="10"
                    required
                    v-model="applyData.motivate"
                ></b-form-textarea>
            </div>
            <div class="attachment">
                <div class="apply-column-title">첨부파일</div>
                <b-form-file
                    multiple
                    class="apply-column-personal-input"
                    placeholder="파일을 첨부해주세요."
                    drop-placeholder="파일을 첨부해주세요."
                ></b-form-file>
            </div>

            <b-button type="submit" variant="primary" @click="onSubmit($event)">제출하기</b-button>
            <b-button variant="danger" @click="$router.go(-1)">뒤로가기</b-button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['path'],
    data(){
        return{
            gender:["남자","여자"],
            applyData:{
                id:'',
                recrumentId:'',
                name:'',
                birth:'',
                gender:'',
                email:'',
                emailAddress:'',
                phoneNumber:'',
                phoneNumber2:'',
                motivate:'',
            },

        }
    },
    created(){
        this.applyData.id = this.path.companyId
        this.applyData.recrumentId = this.$route.params.recrumentId
    },
    methods:{
        onSubmit:function(event){
            event.preventDefault()
            axios.post(this.$store.state.host + '/api/resume/',
            {
                applyData:{
                    id:this.applyData.id,
                    recrumentId:this.applyData.recrumentId,
                    name:this.applyData.name,
                    birth:this.applyData.birth,
                    gender:this.applyData.gender,
                    email:this.applyData.email,
                    emailAddress:this.applyData.emailAddress,
                    phoneNumber:this.applyData.phoneNumber,
                    phoneNumber2:this.applyData.phoneNumber2,
                    motivate:this.applyData.motivate
                }
            }).then((res)=>{
                console.log(res);
            }).catch((err)=>console.log(err));

        }
    }
}
</script>

<style>
.apply-main{
    position: absolute;
    top:80px;
    width: 100%;
    height: 100vh;
    text-align: left;
    padding: 100px 50px;
    z-index: -1;
    overflow: auto;
}

.apply-column-input{
    border-top:none;
    display: flex;
}

.apply-column-title{
    border-left: 3px solid black;
    padding-left: 10px;
    font-size: large;
    margin:30px 0px;
}

.apply-column-personal-input{
    font-size: small;
    padding: 15px;
}

#dot{
    font-size: medium;
    height: 100%;
    vertical-align: middle;
}
</style>