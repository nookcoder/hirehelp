<template>
  <v-container>
    <v-card elevation="10" outlined width="100%" class="mx-auto">
      <v-card-title>지원자</v-card-title>
      <v-card-text>
      <b-table striped hover :items="applycants" :fields="fields"></b-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      fields:['name','birth','gender','phone_number',"email","상세내용"],
      items:[],
      applycants:[]
    }
  },
  created(){
    axios.get(this.$store.state.host+"/api/resume/"+this.$route.params.companyid +"/"+this.$route.params.recruitmentid)
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
}
</script>

<style>

</style>``