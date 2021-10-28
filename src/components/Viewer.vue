<template> 
    <Viewer v-if="content != null" :initialValue="content" /> 
</template> 

<script> 
import "codemirror/lib/codemirror.css";
import { Viewer } from "@toast-ui/vue-editor";

export default { 
    components: { 
        Viewer 
    }, 
    data() { 
        return { 
            content : null 
        } 
    }, 
    mounted() {
        // 어디선가 저장된 데이터를 호출 
        fetch("주소").then(response => {
            if (response.ok) {
                  return response.json(); 
            } 
            else { 
                throw response;
             }
            }).then(data => {
                  this.content = data;
            }); 
        } 
    }; 
</script>
