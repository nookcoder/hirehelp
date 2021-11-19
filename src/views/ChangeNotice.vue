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
                  ref="table"
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

                        <b-button @click="overlays[row.index].overlay = !overlays[row.index].overlay">삭제하기</b-button>
                        <!-- <v-overlay
                            :value="overlay"
                            :absolute="absolute"
                            >
                            <p>정말로 삭제하시겠습니까?</p>
                            <b-button @click="deleteNotice(row)">예</b-button>
                            <b-button @click="overlay = !overlay">아니오</b-button>
                        </v-overlay> -->
                        <v-overlay
                            :value="overlays[row.index].overlay"
                            :absolute="absolute"
                            >
                            <p>정말로 삭제하시겠습니까?</p>
                            <b-button @click="deleteNotice(row)">예</b-button>
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
            overlay : false,
            absolute: true,
            overlays:[],

        }
    },
    methods:{
        getNotices : function(){
            axios.get(this.$store.state.host + "/api/notice/" + this.$store.getters.getcurrentUser)
            .then((res)=>{
                res.data.forEach((element) =>{
                    this.notices.push(element);
                });
                for(let i = 0; i < res.data.length; i++){
                    this.overlays.push({
                        overlay : false,
                    })
                }
                console.log(this.notices);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        deleteNotice : function(data){
            console.log(data);
            axios.delete(this.$store.state.host + "/api/notice/" + data.item.id)
            .then(()=>{
                this.notices = [];
                this.getNotices();
                this.$refs.table.refresh();
                this.overlay = !this.overlay;
            })
        }
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