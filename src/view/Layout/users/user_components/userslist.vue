<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-select  placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button> 
      </el-form-item>   
      <el-form-item>
          <el-button   type="success" @click="btnadd">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" height="500" style="width: 100%;">
      <el-table-column label="用户" width="180">
        <template slot-scope="scope">
          <span >{{ scope.row.name }}</span>
        </template>
      </el-table-column>
        <el-table-column label="角色" width="180">
        <template slot-scope="scope">
          <span >{{ scope.row.rolename }}</span>
        </template>
      </el-table-column>
        <el-table-column label="邮箱" width="180">
        <template slot-scope="scope">
          <span >{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="180">
        <template slot-scope="scope">
          <span >{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
       <el-table-column label="操作">
       <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id,scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handlecurent"
      :page-size="psize"
      :total="total">
    </el-pagination>

      <el-dialog :visible.sync="dialogTableVisible">
         <adduser a="1"  @liseion="onSubmit"></adduser>
      </el-dialog> 
  </div> 
</template>
<script>
import { getToken } from "@/until/auth";
import adduser from "./adduser.vue"
export default {
  name: "userslist",
  data() {
    return {
      tableData: [],
      total:0,
      psize:10,
      currentpage:1,
      dialogTableVisible:false
    }
  },
  components:{
     "adduser":adduser
  }
  ,
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handlecurent(pageIndex){ 
      this.init(pageIndex)
    },
    onSubmit(){
       console.log(111111111);
    },
    btnadd(){
      this.dialogTableVisible=true
    }
    ,
    init(pindex) { 
      this.$axios({
        method: "get",
        url: "/api/UserSystem/GetUserList", 
        params:{
           pageIndex:pindex
        },
        headers: { Authorization: "Bearer  " + getToken() }
      }).then(res => {
        if (res.status == 200) {
          if (res.data.verifiaction) {
            if (res.data.rows.total > 0) {
            
              this.tableData = res.data.rows.items;
              this.total=res.data.rows.total
              this.psize=res.data.rows.pagesize;
            }
          }
        }
      });
    }
  },
  created() {
    this.init(1);
  }
};
</script>
<style scoped>
.form-search {
  height: 60px;
  padding-top: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;
}

.demo-form-inline{
   margin-top: 20px;
}
</style>
