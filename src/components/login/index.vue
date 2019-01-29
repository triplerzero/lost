<template>
  <div class="login">
    <el-input suffix-icon="el-icon-edit" placeholder="请输入学号" v-model="user"></el-input>
    <el-input suffix-icon placeholder="请输入密码" v-model="pwd" :type="eyeOpen?'text':'password'">
      <i
        :class="eyeOpen?'el-input__icon iconfont icon-kaiyan':'el-input__icon iconfont icon-biyan'"
        slot="suffix"
        @click="handleEye"
      ></i>
    </el-input>
    <el-button type="primary" class="loginBtn" @click="handleLogin">登录</el-button>
    <el-button type="danger" class="loginBtn" @click="handleClear">清空</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      eyeOpen: false,
      user: "",
      pwd: ""
    };
  },
  methods: {
    //眼睛开关
    handleEye() {
      this.eyeOpen = !this.eyeOpen
    },
    //清除数据
    handleClear() {
      this.user = ""
      this.pwd = ""
    },
    //登录
    handleLogin() {
      let userId = this.user;
      let pwd = this.pwd;
      axios.post("/user/login", { userId, pwd }).then((res) => {
        console.log(res)
        if(res.status==200&&res.data.code==0){
          this.$message({
            message:'登陆成功',
            type:'success',
            center:'true'
          })
        }else{
        this.$message({
          message:res.data.msg,
          type:'error',
          center:'true'
        })
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
i {
  font-size: 24px;
  color: #c0c4cc;
}
.login {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  .el-input {
    margin-bottom: 20px;
  }
  .loginBtn {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
  }
}
</style>
