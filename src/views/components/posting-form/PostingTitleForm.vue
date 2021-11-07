<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="채용 정보 설정"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
          <b-form-group
            label="채용 공고 제목:"
            label-for="posting-title"
            label-cols-sm="3"
            label-align-sm="center"
          >
            <b-form-input id="posting-title" required></b-form-input>
          </b-form-group>

          <b-form-group
            label="채용 구분:"
            label-cols-sm="3"
            label-align-sm="center"
            class="mb-0"
            v-slot="{ postingCategory }"
          >
            <b-form-radio-group 
            required
            class="pt-2"
            :options="['경력', '신입', '인턴']"
            :aria-describedby="postingCategory"
              ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="채용 전형:"
            label-cols-sm="3"
            label-align-sm="center"
            class="mb-0"
            v-slot="{ potingType }"
          >
            <b-form-radio-group 
            required
            class="pt-2"
            :options="['공채','수시','상시']"
            :aria-describedby="potingType"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="시작일 : "
            label-cols-sm = "3"
            label-align-sm="center"
            label-for="posting-date-start"
            class="mb-0"
          >
            <b-form-datepicker required id="posting-date-start" class="mb-2"></b-form-datepicker>
          </b-form-group>
          
          <b-form-group
            label="종료일 : "
            label-cols-sm = "3"
            label-align-sm="center"
            label-for="posting-date-end"
            class="mb-0"
          >
            <b-form-datepicker required id="posting-date-end" class="mb-2"></b-form-datepicker>
          </b-form-group>
      </b-form-group>

      <div class="posting-btn-group">
        <b-button variant="primary">다음</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>