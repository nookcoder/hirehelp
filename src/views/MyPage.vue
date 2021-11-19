<template>
<v-container file-height style="max-width:900px">
<div>
    <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              회사 로고
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  회사 로고 이미지를 넣어주세요.
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ company.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="company.name"
          placeholder="이미지 업로드 준비중"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            회사 배경 설정
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span
                v-if="open"
                key="0"
              >
                회사 채용 홈페이지의 배경을 선택해주세요.
              </span>
              <span
                v-else
                key="1"
              >
                {{ company.location }}
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-select
              v-model="company.location"
              :items="location"
              chips
              flat
              solo
            ></v-select>
          </v-col>

          <v-col cols="3">
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="secondary">Cancel</v-btn>
          <v-btn color="primary">Save</v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            색상
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span v-if="open">회사 채용 홈페이지의 색상을 정해주세요.</span>
              <v-row v-else no-gutters style="width: 100%" >
                <v-col cols="6">
                  메인 색상: {{ company.main || 'blue' }}
                </v-col>
                <v-col cols="6">
                  서브 색상: {{ company.sub || 'black' }}
                </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row
          justify="space-around"
          no-gutters
        >
          <v-col cols="3">
            <v-menu
              ref="startMenu"
              :close-on-content-click="false"
              :return-value.sync="company.main"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-color-picker
                  v-model="company.main"
                  dot-size="25"
                  swatches-max-height="200"
                  v-bind="attrs"
                  v-on="on"
                ></v-color-picker>
                <v-text-field
                  v-model="company.main"
                  label="Main Color"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              
            </v-menu>
          </v-col>

          <v-col cols="3">
            <v-menu
              ref="endMenu"
              :close-on-content-click="false"
              :return-value.sync="company.sub"
              offset-y
              min-width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-color-picker
                v-model="company.sub"
                  dot-size="25"
                  swatches-max-height="200"
                  v-bind="attrs"
                  v-on="on"
                ></v-color-picker>
                <v-text-field
                  v-model="company.sub"
                  label="Sub Color"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
            </v-menu>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
<v-card>
    <v-card-title><b-icon icon="person-fill"></b-icon> 정보 확인</v-card-title>
    <v-card-text>
    <v-card-title>회사명 : {{this.$store.state.currentUser.name}}</v-card-title>
    <v-card-title>채용 도메인 : {{this.$store.state.currentUser.domain}}</v-card-title>
    <v-card-title>회사 소개 </v-card-title>

    <b-form-input
        v-model="company.introduceTitle"
        placeholder="회사 소개 제목"
        required
      ></b-form-input>

    <b-form-textarea
        id="textarea"
      v-model="company.introduce"
        placeholder="회사 소개를 입력해주세요."
      rows="3"
      max-rows="10"
      ></b-form-textarea>
    </v-card-text>

    <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.prevent="updateIntroduce(company)">
            회사소개 저장
          </v-btn>
        </v-card-actions>
  </v-card>
  
  </div>
        <v-card>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    name:"Login",
    data(){
      return{
        company:{
            name:'',
            sub:'',
            main:'',
            location:'',
            introduce:'',
            introduceintroduceTitle:'',
        },
        text: '',
      }
    },
    computed:{
      ...mapState(["isLogin", "isLoginError"])
    },
    methods:{
        ...mapActions(["updateIntroduce"]),
    },
    }
</script>

<style>

#login-page{
  padding:20px
}
.user-input{
  display: block;
  width:100%;
  text-align: left;
  margin: 10px 0px;
}
</style>