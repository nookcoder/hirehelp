<template>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="process-step">
            <span>채용 단계 : </span>
            <b-form-select
              v-model="step"
              :options="steps"
              required
              @change="setStepValue"
            ></b-form-select>
        </div>
        <div class="process-step-content" v-if="form.step === '3단계'">
            <span>채용프로세스 : </span>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <span>발표</span>
        </div>
        
        <div class="process-step-content" v-if="form.step === '4단계'">
            <span>채용프로세스 : </span>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <span>발표</span>
        </div>

        <div class="process-step-content" v-if="form.step === '5단계'">
            <span>채용프로세스 : </span>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <process-content></process-content>
            <b-icon-arrow-right></b-icon-arrow-right>
            <span>발표</span>
        </div>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>
<script>
import ProcessContent from './Processcontent.vue'
export default {
    name:"ProcessSetting",
    components:{
        "process-content" : ProcessContent
    },
    methods:{
        onSubmit(event) {
        event.preventDefault()
        },
        onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.step = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
        this.show = true
        })
        },
        setStepValue(event){
            this.form.step = event;
        }
    },
    data(){
        return{
            form: {
            step: '',
            checked: []
            },
            steps: [{text:'3단계',value:'3단계'}, {text:'4단계',value:'4단계'}, {text:'5단계',value:'5단계'}],
            show: true
            }
        }
    }

</script>
<style scoped>
.process-step{
    display: flex;
    padding: 20px;
}

.process-step span{
    margin-right: 10px;
}
.process-step-content{
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
.process-step-content span{
    margin-right: 10px;
}
</style>