<template>
    <div id="main"> 
        <el-container>  
              <absides :par='paramsData' ref="mychild"></absides>
              <el-container>
                <el-header>
                    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" >
                     <el-menu-item index="1" @click="setParam(1)">
                         首页
                     </el-menu-item>
                     <el-menu-item index="2"  @click="setParam(2)">
                        处理中心
                     </el-menu-item>
                     <el-submenu index="5">
                        <template slot="title">测试二级</template>
                        <el-menu-item index="5-1">菜单1</el-menu-item>
                        <el-menu-item index="5-2">菜单2</el-menu-item>
                        <el-menu-item index="5-3">菜单3</el-menu-item>
                        <el-menu-item index="5-4">菜单4</el-menu-item>
                     </el-submenu>
                     <el-menu-item index="3" @click="setParam(3)">后台管理</el-menu-item>
                     <el-menu-item index="4">日志管理</el-menu-item>
                    </el-menu>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
              </el-container> 
        </el-container>
    </div>
</template>
<script>
import abside from './iframe/aside'
export default { 
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        paramsData:'2'
      };
    },
    components:{
     "absides" : abside
    },
   methods: {
      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
      },
      setParam(key){
        this.$refs.mychild.changeMenu(key);
      }
    }
}
</script>
<style  >
   .el-header{
     width: 100%;
   }
   .vethiden{
     width: 200px;
   }


   .vethiden .el-menu-item{
      border-bottom: 1px solid #ccc;
   }  

    .el-aside{
      border-right: 1px solid #ccc;
    }
   .el-main{
     min-height: 700px;
     overflow: hidden;
   }

</style>
