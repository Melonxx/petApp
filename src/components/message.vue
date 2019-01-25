<template>
  <div class="message">
    <header>
      <span>私信</span>
    </header>
    <p class="title">未关注人的消息</p>
    <ul class="message-list">
      <li>
        <div class="head-img">
          <img src="../../static/img/message_head.png" alt="">
        </div>
        <div class="info">
          <p class="nickname">小可爱</p>
          <p class="tip">今天真是愉快的一天·1</p>
        </div>
      </li>
      <li>
          <div class="head-img">
            <img src="../../static/img/message_head.png" alt="">
          </div>
          <div class="info">
            <p class="nickname">小可爱</p>
            <p class="tip">今天真是愉快的一天·1</p>
          </div>
        </li>
    </ul>
    <div class="message1">
      <ul class="message-list">
        <li>
          <div class="head-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="info">
            <p class="nickname">小可爱</p>
            <p class="tip">今天真是愉快的一天·1</p>
          </div>
        </li>
        <li>
          <div class="head-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="info">
            <p class="nickname">小可爱</p>
            <p class="tip">今天真是愉快的一天·1</p>
          </div>
        </li>
        <li>
          <div class="head-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="info">
            <p class="nickname">小可爱</p>
            <p class="tip">今天真是愉快的一天·1</p>
          </div>
        </li>
        <li>
          <div class="head-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="info">
            <p class="nickname">小可爱</p>
            <p class="tip">今天真是愉快的一天·1</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      msg: 'Welcom to Your Vue.js App'
    }
  },
  mounted: function(){
    // this.$ajs();
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  text-align: center;
  background-color: #f5f5f5;
  line-height: 0.8rem;
  font-size: 0.4rem;
  font-weight: bold;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0 0.03rem 0.3rem 0 rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 0.32rem;
  line-height: 2;
  text-indent: 0.4rem;
  background-color: #e1dbdb;
  border-bottom: 1px solid #bbb;
}
.message-list {
  background-color: #e1dbdb;
}
.message-list li {
  padding: 0.05rem 0;
  padding-left: 0.4rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #bbb;
}
.message-list li:last-child {
  border-bottom: none;
}
.head-img, .info {
  display: inline-block;
  vertical-align: middle;
}
.head-img {
  width: 0.8rem;
  /* height: 0.8rem; */
  /* background-color: #000; */
  border-radius: 50%;
  padding-bottom: .2rem;
}
.info {
  font-size: 0.3rem;
}
.info .nickname {
  /* margin-bottom: 0.2rem; */
}
.info .tip {
  font-size: 0.25rem;
  margin-top: .2rem;
}
.message1 {
  margin-top: 0.15rem;
  min-height: calc(100vh - 5.01rem);
  background-color: #e1dbdb;
}
</style>
