<template>
    <div>
    <b-form @submit="onSubmit" @reset="onReset"  v-if="showSetting">
        <h2>채용 프로세스 설정</h2>
        <div class="process-select">
            <span>채용 단계 : </span>
            <select v-model="process.step" required>
                <option v-for="st in steps" v-bind:key="st">{{ st }}</option>
            </select>
        </div>
        <div class="process-step-content" v-if="process.step === '3단계'">
            <span>채용프로세스 : </span>
            <select v-model="process.process1" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <select v-model="process.process2" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <span>발표</span>
        </div>
        
        <div class="process-step-content" v-if="process.step === '4단계'">
            <span>채용프로세스 : </span>
            <select v-model="process.process1" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <select v-model="process.process2" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <select v-model="process.process3" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <span>발표</span>
        </div>

        <div class="process-step-content" v-if="process.step === '5단계'">
            <span>채용프로세스 : </span>
            <select v-model="process.process1" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <select v-model="process.process2" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <select v-model="process.process3" required><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <select v-model="process.process4" requireds><option v-for="content in contents" v-bind:key="content">{{content}}</option></select>
            <b-icon-arrow-right></b-icon-arrow-right>
            <span>발표</span>
        </div>
        
        <h2>모집 구분 설정</h2>
        <div class="process-select">
            <span>모집 구분 : </span>
            <select v-model="process.category" required>
            <option v-for="category in categories" :key="category">{{category}}</option>
            </select>
        </div>
        <h2>모집 경력 설정</h2>
        <div class="process-select">
            <span>모집 경력 : </span>
            <select v-model="process.career" required>
            <option v-for="career in careers" :key="career">{{career}}</option>
        </select>
      
        </div>
        <b-button type="submit" variant="primary">다음</b-button>
      <b-button type="reset" variant="danger">초기화</b-button>
    </b-form>

  </div>
</template>
<script>
export default {
    name:"ProcessSetting",
    props: ['showSetting'],
    methods:{
        onSubmit(event) {
        event.preventDefault()
        this.showSetting = false
        this.$emit("changeShowSetting",this.showSetting)
        },
        onReset(event) {
        event.preventDefault()
        // Trick to reset/clear native browser form validation state
        this.process.step = ''
        this.process.process1 = ''
        this.process.process2 = ''
        this.process.process3 = ''
        this.process.process4 = ''
        this.process.category = ''
        this.process.career = ''

        this.show = false
        this.$nextTick(() => {
            this.show = true
        })
        },
    },
    data(){
        return{

            process:{
                step:'',
                process1:'',
                process2:'',
                process3:'',
                process4:'',
                category:'',
                career:''
            },

            steps: ["3단계","4단계","5단계"],
            contents:["서류접수","면접","건강검진","필기전형","인턴십"],
            categories : ["공채","수시","상시"],
            careers : ["신입","경력","경력무관"],

            show: true
            }
        }
    }

</script>
<style scoped>
h2{
    text-align: left;
    margin: 20px;
    border-left: 5px solid black;
    padding-left: 10px;
}
.process-select{
    text-align: left;
    padding: 20px;
}
.process-select span{
    margin-right: 10px;
}
.process-step-content{
    display: flex;
    align-content: center;
    padding: 20px;
}
.process-step-content span{
    margin-right: 10px;
}
b-icon-arrow-right{
    margin-right: 20px;
}
</style>