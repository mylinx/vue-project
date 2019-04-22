<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input placeholder="用户名"  v-model="userinfo.username" ></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-select  placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button> 
      </el-form-item>   
      <el-form-item>
          <el-button   type="success" @click="showDialog">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table 
    :data="tableData" 
    height="500" 
    style="width: 100%;"
    >
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

      <el-dialog :visible="dialogTableVisible"
      :before-close="closeWin"
      >
         <adduser ref="users" :uid="userinfo.id"  @liseion="onSearch"></adduser>
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
      userinfo:{
        id:'',
        username:'',
        roleid:''
      },
      tableData: [],
      total:0,
      psize:10,
      currentpage:1,
      dialogTableVisible:false
    }
  },
  components:{
     "adduser":adduser
  },
  methods: {
    handleEdit(index, row) {   
        setTimeout(() => {
           this.$refs.users.getUserModel(row.id);
        }, 10);
        
       this.dialogVisible();
    },
    handleDelete(index, row) { 
        setTimeout(() => {
           this.$refs.users.getUserModel(row.id);
        }, 10);
        
        this.dialogVisible();
    },
    handlecurent(pageIndex){ 
      this.init(pageIndex)
    }, 
    onSearch(){
       this.init(1);
       this.closeWin();
    },
    showDialog(){
      setTimeout(() => { 
        this.$refs.users.userinfo.id='';
        this.$refs.users.userinfo.username='';
        this.$refs.users.userinfo.email='';
        this.$refs.users.userinfo.password=''; 
        this.$refs.users.userinfo.isLock=0;
      }, 10);
      this.dialogTableVisible=true
    },
    dialogVisible(){
        this.dialogTableVisible=true
    },
    closeWin(){
       this.dialogTableVisible=false
    }
    ,
    init(pindex) { 
      this.$axios({
        method: "get",
        url: "/api/UserSystem/GetUserList", 
        params:{
           pageIndex:pindex,
           userName:this.userinfo.username
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
