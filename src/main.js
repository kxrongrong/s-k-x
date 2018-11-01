//入口文件
import Vue from 'vue'
//导入路有
import VueRouter from 'vue-router'
//安装路有
Vue.use(VueRouter)

//导入nui的yangshi
import mui from './lib/mui/css/mui.min.css'
//导入字体图标所需要的样式和字体
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
//导入app根组件
import app from './App.vue'
//按需导入mint-ui中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

//导入自己的路有模块
import router from './router.js'
// mint-ui中的头部模块
Vue.component(Header.name, Header);
//mint-ui中的轮播图模块
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router:router//挂在路有对象在Vue实例上
})