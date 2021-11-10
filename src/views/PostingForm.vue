<template>
  <div>
    <b-nav tabs justified>
        <b-nav-item active>1. 채용 정보 설정</b-nav-item>
        <b-nav-item>2. 공고 내용 작성</b-nav-item>
        <b-nav-item>3. 공고 확인</b-nav-item>
    </b-nav>
    <router-view
      :posting-form="postingForm"
      @postingInfo="setPostingInfo"
      @postingContent="setPostingContent"
      @initPostingFormData="resetData"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      postingForm:{
        userId : this.$store.getters.getcurrentUser,
        title: '',
        category:'',
        type:'',
        start:'',
        end:'',
        areaRecruitment: '',
        businessContent: '',
        qualifications:'',
        document:'',
        help:'',
      },
    }
  },
  methods:{
    setPostingInfo : function(object){
      this.postingForm.title = object.title;
      this.postingForm.category = object.category;
      this.postingForm.type = object.type;
      this.postingForm.start = object.start;
      this.postingForm.end = object.end;
      console.log(this.postingForm);
    },

    setPostingContent : function(object){
      this.postingForm.areaRecruitment = object.areaRecruitment;
      this.postingForm.businessContent = object.businessContent;
      this.postingForm.qualifications = object.qualifications;
      this.postingForm.document = object.document;
      this.postingForm.help = object.help;
      console.log(this.postingForm);
    },

    resetData : function(object){
      this.postingForm.title = object.title;
      this.postingForm.category = object.category;
      this.postingForm.type = object.type;
      this.postingForm.start = object.start;
      this.postingForm.end = object.end;
      this.postingForm.areaRecruitment = object.areaRecruitment;
      this.postingForm.businessContent = object.businessContent;
      this.postingForm.qualifications = object.qualifications;
      this.postingForm.document = object.document;
      this.postingForm.help = object.help;
      console.log(this.postingForm);
    }
  }
}
</script>

<style>
@import "../assets/styles/reset.css";
</style>  