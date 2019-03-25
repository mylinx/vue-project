<template>
  <div id="pagemain">
    <el-container>
      <el-header style="height:80px;">
        <div class="header-common search-item">
            <a href="#">
                <img src=""  alt=""/>
            </a> 
            <div class="search-item">
                <i class="el-icon-search"></i>
                <input type="text" placeholder="想要知道点什么?" >
            </div> 
        </div>
        <div class="header-common menu">
            <el-menu mode="horizontal">
                <el-menu-item index="1" @click="clickBt">
                    首页
                </el-menu-item>
                <el-menu-item index="2" @click="clickBt">
                    留言
                </el-menu-item>
                <el-menu-item index="3" @click="clickBt">
                    关于
                </el-menu-item>
            </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import axios from "axios"; 
import pagePent from '../myview/first'
export default {
  name: "",
  components:{
        "pagePent":pagePent
  },
  data() {
    return {
      mes: "123123"
    };
  },
  mounted() {
    axios.get("/api/values/Test1").then(res => {
      this.mes = res.data;
    });
  },
  methods: {
    clickBt: function() {
      this.mes = "1111";
    }
  }
};
</script>
<style lang="scss" scoped>

.el-container {
  height: 100%;
}

.el-header {
  background: #50b2f3;
  color: white;
  font-size: 18px;
}

.el-header .header-common {
    width: 400px; 
}

.el-header .search-item {
    float: left;
}
.el-header .search-item input {
    height: 35px;
    width: 247px;
    font-size: 16px;
    color: gray;
}
 

.el-header .menu { 
    float: right;
    margin-top: 10px;
}


.el-header .search-item a{
     display: block;
     
}
.el-main {
  height: 80%;
  min-height: 600px;
  background: #cccc;
}


.el-footer {
  height: 30px;
  background: #23262e;
}
</style>



