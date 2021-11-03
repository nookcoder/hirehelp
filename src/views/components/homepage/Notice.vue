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
    <b-card no-body class="mb-1" v-for="notice in notices" :key="notice">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-'+notice.index" variant="info">{{notice.title}}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+notice.index" visible accordion="my-accordion" role="tabpanel">
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
                index : 1,
                title:"갑",
                date : "2021-10-31",
                content : "안녕하세요"
                },
                {index : 2,
                title:"을",
                date : "2021-11-01",
                content : "안녕하세요2"},{
                index : 3,
                title:"병",
                date : "2021-11-02",
                content : "안녕하세요3"
            },],

        }
    }
}
</script>

<style>
.employment-page{
    width: 100%;
    height: 100vh;
    display: flex;
}

.page-side-title{
    padding: 0px 20px;
}

.page-search{
    display: flex;
    align-content: center;
}

.page-side-title h2 {
    text-align: left;
}

.page-content{
    padding: 40px 20px;
    width: 100%;
}

.page-content hr{
    color: rgba(0, 0, 0, 0.9);
}

.page-content-list-row{
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.page-content-list-row:hover{
    background: gray;
}

#row-title{
    font-size: 20px;
    font-weight: bold;
}

#row-date{
    margin-top: 5px;
}
</style>