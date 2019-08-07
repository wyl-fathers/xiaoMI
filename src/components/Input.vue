<template>
  <div>
    <div class="Input">
      <i class="iconfont i1">&#xe661;</i>
      <input type="text" name="sousuo" class="iconfont" :placeholder="icon" @click="search" />
      <i class="iconfont" @click="touser">&#xe686;</i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icon: `\ue66f  搜索商品名称 `
    }
  },
  methods: {
    search () {
      this.$router.push('/About')
    },
    touser () {
      this.$router.push('/User')
    }
  }
}
</script>

<style lang="scss" scoped>
.Input {
  height: 0.4375rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    border-radius: 1%;
    border: solid #ccc 0.01rem;
    height: 0.3rem;
    width: 2.7rem;
    font-size: 0.175rem;
  }
  i {
    text-align: center;
    line-height: 0.3125rem;
    width: 0.51rem;
    height: 0.3125rem;
    font-size: 0.27rem;
  }
  .i1 {
    color: #fa6d09;
    width: 0.51rem;
  }
}
</style>
