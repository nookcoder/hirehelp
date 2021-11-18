
<template>
  <v-container fluid>
    <v-card>
      <v-card-title>지원자 정보

<!-- <github-corners repo="marcodpt/vue-tmx">
    </github-corners>
    <div class="container">
      <div class="page-header">
        <h1>Vue TMX <small>json based table with bootstrap3</small></h1>
      </div>
      <div>
        <div v-if="ready">
          <tmx v-bind="schema" />
        </div>
        <transform
          icon="cog"
          label="Live Playground"
          :model="model"
          :fields="fields"
          :submit="submit"
          :buttons="[{
            type: 'primary',
            icon: 'cog',
            label: 'Rebuild'
          }]"
        />
      </div>
    </div>
    <modal /> -->

    <!-- <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="['name', 'nickname', 'email', 'gender']"
    data-path=""
    pagination-path=""
  ></vuetable> -->
        
    <div class="mt-3"><strong>{{ this.select }}</strong></div>
      <b-form-input class="apply-column-personal-input" list="items" v-model="select"></b-form-input>
        <datalist id="items">
          <option v-for="item in items" :key=item.id>{{item.value}}.{{item.text}}</option>
        </datalist>
      </v-card-title>
      <v-card-text>
     
      <b-table
        style="width: 100%; max-height: 70vh;" responsive striped flex
        hover :items="items" :fields="fields">
          <template v-slot:cell(detail)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-1">
              {{row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

        </b-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
   data() {
      return {
        fields:[
      {key:'name',label:'name',sortable:false},
      {key:'birth',label:'birth',sortable:false},
      {key:'gender',label:'gender',sortable:false},
      {key:'phone_number',label:'phone_number',sortable:false},
      {key:'email',label:'email',sortable:false},
      {key:'detail',label:'detail',sortable:false},
      ],
      items:[],
      applycants:[],
      isDetail:false,
      select: '',
      }
   },
    methods:{
        sendEmail() {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, 'YOUR_USER_ID')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
      },
      getRecruitmentTitle(){
        this.$http.get(this.$store.state.host + '/api/recruitment/' + this.$store.state.currentUser.id)
      .then((Response)=>{
      console.log(Response.data)
      for (let i of Response.data) {
        this.items.push({ text : i.title, value : i.id})
      }
    })
    .catch((Error)=>{
    console.log(Error);
    })
    },
    getResume(){
      this.$http.get(this.$store.state.host+"/api/resume/"+this.$route.params.companyid +"/"+this.$route.params.recruitmentid)
    .then((res)=>{
      for(let index in res.data){
        let email = res.data[index].email_id.replace(/ /g,"") + "@" + res.data[index].email_address.replace(/ /g,"") 
        res.data[index].email = email;
        this.applycants.push(res.data[index]);
      }
    })
    .catch((err)=>{
      console.log(err);
    })
    }
    },
    mounted() { // 페이지 시작하면은 자동 함수 실행
		this.getRecruitmentTitle();
	}
}
</script>


<style>

</style>y