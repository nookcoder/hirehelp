<template>
    <div class="body">
      <b-nav tabs justified>
        <b-nav-item active>1. 채용 정보 설정</b-nav-item>
        <b-nav-item>2. 채용 공고 작성</b-nav-item>
        <b-nav-item>3. 채용 공고 확인</b-nav-item>
      </b-nav>
      <ProcessSetting :show-setting="show.setting" @changeShowSetting="updataShow"/>
    </div>
</template> 

<script>
import ProcessSetting from './posting/ProcessSetting.vue'
export default {
  name:"PostingEnrollment",
  components:{
    ProcessSetting,
  },
  methods:{
    updataSettingShow(variable){
      this.show.setting = variable
    },
    updataWritingShow(variable){
      this.show.writing = variable
    },
    updataCheckingShow(variable){
      this.show.checking = variable
    }
  },
  data(){
    return{
      show:{
        setting:true,
        writing:false,
        checking:false,
      }
    }
  }
}
</script>

<style scoped>
</style>