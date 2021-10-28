<template>
<div class="editor-page">
    <div id="summernote"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  name: 'manageHomePage',
  mounted() {
    $('#summernote').summernote({
      height: 800,
      minHeight: 550,      // 최소 높이값(null은 제한 없음)
      maxHeight: 800,      // 최대 높이값(null은 제한 없음)
      focus: true,
      toolbar: [
        ['style', ['bold', 'italic', 'underline']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['paragraph']],
        ['height', ['height']],
        ['Insert', ['picture']],
        ['Mics',['codeview']]
      ]
    });
  },
  head:{
    script:[
      {src:'https://code.jquery.com/jquery-3.4.1.min.js',async:true},
      {src:'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',async:true},
      {src:'https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.js',async:true}
    ],
    link:[
      {rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
      {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.css'}
    ]
  }
};
</script>
