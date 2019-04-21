<template>
  <el-form ref="userinfo" :model="userinfo" :rules="rules" label-width="80px">
    <el-form-item label="账号" prop="username">
      <el-input type="text" :value="userinfo.username" v-model="userinfo.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="userinfo.password" show-password></el-input>
    </el-form-item>
    <el-form-item label="所属角色">
      <el-select v-model="userinfo.roleid" placeholder="请选择">
        <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input type="text" :value="userinfo.email" v-model="userinfo.email"></el-input>
    </el-form-item>
    <el-form-item label="是否启用">
      <el-switch v-model="userinfo.isLock" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </el-form-item>
    <el-form-item style="text-align:right;">
      <el-button type="primary" @click="onSubmit('userinfo')">确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { getToken } from "@/until/auth";
export default {
  name: "adduser",
  props: ["a"],
  data() {
    return {
      userinfo: {
        id: "",
        username: "",
        password: "",
        roleid: "1",
        email: "",
        isLock: 1
      },
      roles: [],
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          },
          {
            min: 6,
            max: 11,
            message: "长度在 6 到 11 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    onSubmit(formdata) {
      this.$refs[formdata].validate(valid => {
        if (valid) {
          this.addUser();
          //this.$emit("liseion");
        } else {
          return false;
        }
      });
    },

    //获取角色列表
    getRoles() {
      this.$axios({
        method: "get",
        url: "/api/UserSystem/GetRoles",
        headers: { Authorization: "Bearer  " + getToken() }
      }).then(res => {
        if (res.status == 200) {
          if (res.data.verifiaction) {
            this.roles = res.data.rows;
            this.userinfo.roleid = res.data.rows[0].id;
          }
        }
      });
    },

    //新增用户
    addUser() { 
      const _that=this;
      this.$axios({
        method: "post",
        url: "/api/UserSystem/addUser",
        data: {
          RoleID: this.userinfo.roleid,
          PassWord: this.userinfo.password,
          UserName: this.userinfo.username,
          Email: this.userinfo.email,
          IsLock:this.userinfo.isLock==true?1:0,
          //Remark:this.userinfo.Remark
        },
        headers: { Authorization: "Bearer  " + getToken() }
      }).then(res => {
        if (res.status == 200) {
          if (res.data.verifiaction) { 
            this.$message({
              message: "添加成功!",
              type: "success",
              duration:1000,
              onClose:()=>{ 
                this.userinfo.username='';
                this.userinfo.password='';
                this.userinfo.email='';
                this.$emit("liseion");
              }
            }); 
          } else {
            this.$message.error(res.data.message);
          }
        }
      });
    }
  }
};
</script>
<style>
</style>
