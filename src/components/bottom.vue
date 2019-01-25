<template>
  <div class="bottom">
    <ul class="circle-nav">
      <li @click="changeIcon()">
        <router-link to="/home">
          <img v-show="imgsrc1" src="../../static/img/home.png" alt="">
          <img v-show="!imgsrc1" src="../../static/img/home_fill.png" alt="">
          <span>首页</span>
        </router-link>
      </li>
      <li @click="changeIcon()">
        <router-link to="/follow">
          <img v-show="imgsrc2" src="../../static/img/follow.png" alt="">
          <img v-show="!imgsrc2" src="../../static/img/follow_fill.png" alt="">
          <span>关注</span>
        </router-link>
      </li>
      <li @click="show=!show">
        <div class="add-icon">
          <img src="../../static/img/add.png" alt="">
        </div>
      </li>
      <li @click="changeIcon()">
        <router-link to="/message">
          <img v-show="imgsrc3" src="../../static/img/message.png" alt="">
          <img v-show="!imgsrc3" src="../../static/img/message_fill.png" alt="">
          <span>私信</span>
        </router-link>
      </li>
      <li @click="changeIcon()">
        <router-link to="/personal">
          <img v-show="imgsrc4" src="../../static/img/personal.png" alt="">
          <img v-show="!imgsrc4" src="../../static/img/personal_fill.png" alt="">
          <span>我的</span>
        </router-link>
      </li>
    </ul>
    <transition name="fade">
      <div v-show="show" class="newpage" @click.self="show=!show" @touchmove.prevent>
        <div class="top-bar">
          <div class="date">
            <div>27</div>
            <div class="date-info">
              <p>星期五</p>
              <p>04/2018</p>
            </div>
            <p>Hangzhou：阴21°C</p>
          </div>
          <div class="adv-img">
            <img src="../../static/img/11.png">
          </div>
        </div>
        <div class="bottom-bar">
          <ul class="clear">
          <transition-group name="list" v-on:before-enter="beforeEnter">
            <!-- <transition name="list"> -->
              <li v-show="show" :key="1" animate-delay="-.2s" animate-duration="-.17s">
                <div class="list-img">
                  <img src="../../static/img/list1.png" alt="">
                </div>
                <p>文字</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="2" animate-delay="-.17s" animate-duration="-.13s">
                <div class="list-img">
                  <img src="../../static/img/list2.png" alt="">
                </div>
                <p>拍摄</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="3" animate-delay="-.1s" animate-duration="-.07s">
                <div class="list-img">
                  <img src="../../static/img/list3.png" alt="">
                </div>
                <p>相册</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="4" animate-delay="-.07s" animate-duration="-.03s">
                <div class="list-img">
                  <img src="../../static/img/list4.png" alt="">
                </div>
                <p>直播</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="5" animate-delay="-.2s" animate-duration="-.17s">
                <div class="list-img">
                  <img src="../../static/img/list5.png" alt="">
                </div>
                <p>红包</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="6" animate-delay="-.17s" animate-duration="-.13s">
                <div class="list-img">
                  <img src="../../static/img/list6.png" alt="">
                </div>
                <p>提问</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="7" animate-delay="-.1s" animate-duration="-.07s">
                <div class="list-img">
                  <img src="../../static/img/list7.png" alt="">
                </div>
                <p>签到</p>
              </li>
            <!-- </transition> -->
            <!-- <transition name="list"> -->
              <li v-show="show" :key="8" animate-delay="-.07s" animate-duration="-.03s">
                <div class="list-img">
                  <img src="../../static/img/list8.png" alt="">
                </div>
                <p @click="click1">点评</p>
              </li>
            <!-- </transition> -->
            </transition-group>
          </ul>
        </div>
        <div class="close-btn">
          <span @click="show=!show">X</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  // props: {
  //   'num': [Object]
  // },
  name: 'bottom',
  data () {
    return {
      show: false,
      imgsrc1: true,
      imgsrc2: true,
      imgsrc3: true,
      imgsrc4: true
    }
  },
  mounted: function () {
    // this.$ajs();
    this.changeIcon()
  },
  methods: {
    boxlist: function () {
      // this.show = !this.show;
    },
    changeIcon:function () {
      if(this.$route.path == '/home'){
        this.imgsrc1 = false
        this.imgsrc2 = true
        this.imgsrc3 = true
        this.imgsrc4 = true
        // this.$emit('num',this.imgsrc4)
      } else if (this.$route.path == '/follow') {
        this.imgsrc1 = true
        this.imgsrc2 = false
        this.imgsrc3 = true
        this.imgsrc4 = true
      } else if (this.$route.path == '/message') {
        this.imgsrc1 = true
        this.imgsrc2 = true
        this.imgsrc3 = false
        this.imgsrc4 = true
      } else if (this.$route.path == '/personal') {
        this.imgsrc1 = true
        this.imgsrc2 = true
        this.imgsrc3 = true
        this.imgsrc4 = false
      }
    },
    beforeEnter: function (el) {
      var delay = el.getAttribute('animate-delay'),
          duration = el.getAttribute('animate-duration');
      console.log('attr:' + delay, duration);
      var cssObj = {
          "animation-delay": delay,
          "-webkit-animation-delay": delay,
          "animation-duration": duration,
          "-webkit-animation-duration": duration,
          "visibility": "visible"
      }
      var getCssText = function(obj) {
          var text = [];
          for(var o in obj) {
              text.push(o + ":" + obj[o])
          }
          return text.join(';')
      }
      el.style.cssText = getCssText(cssObj);
    },
    click1: function () {
      this.$route.push('/personal')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.bottom>ul {
  overflow: hidden;
  width: 100%;
  font-size: 0;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
  box-shadow: 0 0.03rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}
.bottom>ul li {
  display: inline-block;
  width: 20%;
  height: .9rem;
  font-size: .24rem;
  overflow: hidden;
  padding-top: .05rem;
  vertical-align: bottom;
  /*float: left;*/
  position:relative;
  /* line-height: .9rem; */
}
.bottom>ul li a>img {
  width: .55rem;
  display: block;
  margin: 0 auto;
  margin-bottom: .025rem;
}
.bottom>ul li .add-icon {
  width: .9rem;
  background-color: #ff7600;
  margin: 0 auto;
  padding: .15rem;
  border-radius: .08rem;
}
.bottom>ul li .add-icon img {
  width: .5rem;
}
.bottom>ul li a {
  width: 100%;
  display: inline-block;
  color: #333;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease-out;
  /*transition: opacity 2s */
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.newpage {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(254,254,254,.985);
  color: #ddd;
  position: fixed;
  top: 0;
  left: 0;
}
.top-bar {
  margin-top: .8rem;
  padding-left: .45rem;
}
.top-bar>div {
  display: inline-block;
  vertical-align: middle;
}
.top-bar .date>div {
  display: inline-block;
  font-size: 1rem;
  vertical-align: middle;
  color: #5b5b5b;
}
.top-bar .date>p {
  font-size: .34rem;
  margin-top: .2rem;
  color: #585858;
}
.top-bar .date .date-info>p {
  font-size: .3rem;
  line-height: 1.5;
  color: #585858;
}
.top-bar .adv-img {
  width: 2.4rem;
  float: right;
  margin-top: .2rem;
  margin-right: .4rem;
}
.bottom-bar {
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
}
.bottom-bar>ul {
  /*overflow: hidden;*/
  width: 100%;
  font-size: 0;
  /*transform: translateY(6rem);*/
}
.bottom-bar>ul li {
  width: 25%;
  display: inline-block;
  vertical-align: top;
  font-size: .3rem;
  text-align: center;
  margin-bottom: .4rem;
  color: #5b5b5b;
}
.list-enter-active {
  animation: bounce-in .4s;
}
.list-leave-active {
  animation: bounce-in .4s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(6rem);
  }
  /*50% {
    transform: translateY(0);
  }*/
  100% {
    transform: translateY(0);
  }
}
.bottom-bar .list-img {
  width: 1.2rem;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: .15rem;
  height: 1.2rem;
  line-height: 1.2rem;
  background-color: #000;
}
.bottom-bar>ul li:nth-child(1) .list-img {background-color: #e6507b;}
.bottom-bar>ul li:nth-child(2) .list-img {background-color: #35b87f;}
.bottom-bar>ul li:nth-child(3) .list-img {background-color: #5bb4da;}
.bottom-bar>ul li:nth-child(4) .list-img {background-color: #f26d5f;}
.bottom-bar>ul li:nth-child(5) .list-img {background-color: #f25246;}
.bottom-bar>ul li:nth-child(6) .list-img {background-color: #ffa200;}
.bottom-bar>ul li:nth-child(7) .list-img {background-color: #35b87f;}
.bottom-bar>ul li:nth-child(8) .list-img {background-color: #5bb4da;}
.bottom-bar .list-img img {
  width: 60%;
}
.close-btn {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: .3rem;
  width: 100%;
  text-align: center;
  border-top: 1px solid #ddd;
  line-height: .9rem;
}
</style>
