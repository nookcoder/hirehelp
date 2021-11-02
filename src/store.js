import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        currentUser:'null',
    },
    mutations:{ 
        setCurrentUser: function(state,userId){
            state.currentUser = userId;
        }
    },
    getters:{
        getcurrentUser : function(state){
            return state.currentUser;
        }
    }
});