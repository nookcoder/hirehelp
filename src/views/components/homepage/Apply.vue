<template>
    <div class="apply-main">
        <form action="">
            <div class="personal-information">
                <div class="apply-column-title">인적사항</div>
                <div class="apply-column-input">
                    <b-form-input class="apply-column-personal-input" placeholder="성명" required></b-form-input>
                    <b-form-datepicker class="apply-column-personal-input" placeholder="생년월일" required></b-form-datepicker>
                    <b-form-input class="apply-column-personal-input" list="gender" placeholder="성별" ></b-form-input>
                    <datalist id="gender">
                        <option v-for="gender in gender" :key=gender>{{gender}}</option>
                    </datalist>
                </div>
                <div class="apply-column-input">
                    <b-form-input class="apply-column-personal-input" placeholder="이메일 ID"></b-form-input>
                    <div id="dot">@</div>
                    <b-form-input class="apply-column-personal-input" placeholder="이메일 주소"></b-form-input>
                </div>
                <div class="apply-column-input">
                    <b-form-input class="apply-column-personal-input" placeholder="휴대폰 번호(- 제외)"></b-form-input>
                    <b-form-input class="apply-column-personal-input" placeholder="전화번호(- 제외)"></b-form-input>
                </div>
            </div>
            <div class="motiive">
                <div class="apply-column-title">지원동기</div>
                <b-form-textarea
                    class="apply-column-personal-input"
                    placeholder="내용을 입력해주시기 바랍니다."
                    rows="10"
                ></b-form-textarea>
            </div>
            <div class="attachment">
                <div class="apply-column-title">첨부파일</div>
                <b-form-file
                    multiple
                    class="apply-column-personal-input"
                    placeholder="파일을 첨부해주세요."
                    drop-placeholder="파일을 첨부해주세요."
                ></b-form-file>
            </div>

            <b-button>제출하기</b-button>
            <b-button>뒤로가기</b-button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            gender:["남자","여자"],
        }
    }
}
</script>

<style>
.apply-main{
    position: absolute;
    top:80px;
    width: 100%;
    height: 100vh;
    text-align: left;
    padding: 100px 50px;
    z-index: -1;
    overflow: auto;
}

.apply-column-input{
    border-top:none;
    display: flex;
}

.apply-column-title{
    border-left: 3px solid black;
    padding-left: 10px;
    font-size: large;
    margin:30px 0px;
}

.apply-column-personal-input{
    font-size: small;
    padding: 15px;
}

#dot{
    font-size: medium;
    height: 100%;
    vertical-align: middle;
}
</style>