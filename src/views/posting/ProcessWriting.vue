<template>

  <div>
      <h2>채용 공고 작성</h2>
      <div id="summernote"></div>
  </div>
</template>

<script>
export default {
    name: "ProcessWriting",
    mounted(){
        $('#summernote').summernote({
            placeholder: 'Hello Bootstrap 4',
            tabsize: 2,
            height: 100
        })
    }
}
</script>

<style>
h2{
    text-align: left;
    margin: 20px;
    border-left: 5px solid black;
    padding-left: 10px;
}
</style>
