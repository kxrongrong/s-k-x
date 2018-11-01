//入口文件
import Vue from 'vue'
//导入nui的yangshi
import mui from './lib/mui/css/mui.min.css'
//导入app根zujian
import app from './App.vue'
//按需导入mint-ui中的组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})