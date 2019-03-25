<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    unique-opened
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="-1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="Orders" @select="handlSelect">
          <i class="el-icon-goods"/>
          <span slot="title">订单列表</span>
        </el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="-2">
      <template slot="title">
        <i class="el-icon-goods"/>
        <span slot="title">订单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="-3" >
      <template slot="title">
        <i class="el-icon-picture-outline"/>
        <span slot="title">数据分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="-4">
      <template slot="title">
        <i class="el-icon-setting"/>
        <span slot="title">系统设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
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
    handlSelect(key) {}
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
