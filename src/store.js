import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        host: 'http://localhost:3000',
        currentUser: [],
        isLogin: false,
        isloginError: false
    },
    mutations: {
        // 로그인 성공
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isloginError = false
            state.currentUser = payload
        },
        // 로그인 실패
       loginError(state) {
            state.isLogin = false
            state.isloginError = true
            state.currentUser = null
        },
        logout(state) {
            state.isLogin = false
            state.isloginError = false
            state.currentUser = null
       },
        setCurrentUser: function(state,userId){
            state.currentUser = userId;
        }
    },
    actions: {
        // 로그인 시도
        loginStore({ commit }, loginForm) {
            axios.post('http://localhost:3000/api/company/login', loginForm)
            .then(res => {
                alert(res.data.message);
                if (res.data.loginSuccess) {                    
                    let config = {
                        headers: { "access-token": res.data.accessToken }
                    }
                        axios.get('http://localhost:3000/api/company/login', config)
                        .then(response => {
                        let selectedUser = {
                            id: response.data.token.id,
                            name: response.data.token.name
                        }
                        commit("loginSuccess", selectedUser)
                        router.push('/form/notice') 
                        })
                        .catch(error => {
                        console.log(error)
                        })
                // 로그인 성공 $store.dispatch("loginStore")
                }
                else {
                // 로그인 실패
                    commit("loginError")
                }
                  
            }).catch(err => {
                console.log(err)
                commit("loginError")
            });
        },
        logoutStore({ commit }) {
            commit("logout")
            router.push('/')
        }
    },
    getters:{
        getcurrentUser : function(state){
            return state.currentUser;
        }
    }
});