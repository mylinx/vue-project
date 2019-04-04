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
   <div  v-for="item  in menulist" :key="item.Id">
       <el-submenu v-if="item.TreeChildren==null?  false: true "  :key="item.Id" :index="item.Id">
            <template slot="title">
            <i :class="item.Meta_icon==null? 'el-icon-news':item.Meta_icon"></i> 
              <span slot="title">{{ item.Name }}</span>
            </template>
            <el-menu-item-group> 
              <el-menu-item   v-for="(c_value,  c_index)  in item.TreeChildren" :key="c_index" :index="c_value.PathRouter">
                    <i :class="c_value.Meta_icon==null? 'el-icon-news':c_value.Meta_icon"></i> 
                    {{  c_value.Name }}
              </el-menu-item>
            </el-menu-item-group>
      </el-submenu> 
      <el-menu-item :index="item.Id"  v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">
             {{ item.Name}}
          </span>
      </el-menu-item> 
   </div>
  </el-menu>
</template>
<script>
import { getToken } from "@/until/auth";
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
       //_that=this;
      this.$axios({
        method: "get",
        url: "/api/Routers/GetPersion",
        headers: { Authorization: "Bearer  " + getToken() }
      }).then((res) => { 
        if (res.status == 200) {
          if (res.data.verifiaction) {
            //this.$store.commit("Add_Router", res.data.rows);
            this.menulist=res.data.rows;
            localStorage.setItem('router',JSON.stringify(res.data.rows));
          }
        }
      });  
    } 
  },
  data(){
    return{
       menulist:[]
    }
  },
  created(){ 
    this.initMenu();
  },
  mounted(){ 
     
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
