<template>
    <div>
        <h1>订单列表信息</h1>
        <el-button type="text" @click="btnClick"  >点击打开外层 Dialog</el-button>
        <dialogPage   ref="dialogPage1" ></dialogPage>
    </div>
</template>
<script>

import dialogPage from './components/dialogPage'
export default {
    name:'orderpage',
    data(){
        return{
             outerVisible: false,
             innerVisible: false
        }
    },
    components:{ 
        'dialogPage':dialogPage
    },
    methods:{

        btnClick(){
            //新增按钮啊
           this.$refs.dialogPage1.outerVisible=true;
        }
    }
}
</script>
