<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) in lunbotulist" :key="index">
             <img :src="item.img" alt="">
          </mt-swipe-item>
         
        </mt-swipe>
        
        <ul class="mui-table-view mui-grid-view mui-grid-6">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newlist">
		                   <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
		                     <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                     <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                     <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      lunbotulist: [] //保存轮播图数据
    }
  },
  methods: {
    getlunbotu() {
      //获取轮播图数据的方法
      this.$http
        .get('api/getlunbo')
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotulist=result.body.message
            // console.log(result.body.message)
          } else {
            Toast('轮播图加载失败。。。。。')
          }
        })
    }
  },

  created() {
      this.getlunbotu()
  }
}
</script>
<style scoped>
.mint-swipe {
  height: 200px;
  /* background-color: lawngreen; */
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-table-view {
  background-color: #fff;
  border: none;
}
.mui-table-view-cell {
  border: none;
}
.mui-table-view-cell img {
  width: 60px;
  height: 60px;
}
</style>
