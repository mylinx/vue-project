<template>
    <div>
        <el-menu  class="vethiden">
                     <el-menu-item index="5">
                        <span class="svg-container">
                          <svg-icon icon-class="tree" />
                        </span>
                     </el-menu-item>
                     <el-menu-item v-for="(item,index1) in lists" 
                      :key="index1" 
                      :index="String(index1+1)"
                      :tabindex="(index1+1)"
                      >
                         {{ item }} 
                     </el-menu-item> 
        </el-menu>
    </div>
</template>
<script>
export default {                                                                           
    data(){
        return {
            lists:[
                "订单中心",
                "商家中心",
                "客户服务",
                "商家管理"
            ],
            data1:'1'
        }
    },
    methods:{
        changeMenu(paramdata){
             switch (paramdata)
                {
                    case 1:
                    this.lists=[
                         "订单中心",
                        "商家中心",
                        "客户服务",
                        "商家管理"
                    ]
                    break;
                    case 2:
                    this.lists=[
                        "客户服务",
                        "商家管理",
                    ]
                    break;
                    case 3:
                    this.lists=[
                        "订单中心",
                        "商家中心",
                    ]
                    break;
                }
        }
    },
    props:{
        par:String
    }
}
</script>
