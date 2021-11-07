<template>
  <div>
    <b-nav tabs justified>
        <b-nav-item active>1. 채용 정보 설정</b-nav-item>
        <b-nav-item>2. 채용 내용 설정</b-nav-item>
        <b-nav-item>3. 채용 정보 확인</b-nav-item>
    </b-nav>
    <router-view :posting-form="postingForm" @postingInfo="setPostingInfo"></router-view>
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
      }
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
    }
  }
}
</script>

<style>
@import "../assets/styles/reset.css";
</style>  