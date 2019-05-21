<template>
  <el-form ref="userinfo" :model="userinfo" :rules="rules" label-width="80px">
    <el-form-item label="账号" prop="username">
      <el-input
        type="text"
        :value="userinfo.username"
        :disabled="inputdisabled"
        v-model="userinfo.username"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="userinfo.password" :disabled="inputdisabled"></el-input>
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
import * as users from "@/api/users";
export default {
  name: "adduser",
  props: {
    uid: String
  },
  data() {
    return {
      userinfo: {
        id: "",
        username: "",
        password: "",
        roleid: "1",
        email: "",
        isLock: true
      },
      inputdisabled: false,
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
    //console.log(this.$refs['userinfo']);
    //.resetFields();
    this.getRoles();
  },

  mounted() {
    //this.$refs['userinfo'].resetFields();
  },
  methods: {
    onSubmit(formdata) {
      this.$refs[formdata].validate(valid => {
        if (valid) {
          this.addOrUpdateUser();
        } else {
          return false;
        }
      });
    },

    //获取角色列表
    getRoles() {
      this.$axios({
        method: "get",
        url: "/UserSystem/GetRoles"
      }).then(res => {
        if (res.status == 200) {
          if (res.data.verifiaction) {
            this.roles = res.data.rows;
            this.userinfo.roleid = res.data.rows[0].id;
          }
        }
      });
    },
    //新增.更新用户
    addOrUpdateUser() {
      const _that = this;
      var url = "";
      if (this.userinfo.id != "") {
        url = "/UserSystem/updateUser";
      } else {
        url = "/UserSystem/addUser";
      }

      const data = {
        ID: this.userinfo.id,
        RoleID: this.userinfo.roleid,
        PassWord: this.userinfo.password,
        UserName: this.userinfo.username,
        Email: this.userinfo.email,
        IsLock: this.userinfo.isLock == true ? 1 : 0
      };
      users
        .useredit(data, url)
        .then(res => {
          if (res.status == 200) {
            if (res.data.verifiaction) {
              this.$message({
                message: res.data.message,
                type: "success",
                duration: 1000,
                onClose: () => {
                  this.userinfo.username = "";
                  this.userinfo.password = "";
                  this.userinfo.email = "";
                  this.$emit("liseion");
                }
              });
            } else {
              this.$message({
                message: res.data.message,
                type: "error",
                duration: 1000,
                onClose: () => {
                  this.userinfo.username = "";
                  this.userinfo.password = "";
                  this.userinfo.email = "";
                  this.$emit("liseion");
                }
              });
            }
          }
        })
        .catch(erro => {});
    },
    getUserModel(uid) {
      const params = {
        id: uid
      };
      users
        .userdetails(params)
        .then(res => {
          if (res.status == 200) {
            if (res.data.verifiaction) { 
              this.userinfo.roleid = res.data.rows.roleid;
              this.userinfo.id = res.data.rows.id;
              this.userinfo.email = res.data.rows.email;
              this.userinfo.username = res.data.rows.username;
              this.userinfo.isLock = true//res.data.rows.islock == 1 ? true : false;
            }
          }
        })
        .catch(erro => {

        });
      // this.$axios({
      //   method: "get",
      //   url: "/UserSystem/detailsUser",
      //   params: {
      //     id: uid
      //   }
      // }).then(res => {
      //   if (res.status == 200) {
      //     if (res.data.verifiaction) {
      //       this.userinfo.roleid = res.data.rows.roleid;
      //       this.userinfo.id = res.data.rows.id;
      //       this.userinfo.email = res.data.rows.email;
      //       this.userinfo.username = res.data.rows.username;
      //       this.userinfo.isLock = res.data.rows.islock == 1 ? true : false;
      //     }
      //   }
      // });
    }
  }
};
</script>
<style>
</style>
