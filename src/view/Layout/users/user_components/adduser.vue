<template>
  <el-form   label-width="80px">
    <el-form-item label="活动名称">
      <el-input  type="text"></el-input>
    </el-form-item>
    <!-- <el-form-item label="活动区域">
      <el-select  placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
    <el-form-item>
        <el-button type="primary" @click="closeThis" >确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "adduser",
  props:['a'],
  data() {
    return {};
  },
  created(){
     console.log(this.a);
  },
  methods:{
     closeThis(){
         this.$emit('liseion');
     }
  }
}
</script>
<style>
</style>
