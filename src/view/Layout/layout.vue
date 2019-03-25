<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">Take the Logo here!</el-col>
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
          <navbar></navbar>
          <!-- <el-menu>
               <el-menu-item index="1">
                     <i class="el-icon-menu"></i>
                     <span slot="title">商品管理</span>
               </el-menu-item>
               
               <el-menu-item index="2">
                    <i class="el-icon-goods" />
                    <span slot="title" > 订单管理 </span>
               </el-menu-item> 

                <el-menu-item index="3">
                    <i class="el-icon-picture-outline"/>
                   <span slot="title">数据分析</span> 
               </el-menu-item> 

                <el-menu-item  index="4">
                   <i class="el-icon-setting"/>
                   <span slot="title">系统设置</span>
               </el-menu-item>  
          </el-menu>-->
        </el-aside>
        <el-main>
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
      absidHeight: window.innerHeight - 60
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
