<template>
  <div>
    <!-- <Head></Head> -->
    <!-- <Best></Best> -->
    <router-view></router-view>
    <Nav1 id="Nav1" v-show="NavIsShow"></Nav1>
    <back-top id="go"></back-top>
  </div>
</template>

<script>
import Nav1 from '@/components/Nav.vue'
// import Head from "@/views/Head.vue";
// import Best from '@/views/Best.vue'
import BackTop from '@/components/Go2top'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    ...mapState(['NavIsShow'])
  },
  components: {
    // Head,
    // Best,
    Nav1,
    BackTop
  }
}
</script>

<style lang="scss" >
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
body {
  font-size: 0.12rem;
}
#Nav1 {
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 0.52rem;
  width: 100%;
}
.active {
  color: #f60;
}
#go {
  position: fixed;
  bottom: 1rem;
  right: 0.2rem;
}

image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
