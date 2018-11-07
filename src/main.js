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
//导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY_MM_DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
//安装vue-resource
Vue.use(VueResource)
//添加一个根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

// mint ui button
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

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