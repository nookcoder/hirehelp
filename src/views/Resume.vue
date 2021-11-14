<template>
	<v-container>
		<v-card elevation="10" outlined width="100%" class="mx-auto">
			<v-card-title>
				이력서 관리
			</v-card-title>
			<v-card-text>
          <div class="resume-page">
      <b-tabs card v-model="tabIndex" >
        <b-tab title="접수중">
          <b-table responsive flex style="width: 100%; max-height: 70vh;" @click="tableClick" striped hover :items="jobPostings" :fields="fields" :current-page="currentPage" :per-page="perPage" >
    
    <template slot="actions" slot-scope="row">
        <b-button size="sm" @click.stop="tableClick(row.item)" class="mr-1">
          Info
        </b-button>
    </template>
    </b-table>
    <div class="pagination-div">
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage"/>
    </div>
        </b-tab>
        <b-tab title="접수마감">
        </b-tab>
          <b-tab title="채용마감">
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
      fields: [
        {
          key: 'help_in',
          label: 'D-day넣말',
          sortable: true
        },
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
          label: '지원자수넣말',
          sortable: true
        }
      ]
    }
  },
  methods:{
    tableClick (row, index) {
    },
    getRecruitmentList(){
    this.$http.get('http://localhost:3000/api/recruitment/1')
    .then((Response)=>{
      console.log(Response.data)
      this.jobPostings = Response.data
    })
    .catch((Error)=>{
    console.log(Error);
    })
    },
    
  },mounted() {
		this.getRecruitmentList();
	}
}
</script>

<style>
</style>