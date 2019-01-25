<template>
  <div class="home">
    <header>
      <img src="../../static/img/camera.png" alt="">
      <span>首页</span>
      <img src="../../static/img/plane.png" alt="">
    </header>
    <ul class="card-list">
      <li class="card">
        <div class="card-user">
          <div class="user-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="user-info">
            <p>blackielovelife</p>
            <p>#大冒险#谁能成为天下第一</p>
          </div>
          <div class="user-time">
            <span>04-16</span>
          </div>
        </div>
        <div class="card-img">
          <img src="../../static/img/home_2.jpg" alt="">
        </div>
        <div class="card-text">
          <div class="likeM">
            <img src="../../static/img/like.png" alt="">
            <span>7074</span>
          </div>
          <div class="message">
            <img src="../../static/img/message_head1.png" alt="">
            <span>最最牛逼的人：</span>
            <span>Who cam beat me！！！我是最厉害的，毕竟是我最晒的！hahahhh</span>
          </div>
          <div class="more-btn">
            <span>点击加载全部评论</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-user">
          <div class="user-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="user-info">
            <p>blackielovelife</p>
            <p>#大冒险#谁能成为天下第一</p>
          </div>
          <div class="user-time">
            <span>04-16</span>
          </div>
        </div>
        <div class="card-img">
          <img src="../../static/img/home_3.jpg" alt="">
        </div>
        <div class="card-text">
          <div class="likeM">
            <img src="../../static/img/like.png" alt="">
            <span>7074</span>
          </div>
          <div class="message">
            <img src="../../static/img/message_head1.png" alt="">
            <span>最最牛逼的人：</span>
            <span>Who cam beat me！！！我是最厉害的，毕竟是我最晒的！hahahhh</span>
          </div>
          <div class="more-btn">
            <span>点击加载全部评论</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-user">
          <div class="user-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="user-info">
            <p>blackielovelife</p>
            <p>#大冒险#谁能成为天下第一</p>
          </div>
          <div class="user-time">
            <span>04-16</span>
          </div>
        </div>
        <div class="card-img">
          <img src="../../static/img/home_4.jpg" alt="">
        </div>
        <div class="card-text">
          <div class="likeM">
            <img src="../../static/img/like.png" alt="">
            <span>7074</span>
          </div>
          <div class="message">
            <img src="../../static/img/message_head1.png" alt="">
            <span>最最牛逼的人：</span>
            <span>Who cam beat me！！！我是最厉害的，毕竟是我最晒的！hahahhh</span>
          </div>
          <div class="more-btn">
            <span>点击加载全部评论</span>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-user">
          <div class="user-img">
            <img src="../../static/img/message_head1.png" alt="">
          </div>
          <div class="user-info">
            <p>blackielovelife</p>
            <p>#大冒险#谁能成为天下第一</p>
          </div>
          <div class="user-time">
            <span>04-16</span>
          </div>
        </div>
        <div class="card-img">
          <img src="../../static/img/home_2.jpg" alt="">
        </div>
        <div class="card-text">
          <div class="likeM">
            <img src="../../static/img/like.png" alt="">
            <span>7074</span>
          </div>
          <div class="message">
            <img src="../../static/img/message_head1.png" alt="">
            <span>最最牛逼的人：</span>
            <span>Who cam beat me！！！我是最厉害的，毕竟是我最晒的！hahahhh</span>
          </div>
          <div class="more-btn">
            <span>点击加载全部评论</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
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
  width: 100%;
  height: .8rem;
  background-color: #f5f5f5;
  font-size: .4rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0 0.03rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  line-height: .8rem;
  font-weight: bold;
}
header img:first-child {
  width: .6rem;
  margin-top: .12rem;
  float: left;
  margin-left: .25rem;
}
header img:last-child {
  width: .6rem;
  margin-top: .12rem;
  float: right;
  margin-right: .25rem;
}
.card {
  border-bottom: .16rem solid #efeff2;
}
.card-user {
  padding-left: .25rem;
  padding-bottom: .16rem;
}
.card-user .user-img {
  width: .9rem;
  /*height: .9rem;*/
  /*background-color: #000;*/
  border-radius: 50%;
}
.card-user>div {
  display: inline-block;
  vertical-align: middle;
  font-size: .38rem;
}
.card-user .user-info p {
  line-height: 1.5;
}
.card-user .user-info p:first-child {
  color: #2a669d;
  font-weight: 700;
}
.card-user .user-info p:last-child {
  font-size: .24rem;
}
.card-user .user-time {
  font-size: .24rem;
  color: #a6a6a6;
  float: right;
  margin-right: .4rem;
  line-height: 1.2rem;
}
.card-img {
  width: 100%;
  /*height: 5rem;*/
  /*background-color: #000;*/
}
.card-text {
  padding-left: .25rem;
}
.card-text .likeM {
  font-size: .35rem;
  line-height: 1.8;
  color: #2a669d;
  font-weight: 600;
}
.card-text .likeM img {
  width: .3rem;
  vertical-align: initial;
}
.card-text .message {
  font-size: .3rem;
  overflow: hidden;
}
.card-text .message img {
  width: .25rem;
  float: left;
  margin-top: .09rem;
  margin-right: .08rem;
}
.card-text .message span:nth-child(2) {
  float: left;
  color: #2a669d;
  line-height: 1.5;
}
.card-text .message span:last-child {
  float: left;
  line-height: 1.5;
  width: calc(100% - 2.5rem);
  word-break: break-all;
}
.card-text .more-btn {
  color: #a6a6a6;
  font-size: .24rem;
  line-height: 2.5;
}
</style>
