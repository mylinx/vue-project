<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handlSelect"
    unique-opened
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="-1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </template>
      <el-menu-item-group>
        <!-- <el-menu-item index="Orders" >
          <i class="el-icon-goods"/>
          <span slot="title">用户列表</span>
        </el-menu-item> -->
        <el-menu-item index="/userslist">用户列表</el-menu-item>
        <el-menu-item index="/roleslist">用户角色</el-menu-item>
        <el-menu-item index="/pessionslist">用户权限</el-menu-item>
      </el-menu-item-group>
    </el-submenu> 
        <!-- <el-menu-item  v-for="item in routes"  :key="item.path" :index="item.path"  >
           {{ item.meta.title}}
        </el-menu-item>    -->
  </el-menu>
</template>

<script>
export default { 
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    handlSelect(key) { 
        console.log(this.$router);
        //console.log();
        //this.$emit('childByValue',this.$router.history.current.meta.title );
    }
  },
  data(){
    return{
      routes:[]
    }
  },
  created(){
    //  this.routes=JSON.parse("[{\"path\":\"/users1\",\"name\":\"userslist\",\"meta\":{\"title\":\"用户列表\",\"icon\":\"el-icon-setting\",\"roles\":\"['admin','kfadmin']\"}},{\"path\":\"/users2\",\"name\":\"userslist\",\"meta\":{\"title\":\"角色列表\",\"icon\":\"el-icon-setting\",\"roles\":\"['admin','kfadmin']\"}},{\"path\":\"/users3\",\"name\":\"userslist\",\"meta\":{\"title\":\"权限列表\",\"icon\":\"el-icon-setting\",\"roles\":\"['admin','kfadmin']\"}}]");
    //  console.log(this.routes);
     //console.log(this.routes);
  } 
};
</script>
<style scoped>
.el-menu {
  height: 100%;
}




/*菜单关闭*/
.el-submenu>.el-submenu__title .el-submenu__icon-arrow{
	-webkit-transform: rotateZ(-90deg); 
	-ms-transform: rotate(-90deg);
	transform: rotateZ(-90deg); 
}
/*菜单展开*/
.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{
	-webkit-transform: rotateZ(0deg); 
	-ms-transform: rotate(0deg);
	transform: rotateZ(0deg); 
}
</style>
