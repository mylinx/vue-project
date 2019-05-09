<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" >
      <el-form-item label="用户名">
        <el-input placeholder="用户名" v-model="userinfo.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="showDialog">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" height="500" style="width: 100%;">
      <el-table-column label="用户" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.rolename }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id,scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handlecurent"
      :current-page	='currentpage'
      :page-size="psize"
      :total="total"
    ></el-pagination>
    <el-dialog :visible.sync="dialogTableVisible">
      <adduser ref="users" :uid="userinfo.id" @liseion="onSearch"></adduser>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from "@/until/auth";
import adduser from "./adduser.vue";
import * as users from "@/api/users";
export default {
  name: "userslist",
  data() {
    return {
      userinfo: {
        id: "",
        username: "",
        roleid: ""
      },
      tableData: [],
      total: 0,
      psize: 10,
      currentpage:1,
      dialogTableVisible: false
    };
  },
  components: {
    adduser: adduser
  },
  methods: {
    handleEdit(index, row) {
      setTimeout(() => {
        this.$refs.users.getUserModel(row.id);
        this.$refs.users.$refs['userinfo'].resetFields()
      }, 0); 
      this.dialogVisible();
    },
    handleDelete(index, row) {
        this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => { 
          const params = {
            id: row.id
          };
          users.userdelete(params).then(res => {
            if (res.status == 200) {
              if (res.data.verifiaction) {
                this.$message({
                  message: res.data.message,
                  type: "success",
                  duration: 2000
                });
                this.init();
              }
            }
          });
        }); 
    },
    handlecurent(pageIndex) {
      this.currentpage=pageIndex
      this.init();
    },
    onSearch() {
      this.currentpage=1
      this.init();
    },
    showDialog() {
      setTimeout(() => {
         this.$refs.users.$refs['userinfo'].resetFields() 
      }, 0);
     

      this.dialogTableVisible = true;
    },
    dialogVisible() {
      this.dialogTableVisible = true;
    },
    closeWin() {
      this.dialogTableVisible = false;
    },
    init() {
      const param = {
        pageIndex: this.currentpage,
        userName: this.userinfo.username
      };
      
        users.userlist(param)
        .then(res => {
          if (res.status == 200) {
            if (res.data.verifiaction) {
              if (res.data.rows.total > 0) {
                this.tableData = res.data.rows.items;
                this.total = res.data.rows.total;
                this.psize = res.data.rows.pagesize;
              }
            }
          }
        })
        .catch(erro => {
          
        });
    }
  },
  created() {
    this.init();
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

.demo-form-inline {
  margin-top: 20px;
}
</style>
