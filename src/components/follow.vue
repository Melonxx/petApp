<template>
  <div class="follow">
    <header>关注</header>
    <div class="head-bar">
      <div class="user">
        <div class="user-img">
          <img src="../../static/img/message_head1.png" alt="">
        </div>
        <p>blackielov</p>
      </div>
      <div class="user">
        <div class="user-img">
          <img src="../../static/img/message_head1.png" alt="">
        </div>
        <p>blackielov</p>
      </div>
    </div>
    <div class="list-bar">
      <ul>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_1.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_2.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_3.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_4.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_5.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_6.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_7.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
        <li class="list-li">
          <div class="list-img">
            <img src="../../static/img/follow_1.png" alt="">
          </div>
          <div class="list-text">
            <p>#大冒险#谁能成为天下第一</p>
            <p>
              <img src="../../static/img/message_head1.png" alt="">
              <span>blackielov</span>
              <span>2小时以前</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'follow',
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
  line-height: .8rem;
  background-color: #f5f5f5;
  font-size: .4rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0 0.03rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
}
.head-bar {
  font-size: 0;
}
.user {
  width: 1.5rem;
  padding: .2rem;
  display: inline-block;
  vertical-align: top;
}
.user .user-img {
  width: 1.1rem;
  /*height: 1.1rem;*/
  border-radius: 50%;
  /*background-color: #000;*/
  display: inline-block;
  margin: 0 auto;
}
.user>p {
  font-size: .3rem;
  text-align: center;
  word-break: break-all;
}
.list-bar>ul {
  font-size: 0;
}
.list-li {
  width: 49.8%;
  display: inline-block;
  vertical-align: top;
  margin-right: .4%;
  margin-bottom: .02rem;
  position: relative;
}
.list-li:nth-child(2n) {
  margin-right: 0;
}
.list-li .list-img {
  width: 100%;
  display: inline-block;
  /*height: 5rem;*/
  /*background-color: #000;*/
}
.list-li .list-text {
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: .3rem;
  padding: .2rem;
}
.list-li .list-text p:last-child {
  font-size: .25rem;
  margin-top: .15rem;
  overflow: hidden;
}
.list-li .list-text p:last-child span:last-child {
  float: right;
}
.list-li .list-text p:last-child img {
  width: .25rem;
  vertical-align: top;
}
</style>
