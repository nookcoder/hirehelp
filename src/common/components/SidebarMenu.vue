<template>
<div>
<aside class="side-menu">

        <!-- 메인 메뉴 -->x     
        <section class="side-menu__main">
            <div id="side-menu__main__title">
            </div>

            <!-- 메뉴 목록  -->
            <!-- 채용공고 관리 -->
            <div class="side-menu__main__column">
                <ul>
                    <div class="side-menu__main__column__title">
                        <li>홈페이지 관리</li>
                    </div>
                    <ul class="side-menu__main__column__sub-title">
                        <span><li><router-link to="/form/notice">공지사항 등록</router-link></li></span>
                        <span><li><router-link to="/form/posting">채용공고 등록</router-link></li></span>
                    </ul>
                </ul>
            </div>
            <!-- 이력서 관리 -->
            <div class="side-menu__main__column">
                <ul>
                    <div class="side-menu__main__column__title">
                        <li>이력서 관리</li>
                    </div>
                    <ul class="side-menu__main__column__sub-title">
                        <span><li><router-link to="/resume">접수중</router-link></li></span>
                        <span><li><router-link to="/applicationDeadline">접수마감</router-link></li></span>
                        <span><li><router-link to="/recruitmentDeadline">채용마감</router-link></li></span>
                    </ul>
                </ul>
            </div>
            <!-- 면접관리 -->
            <div class="side-menu__main__column">
                <ul>
                    <div class="side-menu__main__column__title">
                        <li>면접 관리</li>
                    </div>
                    <ul class="side-menu__main__column__sub-title">
                        <span><li><router-link to="/">면접시간 배정</router-link></li></span>
                        <span><li><router-link to="/">면접평가서 등록 및 수정</router-link></li></span>
                    </ul>
                </ul>
            </div>
            <!-- 채용홈페이지 관리 -->
            <div class="side-menu__main__column">
                <ul>
                    <span><div class="side-menu__main__column__title">
                        <a href="javascrpit:void(0)"  @click="goPostingHomePage">채용홈페이지 접속 <i class="fas fa-arrow-circle-right"></i></a>
                    </div></span>
                </ul>
            </div>

            <div class="side-menu__main__column">
                <ul>
                    <span>
                        <div class="side-menu__main__column__title">
                        <router-link to="/login">로그인</router-link>
                    </div>
                    </span>
                </ul>
            </div>

            <div class="side-menu__main__column">
                <ul>
                    <span>
                        <div class="side-menu__main__column__title">
                            <router-link to="/signup">회원가입</router-link>
                        </div>
                    </span>
                </ul>
            </div>
        </section>
    </aside>
</div>
</template>
<script>
export default {
    data(){
        return{
            current:this.$store.state.currentUser
        }
    },
    computed:{
        getCurrentUser(){
            return this.$store.getters.getcurrentUser;
        }
    },
    methods:{
        goPostingHomePage: function(){
            let current = this.getCurrentUser;
            if(current !== 'null'){
                window.open("http://localhost:8080/home/" + current,"_blank");
            }
            // 로그인 등록 배너
        }
    }
}
</script>
<style>
@import "../../assets/styles/sidemenu.css";
</style>
