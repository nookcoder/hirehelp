<template>
  <v-container>
	<v-card elevation="10" outlined width="100%" class="mx-auto">
		<v-card-title>
			공지사항 조회/수정
		</v-card-title>
		<v-card-text>
            <b-table 
              responsive 
              flex 
              style="width: 100%; max-height: 70vh;" 
              striped 
              hover
              :items="notices"
              :fields="fields" 
              >
              
                <template v-slot:cell(detail)="row">
                  <b-button size="sm" class="mr-1" @click="row.toggleDetails">
                      {{row.detailsShowing ? 'Hide' : 'Show'}} Details
                  </b-button>
                </template>

                <template #row-details="row">
                    <b-card>
                        <b-row class="mb-2" id="change-notice-content">
                            <b-col sm="3" class="text-sm-right"><b>공지사항 내용 : </b></b-col>
                            <b-col><pre>{{ row.item.content }}</pre></b-col>
                        </b-row>

                        <b-col id="change-notice-delete-button">
                            <b-button variant="danger" @click="showModal">삭제</b-button>
                            <b-modal ref="my-modal" hide-footer title="공지사항 삭제">
                              <div class="d-block text-center">
                                <h3>정말로 삭제하시겠습니까?</h3>
                              </div>
                              <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                              <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
                            </b-modal>
                        </b-col>
                    </b-card>
                </template>                
            </b-table>
        </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            fields:[
                "title",
                {key:"date",label:"date",sortable:true},
                {key:"detail",label:"detail"}
            ],
            notices:[],
        }
    },
    methods:{
        getNotices : function(){
            axios.get(this.$store.state.host + "/api/notice/" + this.$store.getters.getcurrentUser)
            .then((res)=>{
                res.data.forEach((element) =>{
                    this.notices.push(element);
                });
                console.log(this.notices);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        showModal() {
        this.$refs['my-modal'].show()
        },
        hideModal() {
          this.$refs['my-modal'].hide()
        },
    },
    mounted(){
        this.getNotices();
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