<template>
  <div class="login-container"> 
    <el-form class="login-form" auto-complete="on" label-position="left"  >
        <div class="title-container">
          <h3 class="title" v-html="msg"></h3>
        </div>
       <el-form-item>
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input type="text" auto-complete="on" name="username" v-model="loginform.username" />
       </el-form-item>
       <el-form-item >
          <span class="svg-container">
            <svg-icon icon-class="password"  />
          </span>
          <el-input type="text" auto-complete="on"  name="password" v-model="loginform.password" />
       </el-form-item> 
        <el-button type="primary" @click="SubmitForm">登陆</el-button>
        <el-button type="success">注册账号</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '<span style="color:white">欢迎登陆</span>',
      loginform:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    SubmitForm: function() { 
      
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" >
  $bg:#283443;  
  $light_gray:#eee;
  $cursor: #fff; 
  $inpbg:#242f3c;

  .login-container{
      position: fixed;
      height: 100%;
      width: 100%;
      background-color: $bg;
      .el-input {
            display: inline-block;
            height: 40px;
            width: 85%;
            input{
               -webkit-appearance: none;
               color: $light_gray;
               border: 0;
               padding: 12px 5px 12px 15px;
               background: $inpbg; 
               &:-webkit-autofill {
                  -webkit-box-shadow: 0 0 0px 1000px $inpbg inset !important;
                  -webkit-text-fill-color: $inpbg !important;
                }
            }
      }
      .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 420px;
        max-width: 100%;
        padding: 35px 35px 15px 35px;
        margin: 200px auto;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .svg-container{
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
  } 
</style>
