<template>
  <div id="index">
    <!-- <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <router-view class="child-view"></router-view>
      <bottom></bottom>
    </v-touch> -->
    <router-view/>
    <!-- <bottom :num='num' @num='emitt'></bottom> -->
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from '../components/bottom'
export default {
  name: 'index',
  data () {
    return {
      // num: {
      //   'a':11,
      //   'b':22
      // }
    }
  },
  components: {
    bottom
  },
  methods: {
    emitt: function(data){
      console.log(data)
    }
  }
}
</script>

<style scoped>
</style>

