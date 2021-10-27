<template>
    <div class="body">
      <b-nav tabs justified>
        <b-nav-item active>1. 채용 정보 설정</b-nav-item>
        <b-nav-item>2. 채용 공고 작성</b-nav-item>
        <b-nav-item>3. 채용 공고 확인</b-nav-item>
      </b-nav>
      <ProcessSetting :show-setting="show.setting" @changeShowSetting="updataSettingShow" @getProcessSettingData="setProcessData" v-if="show.setting"/>
      <ProcessWriting v-if="show.writing"></ProcessWriting>
    </div>
</template> 

<script>
import ProcessSetting from './posting/ProcessSetting.vue'
import ProcessWriting from './posting/ProcessWriting.vue'
export default {
  name:"PostingEnrollment",
  components:{
    ProcessSetting,ProcessWriting
  },
  methods:{
    updataSettingShow(variable){
      this.show.setting = variable
      this.show.writing = true
    },
    updataWritingShow(variable){
      this.show.writing = variable
    },
    updataCheckingShow(variable){
      this.show.checking = variable
    },
    setProcessData(object){
      this.process.step = object.step;
      this.process.process1 = object.process1;
      this.process.process2 = object.process2;
      this.process.process3 = object.process3;
      this.process.process4 = object.process4;
      this.process.category = object.category;
      this.process.career = object.career;
    }
  }, 
  data(){
    return{
      show:{
        setting:true,
        writing:false,
        checking:false,
      },
      process:{
        step:'',
        process1:'',
        process2:'',
        process3:'',
        process4:'',
        category:'',
        career:''
      }
    }
  }
}
</script>

<style>

</style>