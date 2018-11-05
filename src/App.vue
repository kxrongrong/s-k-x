<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
  <mt-header fixed title="黑马程序员.vue项目"></mt-header>
    
    <!-- 中间路由区域   添加动画的时候把需要动画的元素用transition包起来-->
		<transition>
		<router-view></router-view>
		</transition>
  
    <!-- 底部tabar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
			<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   
  </div>
</template>

<script>
</script>

<style lang="css" scoped>
.app-container {
  /* background-color: red; */
  padding-top: 40px;
	padding-bottom: 50px;
	/* 解决页面动画的时候出现滚动条 */
	overflow-x: hidden;
}
/* 让动画右进左出不混乱  将进入和出去的分开来写 */
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	/* 为阻止动画运行过程中上漂的问题加上绝对定位这样就不占位置了，在他离开的时候后面进来的元素就可以直接在上面显示而不会被挤下来从而引起上漂问题 */
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease
}


</style>



