<template>
  <div class="login-container">
    <el-form
      class="login-form"
      auto-complete="on"
      :model="loginform"
      ref="loginform"
      label-position="left"
    >
      <div class="title-container">
        <h1 class="title" style="color:white">xxx信息管理系统</h1>
      </div>
      <el-form-item prop="name" :rules="[{ required: true, message: '账号不能为空'}]">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input type="text" auto-complete="off" name="username" v-model="loginform.name"/>
      </el-form-item>
      <el-form-item prop="password" :rules="[{ required: true, message: '密码不能为空'}]">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input type="password" auto-complete="off" name="password" v-model="loginform.password"/>
      </el-form-item>
      <el-button type="primary" @click="loginhandle('loginform')">登陆</el-button>
      <el-button type="success">注册账号</el-button>
    </el-form>
  </div>
</template>
<script>
import { setToken } from "@/until/auth";
import { mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      loginform: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    loginhandle(loginform) {
        this.$refs[loginform].validate(valid => {
          if (valid) {
            this.$store
              .dispatch("loginSystem", this.loginform)
              .then(res => {
                this.$router.push({ path: "/layout" });
              })
              .catch(erro => {
                this.$message({
                  showClose: true,
                  message: "账号或密码不正确!",
                  type: "error",
                  duration: 1000
                });
              });
          } else {
            return false;
          }
        });
    }
  }
};
</script> 
<style rel="stylesheet/scss" lang="scss" >
$bg: #283443;
$light_gray: #eee;
$cursor: #fff;
$inpbg: #242f3c;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url("../../Img/bg_login.png");
  .el-input {
    display: inline-block;
    height: 40px;
    width: 85%;
    input {
      -webkit-appearance: none;
      color: $light_gray;
      border: 0;
      background-color: transparent;
      padding: 12px 5px 12px 15px;
      // background: $inpbg;
      &:-webkit-autofill {
        -webkit-text-fill-color: $inpbg !important;
      }
    }
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 420px;
    min-height: 230px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 200px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 10px 10px 10px rgba(34, 25, 25, 0.2);
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.5);
    //background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .el-input {
    border-radius: 5px;
  }
  .svg-container {
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
  }
}
</style>