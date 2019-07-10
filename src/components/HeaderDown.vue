<template>
  <div>
    <div class="HeaderDown">
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
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    search() {
      this.$router.push("/About");
    }
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
</style>
