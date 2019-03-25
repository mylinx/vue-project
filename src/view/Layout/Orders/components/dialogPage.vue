<template> 
      <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
            {{ outerVisible }} 
        </el-dialog>
</template>
<script>
export default {
    name:'dialogPage',
    data(){
        return { 
              innerVisible:false,
              outerVisible:false
            }
        } 
}
</script>
