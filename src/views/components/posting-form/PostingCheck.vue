<template>
  <div>
    <b-card bg-variant="light">
      <form @submit="emitPostingInfo($event)">
        <b-form-group
          label-cols-lg="3"
          label="공고 확인"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >            
        </b-form-group>
      <div class="posting-btn-group">
        <b-button type="submit" variant="primary">다음</b-button>
      </div>
      </form>
    </b-card>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>