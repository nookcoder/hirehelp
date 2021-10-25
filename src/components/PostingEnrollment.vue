<template>
    <div class="body">
      <b-nav tabs justified>
        <b-nav-item active>1. 채용 정보 설정</b-nav-item>
        <b-nav-item>2. 채용 공고 작성</b-nav-item>
        <b-nav-item>3. 채용 공고 확인</b-nav-item>
      </b-nav>
      <process-setting></process-setting>
    </div>
</template>

<script>
import ProcessSetting from './posting/ProcessSetting.vue'
export default {
  name:"PostingEnrollment",
  components:{
    "process-setting":ProcessSetting,
  }
}
</script>

<style scoped>
</style>