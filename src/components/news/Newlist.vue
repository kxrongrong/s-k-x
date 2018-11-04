<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media">
					<a class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="https://images.gitee.com/uploads/29/2269429_shaokexin.png?1541040670">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:2012-12-12</span>
                                <span>点击:次</span>
                            </p>
						</div>
					</a>
				</li>
                <li class="mui-table-view-cell mui-media">
					<a class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="https://images.gitee.com/uploads/29/2269429_shaokexin.png?1541040670">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:2012-12-12</span>
                                <span>点击:次</span>
                            </p>
						</div>
					</a>
				</li>
                 <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
					<router-link  to="'/home/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="https://images.gitee.com/uploads/29/2269429_shaokexin.png?1541040670">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                                <span>{{item.add_time | dataFormat('YYYY-MM-DD')}}</span>
                                <span>{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default{
    data(){
        return{
            newlist:[]//用来存放列表数据
        }
    },
    created(){
       getNewList() 
    },
    methods:{
        getNewList(){
            this.$http.get("api/getnewslist").then(result=>{
              if(result.body.status==0){
                 this.newlist=result.body.message
                // console.log(result.body);
                
              }else{
                  Toast('获取新闻列表失败')
              }
            })
        }
    }

}
    
</script>
<style scoped>
.mui-media-body h1{
    font-size: 14px
}
.mui-media-body .mui-ellipsis{
    font-style: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}

</style>
