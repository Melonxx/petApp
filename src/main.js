// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueTouch from 'vue-touch'
// import vueg from 'vueg'    
// import 'vueg/css/transition-min.css'

//my file
import './assets/global.css'
import './assets/ali-js.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// const options = {  
//   duration: '0.3',              //转场动画时长，默认为0.3，单位秒
//   firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false  
//   firstEntryDuration: '.6',     //首次进入应用时的渐现动画时长，默认为.6  
//   forwardAnim: 'fadeInRight',   //前进动画，默认为fadeInRight  
//   backAnim: 'fadeInLeft',       //后退动画，默认为fedeInLeft  
//   sameDepthDisable: false,      //url深度相同时禁用动画，默认为false  
//   tabs: [{
//           name:'home'
//       },{
//           name:'follow'
//       },{
//           name:'message'
//       },{
//           name:'personal'
//       }],                       //默认为[]，name对应路由的name,以实现类似app中点击tab页面水平转场效果，如tab[1]到tab[0]，会使用backAnim动画，tab[1]到tab[2]，会使用forwardAnim动画  
//   tabsDisable: false,           //值为true时，tabs间的转场没有动画，默认为false  
//   disable: false,               //禁用转场动画，默认为false，嵌套路由默认为true    
// }  
// Vue.use(vueg, router,options)
// Vue.use(VueTouch, { name: 'v-touch' })