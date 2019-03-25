<template>
    <div>
        <el-button  type="primary"  @click="cliRedired" > 测试跳转加载菜单 </el-button>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            
        }
    },
    methods:{
        cliRedired(){
            
            //this.$router.
             //console.log()
            this.$router.push({path:'./header'})
        }
    }
}
</script>

