<template>
  <v-container>
    <v-card>
      <v-card-title>지원자 정보</v-card-title>
      <v-card-text>
        <b-table
        style="width: 100%; max-height: 70vh;" 
        responsive
        striped 
        flex
        hover 
        :items="applycants" 
        :fields="fields">

          <template v-slot:cell(detail)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-1">
              {{row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>이름 :</b></b-col>
                <b-col>{{ row.item.name }}</b-col>
              </b-row>
    
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>생년월일 :</b></b-col>
                <b-col>{{ row.item.birth }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>휴대폰 번호 :</b></b-col>
                <b-col>{{ row.item.phone_number }}</b-col>
              </b-row>
              
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>이메일 :</b></b-col>
                <b-col>{{ row.item.email }}</b-col>
              </b-row>
              
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>지원동기 :</b></b-col>
                <b-col><pre style="text-align:left;">{{ row.item.motivate }}</pre></b-col>
              </b-row>

              <b-button @click="addApplicants(row,passApplicants,1)" variant="primary">합격</b-button>
              <b-button @click="addApplicants(row,failApplicants,2)" variant="danger">불합격</b-button>
            </b-card>
          </template>

        </b-table>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>합격자 정보</v-card-title>
      <v-card-text>
        <b-table
        style="width: 100%; max-height: 70vh;" 
        responsive
        striped 
        flex
        hover 
        :items="passApplicants" 
        :fields="fields">

          <template v-slot:cell(detail)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-1">
              {{row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>이름 :</b></b-col>
                <b-col>{{ row.item.name }}</b-col>
              </b-row>
    
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>생년월일 :</b></b-col>
                <b-col>{{ row.item.birth }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>휴대폰 번호 :</b></b-col>
                <b-col>{{ row.item.phone_number }}</b-col>
              </b-row>
              
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>이메일 :</b></b-col>
                <b-col>{{ row.item.email }}</b-col>
              </b-row>
              
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>지원동기 :</b></b-col>
                <b-col><pre style="text-align:left;">{{ row.item.motivate }}</pre></b-col>
              </b-row>

              <b-button @click="cancelApplicants(row,passApplicants)" variant="primary">되돌리기</b-button>
            </b-card>
          </template>

        </b-table>
      </v-card-text>
    </v-card>

     <v-card>
      <v-card-title>불합격자 정보</v-card-title>
      <v-card-text>
        <b-table
        style="width: 100%; max-height: 70vh;" 
        responsive
        striped 
        flex
        hover 
        :items="failApplicants" 
        :fields="fields">

          <template v-slot:cell(detail)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-1">
              {{row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>
          </template>

          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>이름 :</b></b-col>
                <b-col>{{ row.item.name }}</b-col>
              </b-row>
    
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>생년월일 :</b></b-col>
                <b-col>{{ row.item.birth }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>휴대폰 번호 :</b></b-col>
                <b-col>{{ row.item.phone_number }}</b-col>
              </b-row>
              
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>이메일 :</b></b-col>
                <b-col>{{ row.item.email }}</b-col>
              </b-row>
              
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>지원동기 :</b></b-col>
                <b-col><pre style="text-align:left;">{{ row.item.motivate }}</pre></b-col>
              </b-row>

              <b-button @click="cancelApplicants(row,failApplicants)" variant="primary">되돌리기</b-button>
            </b-card>
          </template>

        </b-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
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
      passApplicants:[],
      failApplicants:[],
    }
  },
  created(){
    axios.get(this.$store.state.host+"/api/resume/"+this.$route.params.companyid +"/"+this.$route.params.recruitmentid)
    .then((res)=>{
      for(let index in res.data){
        let email = res.data[index].email_id.replace(/ /g,"") + "@" + res.data[index].email_address.replace(/ /g,"") 
        res.data[index].email = email;
        switch (res.data[index].pass) {
          case 0:
            this.applycants.push(res.data[index]);
            break;

          case 1:
            this.passApplicants.push(res.data[index]);
            break;
          
          case 2:
            this.failApplicants.push(res.data[index]);
            break;
        
          default:
            break;
        }
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  methods:{
    addApplicants : function(data,kind,result){
      data.toggleDetails();
      if(result === 1){
        axios.patch(this.$store.state.host + "/api/resume/"+ data.item.id,{result:1})
      }else if(result === 2){
        axios.patch(this.$store.state.host + "/api/resume/"+ data.item.id,{result:2})
      }
      kind.push(data.item);
      this.applycants.splice(data.index,1);
    },
    cancelApplicants: function(data, kind){
      data.toggleDetails();
      axios.patch(this.$store.state.host + "/api/resume/"+ data.item.id,{result:0})
      kind.splice(data.index,1); 
      this.applycants.push(data.item);
    }
  }
}
</script>

<style>

</style>``