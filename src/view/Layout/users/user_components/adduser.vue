<template>
  <el-form ref="form"  label-width="80px">
    <el-form-item label="活动名称">
      <el-input ></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select  placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "adduser",
  data() {
    return {};
  }
};
</script>
<style>
</style>
