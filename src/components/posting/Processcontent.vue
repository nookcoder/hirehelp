<template>
    <div>
      <b-form-group>
        <b-form-select v-model="selected" :options="options" required></b-form-select>
      </b-form-group>
    </div>
</template>

<script>
export default {
      data() {
      return {
        selected: null,
        options: [
          { value: null, text: '==선택==' ,disabeld:true},
          { value: '서류접수', text: '서류접수' },
          { value: '면접', text: '면접' },
          { value: '건강검진', text: '건강검진' },
          { value: '필기전형',  text: '필기전형' },
          { value: '인턴십',  text: '인턴십' },
        ]
      }
    }
}
</script>
<style scoped>
  #process_content{
    display: flex;
    flex-direction: column;
  }
</style>