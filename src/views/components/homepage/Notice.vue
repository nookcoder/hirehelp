<template>
  <div class="employment-page">
    <div class="page-side-title">
        <h2>
            공지사항
        </h2>
        <form class="form-inline my-2 my-lg-0 page-search">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div> 
    <div class="page-content">
        <hr>
         <div class="accordion" role="tablist">
    <b-card no-body class="mb-1" v-for="(notice,id) in notices" :key="id">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="title-banner" block v-b-toggle="'accordion-'+notice.id" variant="info"><div class="notice-title">{{notice.title}}</div><div class="notice-date">{{notice.date}}</div></b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+notice.id" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ notice.content }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
        <hr>
    </div>     
  </div>
</template>

<script>
export default {
    data(){
        return{
            notices:[{
                id : 0,
                title:"",
                date : "",
                content : ""
                }
                ],
        }
    },
  methods:{
    openNoticePage(){ // 데이터 가져오기
    this.$http.get('http://localhost:3000/api/notice/' + '1')
    .then((Response)=>{
    this.notices = Response.data
    })
    .catch((Error)=>{
    console.log(Error);
    })
    },
  },mounted() { // 페이지 시작하면은 자동 함수 실행
		this.openNoticePage();
	}
}
</script>

<style>
@import '../../../assets/styles/employment-homepage.css';
.page-content{
    padding: 40px 20px;
    width: 100%;
}

.page-content hr{
    color: rgba(0, 0, 0, 0.9);  
}

.title-banner{
    display: flex;
    align-content: center;
    justify-content: space-between;
}

.notice-title{
    font-size: x-large;
}
</style>