<template>
  <div :class="isFixed?'fixed':''" id="wyl">
    <div class="HeaderDown" ref="myswiper1">
      <span class="iconfont" @click="back">&#xe66d;</span>
      <p>
        <slot></slot>
      </p>
      <span class="iconfont" @click="search">&#xe66f;</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false
    };
  },
  methods: {
    Scroll() {
      // console.log(this.$refs.myswiper1.offsetHeight);
      if (
        document.documentElement.scrollTop >= this.$refs.myswiper1.offsetHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },

    back() {
      this.$router.go(-1);
    },
    search() {
      this.$router.push("/About");
    }
  },
  mounted() {
    window.onscroll = this.Scroll;
  },
  beforeDestroy() {
    window.onscroll = null;
  }
};
</script>

<style lang="scss" scoped>
.HeaderDown {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f2f2f2;
  // justify-content: sp;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.786rem;
    span {
      font-size: 0.18rem;
    }
  }
  span {
    font-size: 0.26rem;
    color: #777;
  }
}
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background: #f2f2f2;
}
</style>
