# 这是我很用心写的第一个项目
## 希望这种认真的状态可以多多持续
### 我是一个有诗情画意的程序员
#### 感觉自己最近越发自恋了
##[主流开源协议之间有何异同?]
(https://www.zhuliu.com/question/19568896)
## 用(传统方式)命令行把修改过后的代码传到码云???
1.git add .
2.git commit -m "提交信息"
3.git push
## 制作首页App组件
1.完成Header区域,使用的是 Mint-UI中的Header组件
2.制作底部的 Tabbar区域,使用的是MUI的Tabbar.html
+在制作购物车小图标的时候,操作会相对多一些
+先把扩展图标的css样式,拷贝到项目里面去
+拷贝扩展字体库ttf文件到项目中
+为购物车小图标,添加如下样式'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个router-view来展示路由匹配到组件
## 改造tabbar 为router-link
## 设置路由高亮
##点击 tabbar 中的路由链接，展示对应的路由组件
##制作轮播图布局
## 加载首页轮播图数据
1.获取数据，如何获取呢，使用vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用v-for循环渲染 每个item项
##改造九宫格区域的样式

##改造 新闻资讯 路由连接
##新闻资讯页面的制作
1.绘制界面，使用MUI中的media-list.html
2.使用vue-resource 获取数据
3.渲染真实数据
##实现新闻资讯列表，点击跳转到新闻详情页
1.把列表中的每一项改造为router-link,同时，在跳转的时候应该提供唯一的Id标识符
2.创建新闻详情的组件页面 NewInfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面对应起来


