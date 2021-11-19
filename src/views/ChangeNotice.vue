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
                                <b>공지사항 내용 : </b>
                                <pre>{{ row.item.content }}</pre>
                            </b-row>

                            <b-button v-b-modal.modal-1>모달 버튼</b-button>
                            <b-modal id="modal-1" title="BootstrapVue">
                                <p class="my-4">Hello from modal!</p>
                            </b-modal>

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
.mmm{
    position: relative;
    z-index: 5555555555;
}
</style>