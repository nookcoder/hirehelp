import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        currentUser:'null',
        currentTitle:'',
    },
    mutations:{ 
        setCurrentUser: function(state,userId){
            state.currentUser = userId;
        },
        setCurrentTitle: function(state,title){
            state.currentTitle = title;
        }
    },
    getters:{
        getcurrentUser : function(state){
            return state.currentUser;
        },
        getCurrentTitle: function(state){
            return state.currentTitle;
        }
    }
});