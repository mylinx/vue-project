<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4"> Sugar Operation System </el-col>
          <el-col :span="16">&nbsp;</el-col>
          <el-col :span="4">
            <el-row>
              <el-col :span="24">
                  <el-dropdown @command="handleCommand" >
              <span class="el-dropdown-link">
                个人中心
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="a">
                  账号信息
                </el-dropdown-item>
                <el-dropdown-item command="b">退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
              </el-col>
            </el-row> 
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside :style="{ height:absidHeight+'px',width:250+'px'}">
          <navbar v-on:childByValue="childByValue"></navbar> 
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>订单管理</el-breadcrumb-item>
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
export default {
  name: "layout",
  data() {
    return {
      absidHeight: window.innerHeight - 60,
      name:''
    };
  },
  components: {
    navbar: navbar
  },
  methods: {
    // toggleSideBar() {
    //   this.$store.dispatch('ToggleSideBar')
    // },
    // logout() {
    //   this.$store.dispatch('LogOut').then(() => {
    //     location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    // }
     childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.name = childValue;
      } 
    ,
    handleCommand(command) {
        if(command=="a"){
            this.$router.push({path:'/userinfo'})
        }
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

.el-dropdown-menu{
  top: 30px;
}

.el-menu {
  height: 100%;
}
</style>
