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
    <div v-for="item  in menulist.filter(x=>x.ParentID===null||x.ParentID==='')" :key="item.ID"> 
      <el-submenu  :key="item.ID" :index="item.ID">
        <template slot="title">
          <i :class="item.Icon==null? 'el-icon-news':item.Icon"></i>
          <span slot="title">{{ item.MenuName }}</span>
        </template>
        <el-menu-item-group  
            v-for="(c_value,  c_index)  in menulist.filter(x=>x.ParentID != null||x.ParentID !='')"   
            :key="c_index"
            v-if="item.ID===c_value.ParentID ? true:false"
            >
          <el-menu-item   :index="c_value.Router">
            <i :class="c_value.Icon==null? 'el-icon-news':c_value.Icon"></i>
            {{ c_value.MenuName }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu> 
    </div>
  </el-menu>
</template>
<script>
import { getToken } from "@/until/auth";
import { filterRouterNotNullPaths } from "@/router/modules/filterRouterNotNullPaths";

export default {
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    handlSelect(key) {
      //console.log(this.$router);
      //this.$emit('childByValue',this.$router.history.current.meta.title );
    },
    initMenu() {
      this.menulist=JSON.parse(this.$store.getters.navbar);
      // const parents = JSON.parse(this.$store.getters.navbar).filter(
      //   x => x.ParentID === null || x.ParentID === ""
      // );
      // const childrens = JSON.parse(this.$store.getters.navbar).filter(
      //   x => x.ParentID != null || x.ParentID != ""
      // );

      // parents.forEach((value, index, item) => {
      //   childrens.forEach((value, index, item) => {});
      // });
    }
  },
  data() {
    return {
      menulist: []
    };
  },
  created() {
    this.initMenu();
  },
  mounted() {}
};
</script>
<style scoped>
.el-menu {
  height: 100%;
}

/*菜单关闭*/
.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotateZ(-90deg);
}
/*菜单展开*/
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(0deg);
  -ms-transform: rotate(0deg);
  transform: rotateZ(0deg);
}
</style>
