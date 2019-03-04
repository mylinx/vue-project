<template>
    <div id="msg">
        {{ msg }}
    </div>
</template>
<script>
export default {
    name:'Error',
    data(){
        return {
            msg:'404 页面!没有找到你要的页面哦!' 
        }
    }
}
</script>
<style>
    #msg{
        position: relative;
        top: 320px;
    }
</style>
