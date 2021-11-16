import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        host: 'http://localhost:5000',
        currentUser: [ ],
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
        },
        setCurrentTitle: function(state,title){
            state.currentTitle = title;
        },
        setIntroduce: function(state,company){
            state.currentUser.introduce = company.introduce;
            state.currentUser.introduceTitle = company.introduceTitle;
        }
    },
    actions: {
        // 로그인 시도
        loginStore({ commit }, loginForm) {
            axios.post(this.state.host+'/api/company/login', loginForm)
            .then(res => {
                alert(res.data.message);
                if (res.data.loginSuccess) {                    
                    let config = {
                        headers: { "access-token": res.data.accessToken }
                    }
                        axios.get(this.state.host+ '/api/company/login', config)
                        .then(response => {
                        let selectedUser = {
                            id: response.data.token.id,
                            name: response.data.token.name,
                            domain: document.location.origin + '/home/' + response.data.token.id
                        }
                        commit("loginSuccess", selectedUser)
                        router.push('/main') 
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
            router.push('/login')
        },
        updateIntroduce({ commit }, company) {
            console.log("text=" + company)
            commit("setIntroduce", company)
            console.log(this.state.currentUser)
        axios.patch(this.state.host + '/api/company/introduce/' + this.state.currentUser.id, { user: this.state.currentUser })
        .then(function (response) {
        console.log(response);
         })
        .catch(function (error) {
        console.log(error);
        });
        }
    },
    getters:{
        getcurrentUser : function(state){
            return state.currentUser.id;
        },
        getCurrentTitle: function(state){
            return state.currentTitle;
        }
    }
});