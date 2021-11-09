<template>
  <div>
    <b-card bg-variant="light">
      <div class="posting-info">
          <div>채용 공고제목 : {{postingForm.title}}</div>
          <div>채용 구분 : {{postingForm.category}}</div>
          <div>채용 전형 : {{postingForm.type}}</div>
          <div>채용 시작일 : {{postingForm.start}}</div>
          <div>채용 종료일 : {{postingForm.end}}</div>
      </div>
      <div class="posting-content">
          <div>모집 분야 : {{postingForm.areaRecruitment}}</div>
          <div>업무 내용 : {{postingForm.businessContent}}</div>
          <div>자격 요건 : {{postingForm.qualifications}}</div>
          <div>제출 서류 : {{postingForm.document}}</div>
          <div>도움말 : {{postingForm.help}}</div>
      </div>
    
      <div class="posting-btn-group">
          <b-button type="submit" variant="primary">등록하기</b-button>
          <b-button variant="danger" @click="resetPostingFormData">종료하기</b-button>
      </div>
    </b-card>
  </div>

</template>

<script>
export default {
  data(){
    return{
      initData:{
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
      }
    }
  },
  props:['postingForm'],
  methods:{
    resetPostingFormData:function(){
      this.$emit('initPostingFormData',this.initData);
      this.$router.replace('/');
    },
  }
}
</script>

<style>

</style>