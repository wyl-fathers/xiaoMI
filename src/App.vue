<template>
  <div>
    <!-- <Head></Head> -->
    <!-- <Best></Best> -->
    <router-view></router-view>
    <Nav1 id="Nav1"></Nav1>
  </div>
</template>

<script>
import Nav1 from "@/components/Nav.vue";
// import Head from "@/views/Head.vue";
import Best from "@/views/Best.vue";
export default {
  components: {
    // Head,
    Best,
    Nav1
  }
};
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
</style>