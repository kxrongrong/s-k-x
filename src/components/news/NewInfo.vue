<template>
  <div class="newinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newinfo.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
// 1. 导入 评论子组件
// import comment from '../subcomponent/comment.vue'
import comment from '../subcomponent/comment.vue'

import { Toast } from 'mint-ui';
export default{
    data(){
        return{
            id:this.$route.params.id,//将url地址中传递过来的值，挂载后调用
            newinfo:{}//存储新闻对象
        }
    },
    methods:{
        getNewsInfo(){//获取新闻详情
        this.$http.get('api/getnew/'+this.id).then(result=>{
            console.log(result)
            if(result.body.status==0){
                // console.log(result.body.message);
                
                this.newinfo=result.body.message[0]
            }else{
                Toast('获取新闻失败')
            }
        })

        }
    },

    created() {
      this.getNewsInfo()  
    },
     components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }

}
    
</script>
<style scoped>
.newsinfo-container{
    padding: 0 4px;
    padding-bottom: 50px;
}
.newsinfo-container .title{
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
    color: red;
}
.newsinfo-container .subtitle{
    font-style: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}

</style>
