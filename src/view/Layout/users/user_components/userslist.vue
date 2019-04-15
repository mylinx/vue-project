<template>
  <div>
    <el-table :data="tableData" height="500" style="width: 100%;">
      <el-table-column label="用户" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span >{{ scope.row.UserName }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handlecurent"
      :page-size="3"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import { getToken } from "@/until/auth";
export default {
  name: "userslist",
  data() {
    return {
      tableData: [],
      total:0,
      currentpage:1
    };
  },
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
            if (res.data.rows.TotalCount > 0) {
              this.tableData = res.data.rows.Items;
              this.total=res.data.rows.TotalCount
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
</style>
