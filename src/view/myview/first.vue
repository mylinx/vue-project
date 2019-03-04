<template>
    <div class="page-content">
            <el-row class="item-title item">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <span class="svg-container">
                    <svg-icon icon-class="qq"/>
                  </span>
                  公告：欢迎来到我的轻博客
                </div>
              </el-col>
            </el-row>
            <el-row class="item">
              <el-col :span="24">
                <div class="article-item">
                  <h3>
                    <a href="#">拥有诗意的心态,才能拥有诗意的生活</a>
                  </h3>
                  <h5>发布于:刚刚</h5>
                  <p>父爱如山，不善表达。回想十多年前，总记得父亲有个宽厚的肩膀，小小的自己跨坐在上面，越过人山人海去看更广阔的天空，那个时候期望自己有一双翅膀，能够像鸟儿一样飞得高，看得远。虽然父亲有时会和自己开玩笑，但在做错事的时候会受到严厉的训斥。父亲有双粗糙的大手掌，手把手教我走路、骑车，却会在该放手的时刻果断地放开让自己去大胆尝试，那个时候期望快快长大，能够做自己想做的事，不用受父亲的“控制”。父亲是智慧树，他无所不知、无所不晓，虽然你有十万个为什么，但是也难不倒他。</p>
                </div>
                <div class="comment">
                    <a href="#" >评论</a>
                    <a href="#" >点赞</a>
                </div>
              </el-col>
            </el-row>
            <el-row class="item">
              <el-col :span="24">
                 <div class="article-item">

                 </div>
              </el-col>
            </el-row>
            <el-row class="item">
              <el-col :span="24">
                 <div class="article-item"></div>
              </el-col>
            </el-row>

            <el-row class="item">
              <el-col :span="24">
                 <div class="article-item">

                 </div>
              </el-col>
            </el-row>
          </div>
</template>
<style scoped>
    
.page-content {
  margin: 0 auto;
  width: 850px;
  height: 100%;
}

.item {
  width: 850px;
  height: 400px;
  background: white;
  margin-bottom: 10px;
}

.item-title {
  height: 60px;
}

.grid-content {
  height: 60px;
  line-height: 63px;
}

.article-item {
  margin: 0 auto;
  width: 90%;
  text-align: left;
  overflow: hidden;
}

.article-item h3{
    color: #a5a5a5;
    font-weight: 400;
}

.article-item h5{
    color: #a5a5a5;
    font-weight: 400;
}

.article-item a{
     text-decoration: none;
     color: #333;
}

.article-item a:hover{
     color: #777;
}

.article-item p{
    line-height: 30px;
}

.comment{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 56px; 
    background: #f9f9f9;
}

.comment a{
    display: block;
    width: 50%;
    line-height: 56px; 
    text-align:center;
    float: left;
    text-decoration:none;
    color: #333;
    font-size: 14px;
}

.comment a:hover{
    color: #ccc;
}

.comment a+a{
    border-left: 1px solid #efefef;
    margin-left: -1px;
}


</style>
