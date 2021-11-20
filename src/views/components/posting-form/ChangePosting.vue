<template>
    <v-container>
        <v-card elevation="10" outlined width="100%" class="mx-auto">
	    	<v-card-title>
	    		채용공고 조회/수정
	    	</v-card-title>
	    	<v-card-text>
                <b-table 
                  responsive 
                  flex 
                  style="width: 100%; max-height: 70vh;" 
                  striped 
                  hover
                  :items="postings"
                  :fields="fields" 
                  ref="table2"
                  >
                    <template v-slot:cell(detail)="row">
                      <b-button size="sm" class="mr-1" @click="row.toggleDetails">
                          {{row.detailsShowing ? 'Hide' : 'Show'}} Details
                      </b-button>
                    </template>

                    <template #row-details="row">
                        <b-card>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>모집 정보 :</b></b-col>
                                <b-col><pre style="text-align:left;">{{ row.item.division_information }}</pre></b-col>
                            </b-row>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>자격 요건 :</b></b-col>
                                <b-col><pre style="text-align:left;">{{ row.item.qualification_information }}</pre></b-col>
                            </b-row>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>제출 자료 :</b></b-col>
                                <b-col><pre style="text-align:left;">{{ row.item.submit_information }}</pre></b-col>
                            </b-row>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>도움말 :</b></b-col>
                                <b-col><pre style="text-align:left;">{{ row.item.help_information }}</pre></b-col>
                            </b-row>

                        <b-button @click="overlays[row.index].overlay = !overlays[row.index].overlay">삭제하기</b-button>
                        <v-overlay
                            :value="overlays[row.index].overlay"
                            :absolute="absolute"
                            >
                            <p>정말로 삭제하시겠습니까?</p>
                            <p>(해당 채용 공고의 이력서도 모두 삭제됩니다)</p>
                            <b-button @click="deletePosting(row)">예</b-button>
                            <b-button @click="overlays[row.index].overlay = !overlays[row.index].overlay">아니오</b-button>
                        </v-overlay>
                        </b-card>
                    </template>                
                </b-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            fields:[
                "title",
                {key:"date",label:"Start Date",sortable:true},
                {key:"end_date",label:"End Date",sortable:true},
                "career",
                "kind",
                {key:"detail",label:"Detail"}
            ],
            absolute:true,
            postings:[],
            overlays:[],

        }
    },
    methods:{
        getPosting(){
            this.$http.get(this.$store.state.host + "/api/recruitment/" + this.$store.getters.getcurrentUser)
            .then((res)=>{
                res.data.forEach((element) =>{
                    this.postings.push(element);
                });

                this.overlays = [];
                for(let i=0; i < res.data.length; i++){
                    this.overlays.push({
                        overlay : false,
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        deletePosting(data){
            console.log(data);
            axios.delete(this.$store.state.host + "/api/recruitment/" + data.item.id)
            axios.delete(this.$store.state.host + "/api/resume/" + data.item.company_id +"/"+data.item.id)
            axios.get(this.$store.state.host + "/api/recruitment/" + this.$store.getters.getcurrentUser)
            .then((res)=>{
                this.postings = [] 
                res.data.forEach((element) =>{
                    this.postings.push(element);
                });
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, 
    mounted(){
        this.getPosting();
    }
}
</script>

<style>
#change-notice-content{
    text-align: left;
}
#change-notice-delete-button{
    text-align: right;
}

</style>