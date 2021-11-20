<template>
      <v-form @submit="emitPostingInfo($event)">
        <v-container>
          <v-card
            elevation="10" outlined width="100%" class="mx-auto"
          >
          <v-card-title>
            공지사항 등록
          </v-card-title>
          <v-card-text>
            <v-text-field
              id="notice-title"
              required 
              v-model="noticeForm.title"
              label="공지사항 제목"
              class="notice-form-input"
              ></v-text-field>

            <v-textarea
              label="공지사항 내용" 
              auto-grow
              id="notice-content" 
              required 
              v-model="noticeForm.content"
              class="notice-form-input"
            ></v-textarea>
        <div class="posting-btn-group">
        <b-button type="submit" variant="primary" @click="getCurrentTime($event)">등록하기</b-button>
        </div>
        </v-card-text>
        </v-card>
      </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            noticeForm:{
                title:"",
                content:"",
                currentTime : "",
                id:this.$store.getters.getcurrentUser,
            }
        }
    },
    methods:{
        getCurrentTime : function(event){
            event.preventDefault();
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : "0"+now.getMonth()+1;
            const day = now.getDate() >= 10 ? now.getDate() : "0"+now.getDate();
            const date = year+"-"+month+"-"+day;
            this.noticeForm.currentTime = date;
            axios.post(this.$store.state.host + '/api/notice/input', 
            { noticeForm: this.noticeForm }
            ).then((res) => {
      if (res.data.success) {
      alert(res.data.message)
        this.$router.push('/notice');
      }
      else {
      alert("실패")
      }
    })
        }
    }
}
</script>

<style>
.notice-form-input{
  padding: 30px;
}
</style>