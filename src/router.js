//路由入口文件
//导入路有
import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/Homecontainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import Newlist from './components/news/Newlist.vue'
import NewInfo from './components/news/NewInfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
   {path:'/',redirect:'/home'},
   {path:'/home',component:HomeContainer},
   {path:'/member',component:MemberContainer},
   {path:'/shopcar',component:ShopcarContainer},
   {path:'/search',component:SearchContainer},
   {path:'/home/newlist',component:Newlist},
   {path:'/home/newinfo/:id',component:NewInfo}
    
  ],
  linkActiveClass:'mui-active'//覆盖默认的路有高亮的类，默认的类叫做Link-active

})

// 把路由对象暴露出去
export default router