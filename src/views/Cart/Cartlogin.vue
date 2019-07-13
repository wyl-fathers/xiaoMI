<template>
  <div class="cartlogin">
    <span class="sleft" >登录后享受更多优惠</span>
    <span class="iconfont sright" @click="handlelogin()">去登陆 &#xe66e;</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handlelogin(){
      this.$router.push("/User");
    }
  },

};
</script>

<style lang="scss" scoped>
.cartlogin {
  width: 100%;
  height: 0.5416rem;
  line-height: 0.5416rem;
  .sleft {
    float: left;
    font-size: 0.18rem;
    margin-left: 0.14rem;
  }
  .sright {
    float: right;
    font-size: 0.14rem;
    margin-right: 0.14rem;
    color: #777777;
  }
}
</style>

