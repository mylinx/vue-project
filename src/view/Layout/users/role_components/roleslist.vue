<template>
  <div>
    <h1>这是角色页面</h1>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" >查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="pushpath" >新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "roleslist",
  data() {
    return {};
  },
  methods:{
      pushpath(){
           this.$router.push({ path: "/rolesedit" });
      }
  }
};
</script>
<style scoped>
</style>



