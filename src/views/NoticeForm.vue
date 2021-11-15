<template>
  <b-card bg-variant="light">
      <form @submit="emitPostingInfo($event)">
        <b-form-group
          label-cols-lg="3"
          label="공지사항 등록"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >

            <b-form-group
                label="공지사항 제목"
                label-for="notice-title"
                label-cols-sm="3"
                label-align-sm="center"
            >
            <b-form-input id="notice-title" required v-model="noticeForm.title"></b-form-input>
            </b-form-group>

            <b-form-group
                label="공지사항 내용"
                label-for="notice-content"
                label-cols-sm="3"
                label-align-sm="center"
            >
            <b-form-textarea 
                rows="10" 
                max-rows="20"
                id="notice-content" 
                required 
                v-model="noticeForm.content"
            ></b-form-textarea>
            </b-form-group>
        </b-form-group>
      <div class="posting-btn-group">
        <b-button type="submit" variant="primary" @click="getCurrentTime($event)">등록하기</b-button>
      </div>
      </form>
    </b-card>
</template>

<script>
export default {
    data(){
        return{
            noticeForm:{
                title:"",
                content:"",
                currentTime : "",
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
            this.$http.post('http://localhost:3000/api/notice/input', 
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

</style>