
<template>
  <v-container fluid>
    <v-overlay :value="isLoading" z-index="10000">
      <v-progress-circular indeterminate color="primary" v-show="isLoading"></v-progress-circular>
    </v-overlay>
    <v-card class="mx-auto" max-width="100%">
  <v-card-title>면접 시간 지정</v-card-title>
      <v-card-title>
       <v-select :items="items" v-model="select" label="채용공고 선택" ></v-select>
      </v-card-title>
      
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.prevent="getResume()" @click="reveal = true">해당 채용공고 이력서 보기</v-btn>
      </v-card-actions>

    <v-divider></v-divider>
    <v-card-text>
      <div>배정할 채용공고를 선택하고</div>
      <p class="text-h4 text--primary"> 면접 배정 </p>
      <p>좌측 "이력서 보기" 버튼을 클릭하세요.</p>
      <div class="text--primary">
        시간 배정을 편리하게, 그리고 쉽게 메일을 보낼 수 있을겁니다.<br>
        "당신의 고용파트너로부터"
      </div>
      <br>
    </v-card-text>

    <v-expand-transition>
      <v-card v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;" >
        <v-card-text class="pb-0">
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="getResume()">면접관 관리

          </v-btn>
          <v-btn @click.prevent="saveInterview()">면접 배정 저장</v-btn>
          
          <v-btn class="white--text" color="primary" @click="overlay = !overlay">메일 발송</v-btn>
          <v-btn color="primary accent-4" @click="reveal = false">돌아가기(채용공고 다시 선택)</v-btn>
      </v-card-actions>
      <b-table
        style="width: 100%; text-align: center;" responsive striped flex
        hover :items="resumeData" :fields="fields">

          <template v-slot:cell(detail)>
            <b-button size="sm" @click="checkrow()">{{emailCheck}}</b-button>

            <v-row>
              <v-overlay :z-index="zIndex" :value="overlay" :opacity="opacity" >
              <v-card>
              <v-card-title>
                <i class="far fa-envelope"></i> 안내 발송
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-subtitle>#맵핑 항목 기능#</v-card-subtitle>
              <v-card-subtitle>"맵핑 항목"이라는 기능으로 많은 지원자들에게 한번에 맞는 정보를 보낼 수 있습니다.</v-card-subtitle>
              <v-card-subtitle>
              지원자성명 - #이름#<br>
              면접조 - #면접조#<br>
              면접시간 - #면접시간#<br>
              면접장소 - #면접장소#<br>
              면접일자 - #면접일자#</v-card-subtitle>
              <v-card-subtitle>ex) [#회사명#] #공고명# 면접 관련 안내. #성명# 지원자님께서는 ...</v-card-subtitle>
              <v-card-text>
              <b-form-input v-model="email_title" placeholder="메일 제목"></b-form-input>
              <b-form-textarea v-model="email_content" id="textarea" placeholder="메일 내용을 입력해주세요." rows="3" max-rows="10"></b-form-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer> 
                <v-btn @click="sendEmail()">메일 보내기</v-btn>
              </v-card-actions>
            </v-card>
          <v-btn  color="primary" @click="overlay = false">닫기</v-btn>
        </v-overlay>
      </v-row>
    </template>

        <template v-slot:cell(interview_group)="row">
          <v-select style="max-width: 57px; justify-content: center;" class="d-flex" v-model="row.item.interview_group" :items="groupItems"></v-select>    
        </template>
        
        <template v-slot:cell(interview_location)="row">
          <v-text-field v-model="row.item.interview_location" label="면접 장소 입력">https://interview.loca.lt/</v-text-field>
        </template>

        <template v-slot:cell(interview_date)="row">
          <v-menu :close-on-content-click="false" max-width="290" >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="row.item.interview_date"
              label="면접일"
              readonly
              v-bind="attrs"
              v-on="on"></v-text-field>
          </template>
        <v-date-picker v-model="row.item.interview_date" @input="menu1=false"></v-date-picker>
        </v-menu>
      </template>

        <template v-slot:cell(interview_time)="row">
          <input v-model="row.item.interview_time" type="time">
        </template>

        <template v-slot:cell(interview_inter)>
         <v-combobox v-model="selected" :items="item" multiple chips></v-combobox>
        </template>

        </b-table>
        </v-card-text>
      </v-card>
    </v-expand-transition>
  </v-card>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  head:{
      link:[ {href:"https://unpkg.com/vue-select@latest/dist/vue-select.css", rel:"stylesheet"},],
    },
   data() {
      return {
      emailCheck: "이메일 발송 전",
      isLoading: false,
      zIndex:0,
      groupItems:['1조', '2조', '3조', '4조', '5조'],
      menu: false,
      modal: false,
      time: null,
      menu2: false,
      modal2: false,
      overlay: false,
      fields:[
      {key:'id',label:'수험번호',sortable:false},
      {key:'name',label:'성명',sortable:false},
      {key:'interview_group',label:'면접조',sortable:false},
      {key:'interview_location',label:'면접 장소',sortable:false},
      {key:'interview_date',label:'면접 일자',sortable:false},
      {key:'interview_time',label:'면접 시간',sortable:false},
      {key:'interview_inter',label:'담당 면접관',sortable:false},
      {key:'detail',label:'안내',sortable:false},
      ],
      email_title:'',
      email_content:'',
      items:[],
      resumeData:[],
      options:[],
      item:["구나영", "김현욱", "신지훈"],
      selected: '',
      select: '',
      reveal: false,
      opacity: null,
      }
   },
    methods:{
        sendEmail() {
          this.isLoading = true
          var sendObject = {
            email_title: this.email_title,
            email_content: this.email_content.replaceAll(/(\n|\r\n)/g, '<br>') // 엔터가능
          }
          for(var toEmail of this.resumeData){
            sendObject.email = toEmail.email_id + "@" + toEmail.email_address
            sendObject.email_title = sendObject.email_title.replaceAll('#이름#', toEmail.name)
            .replaceAll('#면접조#', toEmail.interview_group).replaceAll('#면접시간#', toEmail.interview_time)
            .replaceAll('#면접장소#', toEmail.interview_location).replaceAll('#면접일자#', toEmail.interview_date)
            sendObject.email_content = sendObject.email_content.replaceAll('#이름#', toEmail.name)
            .replaceAll('#면접조#', toEmail.interview_group).replaceAll('#면접시간#', toEmail.interview_time)
            .replaceAll('#면접장소#', toEmail.interview_location).replaceAll('#면접일자#', toEmail.interview_date)
            console.log(sendObject)

        // emailjs.send('service_mod7xkl', 'template_5ok8qdp', sendObject)
        // .then((result) => {
        //     console.log('SUCCESS!', result.text, result.status);
        //     alert("전송되었습니다.")
        //     this.isLoading = false
        //     this.emailCheck = "이메일 발송 완료"
        // }, (error) => {
        //     console.log('FAILED...', error.text);
        // });
          }


      },
      getRecruitmentTitle(){
        this.$http.get(this.$store.state.host + '/api/recruitment/' + this.$store.state.currentUser.id)
        .then((Response)=>{
        for (let i of Response.data) { this.items.push({ text : i.title, value : i.id})} })
        .catch((Error)=>{ console.log(Error); })
      },
    checkrow(){
      this.emailCheck ="okok"
    },
    getResume(){
    this.$http.get(this.$store.state.host+"/api/resume/"+this.select)
    .then((res)=>{
      for(let index in res.data){
        res.data[index].interview_date = '';
        res.data[index].interview_location = '';
        res.data[index].interview_time = '';
        res.data[index].interview_inter = '';
        res.data[index].interview_group = '';
      }
      this.resumeData = res.data;
    })},
    saveInterview(){
      console.log(this.resumeData)
      this.$http.patch(this.$store.state.host + '/api/resume/interview/update/' + this.$store.state.currentUser.id, 
      { user: this.resumeData })
      .then(function (response){
        alert("저장되었습니다.")
      })
      .catch(function (error) { console.log(error); });
    }
    },
    mounted() { // 페이지 시작하면은 자동 함수 실행
		this.getRecruitmentTitle();
	},
  created(){
    emailjs.init("user_w8C5WQL5oZrlFo6dB1uZ1")
  }
}
</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>