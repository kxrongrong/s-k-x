<template>
   <div class="newsinfo-container">
       <h3 class="title">新闻标题</h3>
           <p class="subtitle">
               <span>发表时间:</span>
               <span>点击: 0次</span>
           </p>

   <hr>
   <div class="content"></div>
   </div>

</template>
<script>
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
        this.$http.get('api/gtenew'+this.id).then(result=>{
            if(result.body.status===0){
                this.newinfo=result.body.message
            }else{
                Toast('获取新闻失败')
            }
        })

        }
    }

}
    
</script>
<style scoped>
.newsinfo-container{
    padding: 0 4px;
}
.newsinfo-container .title{
    font-style: 16px;
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
