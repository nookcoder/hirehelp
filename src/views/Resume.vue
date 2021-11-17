<template>
	<v-container>
		<v-card elevation="10" outlined width="100%" class="mx-auto">
			<v-card-title>
				이력서 관리
			</v-card-title>
			<v-card-text>
      <div class="resume-page">
        <b-tabs card>
          <b-tab title="접수중">
            <b-table 
              responsive 
              flex 
              style="width: 100%; max-height: 70vh;" 
              striped 
              hover 
              :items="jobPostings" 
              :fields="fields"
              >
              <template  v-slot:cell(driver)="data">
                <b-button size="sm" @click="loadApplicantsData(data)" class="mr-1">Info</b-button>
              </template>
            </b-table>
            <div class="pagination-div">
            </div>
          </b-tab>
        <b-tab title="접수마감">
          <b-table 
            responsive
            flex style="width: 100%; max-height: 70vh;" 
            @click="tableClick" 
            striped hover 
            :items="endjobPostings" 
            :fields="endFields">
          </b-table>
        </b-tab>
      </b-tabs>
  </div>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
export default {
  data(){
    return{
      jobPostings:[],
      endjobPostings:[],
      endFields: [
        {
          key: 'kind',
          label: '채용구분',
          sortable: true
        },
        {
          key: 'career',
          label: '채용 분야',
          sortable: true
        },
        {
          key: 'date',
          label: '게시일',
          sortable: true
        },
        {
          key: 'end_date',
          label: '마감일',
          sortable: true
        },
        {
          key: 'title',
          label: '제목',
          sortable: false
        },
        {
          key: 'driver',
          label: '최종 지원자수',
          sortable: true
        }
      ],
      fields: [
        {
          key: 'Dday',
          label: 'D-day',
          sortable: true
        },
        {
          key: 'kind',
          label: '채용구분',
        },
        {
          key: 'career',
          label: '채용 분야',
        },
        {
          key: 'date',
          label: '게시일',
          sortable: true
        },
        {
          key: 'end_date',
          label: '마감일',
          sortable: true
        },
        {
          key: 'title',
          label: '제목',
          sortable: false
        },
        {
          key: 'driver',
          label: '현재 지원자 수',
          sortable: true
        }
      ]
    }
  },
  methods:{
    tableClick (row, index) {
      alert(row, index)
    },
    getRecruitmentList(){
    this.$http.get(this.$store.state.host + '/api/recruitment/' + this.$store.state.currentUser.id)
    .then((Response)=>{
      const dday = new Date()
      for(var post in Response.data ){
        // 날짜 계산
        var result = Math.ceil(((new Date(Response.data[post].end_date)) - dday) / (1000 * 60 * 60 * 24));
        if(result > 0){
          Response.data[post].Dday = result
          this.jobPostings.push(Response.data[post])
        }
        else{
          this.endjobPostings.push(Response.data[post])
        }
      }
    })
    .catch((Error)=>{
    console.log(Error);
    })
    },

    loadApplicantsData: function(data){
      this.$router.replace("resume/"+data.item.company_id+"/"+data.item.id);
    },
  },
  mounted() {
		this.getRecruitmentList();
	}
}
</script>

<style>
</style>