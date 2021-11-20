<template>
  <div>
    <b-card bg-variant="light">
      <form @submit="emitPostingContent($event)">
        <b-form-group
          label-cols-lg="3"
          label="공고 내용 작성"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="모집 분야 :"
            label-for="posting-area-recruitment"
            label-cols-sm="3"
            label-align-sm="center"
          >
            <b-form-input id="posting-area-recruitment" required v-model="postingContent.areaRecruitment" placeholder="ex) Development > AI Engineering"></b-form-input>
          </b-form-group>
             
         <b-form-group
            label="업무 내용 :"
            label-for="posting-business-content"
            label-cols-sm="3"
            label-align-sm="center"
          >
            <b-form-textarea 
            rows="5" 
            max-rows="10"
            id="posting-business-content" 
            required 
            v-model="postingContent.businessContent"
            :placeholder="postingContentPlaceHolder.businessContent"
            ></b-form-textarea>
          </b-form-group>
         
         <b-form-group
            label="자격 요건 :"
            label-for="posting-qualifications"
            label-cols-sm="3"
            label-align-sm="center"
          >
            <b-form-textarea 
            rows="5" 
            max-rows="10"
            id="posting-qualifications" 
            required 
            v-model="postingContent.qualifications"
            :placeholder="postingContentPlaceHolder.qualifications"
            ></b-form-textarea>
          </b-form-group>
         
          <b-form-group
            label="제출 서류 :"
            label-for="posting-document"
            label-cols-sm="3"
            label-align-sm="center"
          >
            <b-form-textarea 
            rows="3" 
            max-rows="6"
            id="posting-document" 
            required 
            v-model="postingContent.document"
            :placeholder="postingContentPlaceHolder.document"
            ></b-form-textarea>
          </b-form-group>
            
          <b-form-group
            label="도움말 :"
            label-for="posting-help"
            label-cols-sm="3"
            label-align-sm="center"
          >
            <b-form-textarea 
            rows="5" 
            max-rows="10"
            id="posting-help" 
            required 
            v-model="postingContent.help"
            :placeholder="postingContentPlaceHolder.help"
            ></b-form-textarea>
          </b-form-group>

        </b-form-group>
        <div class="posting-btn-group">
          <b-button type="submit" variant="primary" @submit="emitPostingContent($event)">다음</b-button>
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      postingContent:{
        areaRecruitment: '',
        businessContent: '',
        qualifications:'',
        document:'',
        help:'',
        page:3,
      },
      postingContentPlaceHolder:{
        areaRecruitment:'',
        businessContent:'ex)\n[업무내용]\n'+
            '- AI 기술의 효과를 극대화하는 서비스 플랫폼 및 관련 SW를 설계/개발하고, 운영/유지보수한다\n'+
            '[상세업무]\n'+
            '* AI 서비스 플랫폼 설계 및 개발\n'+
            '- AI 연구 모델을 활용한 서비스 플랫폼 구축에 필요한 요구사항 분석 및 아키텍쳐 설계 및 개발\n'+
            '- 서비스에 사용될 AI 연구 모델 코드의 서비스 적용을 위한 코드 최적화 및 리펙토링 직업\n'+
            '- AI 서비스 플랫폼 운영 및 유지보수\n',
        qualifications:'ex)\n'+
            '학력 : 학사 이상\n'+
            '경력기간 : 3년 ~\n'+
            '필수조건\n'+
            '- Python, Java 등 하나 이상의 프로그래밍 언어에 대한 이해 및 개발 경력을 가지신 분\n'+
            '- 프로그램 설계, 디버깅, 자료 구조 및 알고리즘의 이해가 가능하신 분\n'+
            '- 리눅스 환경에서 개발한 경험이 있으신 분\n'+
            '우대사항\n'+
            '- Docker 또는 Kubernates 기반 서비스 개발 경험이 있으신 분\n'+
            '- MSA(Micro Service Architecture)에 기반한 개발 경험이 있으신 분\n',
        document:'ex)\n'+
            '최근 프로젝트 포트폴리오(필수)\n',
        help:'ex)\n'+
            '[공통 요건]\n'+
            '- 해외여행 결격사유 없는 자\n'+
            '- 채용 규정에 어긋나지 않는 자\n'+
            '- 보훈 대상자 및 장애인 우대\n',
      }
    }
  },
  methods:{
    emitPostingContent: function(event){
      event.preventDefault();
      this.$emit("postingContent",this.postingContent);
      this.$router.push('check');
    }
  }
}
</script>

<style>

</style>