<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="content"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [],// 所有的评论数据
      content:''//评论内容
    }
  },
  created() {
    this.getComments()
    this.getMore()
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        .get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据

            // concat() 方法用于连接两个或多个数组。

            // 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

            // 语法 arrayObject.concat(arrayX,arrayX,......,arrayX)
            //  var arr1=[1,2,3,4,5]
            //  var arr2=[6,7,8,9,10]
            //  arr1=arr1.concat(arr2)
            //  console.log(arr1);//输出12345678910
            //  this.comments=result.body.message
            this.comments = this.comments.concat(result.body.message)
          } else {
            Toast('获取评论失败！')
          }
        })
    },
    getMore() {
      // 加载更多
      this.pageIndex++
      this.getComments()
    },
    postComment(){
      this.$http.post('api/postcomment/'+ this.$route.params.id, {content:this.content.trim()})
      .then(function(result){
        console.log(result);
        Toast('评论成功')
        var newComment={
          user_name:'匿名用户',
          add_time:new Date(),
          content:this.content
        }
        this.comments.unshift(newComment)
      })
    }
  },
  props: ['id']
}
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>



