<template>
<div>
<ul id="sortable">
  <li class="ui-state-default">회사소개</li>
  <li class="ui-state-default">채용정보</li>
  <li class="ui-state-default">채용공고</li>
  <li class="ui-state-default">상시채용</li>
  <li class="ui-state-default">채용 프로세스</li>
  <li class="ui-state-default">입사지원</li>
  <li class="ui-state-default">자원서 작성 및 수정</li>
  <li class="ui-state-default">마이페이지</li>
</ul>
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
    $(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    });
  },
  head:{
    script:[
      {src:'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',async:true},
      {src:'https://code.jquery.com/jquery-1.12.4.min.js',async:true},
      {src:'https://code.jquery.com/ui/1.12.1/jquery-ui.js',async:true},
      {src:'https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.js',async:true}
    ],
    link:[
      {rel:'stylesheet',href:'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'},
      {rel:'stylesheet',href:'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
      {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.css'}
    ]
  }
};
</script>