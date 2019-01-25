<template>
  <div class="peesonal">
    <header>
      <span>我的</span>
    </header>
    <div class="user-bar">
      <div class="user-img">
        <img src="../../static/img/message_head1.png" alt="">
      </div>
      <div class="user-name">
        <p>小天才啊</p>
      </div>
      <ul class="user-list">
        <li>
          <p>动态</p>
          <p>6</p>
        </li>
        <li>
          <p>关注</p>
          <p>61</p>
        </li>
        <li>
          <p>视频</p>
          <p>600</p>
        </li>
        <li>
          <p>✏</p>
          <p>我的资料</p>
        </li>
      </ul>
    </div>
    <div class="menu-bar">
      <ul class="menu-list">
        <li>
          <img src="../../static/img/per1.png" alt="">
          <span>关于我的</span>
          <span>></span>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <img src="../../static/img/per2.png" alt="">
          <span>爱宠商城</span>
          <span>></span>
        </li>
        <li>
          <img src="../../static/img/per3.png" alt="">
          <span>个性换肤</span>
          <span>></span>
        </li>
        <li>
          <img src="../../static/img/per4.png" alt="">
          <span>夜间模式</span>
          <span>></span>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <img src="../../static/img/per5.png" alt="">
          <span>扫一扫</span>
          <span>></span>
        </li>
        <li>
          <img src="../../static/img/per6.png" alt="">
          <span>设置</span>
          <span>></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'peesonal',
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
  box-shadow: 0 0.03rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.user-bar {
  padding-top: 0.4rem;
}
.user-img, .user-name {
  display: inline-block;
  vertical-align: middle;
}
.user-img {
  width: 1.4rem;
  /* height: 1.4rem; */
  border-radius: 50%;
  /* background-color: #000;  */
  padding-left: 0.4rem;
}
.user-name {
  font-size: 0.4rem;
}
.user-list {
  border-top: 1px solid #bbb;
  margin-top: 0.4rem;
  font-size: 0;
  padding: 0.2rem 0;
}
.user-list li {
  display: inline-block;
  width: 25%;
  border-right: 1px solid #bbb;
}
.user-list li:last-child {
  border: none;
}
.user-list li p {
  font-size: 0.3rem;
  text-align: center;
}
.user-list li p:last-child {
  font-size: 0.24rem;
}
.user-list li:last-child p:last-child {
  font-size: 0.3rem;
}
.user-list li:last-child p:first-child {
  font-size: 0.24rem;
}
.menu-bar {
  background-color: #efeff2;
  padding-top: 0.2rem;
  min-height: calc(100vh - 4.86rem);
}
.menu-list {
  font-size: 0.34rem;
  background-color: #fff;
  border-bottom: 0.2rem solid #efeff2;
}
.menu-list li {
  line-height: 2.5;
  text-indent: 0.3rem;
  border-bottom: 1px solid #bbb;
  overflow: hidden;
  /* font-weight: 600; */
}
.menu-list li img {
  width: .4rem;
  margin-right: .15rem;
}
.menu-list li:last-child {
  border: none;
}
.menu-list li span:last-child {
  float: right;
  color: #888;
  margin-right: 0.2rem;
}
</style>
