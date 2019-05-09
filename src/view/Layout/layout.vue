<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">Sugar Operation System</el-col>
          <el-col :span="16">&nbsp;</el-col>
          <el-col :span="4">
            <el-row>
              <el-col :span="24">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    个人中心
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">{{ name }}</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出登陆</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside :style="{ height:absidHeight+'px',width:250+'px'}">
          <navbar></navbar>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
          </el-breadcrumb>  
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navbar from "./components/navbar";
import { getToken, removeToken } from "@/until/auth";
import { loginOut } from "@/api/login";
import * as perssion from "@/api/perssion";
export default {
  name: "layout",
  data() {
    return {
      absidHeight: window.innerHeight - 60,
      name: '',
      levelList:''
    };
  },
  components: {
    navbar: navbar
  },
  created() {
     //this.initMenu();
  },
  mounted() {
    
  },
  methods: {
    childByValue: function(childValue) {
      // childValue就是子组件传过来的值
      //this.name = childValue;
    },
    handleCommand(command) {
      if (command == "a") {
        this.$router.push({ path: "/userinfo" });
      }
      if (command == "loginout") {
        loginOut(this.$store.getters.uid).then(res => {
          if (res.data.verifiaction) {
            removeToken();
            this.$router.push({ path: "/" });
          }
        }).catch(erro=>{
             removeToken();
            this.$router.push({ path: "/" });
        })
      }
    },
    initMenu(){ 
         perssion
        .Getperssion()
        .then(res => {
          if (res.status == 200) {
            if (res.data.verifiaction) {
               this.$store.commit('SET_NAVBAR',res.data.rows)
            }
          }
        })
        .catch(erro => {
            console.log(erro);
        })
    }
  },
  mounted() {
    this.absidHeight = window.innerHeight - 60;
    const that = this;
    window.onresize = function temp() {
      that.absidHeight = window.innerHeight - 60;
    };
  }
};
</script>
<style scoped>
.el-header {
  width: 100%;
  border-bottom: solid 1px #ccc;
  line-height: 60px;
  color: white;
  background: rgb(130, 211, 248);
}

.el-header .el-row .el-col .el-dropdown {
  cursor: pointer;
  color: white;
}

.el-dropdown-menu {
  top: 30px;
}

.el-menu {
  height: 100%;
}
</style>
